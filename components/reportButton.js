import * as React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

/** Settings button
 *  - Leads to About, Help & Logout
 */
function ReportButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Report")}>
      <AntDesign name="questioncircle" size={24} color="black" />
    </TouchableOpacity>
  );
}

export default ReportButton;
