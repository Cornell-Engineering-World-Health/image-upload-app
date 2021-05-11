import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PreLoginScreen from "./screens/prelogin";
import LoginScreen from "./screens/login";
import HomeScreen from "./screens/home";
import GalleryScreen from "./screens/gallery";
import UploadScreen from "./screens/upload";
import FeedbackScreen from "./screens/feedback";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Gallery" component={GalleryScreen} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PreLogin">
        <Stack.Screen name="Upload" component={UploadScreen} />
        <Stack.Screen name="PreLogin" component={PreLoginScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
