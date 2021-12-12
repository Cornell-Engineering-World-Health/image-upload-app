import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function ReportButton({ navigation, styling }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Report')}
      style={[style.button, styling]}
    >
      <AntDesign name="flag" size={24} color="red" />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    top: '11%',
    right: '10%',
    position: 'absolute',
    zIndex: 1,
  },
});

export default ReportButton;
