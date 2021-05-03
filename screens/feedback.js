import * as React from 'react';
import { Button, View, Text } from 'react-native';

/** Feedback Screen
 *  Design (Feedback-1): 
 * - text that shows upload was succesful
 * - button to navigate back to home screen
 */
function FeedbackScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feedback</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
export default FeedbackScreen