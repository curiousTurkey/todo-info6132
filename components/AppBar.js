import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
export default function () {
    return (
        <Appbar style={styles.appBarContainer}>
        <Appbar.Content title="Todo List" titleStyle={{color: '#e8e5cf'}} style={{alignItems: 'center'}}/>
         </Appbar>
    );
}

const styles = StyleSheet.create({
    appBarContainer: {
        flex: 0,
        width: '100%',
        height: '8%',
        backgroundColor: "#000",
      },
});