import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";

function CaptureScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);
  const [camera, setCamera] = useState(null);

  const takePic = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
      navigation.navigate("Upload", { img: data });
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
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
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.camera}
          ratio={"4:3"}
          type={type}
        ></Camera>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      >
        <Text style={styles.buttonText}>FLIP CAMERA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => takePic()}>
        <Text style={styles.buttonText}>TAKE PIC</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#D8EDFA"
  },
  camera: {
    flex: 1,
    height: 400,
    width: 500,
    aspectRatio: 1,
  },
  capture: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#0F2B64",
    padding: 20,
    borderRadius: 5,
    alignSelf: "stretch",
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});

export default CaptureScreen;
