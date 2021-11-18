import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';

function CaptureScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [_, setImage] = useState(null);
  const [camera, setCamera] = useState(null);

  const takePic = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
      navigation.navigate('Upload', { img: data });
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Camera
        ref={(ref) => setCamera(ref)}
        style={styles.camera}
        type={type}
      ></Camera>
      <TouchableOpacity
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
          marginTop: 50,
          paddingHorizontal: 20,
        }}
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      >
        <MaterialIcons name="flip-camera-ios" size={50} color="white" />
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <IconButton
          icon="circle-slice-8"
          size={80}
          color="white"
          highlightColor="red"
          onPress={() => takePic()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default CaptureScreen;
