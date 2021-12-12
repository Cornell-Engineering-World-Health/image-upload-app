import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

function Title({ children }) {
  const style = StyleSheet.create({
    titleText: {
      fontSize: 40,
      fontWeight: 'bold',
      alignSelf: 'stretch',
      textAlign: 'left',
      marginVertical: '3%',
      marginTop: '20%',
      color: '#0F2B64',
    },
  });

  return <Text style={style.titleText}>{children}</Text>;
}

export default Title;
