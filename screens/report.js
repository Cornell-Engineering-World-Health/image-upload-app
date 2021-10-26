import * as React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Title from "../components/title";
import NextButton from "../components/nextButton";
import CancelButton from "../components/cancelButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { uploadBugReport } from '../firebase/firestore'
import { UserContext } from "../util/context";

/** Report Screen
 *  Design:
 *  - Instructions
 *  - Textbox to enter issue
 *  - Submit/Cancel buttons
 */
function ReportScreen({ navigation }) {
  const [text, onChangeText] = React.useState(null);

  const email = UserContext._currentValue[0]['user']

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 20 }}>
        <Title size={40} align="left">
          Report Issue
        </Title>
        <Text>
          In the box below please provide a short description of any
          difficulties you experienced in using this app, and we will get in
          touch with you.
        </Text>
        <TextInput
          multiline
          style={style.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Please type your issue here..."
        />
        <NextButton description={text} email={email} navigation={navigation} txt="SUBMIT" next="Home" />
        <CancelButton navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  input: {
    marginVertical: 10,
    width: "100%",
    height: "40%",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ReportScreen;
