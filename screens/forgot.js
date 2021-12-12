import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import Title from '../components/title';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ResetButton from '../components/ResetButton';
import BackButton from '../components/backButton';

function ForgotScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={style.screen}>
      <BackButton navigation={navigation} />
      <Title>Reset Password</Title>
      <View style={style.container}>
        <Text style={style.text}>
          Please enter the email address associated with your account.
        </Text>
        <TextInput
          placeholder="Enter Email Address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          style={{
            width: '100%',
            textAlign: 'left',
            padding: '5%',
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
  text: { width: '100%', textAlign: 'center', marginBottom: '10%' },
  header: {
    fontSize: 30,
    textAlign: 'left',
    color: '#0F2B64',
  },
  screen: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: Dimensions.get('window').width / 20,
  },
  container: {
    backgroundColor: '#D8EDFA',
    borderRadius: 10,
    marginVertical: '5%',
    padding: '5%',
    paddingTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export default ForgotScreen;
