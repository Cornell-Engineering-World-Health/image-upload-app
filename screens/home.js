import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions } from 'react-native';
import NextButton from '../components/nextButton';
import Header from '../components/header';
import OpenCameraRollButton from '../components/openCameraRollButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../util/context';
import { Snackbar } from 'react-native-paper';

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

      // if navigated from upload, show banner
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
          <View style={style.taskContainer}>
            <Text style={style.text}>Please take pictures of: </Text>
            <Text style={style.task}>{chosenTask}</Text>
          </View>
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
          <OpenCameraRollButton navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: 'left',
    color: '#0F2B64',
    marginBottom: '2%',
  },
  screen: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: Dimensions.get('window').width / 20,
  },
  container: {
    backgroundColor: '#D8EDFA',
    borderRadius: 10,
    marginVertical: '3%',
    padding: '5%',
  },
  text: {
    marginLeft: '1%',
  },
  task: {
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
  },
});

export default HomeScreen;
