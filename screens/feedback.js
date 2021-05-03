import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NextButton from "../components/nextButton"

/** Feedback Screen
 *  Design (Feedback-1): 
 * - text that shows upload was succesful
 * - button to navigate back to home screen
 */
function FeedbackScreen({ navigation }) {
  return (
    <View style={style.view}>
      <Text>Feedback</Text>
      <NextButton navigation={navigation} txt="Go to Home" next="Home" />
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default FeedbackScreen