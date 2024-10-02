import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Pressable, Text , View} from "react-native";
import { FAB } from "react-native-paper";

export default function Button({label, onPress}){
    return(
        <View style={styles.buttonContainer}>
            {/* <Pressable 
            style={styles.button}
            android_ripple={{
                color: "#fff", // Ripple color
                borderless: false, // Optional: whether ripple should be borderless
              }}
            >
            <MaterialIcons
            name="add"
            onPress={onPress} 
            size={60}
            ios_press_style="splash"
            ></MaterialIcons>
        </Pressable> */}
        <FAB 
        style={styles.floatingActionButton}
        icon="plus"
        onPress={onPress}
        color="#e8e5cf"
        background={{color: "#fff", borderless: true}}
        ></FAB>
        </View>
        
    );
}
const styles = StyleSheet.create({

    buttonContainer: {
        position: 'absolute',
        bottom: '4%',
        right: '8%'
    },
    iconButtonLabel: {
        color: "#fff"
    },
    button: {
        borderRadius: 18,
        shadowRadius: 18,
        color: "#fff"
    },
    floatingActionButton: {
        backgroundColor: "#000"
    }
});