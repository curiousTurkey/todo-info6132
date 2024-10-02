import { StyleSheet, TextInput } from "react-native";

export default function TextBox({placeholder, onChangeText}){
    return(
        <TextInput 
        style={styles.textInput}
        autoCapitalize="sentences"
        clearButtonMode="while-editing"
        placeholder={placeholder}
        placeholderTextColor='#fff'
        enablesReturnKeyAutomatically={true}
        inputMode="text"
        onChangeText={onChangeText}
        ></TextInput>
    );
}
const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#e8e5cf',
        marginTop: 20,
        borderRadius: 6,
        paddingLeft: 10,
        marginVertical: 20,
        color: '#FFF',
        
      }
})