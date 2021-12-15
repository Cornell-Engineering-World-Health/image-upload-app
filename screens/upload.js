import * as React from 'react';
import { useState, useEffect } from 'react';
import {
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
import BackButton from '../components/backButton';
import Title from '../components/title';

/** Upload Screen
 *  Design (Upload-1):
 * - image at top of screen.
 * - dynamic search for labels with drop down menu.
 * - text input for custom labels.
 * - chosen labels bank.
 * - upload image object button
 */

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
    getLabelsFromTask(task).then((doc) => {
      setTags(doc.data.labels);
    });
  }, []);
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
        <TouchableHighlight style={addTagButtonStyle.customTags[index]}>
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
                  addTagButtonStyleTemp[index] = style.selectedTagButton;
                  setCustomTagButtonStyle({
                    customTags: addTagButtonStyleTemp,
                  });
                  let addTagTextStyleTemp = addTagTextStyle.customTags;
                  addTagTextStyleTemp[index] = style.selectedTagText;
                  setCustomTagTextStyle({ customTags: addTagTextStyleTemp });
                  let addTagRectangleStyleTemp =
                    addTagRectangleStyle.customTags;
                  addTagRectangleStyleTemp[index] = style.selectedRectangle;
                  setCustomTagRectangleStyle({
                    customTags: addTagRectangleStyleTemp,
                  });
                } else {
                  let addTagButtonStyleTemp = addTagButtonStyle.customTags;
                  addTagButtonStyleTemp[index] = style.tagButton;
                  setCustomTagButtonStyle({
                    customTags: addTagButtonStyleTemp,
                  });
                  let addTagTextStyleTemp = addTagTextStyle.customTags;
                  addTagTextStyleTemp[index] = style.tagText;
                  setCustomTagTextStyle({ customTags: addTagTextStyleTemp });
                  let addTagRectangleStyleTemp =
                    addTagRectangleStyle.customTags;
                  addTagRectangleStyleTemp[index] = style.rectangle;
                  setCustomTagRectangleStyle({
                    customTags: addTagRectangleStyleTemp,
                  });
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
      <Title>Label Image</Title>
      <ReportButton navigation={navigation} />
      <BackButton navigation={navigation} />
      <ScrollView
        style={{ width: 150, height: 200, flexGrow: 0 }}
        minimumZoomScale={1}
        maximumZoomScale={5}
      >
        <Image style={style.thumbnail} source={{ uri: img.uri }} />
      </ScrollView>
      <View style={style.scrollView}>
        <View style={style.scrollViewHeaderView}>
          <Text style={style.scrollViewHeader}>
            Tap on a pre-set label to select it. Type in empty labels to create
            custom labels. Delete text in custom labels to unselect them.
          </Text>
        </View>
        <View style={{ flexDirection: 'column' }}>
          {tagList.map((item) => (
            <View key={item} style={{ flexDirection: 'row' }}>
              {item.map((tag, index) => {
                return (
                  <View
                    key={tag}
                    style={
                      tagRectangleStyles[tags.indexOf(tag)] || style.rectangle
                    }
                  >
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
                        tagButtonStyles[tags.indexOf(tag)] || style.tagButton
                      }
                    >
                      <Text
                        style={
                          tagTextStyles[tags.indexOf(tag)] || style.tagText
                        }
                      >
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
        ></View>
      </View>
      <TouchableHighlight
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
        <Text style={style.buttonText}>NEXT</Text>
      </TouchableHighlight>
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
    fontSize: 16,
    color: '#0F2B64',
    fontWeight: 'bold',
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
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 8,
  },
  rectangle: {
    height: 45,
    width: '30%',
    marginTop: 8,
    marginBottom: 3,
    marginRight: 12,
    left: 5,
    borderRadius: 6,
  },
  selectedRectangle: {
    height: 36,
    width: '30%',
    marginTop: 7,
    marginBottom: 10,
    marginRight: 12,
    backgroundColor: '#0F2B64',
    color: 'white',
    left: 5,
    borderRadius: 6,
    alignItems: 'center',
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
    maxHeight: 360,
  },
  upload: {
    flex: 0.1,
    width: '500px',
    color: 'gray',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0F2B64',
    padding: '6%',
    borderRadius: 10,
    alignSelf: 'stretch',
    marginVertical: '3%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FAFAFA',
    fontWeight: 'bold',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: '2%',
  },
  label: {
    paddingTop: 9,
    marginBottom: 10,
    fontSize: 45,
    color: '#0F2B64',
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
  },
  thumbnail: {
    width: 150,
    height: 200,
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
    width: 60,
  },
});

export default UploadScreen;
