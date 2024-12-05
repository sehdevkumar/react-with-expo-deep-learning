import { createContext, useContext, useEffect, useState } from "react";
import { Button, Pressable, Text, View } from "react-native";


type TabContextType = {
    tab: string;
    setTab: (tab: string) => void;
    colors?: [{ tab: string , color: string }];
    setColors?: (color: string, tab: string) => void;
    retry?: () => void;
};

const createTabContext = createContext<TabContextType | undefined>(undefined);


function TabsProvider({ children }: { children: React.ReactNode }) {
    const [tab, setTab] = useState<string>("Home");
    const [c, setC] = useState<{ tab: string, color: string }[]>([]);

    return (
        <createTabContext.Provider value={{
            tab, setTab, retry: () => {
                console.log("Retrying...");
            }, setColors: (color: string, tab: string) => {
                setC((prev) => {
                    return [...prev, { tab, color }];
                });
            },
            colors: c as [{ tab: string, color: string }]
        }}>
            {children}
        </createTabContext.Provider>
    );
}


const useTabContext = () => {
    const context = useContext(createTabContext);
    if (!context) {
        throw new Error("useTabContext must be used within a TabsProvider");
    }

    return context;
};



function Tabs({ children }: { children: React.ReactNode }) {

    return (
        <TabsProvider>
            <View className="flex flex-row bg-gray-200 p-2">
                {children}
            </View>
        </TabsProvider>
    );
}



function Toggle({ title, color }: { title: string, color?: string }) {
    const { tab, setTab, setColors } = useTabContext();

    useEffect(() => {
        setColors?.(color || 'red', title);
    }, [tab]);

    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? "#fff" : "#ccc",
                borderRadius: 10,
                padding: 10,
                marginHorizontal: 5,
            },
            tab === title && {
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#666"
            }
        ]} onPress={() => setTab(title)}>
            <Text style={{ fontSize: 18, color: color || 'red' }}>{title}</Text>
        </Pressable>
    );
}



function Retry() {
    const { retry } = useTabContext();

    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? "#ddd" : "#fff",
                padding: 10,
                borderRadius: 10
            }
        ]} onPress={retry}>
            <Text style={{ fontSize: 18, color: "#666" }}>Retry</Text>
        </Pressable>
    );
}

function TabContent() {
    const { tab, colors } = useTabContext();

    return (
        <View style={{ flex: 1, backgroundColor: colors?.find((c) => c.tab === tab)?.color || 'white' }} className="flex flex-1 items-center justify-center">
            <Text style={{ color: 'white' }} className="text-2xl">{tab}</Text>
        </View>
    );
}


function CompoundPatterns() {
    return (
        <Tabs>
            <Toggle title="Home" color="red" />
            <Toggle title="Code" color="blue" />
            <Toggle title="Message" color="green" />
            <Retry />
            <TabContent />
        </Tabs>
    );
}

export default CompoundPatterns;