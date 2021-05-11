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
          <TextInput style={style.input} onChangeText={x => newCategory1[x]} placeholderTextColor='black' placeholder="    Category 1"></TextInput>
        </View>
        <View style={style.rectangle2}>
          <TextInput style={style.input} onChangeText={x => newCategory2[x]} placeholderTextColor='black' placeholder="    Category 2"></TextInput>
        </View>
        <View style={style.rectangle3}>
          <TextInput style={style.input} onChangeText={x => newCategory3[x]} placeholderTextColor='black' placeholder="    Category 3"></TextInput>
        </View>
      </View>
      <NextButton style={style.upload} navigation={navigation} txt="UPLOAD" next="Feedback" />
      <NextButton style={style.back} navigation={navigation} txt="CANCEL" next="Home" />
    </View >
  );
}

const style = StyleSheet.create({
  input: {
    height: 300,
    left: "70px",
    top: "100px",
    color: "black"
  },
  rectangle: {
    height: 75,
    width: 210,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#8C7F7F',
    position: 'absolute',
    left: "10px"
  }, rectangle2: {
    height: 75,
    width: 210,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#8C7F7F',
    position: 'absolute',
    left: "10px",
    top: "100px"
  }, rectangle3: {
    height: 75,
    width: 210,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#8C7F7F',
    position: 'absolute',
    left: "10px",
    top: "200px"
  },
  tags_label: {
    paddingTop: "30px",
    marginBottom: "10px",
    alignItems: 'left',
    fontSize: "23px"
  },
  tags_view: {
    flex: 1,
    minWidth: 500,
    minHeight: 600,
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
    paddingTop: "40px",
    marginBottom: "30px",
    flex: .1,
    fontSize: "46px",
    fontWeight: "bold",
  },
  thumbnail: {
    width: 180,
    height: 180,
  }
})

export default UploadScreen