import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/** Custom Component
 *  Requires: Starts with capital letter
 *  Creates a button that navigates to [next] screen with [txt] as its title
 */
function NextButton({ navigation, txt, next, params, description, email }) {
  if (description)
    return (
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          uploadBugReport(description.toString(), email);
          navigation.navigate(next, params);
        }}
      >
        <Text style={style.buttonText}>{txt}</Text>
      </TouchableOpacity>
    );
  if (params)
    return (
      <TouchableOpacity
        style={txt == 'LOG OUT' ? style.logoutbutton : style.button}
        onPress={() => navigation.navigate(next, params)}
      >
        <Text style={style.buttonText}>{txt}</Text>
      </TouchableOpacity>
    );
  return (
    <TouchableOpacity
      style={txt == 'LOG OUT' ? style.logoutbutton : style.button}
      onPress={() => navigation.navigate(next)}
    >
      <Text style={style.buttonText}>{txt}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: '#0F2B64',
    padding: '6%',
    borderRadius: 10,
    alignSelf: 'stretch',
    marginVertical: '3%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FAFAFA',
  },
  logoutbutton: {
    backgroundColor: '#B80202',
    padding: '5%',
    borderRadius: 10,
    alignSelf: 'stretch',
    marginVertical: '3%',
    alignItems: 'center',
    position: 'relative',
    marginTop: '60%',
  },
});

export default NextButton;
