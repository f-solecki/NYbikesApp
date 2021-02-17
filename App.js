import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from "./components/Main"
import LogIn from "./components/LogIn"
import Register from "./components/Register"
import Loading from "./components/Loading"
import User from "./components/User"
import Map from "./components/Map"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Main" component={Main} options={{
          headerShown: false
        }} />
        <Stack.Screen name="LogIn" component={LogIn} options={{
          title: "Logowanie",
          headerStyle: {
            backgroundColor: "orange"
          }
        }} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Register" component={Register} options={{
          title: "Rejestracja",
          headerStyle: {
            backgroundColor: "orange"
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;