import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import Title from '../components/title';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ResetButton from '../components/ResetButton';

function ForgotScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={style.screen}>
      <Title>Reset Password</Title>
      <View style={style.container}>
        <Text style={{ width: '100%', textAlign: 'center' }}>
          Please enter the email address associated with your account.
          {'\n'}
        </Text>
        <TextInput
          placeholder="Enter Email Address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          style={{
            width: '100%',
            textAlign: 'center',
            padding: 20,
            borderRadius: 10,
            backgroundColor: 'white',
          }}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <ResetButton email={email} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: 'left',
    marginVertical: 10,
    color: '#0F2B64',
  },
  screen: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 20,
  },
  container: {
    backgroundColor: '#D8EDFA',
    borderRadius: 10,
    marginVertical: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export default ForgotScreen;
