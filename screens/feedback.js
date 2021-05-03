import * as React from 'react';
import { View, Text } from 'react-native';
import NextButton from "../components/nextButton"

/** Feedback Screen
 *  Design (Feedback-1): 
 * - text that shows upload was succesful
 * - button to navigate back to home screen
 */
function FeedbackScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feedback</Text>
      <NextButton navigation={navigation} txt="Go to Home" next="Home" />
    </View>
  );
}
export default FeedbackScreen