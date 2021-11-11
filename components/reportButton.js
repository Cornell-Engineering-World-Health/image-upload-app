import * as React from "react";
import { Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Right } from "native-base";

/** Settings button
 *  - Leads to About, Help & Logout
 */
function ReportButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Report")} style={style.button}>
      <AntDesign name="flag" size={24} color="red" />
    </TouchableOpacity>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
  button: {
    right: 20,
  }
});

export default ReportButton;
