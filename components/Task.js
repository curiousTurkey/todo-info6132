import { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function({todo}){
    console.log("In task", todo);
    const [isEnabled, setIsEnabled] = useState(todo.completed);
    const toggleSwitch = () => setIsEnabled(isEnabled => !isEnabled);
    return (
        <View style={styles.taskContainer}>
           <View style={styles.titleContainer}>
            <Text style={styles.todoTitle}>{todo.title}</Text>
            <Text style={styles.taskStatus}>
                Status: {isEnabled ? <Text style={{color: "#005A03"}}>
                    Completed</Text> : <Text style={{color: "#C00600"}}>Pending</Text>}</Text>
            </View>
            <View style={styles.switchContainer}>
            <Switch 
            trackColor={{ true: '#81b0ff', false: '#767577' }}
            thumbColor={isEnabled ? '#4f69c6' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            ></Switch>
           </View>
        </View>
    );
}
const styles = StyleSheet.create({
    todoTitle:{
        fontSize: 24,
        color: "#0B0A19"
    },

    taskContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#fff",
    justifyContent: 'space-around',
    height: 100,
    borderRadius: 18,
    padding: 6,
    marginVertical: 8
    },

    switchContainer: {
        flex: 0.5,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingEnd: 10
    },

    titleContainer: {
        flex: 0.5,
        paddingStart: 10,
        color: '#000',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    taskStatus: {
        fontSize: 14,
    }
});