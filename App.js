import * as React from "react";
import { useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PreLoginScreen from "./screens/prelogin";
import LoginScreen from "./screens/login";
import HomeScreen from "./screens/home";
import UploadScreen from "./screens/upload";
import CaptureScreen from "./screens/capture";
import UploadImageScreen from "./screens/uploadimage.js";
import ConfirmationScreen from "./screens/confirmation.js";
import SettingsScreen from "./screens/settings.js";
import HelpScreen from "./screens/help.js";
import AboutScreen from "./screens/about.js";
import ReportScreen from "./screens/report.js";
import ForgotScreen from "./screens/forgot.js";
import { UserContext, initialState } from "./util/context";

const Stack = createStackNavigator();

// reducer function for context states
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload.email,
        task: action.payload.task,
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Upload" component={UploadScreen} />
          <Stack.Screen name="PreLogin" component={PreLoginScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Capture" component={CaptureScreen} />
          <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
          <Stack.Screen
            name="UploadImageScreen"
            component={UploadImageScreen}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Help" component={HelpScreen} />
          <Stack.Screen name="Forgot" component={ForgotScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Report" component={ReportScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;
