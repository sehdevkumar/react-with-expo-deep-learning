import { View, Text } from "react-native"
import { Stack } from "expo-router"

const LocalFirstLayout = () => {

    return (
        <View style={{ flex: 1, width: "100%", height: "100%" }}>

            <Stack
                screenOptions={{ headerShown: true, title: "Local First" }}
            >
                <Stack.Screen name="index" options={{ headerShown: true, title: "Local First" }} />
            </Stack>
        </View>
    )

}

export default LocalFirstLayout