import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import SettingsButton from '../components/settingsButton';
import ReportButton from '../components/reportButton';
import Title from '../components/title';

/** Title text with style. */
function Header({ navigation, screenName }) {
  return (
    <View style={style.headerContainer}>
      <Title size={40} align="left">
        {screenName}
      </Title>
      <View style={style.headerButtons}>
        <ReportButton navigation={navigation} />
        <SettingsButton navigation={navigation} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  headerContainer: {
    paddingVertical: '5%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Header;
