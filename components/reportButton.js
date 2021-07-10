import * as React from "react";
import { Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

/** Settings button
 *  - Leads to About, Help & Logout
 */
function ReportButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Report")} style={style.button}>
      <AntDesign name="questioncircle" size={24} color="#098CDC" />
    </TouchableOpacity>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
  button: {
    position: 'absolute',
    top: windowHeight / 4 * 3,
    right: 0,
    bottom: 0,
  }
});

export default ReportButton;
