import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { firebase } from '../firebase/firebase';
import { getUserByEmail } from '../firebase/firestore';

function LoginButton({ navigation, email, password }) {
  return (
    <TouchableOpacity
      style={style.button}
      onPress={() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(async (res) => {
            let user = await getUserByEmail(email);
            navigation.navigate('Home', { user: user });
          })
          .catch((e) => {
            alert('Failed to sign in. Try again.');
          });
      }}
    >
      <Text style={style.buttonText}>LOGIN</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: '#0F2B64',
    padding: '6%',
    borderRadius: 10,
    alignSelf: 'stretch',
    marginVertical: '1%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FAFAFA',
    fontWeight: 'bold',
  },
});
export default LoginButton;
