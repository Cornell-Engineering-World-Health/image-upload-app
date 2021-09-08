import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { firebase } from "../firebase/firebase";

/** Login button*/
function LoginButton({ navigation, email, password }) {
  return (
    <TouchableOpacity
      style={style.button}
      onPress={() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((res) => {
            navigation.navigate("Tasks");
          })
          .catch((e) => {
            console.log(e);
            alert(e);
          });
      }}
    >
      <Text style={style.buttonText}>LOGIN</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: "#0F2B64",
    padding: 20,
    borderRadius: 10,
    alignSelf: "stretch",
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#FAFAFA",
  },
});
export default LoginButton;
