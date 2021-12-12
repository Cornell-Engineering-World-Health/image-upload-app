import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import SettingsButton from '../components/settingsButton';
import ReportButton from '../components/reportButton';
import Title from '../components/title';

function Header({ navigation, screenName }) {
  return (
    <View style={style.headerContainer}>
      <Title size={40} align="left">
        {screenName}
      </Title>
      <View style={style.headerButtons}>
        <ReportButton navigation={navigation} styling={style.reportButton} />
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
  reportButton: {
    top: '0%',
    right: '10%',
    position: 'relative',
    zIndex: 0,
  },
});

export default Header;
