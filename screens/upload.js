import * as React from "react";
import { useState } from "react";
import {
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Button,
  TextInput,
} from "react-native";
import NextButton from "../components/nextButton";
import { Image_object, Metadata } from "../util/Image";
import { SafeAreaView } from "react-native-safe-area-context";
import { WhiteBalance } from "expo-camera/build/Camera.types";
//import ImageViewer from 'react-native-image-zoom-viewer';

/** Upload Screen
 *  Design (Upload-1):
 * - image at top of screen.
 * - dynamic search for labels with drop down menu.
 * - text input for custom labels.
 * - chosen labels bank.
 * - upload image object button
 */

/** <ImageViewer imageUrls={images} renderIndicator={() => null} /> */
function UploadScreen({ route, navigation }) {
  const { img } = route.params;
  console.log(img.uri);
  const tags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6", "Tag 7",
    "Tag 8", "Tag 9", "Tag 10", "Tag 11", "Tag 12", "Tag 13", "Tag 14"]
  const [selectedTags, setSelectedTags] = useState({ arr: Array(tags.length).fill(false) })
  const [tagButtonStyles, setTagButtonStyle] = useState({
    arr: Array(tags.length).fill({})
  })
  const [tagTextStyles, setTagTextStyles] = useState({
    arr: Array(tags.length).fill({})
  })
  const [tagRectangleStyles, setTagRectangleStyles] = useState({
    arr: Array(tags.length).fill({})
  })
  const [customTagOne, setCustomTagOne] = useState("")
  const [customTagTwo, setCustomTagTwo] = useState("")
  const [customTagThree, setCustomTagThree] = useState("")

  var length = 0;
  var tagList = [];
  var threeOrFour = true;
  while (length < tags.length) {
    if (threeOrFour) {
      var newList = []
      var i = 4;
      while (length < tags.length && i > 0) {
        newList.push(tags[length])
        i--
        length++
      }
      tagList.push(newList)
      threeOrFour = false;
    } else {
      var newList = []
      var i = 3;
      while (length < tags.length && i > 0) {
        newList.push(tags[length])
        i--
        length++
      }
      tagList.push(newList)
      threeOrFour = true;
    }
  }
  return (
    <SafeAreaView style={style.view}>
      <Text style={style.label}>Label Image</Text>
      <Image style={style.thumbnail} source={{ uri: img.uri }} />
      <ScrollView style={style.scrollView}>
        <View style={style.scrollViewHeaderView}>
          <Text style={style.scrollViewHeader}>Select a label from the following list:</Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          {tagList.map((item) =>
            <View style={{ flexDirection: "row" }}>
              {item.map((tag) => {
                return <View style={tagRectangleStyles[tags.indexOf(tag)] || {
                  height: 45,
                  width: 69,
                  marginTop: 10,
                  marginBottom: 10,
                  marginRight: 12,
                  left: 5,
                  borderRadius: 6
                }}>
                  <TouchableHighlight
                    onPress={function () {
                      let selectedTagsTemp = selectedTags.arr;
                      selectedTagsTemp[tags.indexOf(tag)] = !selectedTagsTemp[tags.indexOf(tag)];
                      setSelectedTags({ arr: selectedTagsTemp })
                      let tagButtonStylesTemp = tagButtonStyles
                      if (selectedTagsTemp[tags.indexOf(tag)]) {
                        tagButtonStylesTemp[tags.indexOf(tag)] = {
                          backgroundColor: "#0F2B64",
                          padding: 7,
                          borderRadius: 7,
                          borderWidth: 3,
                          borderColor: "#0F2B64",
                          alignItems: "center",
                        }
                      } else {
                        tagButtonStylesTemp[tags.indexOf(tag)] = {
                          backgroundColor: "white",
                          padding: 7,
                          borderRadius: 7,
                          borderWidth: 3,
                          borderColor: "#0F2B64",
                          alignItems: "center",
                        }
                      }
                      setTagButtonStyle(tagButtonStylesTemp)
                      let tagTextStylesTemp = tagTextStyles
                      if (selectedTagsTemp[tags.indexOf(tag)]) {
                        tagTextStylesTemp[tags.indexOf(tag)] =
                        {
                          fontSize: 16,
                          backgroundColor: "#0F2B64",
                          color: "white",
                          borderRadius: 10
                        }
                      } else {
                        tagTextStylesTemp[tags.indexOf(tag)] =
                        {
                          fontSize: 16,
                          backgroundColor: "white",
                          color: "#0F2B64",
                          borderRadius: 10
                        }
                      }
                      setTagTextStyles(tagTextStylesTemp)
                      let tagRectangleStylesTemp = tagRectangleStyles
                      if (selectedTagsTemp[tags.indexOf(tag)]) {
                        tagRectangleStylesTemp[tags.indexOf(tag)] = {
                          height: 39,
                          width: 69,
                          marginTop: 10,
                          marginBottom: 10,
                          marginRight: 12,
                          backgroundColor: "#0F2B64",
                          left: 5,
                          borderRadius: 6,
                        }
                      } else {
                        tagRectangleStylesTemp[tags.indexOf(tag)] = {
                          height: 45,
                          width: 69,
                          marginTop: 10,
                          marginBottom: 10,
                          marginRight: 12,
                          left: 5,
                          borderRadius: 6
                        }
                      }
                      setTagRectangleStyles(tagRectangleStylesTemp)
                    }}
                    style={tagButtonStyles[tags.indexOf(tag)] || {
                      backgroundColor: "white",
                      padding: 7,
                      borderRadius: 7,
                      borderWidth: 3,
                      borderColor: "#0F2B64",
                      alignItems: "center",
                    }}>
                    <Text style={tagTextStyles[tags.indexOf(tag)] || {
                      fontSize: 16,
                      backgroundColor: "white",
                      color: "#0F2B64",
                      borderRadius: 10
                    }}>{tag}</Text>
                  </TouchableHighlight>
                </View>
              })}
            </View>)}
          <View style={{ flexDirection: "row" }}>
            <TextInput style={style.textInputStyle}
              value={"Add custom tag"}>
            </TextInput>
            <TextInput style={style.textInputStyle}
              value={"Add custom tag"}>
            </TextInput>
            <TextInput value={"Add custom tag"} style={style.textInputStyle}>

            </TextInput>
            {customTagOne != "" && <TouchableOpacity
              style={style.tagButton}>
              <Text style={style.selectedTagText}>{customTagOne}</Text>
            </TouchableOpacity>}
            {customTagTwo != "" && <TouchableOpacity
              style={style.tagButton}>
              <Text style={style.selectedTagText}>{customTagTwo}</Text>
            </TouchableOpacity>}
            {customTagThree != "" && <TouchableOpacity
              style={style.tagButton}>
              <Text style={style.selectedTagText}>{customTagThree}</Text>
            </TouchableOpacity>}
          </View>

        </View>
      </ScrollView>
      <TouchableOpacity
        style={style.button}
        activeOpacity={1}
        onPress={() => {
          var tagsData = []
          tagList.forEach(function (tag) {
            if (selectedTags[tag]) {
              tagsData.push(tag)
            }
          })
          var metadata = new Metadata(
            "test@gmail.com",
            "test@gmail.com",
            new Date().toLocaleString(),
            ""
          );
          var image = new Image_object(
            img.uri,
            tagsData,
            metadata
          );
          navigation.navigate("Confirmation", { image: image });
        }}
      >
        <Text style={style.uploadButtonText}>UPLOAD</Text>
      </TouchableOpacity>
      <NextButton
        style={style.back}
        navigation={navigation}
        txt="CANCEL"
        next="Home"
      />
    </SafeAreaView >
  );
}

