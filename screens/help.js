import * as React from 'react';
import { View, Text } from 'react-native';
import NextButton from "../components/nextButton"

/** Help Screen
 *  Design: 
 *  - Phone number
 */
function HelpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Help</Text>
    </View>
  );
}
export default HelpScreen