import { View , Text} from "react-native"
import ExpensesList from "./ExpensesList"

const index = () => {
    
    return (
        <View style={{height: "100%", width: "100%" , flex: 1}}>
              
              <ExpensesList/>

        </View>
    )
   
}


export default index