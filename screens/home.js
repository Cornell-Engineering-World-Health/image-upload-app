import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import NextButton from '../components/nextButton';
import Header from '../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../util/context';
import { Snackbar } from 'react-native-paper';

/** Home Screen
 *  Design (Home-1):
 * - instructions
 * - image upload button
 * - image capture button.
 * Requires: on button completion, navigate to upload screen
 */

function HomeScreen({ route, navigation }) {
  const [date, setDate] = useState('');
  const [chosenTask, setTask] = useState('');
  const [user, setUser] = useState('');
  const [_, dispatch] = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const [bannerMessage, setBanner] = useState('');

  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    if (user.length === 0) {
      navigation.navigate('PreLogin');
    }
  }, []);

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);

  useEffect(() => {
    if (route.params) {
      // if navigated from login, set context email and task
      var user = route.params.user;
      if (user.data.email.length > 0) {
        setUser(user.data.email);
        setTask(user.data.currentTask);
        dispatch({
          type: 'LOGIN',
          payload: {
            email: user.data.email,
            task: user.data.currentTask,
            id: user.id,
          },
        });
      }

      //if navigated from upload, show banner
      if (route.params.bannerMessage) {
        setVisible(true);
        setBanner(route.params.bannerMessage);
      }
    }
    
  }, [route.params]);

  return (
    <SafeAreaView style={style.screen}>
      <Snackbar visible={visible} onDismiss={onDismissSnackBar} duration={5000}>
        {bannerMessage}
      </Snackbar>
      <ScrollView>
        <Header navigation={navigation} screenName={'Hello!'} />

        <View style={style.container}>
          <Text>{date}</Text>
          <Text>{user}</Text>
        </View>

        <View style={style.container}>
          <Text style={style.header}>Today's Task</Text>
          <Text style={style.task}>Keep Up the Good Work!</Text>
          <Text style={style.task}>{chosenTask}</Text>
        </View>

        <View style={style.container}>
          <Text>
            Take a picture or select an existing one on your phone to label:
          </Text>
          <NextButton
            navigation={navigation}
            txt="CAPTURE PICTURE"
            next="Capture"
          />
          <NextButton
            navigation={navigation}
            txt="UPLOAD PICTURE"
            next="UploadImageScreen"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: 'left',
    marginVertical: 10,
    color: '#0F2B64',
  },
  screen: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 20,
  },
  container: {
    backgroundColor: '#D8EDFA',
    borderRadius: 10,
    marginVertical: 10,
    padding: 20,
  },
  task: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '1%',
  },
});

export default HomeScreen;
