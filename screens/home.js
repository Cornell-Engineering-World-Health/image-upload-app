import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import NextButton from "../components/nextButton";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Title from "../components/title";
import { StatusBar } from "expo-status-bar";
import ReportButton from "../components/reportButton";
import Header from "../components/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { getUserCurrentTask } from "../firebase/firestore";
import { UserContext } from "../util/context";

/** Home Screen
 *  Design (Home-1):
 * - instructions
 * - image upload button
 * - image capture button.
 * Requires: on button completion, navigate to upload screen
 */

function HomeScreen({ route, navigation }) {
  const [date, setDate] = useState("");
  const [chosenTask, setTask] = useState("");
  const [user, setUser] = useState("");
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (user.length === 0) {
      navigation.navigate("PreLogin");
    }
  }, []);

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);

  useEffect(() => {
    if (route.params) {
      var email = route.params.email;
      if (email.length > 0) {
        setUser(email);

        getUserCurrentTask(email)
          .then((doc) => {
            if (doc.exists) {
              var task = doc.data()["currentTask"];
              setTask(task);
              dispatch({
                type: "LOGIN",
                payload: { email: email, task: task },
              });
            } else {
              alert("User doesn't exist!");
            }
          })
          .catch((error) => {
            alert(error);
          });
      }
    }
  }, [route.params]);

  return (
    <SafeAreaView style={style.screen}>
      <ScrollView>
        <Header navigation={navigation} screenName={"Hello!"} />

        <View style={style.container}>
          <Text>{date}</Text>
          <Text>{user}</Text>
        </View>

        <View style={style.container}>
          <Text style={style.header}>Today's Task</Text>
          <Text>{ }</Text>
          <NextButton navigation={navigation} txt="CHANGE TASK" next="Tasks" />
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

        <ReportButton navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: "left",
    marginVertical: 10,
    color: "#0F2B64",
  },
  screen: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    padding: 20,
  },
  container: {
    backgroundColor: "#D8EDFA",
    borderRadius: 10,
    marginVertical: 10,
    padding: 20,
  },
});

export default HomeScreen;
