import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import db from "../util/db";
import { firebase } from "../firebase/firebase";

/** _processImage(url) converts a url to its root file name   */
function _processImage(url) {
  const imageName = url.substring(
    url.lastIndexOf("/") + 1,
    url.lastIndexOf(".")
  );
  return imageName;
};

/** uploadToFirebase(image) creates a reference to the image uri in the 
 *  firebase storage and uploads an image with imageName as its reference */
async function uploadToFirebase(image) {

  // creates the root reference for firebase storage
  const storageRef = firebase.storage().ref();

  // converts the image uri into a response object
  const response = await fetch(image.image_uri);

  // converts response into a blob object that can be directly stored in the database
  const blob = await response.blob();

  const imageName = _processImage(image.image_uri);

  // uploads the image to the database
  return storageRef
    .child("images/" + imageName)
    .put(blob)
    .then(() => {
      console.log("Image Succesfully Uploaded");
      return true;
    })
    .catch((err) => {
      console.log("ERROR UPLOADING IMAGE", err);
      return false;
    });
}

/** Upload button:
 * 1. upload image and metadata to database [TODO]
 * 2. store image locally in gallery
 */
function UploadButton({ navigation, image }) {
  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists gallery (id integer primary key not null, uri text not null);",
        [],
        () => { },
        (_, error) => console.log(error)
      );
    });
  }, []);

  return (
    <TouchableOpacity
      style={style.button}
      onPress={async () => {
        // 1. upload image and metadata to database [TODO]

        await uploadToFirebase(image);

        // 2. store image locally in gallery
        db.transaction((tx) => {
          tx.executeSql(
            "insert into gallery (uri) values (?)",
            [image.image_uri],
            () => { },
            (_, error) => console.log(error)
          );
          console.log(image.image_uri);
        });
        navigation.navigate("Home");
      }}
    >
      <Text style={style.buttonText}>UPLOAD</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: "#C4C4C4",
    padding: 20,
    borderRadius: 5,
    alignSelf: "stretch",
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#000",
  },
});
export default UploadButton;
