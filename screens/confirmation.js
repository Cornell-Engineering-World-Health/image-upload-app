import * as React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import UploadButton from '../components/uploadButton';
import NextButton from '../components/nextButton';
import CancelButton from '../components/cancelButton';
import ReportButton from '../components/reportButton';

import Title from '../components/title';
import { SafeAreaView } from 'react-native-safe-area-context';

function ConfirmationScreen({ navigation, route }) {
  const { image } = route.params;
  const labels = image.labels;
  var count = 0;
  var labelsRows = [];
  var rowList = [];
  var rowLength = 0;
  labels.forEach((label) => {
    if (rowLength + label.length > 30) {
      labelsRows.push(rowList);
      rowLength = 0;
      rowList = [];
      rowLength = rowLength + label.length + 1;
      rowList.push(label);
    } else {
      rowLength = rowLength + label.length + 1;
      rowList.push(label);
    }
  });
  labelsRows.push(rowList);

  return (
    <SafeAreaView style={style.container}>
      <ReportButton navigation={navigation} />

      <Title>Review</Title>
      <Text style={style.confirmationText}>
        Confirm & upload the following image with the labels below:
      </Text>
      <View style={style.reviewView}>
        <Image style={style.pic} source={{ uri: image.image_uri }} />
        <View style={style.labelContainer}>
          <Text style={style.labelHeader}>Labels: </Text>
          <View style={style.labelView}>
            {labelsRows.map((row) => {
              return (
                <View key={row}>
                  {row.map((label) => {
                    return (
                      <Text key={label} style={{ fontSize: 16 }}>
                        {label}
                      </Text>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <UploadButton navigation={navigation} image={image} />
      <NextButton navigation={navigation} txt="EDIT" next={'Upload'} />
      <CancelButton navigation={navigation} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '5%',
  },
  confirmationText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333',
    marginBottom: '5%',
  },
  reviewView: {
    flexDirection: 'row',
    marginVertical: '5%',
    justifyContent: 'center',
  },
  pic: {
    width: Dimensions.get('window').width / 3,
    aspectRatio: 0.5,
    borderRadius: 5,
  },
  labelContainer: {
    marginLeft: '4%',
  },
  labelView: {
    flexDirection: 'column',
  },
  labelHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});
export default ConfirmationScreen;
