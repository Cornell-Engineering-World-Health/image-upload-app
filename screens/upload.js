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
import { Right } from "native-base";
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
  const tags = ["Label1", "Label2", "Label3", "Label4", "Label5", "Label6", "Label7",
    "Label8", "Label9", "Label10", "Label11", "Label12", "Label13", "Label14"]
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
  const [customTags, setCustomTags] = useState(["", "", ""])
  const [addTagButtonStyle, setCustomTagButtonStyle] = useState({ customTags: [style.tagButton] })
  const [addTagTextStyle, setCustomTagTextStyle] = useState({ customTags: [style.tagText] })
  const [addTagRectangleStyle, setCustomTagRectangleStyle] = useState({ customTags: [style.rectangle] })

  const addMore = () => {
    let addTagRectangleStyleTemp = addTagRectangleStyle.customTags
    addTagRectangleStyleTemp[addTagRectangleStyleTemp.length - 1] = style.selectedRectangle
    addTagRectangleStyleTemp.push(style.rectangle)
    setCustomTagRectangleStyle({ customTags: addTagRectangleStyleTemp })
    let addTagTextStyleTemp = addTagTextStyle.customTags
    addTagTextStyleTemp[addTagTextStyleTemp.length - 1] = style.selectedTagText
    addTagTextStyleTemp.push(style.tagText)
    setCustomTagTextStyle({ customTags: addTagTextStyleTemp })
    let addTagButtonStyleTemp = addTagButtonStyle.customTags
    addTagButtonStyleTemp[addTagButtonStyleTemp.length - 1] = style.selectedTagButton
    addTagButtonStyleTemp.push(style.tagButton)
    setCustomTagButtonStyle({ customTags: addTagButtonStyleTemp })
  }

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

  let newTag = ["0", "1", "2"].map((item, index) => {
    return (
      <View style={addTagRectangleStyle.customTags[index]}>
        <TouchableHighlight style={addTagButtonStyle.customTags[index]}>
          <TextInput onChangeText={(customTag) => {
            let temp = customTags;
            temp[index] = customTag
            setCustomTags(temp);
          }}>
          </TextInput>
        </TouchableHighlight>
      </View>
    )
  })
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
                return <View style={tagRectangleStyles[tags.indexOf(tag)] || style.rectangle}>
                  <TouchableHighlight
                    onPress={function () {
                      let selectedTagsTemp = selectedTags.arr;
                      selectedTagsTemp[tags.indexOf(tag)] = !selectedTagsTemp[tags.indexOf(tag)];
                      setSelectedTags({ arr: selectedTagsTemp })
                      let tagButtonStylesTemp = tagButtonStyles
                      if (selectedTagsTemp[tags.indexOf(tag)]) {
                        tagButtonStylesTemp[tags.indexOf(tag)] = style.selectedTagButton
                      } else {
                        tagButtonStylesTemp[tags.indexOf(tag)] = style.tagButton
                      }
                      setTagButtonStyle(tagButtonStylesTemp)
                      let tagTextStylesTemp = tagTextStyles
                      if (selectedTagsTemp[tags.indexOf(tag)]) {
                        tagTextStylesTemp[tags.indexOf(tag)] = style.selectedTagText
                      } else {
                        tagTextStylesTemp[tags.indexOf(tag)] = style.tagText
                      }
                      setTagTextStyles(tagTextStylesTemp)
                      let tagRectangleStylesTemp = tagRectangleStyles
                      if (selectedTagsTemp[tags.indexOf(tag)]) {
                        tagRectangleStylesTemp[tags.indexOf(tag)] = style.selectedRectangle
                      } else {
                        tagRectangleStylesTemp[tags.indexOf(tag)] = style.rectangle
                      }
                      setTagRectangleStyles(tagRectangleStylesTemp)
                    }}
                    style={tagButtonStyles[tags.indexOf(tag)] || style.tagButton}>
                    <Text style={tagTextStyles[tags.indexOf(tag)] || style.tagText}>{tag}</Text>
                  </TouchableHighlight>
                </View>
              })}
            </View>)}
          <View style={{ flexDirection: "row" }}>
            {newTag}
          </View>

        </View>
        <View style={{
          height: 45,
          width: 69,
          marginTop: 10,
          marginBottom: 10,
          marginRight: 12,
          left: 5,
          borderRadius: 6
        }}>
          <TouchableOpacity onPress={addMore} style={style.addTagButton}>
            <View>
              <Text style={{ fontSize: 17, margin: 5, color: "white" }}>Add Label</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={style.button}
        activeOpacity={1}
        onPress={() => {
          var tagsData = []
          var chosenTags = selectedTags.arr
          tags.forEach(function (tag, index) {
            if (chosenTags[index] == true) {
              tagsData.push(tag)
            }
          })
          customTags.forEach(function (tag) {
            if (tag != "") {
              tagsData.push(tag)
            }
          })
          console.log(tagsData)
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
        <Text style={style.uploadButtonText}>NEXT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.cancelButton}
        onPress={() => navigation.navigate("Capture")}
      >
        <Text style={style.cancelButtonText}>CANCEL</Text>
      </TouchableOpacity>
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
    alignItems: "center",
    backgroundColor: "white",
    padding: 7,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: "#0F2B64"
  },
  selectedTagButton: {
    backgroundColor: "#0F2B64",
    padding: 7,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: "#0F2B64",
    alignItems: "center",
  },
  addTagButton: {
    backgroundColor: "#0F2B64",
    padding: 7,
    width: 100,
    height: 45,
    marginLeft: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center"
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
  cancelButtonText: {
    fontSize: 20,
    color: "#0F2B64",
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
  cancelButton: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    borderWidth: 5,
    width: 350,
    borderColor: "#0F2B64",
    alignSelf: "center",
    marginVertical: 10,
    alignItems: "center"
  },
  selectedRectangle: {
    height: 34,
    width: 69,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 12,
    backgroundColor: "#0F2B64",
    left: 5,
    borderRadius: 6,
  },
  selectedTagText: {
    fontSize: 12,
    backgroundColor: "#0F2B64",
    color: "white",
    borderRadius: 10
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
    alignSelf: "center",
    marginVertical: 10,
    width: 350,
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
    fontSize: 12,
    backgroundColor: "white",
    color: "#0F2B64",
    borderRadius: 10
  }
});

export default UploadScreen;
