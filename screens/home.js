import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import NextButton from "../components/nextButton";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Title from "../components/title";
import { StatusBar } from "expo-status-bar";
import ReportButton from "../components/reportButton";
import Header from "../components/header";
import { SafeAreaView } from "react-native-safe-area-context";
/** Home Screen
 *  Design (Home-1):
 * - instructions
 * - image upload button
 * - image capture button.
 * Requires: on button completion, navigate to upload screen
 */

function HomeScreen({ navigation }) {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);

  return (
    <SafeAreaView style={style.screen}>
      <ScrollView>
        <Header navigation={navigation} screenName={"Hello!"} />

        <View style={style.container}>
          <Text>{date}</Text>
          <Text>username</Text>
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
