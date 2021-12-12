import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function BackButton({ navigation }) {
  return (
    <TouchableOpacity style={style.button} onPress={navigation.goBack}>
      <Ionicons name="md-chevron-back-circle" size={36} color="#0F2B64" />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    top: '10%',
    left: '5%',
    position: 'absolute',
    zIndex: 1,
  },
});
export default BackButton;
