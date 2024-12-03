import { Stack } from "expo-router"
import { View } from "react-native"

const ListLayout = ()=> {
    
    
    return  (
        
        <View style={{ flex: 1 ,width: "100%", height: "100%",paddingBottom: 10}}>
            
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: true ,title: "Infine Scroll" }} />
            </Stack>

        </View>

    )
    

}

export default ListLayout