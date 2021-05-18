import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import UploadButton from "../components/uploadButton";

/** Home Screen
 *  Design (Home-1):
 * - instructions
 * - image upload button
 * - image capture button.
 * Requires: on button completion, navigate to upload screen
 */
function ConfirmationScreen({ navigation, route }) {
  const { image } = route.params;
  console.log(image);
  const label1 = image.labels[0];
  const label2 = image.labels[1];
  const label3 = image.labels[2];
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image style={style.pic} source={{ uri: image.image_uri }} />
      <Text>Tags:</Text>
      <Text>{label1}</Text>
      <Text>{label2}</Text>
      <Text>{label3}</Text>
      <UploadButton navigation={navigation} image={image}/>
    </View>
  );
}

const style = StyleSheet.create({
  pic: {
    width: 300,
    height: 300,
  },
});
export default ConfirmationScreen;
