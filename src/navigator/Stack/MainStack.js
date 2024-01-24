import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../../screens/auth/Splash";
import CreateAccount from "../../screens/auth/CreateAccount";
import Login from "../../screens/auth/Login";
import { AuthDataProvider } from "../../context/AuthData";

import { ProductsDataProvider } from "../../context/ProductsApi";
import { ThemeProvider } from "../../context/ThemeContext";
import Home from "../../screens/home/Home";



const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <ProductsDataProvider>
          <AuthDataProvider>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="CreateAccount" component={CreateAccount} />
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          </AuthDataProvider>
        </ProductsDataProvider>
        </ThemeProvider>
    </NavigationContainer>
  );
}

export default MainStack;
