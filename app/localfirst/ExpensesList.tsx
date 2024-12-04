import { StyleSheet, Text, View } from "react-native";

const ExpensesList = () => {
    return   (    
        <View style={ExpenseStypes.container}>
            <Text style={ExpenseStypes.text}>ExpensesList</Text>
        </View>
    ) 
};


export default ExpensesList



const ExpenseStypes = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: "white",
      fontSize: 16,
    }
  });