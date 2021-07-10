import * as React from "react";
import { Text, StyleSheet } from "react-native";

/** Title text with style. */
function Title({ children, size, align }) {
  const style = StyleSheet.create({
    titleText: {
      fontSize: 40,
      fontWeight: "bold",
      alignSelf: "stretch",
      textAlign: 'left',
      marginVertical: 10,
      color: "#0F2B64"
    },
  });

  return <Text style={style.titleText}>{children}</Text>;
}

export default Title;
