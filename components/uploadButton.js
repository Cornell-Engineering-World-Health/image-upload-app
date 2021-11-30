import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { firebase } from '../firebase/firebase';
import { useState, useContext } from 'react';
import { UserContext } from '../util/context';
import { uploadImage } from '../firebase/firestore';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

/** _processImage(url) converts a url to its root file name */
function _processImage(url) {
  const imageName = url.substring(
    url.lastIndexOf('/') + 1,
    url.lastIndexOf('.')
  );
  return imageName;
}

async function _processThumbnail(uri) {
  const thumbnail = await manipulateAsync(uri, [], {
    compress: 0,
    format: SaveFormat.JPEG,
  });
  const res = await fetch(thumbnail.uri);
  const blob = await res.blob();
  return blob;
}

/** Upload button:
 * upload image and metadata to database
 */
function UploadButton({ navigation, image }) {
  const [loading, setLoading] = useState(false);
  const [state, _] = useContext(UserContext);

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

    const thumbnail = await _processThumbnail(image.image_uri);

    // activate loading indicator
    setLoading(true);

    // uploads the image to the database
    return storageRef
      .child('images/' + state.task + '/' + imageName)
      .put(blob)
      .then(() => {
        let path = 'images/' + state.task + '/' + imageName;
        console.log('Image Succesfully Uploaded');
        uploadImage(path, state.task, state.id, image.labels);
        storageRef
          .child('thumbnails/' + state.task + '/' + imageName)
          .put(thumbnail)
          .then(() => {
            console.log('Thumbnail Succesfully Uploaded');
          });
      });
  }

  return (
    <TouchableOpacity
      style={style.button}
      onPress={async () => {
        // upload image and metadata to database
        try {
          await uploadToFirebase(image);
          setLoading(false);
          navigation.navigate('Home', {
            bannerMessage: 'Photo uploaded successfully!',
          });
        } catch (error) {
          // alert(error);
          setLoading(false);
          navigation.navigate('Home', {
            bannerMessage: error,
          });
        }
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
    backgroundColor: '#0F2B64',
    padding: 20,
    borderRadius: 5,
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
export default UploadButton;
