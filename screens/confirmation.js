import * as React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import UploadButton from '../components/uploadButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

/** Home Screen
 *  Design (Home-1):
 * - instructions
 * - image upload button
 * - image capture button.
 * Requires: on button completion, navigate to upload screen
 */
function ConfirmationScreen({ navigation, route }) {
  const { image } = route.params;
  const labels = image.labels;
  var count = 0
  var labelsRows = [];
  var rowList = [];
  var rowLength = 0
  labels.forEach(label => {
    if (rowLength + label.length > 30) {
      labelsRows.push(rowList)
      rowLength = 0
      rowList = []
      rowLength = rowLength + label.length + 1
      rowList.push(label)
    } else {
      rowLength = rowLength + label.length + 1
      rowList.push(label)
    }
  })
  labelsRows.push(rowList)
  console.log(labels.length)
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text style={style.review}> Review</Text>
      <Text style={style.confirmationText}>
        Confirm & upload the following {'\n'} image with the labels below:
      </Text>
      <ScrollView style={style.imageView}>
        <View style={style.imageView2}>
          <Image style={style.pic} source={{ uri: image.image_uri }} />
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{ fontSize: 14, fontWeight: 'bold', color: '#333333' }}
            >
              Labels:{' '}
            </Text>
            <View style={{ flexDirection: 'column' }}>
              {labelsRows.map((row) => {
                return <View key={row} style={{ flexDirection: 'row' }}>
                  {row.map((label, index) => {
                    if (count != labels.length - 1) {
                      count += 1
                      return (
                        <Text key={label} style={{ fontSize: 14, marginRight: 3 }}>
                          {label},
                        </Text>
                      );
                    } else {
                      return (
                        <Text key={label} style={{ fontSize: 14, marginRight: 3 }}>
                          {label}
                        </Text>
                      );
                    }
                  })}
                </View>
              })}
            </View>
          </View>
        </View>
      </ScrollView>
      <UploadButton navigation={navigation} image={image} />
      <TouchableOpacity
        style={style.editButton}
        onPress={() => navigation.navigate('Upload')}
      >
        <Text style={style.editButtonText}>EDIT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.cancelButton}
        onPress={() =>
          navigation.navigate('Home', { bannerMessage: 'Upload Canceled!' })
        }
      >
        <Text style={style.cancelButtonText}>CANCEL</Text>
      </TouchableOpacity>
    </SafeAreaView >
  );
}

const style = StyleSheet.create({
  imageView: {
    backgroundColor: '#D8EDFA',
    marginBottom: 5,
    width: 328,
    height: 290,
  },
  imageView2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pic: {
    width: 150,
    height: 242.7,
    marginBottom: 10,
  },
  review: {
    marginTop: 7,
    color: '#0F2B64',
    fontSize: 35,
    right: 90,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  confirmationText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333',
    right: 7,
    marginBottom: 7,
  },
  editButtonText: {
    fontSize: 20,
    color: 'white',
  },
  editButton: {
    backgroundColor: '#0F2B64',
    padding: 20,
    borderRadius: 5,
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    width: 340,
  },
  cancelButtonText: {
    fontSize: 20,
    color: '#0F2B64',
  },
  cancelButton: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderWidth: 5,
    width: 340,
    borderColor: '#0F2B64',
    alignSelf: 'center',
    marginVertical: 10,
    alignItems: 'center',
  },
});
export default ConfirmationScreen;
