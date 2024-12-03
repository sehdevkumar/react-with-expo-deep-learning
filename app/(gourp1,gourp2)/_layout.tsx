import { IconSymbol } from "@/components/ui/IconSymbol";
import { Tabs } from "expo-router";
import { View } from "react-native";
const tabsRouting = () => {

    return (
        
        <View style={{flex: 1, width: "100%",height: "100%" , paddingBottom: 10, paddingLeft: 10 , paddingRight: 10}}>
        <Tabs screenOptions={{ tabBarHideOnKeyboard: true }}>
            <Tabs.Screen name="index" options={{ title: "Home",  tabBarIcon: () => <IconSymbol color={"#FFFFFF"} name="house.fill" />  }}/>
            <Tabs.Screen name="left" options={{ title: "Left",  tabBarIcon: () => <IconSymbol color={"#FFFFFF"} name="chevron.left.forwardslash.chevron.right" />}} />
            <Tabs.Screen name="right" options={{ title: "Right",  tabBarIcon: () => <IconSymbol color={"#FFFFFF"} name="paperplane.fill" />}} />
        </Tabs>
        </View>

    )   
} 
export default tabsRouting;  