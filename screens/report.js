import * as React from 'react';
import {
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Title from '../components/title';
import BugReportButton from '../components/bugReportButton';
import BackButton from '../components/backButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../util/context';

/** Report Screen
 *  Design:
 *  - Instructions
 *  - Textbox to enter issue
 *  - Submit/Cancel buttons
 */
function ReportScreen({ navigation }) {
  const [text, onChangeText] = React.useState(null);

  const email = UserContext._currentValue[0]['email'];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackButton navigation={navigation} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={style.view}>
            <Title size={40} align="left">
              Report Issue
            </Title>
            <Text>
              In the box below, please provide a short description of any
              difficulties you experienced in using this app and we will get in
              touch with you.
            </Text>
            <TextInput
              multiline
              style={style.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Please type your issue here..."
            />
            <BugReportButton
              description={text}
              email={email}
              navigation={navigation}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  input: {
    marginVertical: '5%',
    width: '100%',
    height: '30%',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'left',
    padding: '5%',
    paddingTop: '5%',
  },
  view: {
    marginHorizontal: '5%',
    marginTop: '5%',
  },
});

export default ReportScreen;
