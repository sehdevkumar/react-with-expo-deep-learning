import { View , Text} from "react-native"
import ExpensesList from "./ExpensesList"

const index = () => {
    
    return (
        <View style={{ flex: 1,height: "100%", width: "100%"}}>
              
              <ExpensesList/>

        </View>
    )
   
}


export default index