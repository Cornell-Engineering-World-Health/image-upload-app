import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { uploadBugReport } from '../firebase/firestore';

function BugReportButton({ navigation, description, email }) {
  return (
    <TouchableOpacity
      style={style.button}
      onPress={async () => {
        if (description != null) {
          uploadBugReport(description, email)
            .then(() => {
              navigation.navigate('Home', {
                bannerMessage: 'Report sent succesfully!',
              });
            })
            .catch(() => {
              alert('Please check your connection and try again.');
            });
        } else {
          alert('Please enter a report with a message');
        }
      }}
    >
      <Text style={style.buttonText}>SUBMIT</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: '#0F2B64',
    padding: '6%',
    borderRadius: 10,
    alignSelf: 'stretch',
    marginVertical: '3%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FAFAFA',
    fontWeight: 'bold',
  },
});

export default BugReportButton;
