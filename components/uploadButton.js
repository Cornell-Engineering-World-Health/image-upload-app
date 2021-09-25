import * as React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { firebase } from "../firebase/firebase";
import { useState, useContext } from "react";
import { UserContext } from "../util/context";
import { addImageToTask, addImageToUser } from "../firebase/firestore";

/** _processImage(url) converts a url to its root file name */
function _processImage(url) {
  const imageName = url.substring(
    url.lastIndexOf("/") + 1,
    url.lastIndexOf(".")
  );
  return imageName;
}

/** Upload button:
 * upload image and metadata to database
 */
function UploadButton({ navigation, image }) {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useContext(UserContext);

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

    // activate loading indicator
    setLoading(true);

    // metadata
    var metadata = {
      customMetadata: image.metadata,
    };

    // uploads the image to the database
    return storageRef
      .child("images/" + state.task + "/" + imageName)
      .put(blob)
      .then(() => {
        console.log("Image Succesfully Uploaded");
        storageRef
          .child("images/" + state.task + "/" + imageName)
          .updateMetadata(metadata)
          .then((md) => {
            console.log("Image Metadata Succesfully Uploaded", md);

            // update firestore
            var fullPath = md["fullPath"];
            console.log(state);
            addImageToTask(state.task, fullPath, state.user);
            addImageToUser(state.task, fullPath, state.user);

            alert("Success!");
            setLoading(false);
          });
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }

  return (
    <TouchableOpacity
      style={style.button}
      onPress={async () => {
        // upload image and metadata to database
        try {
          await uploadToFirebase(image);
        } catch (error) {
          alert(error);
          setLoading(false);
        }
        navigation.navigate("Home");
      }}
    >
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text style={style.buttonText}>UPLOAD</Text>
      )}
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
