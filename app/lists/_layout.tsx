import { ErrorBoundaryProps, Stack } from "expo-router"
import { Try } from "expo-router/build/views/Try";
import { Text, View } from "react-native"


export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
    console.log(error,"ErrorBoundary") 

    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text>{error.message}</Text>
        <Text onPress={retry}>Try Again?</Text>
      </View>
    );
  }


const ListLayout = ()=> {
    
    
    return  (
        
        <Try catch={ErrorBoundary}>
        <View style={{ flex: 1 ,width: "100%", height: "100%",paddingBottom: 10}}>
            
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: true ,title: "Infine Scroll" }} />
            </Stack>

        </View>
        </Try> 

    )
    

}

export default ListLayout