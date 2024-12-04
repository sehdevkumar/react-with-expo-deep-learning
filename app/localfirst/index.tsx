import { View, Text, Platform, Alert, ToastAndroid } from "react-native"
import ExpensesList from "./ExpensesList"
import AddExpense from "./AddExpense"
import { Suspense, useRef } from "react"
import useNetworkDetection from "./useNetworkDetection"
import { useStore } from "zustand"
import { expenseStore } from "./zustandStore"


const index = () => {

    const expenses = useStore(expenseStore, (state) => state.expenses);
    const timerId = useRef<NodeJS.Timeout | null>(null);
    useNetworkDetection((type, isConnected, isInternetReachable) => {
        if (isConnected && isInternetReachable) {
            const fileredExpenses = expenses.filter((expense) => expense.isSync === false);
            fileredExpenses.forEach((expense) => {
                expenseStore.getState().updateExpense(expense.id, true);
            });             
            if(expenses.length !== 0)
            {   
             timerId.current =   setTimeout(() => {
                if(Platform.OS === "web")
                { 
                    alert("Synced , Internet Back Cleaning Up")
                }  else {
                    ToastAndroid.show("Synced , Internet Back Cleaning Up", ToastAndroid.SHORT);                   
                }
                expenses.forEach((expense) => {
                    expenseStore.getState().removeExpense(expense.id);
                });
                if(timerId.current !== null)
                clearTimeout(timerId?.current);
                timerId.current = null;
            }, 5000);
           }

        }
    });
    return (
        <View style={{ height: "100%", width: "100%", flex: 1 }}>

            <ExpensesList />
            <Suspense fallback={<Text>Loading...</Text>}>
                <AddExpense />
            </Suspense>

        </View>
    )

}


export default index