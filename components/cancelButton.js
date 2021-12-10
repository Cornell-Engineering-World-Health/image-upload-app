import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/** Custom Component
 *  Requires: Starts with capital letter
 *  Creates a button that navigates to [next] screen with [txt] as its title
 */
function CancelButton({ navigation, txt }) {
  return (
    <TouchableOpacity
      style={style.cancelbutton}
      onPress={() => navigation.goBack()}
    >
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
    padding: '5%',
    alignSelf: 'stretch',
    marginVertical: '1%',
    alignItems: 'center',
  },
  cancelbuttonText: {
    fontSize: 20,
    color: '#000',
  },
});
export default CancelButton;
