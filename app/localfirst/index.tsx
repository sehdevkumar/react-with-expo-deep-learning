import { View , Text} from "react-native"
import ExpensesList from "./ExpensesList"
import AddExpense from "./AddExpense"
import { Suspense } from "react"

const index = () => {
    
    return (
        <View style={{height: "100%", width: "100%" , flex: 1}}>
              
              <ExpensesList/>
              <Suspense fallback={<Text>Loading...</Text>}>
                <AddExpense/>
              </Suspense>

        </View>
    )
   
}


export default index