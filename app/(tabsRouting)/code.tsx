import { Text, View , ScrollView} from "react-native";

const code = () => {
    return (
       
        <ScrollView style={{flex: 1, width: "100%",height: "100%"}}>
            <Text style={{color: "white", fontSize: 20, margin: 10}}>
                In this file, we are creating a new screen for our app. 
                This screen is named "page1". 
                We are exporting this component so that it can be used in other parts of the app.
                {"\n"}
                {"\n"}
                The component is a function that returns JSX. 
                This JSX is a View component that contains a Text component. 
                The Text component is where we write the text that will be displayed on the screen. 
                {"\n"}
                {"\n"}
                The View component is the parent component. 
                It is a container that holds all the other components. 
                It is also where we can add styles to our component. 
                {"\n"}
                {"\n"}
                The Text component is the child component. 
                It is the component that will be displayed on the screen. 
                It is also where we can add styles to our component. 
                {"\n"}
                {"\n"}
                The ScrollView component is used to create a scrollable area. 
                It is used when we want to display a large amount of content on the screen. 
                {"\n"}
                {"\n"}
                The style attribute is used to add styles to our component. 
                It is an object where the keys are the style names and the values are the values of the style. 
                {"\n"}
                {"\n"}
                The flex attribute is used to make the component take up the full width and height of the screen. 
                It is set to 1 so that the component will take up the full width and height of the screen. 
                {"\n"}
                {"\n"}
                The width and height attributes are used to set the width and height of the component. 
                They are set to 100% so that the component will take up the full width and height of the screen. 
                {"\n"}
                {"\n"}
                The color attribute is used to set the color of the text. 
                It is set to white so that the text will be white. 
                {"\n"}
                {"\n"}
                The fontSize attribute is used to set the font size of the text. 
                It is set to 20 so that the font size of the text will be 20. 
                {"\n"}
                {"\n"}
                The margin attribute is used to add space around the component. 
                It is set to 10 so that there will be 10 pixels of space around the component. 
                {"\n"}
                {"\n"}
                The text attribute is used to set the text of the Text component. 
                It is set to "Page 1" so that the text of the Text component will be "Page 1". 
                {"\n"}
                {"\n"}
                </Text>

        </ScrollView>

    )
};

export default code;