import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import AppBar from './components/AppBar';
import Task from './components/Task';
import { useState } from 'react';
import Button from './components/Button';
import AddTaskModal from './components/AddTaskModal';

export default function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: "Wash clothes", completed: false},
    {id: 2, title: "Wash clothes", completed: false},
    {id: 3, title: "Wash clothes", completed: false},
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const addTask = (title) => {
    console.log("Added task title", title)
    const newTask = {
      id: todos.length + 1,
      title: title,
      completed: false
    }
    setTodos([...todos, newTask]);
    setIsModalVisible(false)
  }
  const onClose = () => {
    setIsModalVisible(false)
  };
  console.log(todos)
  return (
    <SafeAreaView>
      <View style={styles.container}>  
        <AppBar />
     <View style={styles.contentContainer}>
      <FlatList 
      style={styles.flatList}
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <Task todo={item} />
      )}
      >
      </FlatList>
      <Button label={"Add"} onPress={() => setIsModalVisible(true)}></Button>
     <StatusBar style="auto" />
     <AddTaskModal isVisible={isModalVisible} onClose={onClose} onSubmit={addTask}/>
     </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height : '100%',
    backgroundColor: '#E8E5CF',
    justifyContent: 'flex-start',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    paddingHorizontal: 20
  },
  flatList: {
    paddingVertical: 20,
    width: '100%'
  },
});
