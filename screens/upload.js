import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import ReportButton from '../components/reportButton';
import { Image_object } from '../util/Image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getLabelsFromTask } from '../firebase/firestore';
import { UserContext } from '../util/context';

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
  const task = UserContext._currentValue[0]['task'];
  // these hooks keep track of selected labels as well as the styling for
  //each of the label elements.
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState({
    arr: Array(tags.length).fill(false),
  });
  const [tagButtonStyles, setTagButtonStyle] = useState({
    arr: Array(tags.length).fill({}),
  });
  const [tagTextStyles, setTagTextStyles] = useState({
    arr: Array(tags.length).fill({}),
  });
  const [tagRectangleStyles, setTagRectangleStyles] = useState({
    arr: Array(tags.length).fill({}),
  });
  const [customTags, setCustomTags] = useState(['', '', '']);
  const [addTagButtonStyle, setCustomTagButtonStyle] = useState({
    customTags: [style.tagButton, style.tagButton, style.tagButton],
  });
  const [addTagTextStyle, setCustomTagTextStyle] = useState({
    customTags: [style.textInput, style.textInput, style.textInput],
  });
  const [addTagRectangleStyle, setCustomTagRectangleStyle] = useState({
    customTags: [style.rectangle, style.rectangle, style.rectangle],
  });

  useEffect(() => {
    getLabelsFromTask(task)
      .then((doc) => {
        setTags(doc.data.labels);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  //this code helps create the special design
  var length = 0;
  var tagList = [];
  var maxLables = true;
  while (length < tags.length) {
    if (maxLables) {
      var newList = [];
      var i = 3;
      while (length < tags.length && i > 0) {
        newList.push(tags[length]);
        i--;
        length++;
      }
      tagList.push(newList);
      maxLables = false;
    } else {
      var newList = [];
      var i = 3;
      while (length < tags.length && i > 0) {
        newList.push(tags[length]);
        i--;
        length++;
      }
      tagList.push(newList);
      maxLables = true;
    }
  }
  //this code creates three new labels and makes it so that their styling is changed
  //whenever they are clicked and they are selected once the user changes the text in them
  let newTag = ['0', '1', '2'].map((item, index) => {
    return (
      <View key={item} style={addTagRectangleStyle.customTags[index]}>
        <TouchableHighlight
          style={addTagButtonStyle.customTags[index]}>
          <View>
            <TextInput
              style={addTagTextStyle.customTags[index]}
              //update the saved custom labels once a custom label is edited
              onChangeText={(customTag) => {
                let temp = customTags;
                temp[index] = customTag.toLowerCase();
                setCustomTags(temp);
                if (customTag != '') {
                  let addTagButtonStyleTemp = addTagButtonStyle.customTags;
                  addTagButtonStyleTemp[index] = style.selectedTagButton
                  setCustomTagButtonStyle({ customTags: addTagButtonStyleTemp })
                  let addTagTextStyleTemp = addTagTextStyle.customTags;
                  addTagTextStyleTemp[index] = style.selectedTagText
                  setCustomTagTextStyle({ customTags: addTagTextStyleTemp })
                  let addTagRectangleStyleTemp = addTagRectangleStyle.customTags;
                  addTagRectangleStyleTemp[index] = style.selectedRectangle
                  setCustomTagRectangleStyle({ customTags: addTagRectangleStyleTemp })

                } else {
                  let addTagButtonStyleTemp = addTagButtonStyle.customTags;
                  addTagButtonStyleTemp[index] = style.tagButton
                  setCustomTagButtonStyle({ customTags: addTagButtonStyleTemp })
                  let addTagTextStyleTemp = addTagTextStyle.customTags;
                  addTagTextStyleTemp[index] = style.tagText
                  setCustomTagTextStyle({ customTags: addTagTextStyleTemp })
                  let addTagRectangleStyleTemp = addTagRectangleStyle.customTags;
                  addTagRectangleStyleTemp[index] = style.rectangle
                  setCustomTagRectangleStyle({ customTags: addTagRectangleStyleTemp })
                }

              }}
            ></TextInput>
          </View>
        </TouchableHighlight>
      </View>
    );
  });
  return (
    <SafeAreaView style={style.view}>
      <View style={style.title_and_button}>
        <Text style={style.label}>Label Image</Text>
        <ReportButton navigation={navigation} />
      </View>
      <Image style={style.thumbnail} source={{ uri: img.uri }} />
      <ScrollView style={style.scrollView}>
        <View style={style.scrollViewHeaderView}>
          <Text style={style.scrollViewHeader}>
            Select a label from the following list:
          </Text>
        </View>
        <View style={{ flexDirection: 'column' }}>
          {tagList.map((item) => (
            <View key={item} style={{ flexDirection: 'row' }}>
              {item.map((tag, index) => {
                return (
                  <View
                    key={tag}
                    style={tagRectangleStyles[tags.indexOf(tag)] || style.rectangle}>
                    <TouchableHighlight
                      //this changes the button styling based on if the button was selected or not
                      onPress={function () {
                        let selectedTagsTemp = selectedTags.arr;
                        selectedTagsTemp[tags.indexOf(tag)] =
                          !selectedTagsTemp[tags.indexOf(tag)];
                        setSelectedTags({ arr: selectedTagsTemp });
                        let tagButtonStylesTemp = tagButtonStyles;
                        if (selectedTagsTemp[tags.indexOf(tag)]) {
                          tagButtonStylesTemp[tags.indexOf(tag)] =
                            style.selectedTagButton;
                        } else {
                          tagButtonStylesTemp[tags.indexOf(tag)] =
                            style.tagButton;
                        }
                        setTagButtonStyle(tagButtonStylesTemp);
                        let tagTextStylesTemp = tagTextStyles;
                        if (selectedTagsTemp[tags.indexOf(tag)]) {
                          tagTextStylesTemp[tags.indexOf(tag)] =
                            style.selectedTagText;
                        } else {
                          tagTextStylesTemp[tags.indexOf(tag)] = style.tagText;
                        }
                        setTagTextStyles(tagTextStylesTemp);
                        let tagRectangleStylesTemp = tagRectangleStyles;
                        if (selectedTagsTemp[tags.indexOf(tag)]) {
                          tagRectangleStylesTemp[tags.indexOf(tag)] =
                            style.selectedRectangle;
                        } else {
                          tagRectangleStylesTemp[tags.indexOf(tag)] =
                            style.rectangle;
                        }
                        setTagRectangleStyles(tagRectangleStylesTemp);
                      }}
                      style={
                        tagButtonStyles[tags.indexOf(tag)] || style.tagButton}>
                      <Text
                        style={
                          tagTextStyles[tags.indexOf(tag)] || style.tagText}>
                        {tag}
                      </Text>
                    </TouchableHighlight>
                  </View>
                );
              })}
            </View>
          ))}
          <View style={{ flexDirection: 'row' }}>{newTag}</View>
        </View>
        <View
          style={{
            height: 45,
            width: 69,
            marginTop: 10,
            marginBottom: 10,
            marginRight: 12,
            left: 5,
            borderRadius: 6,

          }}
        >
        </View>
      </ScrollView>
      <TouchableOpacity
        style={style.button}
        activeOpacity={1}
        onPress={() => {
          var tagsData = [];
          var chosenTags = selectedTags.arr;
          tags.forEach(function (tag, index) {
            if (chosenTags[index] == true) {
              tagsData.push(tag);
            }
          });
          customTags.forEach(function (tag) {
            if (tag != '') {
              tagsData.push(tag);
            }
          });
          var image = new Image_object(img.uri, tagsData);
          navigation.navigate('Confirmation', { image: image });
        }}
      >
        <Text style={style.uploadButtonText}>NEXT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.cancelButton}
        onPress={() =>
          navigation.navigate('Home', {
            bannerMessage: 'Upload Canceled!',
          })
        }
      >
        <Text style={style.cancelButtonText}>CANCEL</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
    borderColor: '#0F2B64',
    color: '#0F2B64',
    backgroundColor: 'white',
    fontSize: 8,
  },
  scrollViewHeader: {
    fontSize: 18,
    color: '#333333',
    fontWeight: '500',
  },
  tagButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 7,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: '#0F2B64',
  },
  selectedTagButton: {
    backgroundColor: '#0F2B64',
    padding: 7,
    borderRadius: 7,
    borderWidth: 3,
    width: 100,
    color: 'white',
    borderColor: '#0F2B64',
    alignItems: 'center',
  },
  addTagButton: {
    backgroundColor: '#0F2B64',
    padding: 7,
    width: 100,
    height: 45,
    marginLeft: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  scrollViewHeaderView: {
    marginTop: 9,
    marginBottom: 25,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  uploadButtonText: {
    fontSize: 20,
    color: 'white',
  },
  cancelButtonText: {
    fontSize: 20,
    color: '#0F2B64',
  },
  rectangle: {
    height: 45,
    width: '30%',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 12,
    left: 5,
    borderRadius: 6,
  },
  cancelButton: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderWidth: 5,
    width: 350,
    borderColor: '#0F2B64',
    alignSelf: 'center',
    marginVertical: 10,
    alignItems: 'center',
  },
  selectedRectangle: {
    height: 34,
    width: '30%',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 12,
    backgroundColor: '#0F2B64',
    color: 'white',
    left: 5,
    borderRadius: 6,
    alignItems: "center"
  },
  selectedTagText: {
    fontSize: 12,
    backgroundColor: '#0F2B64',
    color: 'white',
    borderRadius: 10,
  },
  scrollView: {
    flex: 1,
    maxWidth: 330,
    maxHeight: 300,
    backgroundColor: '#D8EDFA',
  },
  back: {
    backgroundColor: 'white',
  },
  upload: {
    flex: 0.1,
    width: '500px',
    color: 'gray',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0F2B64',
    padding: 20,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
    width: 350,
    alignItems: 'center',
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    paddingTop: 9,
    marginBottom: 9,
    fontSize: 45,
    color: '#0F2B64',
    textAlign: 'center',
    width: '100%',
  },
  thumbnail: {
    width: 135,
    height: 135,
    marginBottom: 9,
  },
  tagText: {
    fontSize: 12,
    backgroundColor: 'white',
    color: '#0F2B64',
    borderRadius: 10,
  },
  textInput: {
    fontSize: 12,
    backgroundColor: 'white',
    color: '#0F2B64',
    borderRadius: 10,
    height: 16,
    width: 60,
  },
  selectedTextInput: {
    fontSize: 12,
    backgroundColor: '#0F2B64',
    color: 'white',
    borderRadius: 10,
    height: 16,
    width: 60
  },
  title_and_button: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default UploadScreen;
