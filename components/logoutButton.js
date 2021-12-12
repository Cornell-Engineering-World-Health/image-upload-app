import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { firebase } from '../firebase/firebase';

function LogoutButton({ navigation }) {
  return (
    <TouchableOpacity
      style={style.button}
      onPress={() => {
        firebase
          .auth()
          .signOut()
          .then(async () => {
            navigation.navigate('PreLogin');
          })
          .catch(() => {
            alert(
              'Unable to logout at this time. Please check your connection and try again.'
            );
          });
      }}
    >
      <Text style={style.buttonText}>LOGOUT</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: '#098CDC',
    padding: '5%',
    borderRadius: 10,
    alignSelf: 'stretch',
    marginVertical: '3%',
    alignItems: 'center',
    position: 'relative',
    marginTop: '40%',
    marginBottom: '20%',
  },
  buttonText: {
    fontSize: 20,
    color: '#FAFAFA',
    fontWeight: 'bold',
  },
});
export default LogoutButton;
