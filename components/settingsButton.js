import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

/** Settings button
 *  - Leads to About, Help & Logout
 */
function SettingsButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Feather name="settings" size={24} color="black" />
    </TouchableOpacity>
  );
}

export default SettingsButton;
