import { View, Text } from "react-native"
import { Stack } from "expo-router"

const LocalFirstLayout = () => {

    return (
        <View>

            <Stack
                screenOptions={{ headerShown: true, title: "Local First" }}
            >
                <Stack.Screen name="index" options={{ headerShown: false, title: "Local First" }} />
            </Stack>
        </View>
    )

}

export default LocalFirstLayout