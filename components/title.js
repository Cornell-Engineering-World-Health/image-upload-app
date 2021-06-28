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
      marginHorizontal: 20,
      marginVertical: 10,
    },
  });

  return <Text style={style.titleText}>{children}</Text>;
}

export default Title;
