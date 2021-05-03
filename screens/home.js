import * as React from 'react';
import { Button, View, Text } from 'react-native';

/** Home Screen
 *  Design (Home-1): 
 * - image upload button
 * - image capture button.
 * - image gallery of uploaded photos thumbnails sorted by date 
 * Requires: on button completion, navigate to upload screen
 */
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button
        title="Go to Upload"
        onPress={() => navigation.navigate('Upload')}
      />
    </View>
  );
}
export default HomeScreen