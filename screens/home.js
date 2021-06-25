import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NextButton from "../components/nextButton"
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import Title from "../components/title";
import { StatusBar } from 'expo-status-bar';

/** Home Screen
 *  Design (Home-1):
 * - instructions
 * - image upload button
 * - image capture button.
 * Requires: on button completion, navigate to upload screen
 */
function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.HomeandSetting}>
        <Title style={styles.Home}>Home</Title>
        <Button
          icon={
            <Icon
              name='gear'
              size={30}
              color="black"
            />
          }
          type='clear'
          onPress={() =>
            navigation.navigate('Settings')}
        />
      </View>
        <Text>Instructions here:</Text>
        <NextButton navigation={navigation} txt="CAPTURE PICTURE" next="Capture" />
        <NextButton navigation={navigation} txt="UPLOAD PICTURE" next="UploadImageScreen" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HomeandSetting: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Home: {
    textAlign: 'left',
  }
});

export default HomeScreen
