import { Href, useRouter } from "expo-router";
import { ErrorBoundaryProps, Try } from "expo-router/build/views/Try";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

type Items = {
    title: string,
    description: string,
    path:  Href
}

const LandingItems = [
    {
        id: 1,
        title: 'tabsRouting',
        description: 'description',
        path: '/(tabsRouting)'
    },
    {
        id: 2,
        title: 'gourp1',
        description: 'description',
        path: '/(gourp1)'
    },
    {
        id: 3,
        title: 'gourp2',
        description: 'description',
        path: '/(gourp2)'
    },
    {
        id: 4,
        title: 'dynamicRouting',
        description: 'description',
        path: '/dynamicRouting/sehdevkumar'
    },
    {
        id: 5,
        title: 'List',
        description: 'Display List',
        path: '/lists'
    },
    {
        id: 6,
        title: 'localfirst',
        description: 'description',
        path: '/localfirst'
    },
    {
        id: 7,
        title: 'Interaction Manager',
        description: 'description',
        path: '/interactionManager'
    },
    {
        id: 8,
        title: 'Patterns',
        description: 'description',
        path: '/patterns'
    }
    
]



const index = () => {

    const router  = useRouter()


    useEffect(() => {
        
          
       
      
    }, [])
    
     

    return (
       
        <ScrollView style={{ flex: 1, width: "100%", height: "100%", padding: 10, gap: 10 }}>
            {
                LandingItems.map((item) => (
                 
                    

                    <Pressable
                        key={item.id}
                        style={{
                            flex: 1,
                            width: "100%",
                            height: "100%",
                            borderWidth: 1,
                            borderRadius: 10,
                            shadowOpacity: 0.5,
                            shadowRadius: 5,
                            borderColor: "white",
                            backgroundColor: "#333",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 10,
                            paddingHorizontal: 20
                        }}
                        onPress={() => { 
                            router.push(item.path as Href)
                        }}
                    >
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", textAlign: "center" }}>{item.title}</Text>
                        </View>
                    </Pressable>
                ))
            }
        </ScrollView>


    );
};

export default index;