const style = StyleSheet.create({
  textInputStyle: {
    height: 45,
    width: 69,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 12,
    left: 5,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: "#0F2B64",
    color: "#0F2B64",
    backgroundColor: "white",
    fontSize: 8
  },
  scrollViewHeader: {
    fontSize: 18,
    color: "#333333",
    fontWeight: "500"
  },
  tagButton: {
    backgroundColor: "white",
    padding: 7,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: "#0F2B64",
    alignItems: "center",
  },
  selectedTagButton: {
    backgroundColor: "#0F2B64",
    padding: 7,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: "#0F2B64",
    alignItems: "center",
  },
  scrollViewHeaderView: {
    marginTop: 23,
    marginBottom: 25,
    marginLeft: 5,
    fontWeight: "bold",
  },
  uploadButtonText: {
    fontSize: 20,
    color: "white",
  },
  selectedButtonText: {
    fontSize: 20,
    color: "#0F2B64"
  },
  rectangle: {
    height: 45,
    width: 69,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 12,
    left: 5,
    borderRadius: 6
  },
  selectedRectangle: {
    height: 45,
    width: 69,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 12,
    backgroundColor: "#0F2B64",
    left: 5,
    borderRadius: 6,
  },
  selectedTagText: {
    fontSize: 16,
    backgroundColor: "#0F2B64",
    color: "white",
    borderRadius: 10
  },
  tagsView: {

  },
  tags_label: {
    paddingTop: 10,
    marginBottom: 10,
    fontSize: 23,
  },
  scrollView: {
    flex: 1,
    maxWidth: 330,
    maxHeight: 300,
    backgroundColor: "#D8EDFA",
  },
  back: {
    backgroundColor: "white",
  },
  upload: {
    flex: 0.1,
    width: "500px",
    color: "gray",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#0F2B64",
    padding: 20,
    borderRadius: 10,
    alignSelf: "stretch",
    marginVertical: 10,
    alignItems: "center",
  },
  view: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    paddingTop: 10,
    marginBottom: 15,
    fontSize: 45,
    color: "#0F2B64",
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  tagText: {
    fontSize: 16,
    backgroundColor: "white",
    color: "#0F2B64",
    borderRadius: 10
  }
});

export default UploadScreen;
