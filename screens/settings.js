import * as React from 'react';
import { View, Text } from 'react-native';
import NextButton from "../components/nextButton"

/** Settings Screen
 *  Design: 
 *  - 3 buttons: About, Help & Support, Logout
 */
function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
}
export default SettingsScreen