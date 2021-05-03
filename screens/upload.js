import * as React from 'react';
import { Button, View, Text } from 'react-native';

/** Upload Screen
 *  Design (Upload-1): 
 * - image at top of screen. 
 * - dynamic search for labels with drop down menu. 
 * - text input for custom labels.
 * - chosen labels bank.  
 * - upload image object button
 */
function UploadScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Upload</Text>
      <Button
        title="Go to Feedback"
        onPress={() => navigation.navigate('Feedback')}
      />
    </View>
  );
}
export default UploadScreen