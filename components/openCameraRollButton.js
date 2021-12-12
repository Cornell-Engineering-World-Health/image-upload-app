import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function OpenCameraRollButton({ navigation }) {
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
    if (!pickerResult.cancelled) {
      navigation.navigate('Upload', { img: pickerResult });
    }
  };

  return (
    <TouchableOpacity
      style={style.button}
      onPress={() => openImagePickerAsync()}
    >
      <Text style={style.buttonText}>UPLOAD PICTURE</Text>
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

export default OpenCameraRollButton;
