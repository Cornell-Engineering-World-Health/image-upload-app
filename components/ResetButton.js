import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { firebase } from "../firebase/firebase";

/** Login button*/
function ResetButton({ email }) {
  return (
    <TouchableOpacity
      style={style.button}
      onChangeText={(text) => setEmail(text)}
      onPress={() => {
          firebase.auth().sendPasswordResetEmail(email)
            .then(function (user) {
              alert('Please check your email')
            }).catch(function (e) {
              console.log(e);
              alert('The email does not correspond to an existing user');
            })
          }
        }
    >
      <Text style={style.buttonText}>Send Email</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: "#0F2B64",
    padding: 20,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#FAFAFA",
  },
});
export default ResetButton;
