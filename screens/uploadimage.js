import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../components/title';
import CancelButton from '../components/cancelButton';

function UploadImageScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      setHasPermission('false');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    navigation.navigate('Upload', { img: pickerResult });
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.cancelbuttonHeader}>
        <CancelButton navigation={navigation} txt = '<'/>
      </SafeAreaView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => openImagePickerAsync()}
      >
        <Text style={styles.buttonText}>UPLOAD IMAGE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C4C4C4',
    padding: 20,
    borderRadius: 5,
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
  },
  container: {
    flex: 1,
  },
  cancelbuttonHeader: {
    flexDirection: "row",
  },
});

export default UploadImageScreen;
