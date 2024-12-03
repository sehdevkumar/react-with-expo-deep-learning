import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DyamucRouting() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20  , color: "white"}} > Dynamic Routing: {id} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});