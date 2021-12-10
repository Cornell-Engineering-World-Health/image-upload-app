import * as React from 'react';
import { TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Title from '../components/title';
import { AntDesign } from '@expo/vector-icons';

/** Custom Component
 *  Requires: Starts with capital letter
 *  Creates a button that navigates to [next] screen with [txt] as its title
 */
function BackButton({ navigation, title }) {
  return (
    <SafeAreaView style={style.cancelbuttonHeader}>
      <TouchableOpacity
        style={style.carrotbutton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="back" size={32} color="black" />
      </TouchableOpacity>
      <Title>{title}</Title>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  cancelbuttonHeader: {
    flexDirection: 'row',
  },
  carrotbutton: {
    alignItems: 'flex-start',
    marginRight: '5%',
    alignSelf: 'center',
  },
});
export default BackButton;
