import { StyleSheet, Text, View , FlatList} from "react-native";
import { expenseStore } from "./zustandStore";
import { useEffect, useState } from "react";
import { useStore } from "zustand";

const ExpensesList = () => {
    
    const expenses =   useStore(expenseStore, (state) => state.expenses);
    const [getExpense, setExpense] = useState(expenses);        


    useEffect   (() => {    
        console.log(expenses)
        setExpense(expenses)    

    }, [expenses])

      

    return   (    
        <View style={ExpenseStypes.container}>
            <Text style={ExpenseStypes.text}>ExpensesList</Text>
             <FlatList data={getExpense} keyExtractor={(item) => item?.id ?? item.description}  renderItem={({item}) =>  
               {
                return (
                    <View style={{margin: 10, padding: 10, backgroundColor: "#333", borderRadius: 10 , flexDirection: "row" , width: "100%"}}>
                        <Text style={{color: "white"}}> {item?.description} </Text>
                        <Text style={{color: "white"}}> {item?.amount} </Text>
                        <Text style={{color: "white"}}> {item?.date} </Text>
                    </View>
                )
               }
            }/>
             
        </View>
    ) 
};


export default ExpensesList



const ExpenseStypes = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      width: "100%",
      height: "100%",
      backgroundColor: "black"
    },
    text: {
      color: "white",
      fontSize: 16,
    }
  });