import React, { useEffect, useState } from "react";
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
  Image,
} from "react-native";
import { useAuthData } from "../../context/AuthData";
import { UseTheme } from "../../context/ThemeContext";

const Login = ({ navigation }) => {
  const { arryOfData } = useAuthData();
  const { lightMode, themeToggole, isDrakmode } = UseTheme();
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    themeToggole();
  }, []);

  const handleLoginForCreateAc = () => {
    navigation.navigate("CreateAccount");
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

  const handleLogin = () => {
    if (arryOfData.find(({ n, p }) => n !== number && p !== password)) {
      if (number & (number.length > 3) || password.length > 3) {
        const user = arryOfData.find((num) => num?.number === number);
        if (user) {
          const userPassWord = arryOfData.find(
            (pas) => pas?.password === password
          );
          if (userPassWord) {
            navigation.navigate("Home");
            setNumber("");
            setPassword("");
          } else {
            Alert.alert("password is not found");
          }
        } else {
          Alert.alert("number is not found");
        }
      } else {
        Alert.alert(` must be up to 3letters`);
      }
    } else {
      Alert.alert("frist you need to create account");
      setNumber("");
      setPassword("");
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: lightMode?.bg }]}
    >
      <ScrollView>
        <KeyboardAvoidingView>
          <Text style={[styles.title, { color: lightMode?.text }]}>
            Login your Account
          </Text>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginBottom: 100,
              backgroundColor: lightMode?.bg,
            }}
            onPress={themeToggole.bind(null)}
          >
            {lightMode.bg == "#FFFFFF" ? (
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../assets/light.png")}
              />
            ) : (
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../assets/dark.png")}
              />
            )}
          </TouchableOpacity>
          <View style={{ marginBottom: 100 }}>
            <TextInput
              style={[
                styles.input,

                { backgroundColor: "#FFFFFF", borderColor: lightMode?.text },
              ]}
              placeholder="Enter Your Number"
              onChangeText={handleNumberChange}
              value={password}
              secureTextEntry
              placeholderTextColor="#000000"
              cursorColor={lightMode?.text}
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
              cursorColor={lightMode?.text}
            />
          </View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: lightMode?.text }]}
            onPress={handleLogin}
          >
            <Text style={[styles.buttonText, { color: lightMode?.bg }]}>
              Login
            </Text>
          </TouchableOpacity>
          <Text style={[styles.midText, { color: lightMode?.text }]}>or</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: lightMode?.text }]}
            onPress={handleLoginForCreateAc}
          >
            <Text style={[styles.buttonText, { color: lightMode.bg }]}>
              Go to CreateAccount
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
    marginBottom: 100,
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
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
  },
  midText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 20,
  },
});

export default Login;
