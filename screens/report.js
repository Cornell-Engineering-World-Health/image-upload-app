import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Title from "../components/title";
import NextButton from "../components/nextButton";
import { HeaderBackButton } from '@react-navigation/stack';

/** Report Screen
 *  Design: 
 *  - Instructions
 *  - Textbox to enter issue
 *  - Submit/Cancel buttons
 */
function ReportScreen({ navigation }) {
  const [text, onChangeText] = React.useState(null);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20 }}>
      <Title size={40} align="left">
        Report Issue
      </Title>
      <Text>
        In the box below please provide a short description of any difficulties you experienced in
        using this app, and we will get in touch with you.
      </Text>
      <TextInput
        multiline
        style={style.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Please type your issue here..."
      />
      <NextButton navigation={navigation} txt="UPLOAD PICTURE" next="UploadImageScreen" />
      {/* <TouchableOpacity
        style={style.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={style.buttonText}>CANCEL</Text>
      </TouchableOpacity> */}
    </View>
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
  // button: {
  //   backgroundColor: "#C4C4C4",
  //   padding: 20,
  //   borderRadius: 5,
  //   alignSelf: "stretch",
  //   marginVertical: 10,
  //   alignItems: "center",
  // },
});

export default ReportScreen