import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

/** Custom Component
 *  Requires: Starts with capital letter
 *  Creates a button that navigates to [next] screen with [txt] as its title
 */
function CancelButton({ navigation }) {
  return (
    <TouchableOpacity
      style={style.button}
      onPress={() => navigation.goBack()}
    >
      <Text style={style.buttonText}>CANCEL</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: "#fafafa",
    borderWidth: 2,
    borderColor: "#C4C4C4",
    padding: 20,
    borderRadius: 5,
    alignSelf: "stretch",
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#000",
  },
});
export default CancelButton;
