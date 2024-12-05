import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  InteractionManager,
  StyleSheet,
  TextInput,
} from 'react-native';

const HeavyTaskScreen = () => {
  const [data, setData] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const fetchedData = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
      return fetchedData;
    };

    const task = InteractionManager.runAfterInteractions(() => {
      fetchData().then((result) => {
        setData(result);
        setIsReady(true);
      });
    });


    return () => {
      task.cancel();
      setIsReady(false);
    };
  }, []);

  return (
    <View style={styles.container}>
        <TextInput  
          placeholder="Enter text   "
          style={styles.input}  
        />
      {!isReady ? (
        <ActivityIndicator  size="large" color="#FFFFFF" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style= {styles.item}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#333333',
    color: '#FFFFFF',
  },
  item: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,   
    color: '#FFFFFF',
  }
});

export default HeavyTaskScreen;
