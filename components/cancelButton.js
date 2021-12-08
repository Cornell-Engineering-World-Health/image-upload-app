import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/** Custom Component
 *  Requires: Starts with capital letter
 *  Creates a button that navigates to [next] screen with [txt] as its title
 */
function CancelButton({ navigation, txt }) {
  return (
    <TouchableOpacity style={txt == "CANCEL" ? style.cancelbutton:style.carrotbutton} onPress={() => navigation.goBack()}>
      <Text style={style.cancelbuttonText}>{txt}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  cancelbutton: {
    backgroundColor: '#FAFAFA',
    borderWidth: 2.5,
    borderRadius: 10,
    borderColor: '#0F2B64',
    padding: 20,
    alignSelf: 'stretch',
    marginVertical: 10,
    alignItems: 'center',
  },
  cancelbuttonText: {
    fontSize: 20,
    color: '#000',
  },
  carrotbutton:{
    backgroundColor: '#FAFAFA',
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: '#0F2B64',
    padding: 20,
    marginHorizontal: 5,
    alignItems: 'flex-start',

  },
  carrotbuttonText: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'stretch',
    textAlign: 'left',
    marginVertical: 10,
    color: '#0F2B64',

  }
});
export default CancelButton;
