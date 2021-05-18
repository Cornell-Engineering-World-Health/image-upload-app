import * as React from 'react';
import { View, Text } from 'react-native';
import NextButton from "../components/nextButton"

/** About Screen
 *  Design: 
 * - Paragraph describing organization
 */
function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About</Text>
    </View>
  );
}
export default AboutScreen