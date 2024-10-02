import { StyleSheet, View, Text, Modal, Button } from "react-native";
import TextBox from "./TextBox";
import { useState } from "react";
import Toast from "react-native-toast-message";

export default function AddTaskModal({isVisible, onClose, onSubmit}){
    const [title, setTitle] = useState('');
    const handleAddTask = () => {
        if(title === ''){

            Toast.show({
                type: 'error',
                text1: 'Empty Task',
                text1Style: {fontSize: 18},
                text2: 'Text Input cannot be empty!',
                text2Style: {fontSize: 16, color : '#860000'}
            })
        } else {
        setTitle(title)
        onSubmit(title);
        setTitle('');
        onClose();
        }
    }
    return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
        >
        <View style={styles.modal}>
        <Text style={styles.modalTitle}>Add Task</Text>
        <View style={styles.horizontalLine} />
        <View style={styles.textInput}><TextBox placeholder={"Title"} onChangeText={(text) => setTitle(text)}/></View>
        <View style={styles.buttonContainer}>
        <View style={styles.button}><Button color='#019001' style={styles.button} title="Add Task" onPress={handleAddTask} /></View>
        <View style={styles.button}><Button color='#ff0000' title="Close" onPress={onClose} /></View>
        </View>   
      </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: .5,
        backgroundColor: "#2D2D34",
        marginTop: 400,
        marginHorizontal: 30,
        padding: 20,
        borderRadius: 10,
        alignContent: 'center'
      },
      modalTitle: {
        fontSize: 24,
        color: '#e8e5cf',
        textAlign: 'center'
      },
      horizontalLine: {
        height: 1,
        backgroundColor: '#fff',
        marginTop: 12
      },
      button: {
        padding: 8,
        marginVertical: 5
      },
      textInput:{ 
            padding: 10,
      },
      buttonContainer: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-around'
      }
     
});