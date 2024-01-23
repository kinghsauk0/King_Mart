import React, {  useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import { useAuthData } from "../../context/AuthData";
import { UseTheme } from "../../context/ThemeContext";

const CreateAccount = ({ navigation }) => {
  const { arryOfData, addData } = useAuthData();
  const { lightMode } = UseTheme();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (text) => {
    // Allow only alphabets and spaces
    if (/^[a-zA-Z\s]*$/.test(text && text)) {
      setName(text);
    } else {
      Alert.alert("Only Letter");
    }
  };

  const handleNumberChange = (text) => {
    // Allow only numeric characters
    if (/^[0-9]*$/.test(text)) {
      setNumber(text);
    } else {
      Alert.alert("Only Numbers Allowed");
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleAddData = () => {
    if (
      (name && name.length > 3) ||
      number & (number.length > 3) ||
      password.length > 3
    ) {
      addData({ name, number, password });
      setName("");
      setNumber("");
      setPassword("");
      navigation.navigate("Login");
    } else {
      Alert.alert(
        `${name}and ${number} and ${password} must be up to 3letters`
      );
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: lightMode?.bg }]}
    >
      <ScrollView>
        <KeyboardAvoidingView>
          <Text style={[styles.title, { color: lightMode?.text }]}>
            Create your Account
          </Text>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: "#FFFFFF", borderColor: lightMode?.text },
            ]}
            placeholder="Enter Your Name"
            onChangeText={handleNameChange}
            value={name}
            placeholderTextColor="#000000"
            cursorColor={lightMode?.text}
          />
          <TextInput
            style={[
              styles.input,
              { backgroundColor: "#FFFFFF", borderColor: lightMode?.text },
            ]}
            placeholder="Enter Your Number"
            onChangeText={handleNumberChange}
            value={number}
            keyboardType="numeric"
            placeholderTextColor="#000000"
            cursorColor="black"
          />
          <TextInput
            style={[
              styles.input,
              { backgroundColor: "#FFFFFF", borderColor: lightMode?.text },
            ]}
            placeholder="Enter Your Passsword"
            onChangeText={handlePasswordChange}
            value={password}
            secureTextEntry
            placeholderTextColor="#000000"
            cursorColor="black"
          />
          <TouchableOpacity
            style={[styles.button, { backgroundColor: lightMode?.text }]}
            onPress={handleAddData}
          >
            <Text style={[styles.buttonText, { color: lightMode?.bg }]}>
              Go to Login
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 200,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 2,
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  button: {
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 50,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default CreateAccount;
