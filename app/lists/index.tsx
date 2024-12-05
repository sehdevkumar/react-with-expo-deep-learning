import React, { useState, useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const Index = () => {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true); // Track if there's more data to load

     



    useEffect(() => {
        const fetchData = async () => {
            if (loading || !hasMore) return; // Prevent multiple API calls
            setLoading(true);
            try {
                // Simulate a 500ms delay
                await new Promise((resolve) => setTimeout(resolve, 500));

                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=16`);
                const newData: Post[] = await res.json();

                if (newData.length === 0) {
                    setHasMore(false); // Stop loading more if no data
                } else {
                    setData((prevData) => [...prevData, ...newData]);
                }
            } catch (error) {
                console.error('Failed to fetch data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page]);


    const handleEndReached = () => {
        if (hasMore && !loading) {
            setPage((prevPage) => prevPage + 1); // Increment the page safely
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.post}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.body}>{item.body}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.5}
                ListFooterComponent={
                    loading ? <ActivityIndicator size="large" color="white" /> : null
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
    },
    post: {
        marginBottom: 20,
        backgroundColor: '#333',
        borderRadius: 10,
        padding: 10,
    },
    title: {
        fontSize: 20,
        color: 'white',
        marginBottom: 10,
    },
    body: {
        color: 'white',
        fontSize: 16,
    },
});

export default Index;
