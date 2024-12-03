import { IconSymbol } from "@/components/ui/IconSymbol";
import { Tabs } from "expo-router";
import { View } from "react-native";
const tabsRouting = () => {

    return (

        <View style={{ flex: 1, width: "100%", height: "100%" , paddingBottom: 10}}>
            <Tabs screenOptions={{ tabBarHideOnKeyboard: true }}>
                <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: () => <IconSymbol color={"#FFFFFF"} name="house.fill" /> }} />
                <Tabs.Screen name="code" options={{ title: "Code", tabBarIcon: () => <IconSymbol color={"#FFFFFF"} name="chevron.left.forwardslash.chevron.right" /> }} />
                <Tabs.Screen name="message" options={{ title: "Message", tabBarIcon: () => <IconSymbol color={"#FFFFFF"} name="paperplane.fill" /> }} />
            </Tabs>

        </View>

    )

}

export default tabsRouting;  