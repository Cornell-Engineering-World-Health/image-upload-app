import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import NextButton from "../components/nextButton"
//import ImageViewer from 'react-native-image-zoom-viewer';
const images = [{ url: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png' }]
let category_names = []

/** Upload Screen
 *  Design (Upload-1): 
 * - image at top of screen. 
 * - dynamic search for labels with drop down menu. 
 * - text input for custom labels.
 * - chosen labels bank.  
 * - upload image object button
 */

/** <ImageViewer imageUrls={images} renderIndicator={() => null} /> */
function UploadScreen({ navigation }) {
  const [category1, newCategory1] = useState('');
  const [category2, newCategory2] = useState('');
  const [category3, newCategory3] = useState('');



  return (
    <View style={style.view}>
      <Text style={style.label}>Label Image</Text>
      <Image style={style.thumbnail} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
      <Text style={style.tags_label}>Tags:</Text>
      <View style={style.tags_view}>
        <View style={style.rectangle}>
          <TextInput style={style.input} onChangeText={x => newCategory1(x)} placeholderTextColor='black' placeholder="    Category 1"></TextInput>
        </View>
        <View style={style.rectangle2}>
          <TextInput style={style.input} onChangeText={x => newCategory2(x)} placeholderTextColor='black' placeholder="    Category 2"></TextInput>
        </View>
        <View style={style.rectangle3}>
          <TextInput style={style.input} onChangeText={x => newCategory3(x)} placeholderTextColor='black' placeholder="    Category 3"></TextInput>
        </View>
      </View>
      <NextButton style={style.upload} navigation={navigation} txt="UPLOAD" next="Feedback" />
      <NextButton style={style.back} navigation={navigation} txt="CANCEL" next="Home" />
    </View >
  );
}

const style = StyleSheet.create({
  input: {
    height: 50,
    left: 15,
    color: "black"
  },
  rectangle: {
    height: 50,
    width: 150,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#8C7F7F',
    position: 'absolute',
    left: 20,
    zIndex: -1
  }, rectangle2: {
    height: 50,
    width: 150,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#8C7F7F',
    position: 'absolute',
    left: 20,
    top: 100,
    zIndex: -1
  }, rectangle3: {
    height: 50,
    width: 150,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#8C7F7F',
    position: 'absolute',
    left: 20,
    top: 200,
    zIndex: -1
  },
  tags_label: {
    paddingTop: 10,
    marginBottom: 10,
    fontSize: 23
  },
  tags_view: {
    flex: 1,
    minWidth: 300,
    maxHeight: 300,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
    borderStyle: 'solid',
    backgroundColor: "white"
  },
  back: {
    backgroundColor: "white"
  },
  upload: {
    flex: .1,
    width: "100px",
    fontWeight: "bold"
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    paddingTop: 10,
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  thumbnail: {
    width: 100,
    height: 100,
  }
})

export default UploadScreen
