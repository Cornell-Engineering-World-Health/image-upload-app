import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function CancelButton({ navigation }) {
  return (
    <TouchableOpacity
      style={style.cancelbutton}
      onPress={() =>
        navigation.navigate('Home', { bannerMessage: 'Upload cancelled!' })
      }
    >
      <Text style={style.cancelbuttonText}>CANCEL</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  cancelbutton: {
    backgroundColor: '#FAFAFA',
    borderWidth: 2.5,
    borderRadius: 10,
    borderColor: '#0F2B64',
    padding: '5%',
    alignSelf: 'stretch',
    marginVertical: '1%',
    alignItems: 'center',
  },
  cancelbuttonText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});
export default CancelButton;
