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
            navigation.navigate("Home");
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
    backgroundColor: "#C4C4C4",
    padding: 20,
    borderRadius: 5,
    alignSelf: "stretch",
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#000",
  },
});
export default LoginButton;
