import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const AddTask = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textbox} placeholder="Add your task here..." />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textbox: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    marginBottom: 5,
    padding: 10,
  },
  container: {
    margin: 10,
  },

  button: {
    backgroundColor: "black",
    borderRadius: 12,
    padding: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 13,
  },
});

export default AddTask;
