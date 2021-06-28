import * as React from "react";
import { View, Text } from "react-native";
import Header from "../components/header";
import ReportButton from "../components/reportButton";
import GridImageView from "react-native-grid-image-viewer";
import db from "../util/db";

/** Gallery Screen
 *  Design:
 * - image gallery of uploaded photos thumbnails sorted by date
 * Requires: on button completion, navigate to upload screen
 */
function GalleryScreen({ navigation }) {
  const [items, setItems] = React.useState(null);

  React.useEffect(() => {
    const loadGallery = navigation.addListener("focus", () => {
      db.transaction((tx) => {
        tx.executeSql(
          "select uri from gallery",
          [],
          (_, { rows: { _array } }) => {
            setItems(
              _array.map((elt) => {
                return { image: elt.uri };
              })
            );
          },
          (_, error) => console.log(error)
        );
      });
    });
    return loadGallery;
  }, [navigation]);

  // React.useEffect(() => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "select uri from gallery",
  //       [],
  //       (_, { rows: { _array } }) => {
  //         setItems(
  //           _array.map((elt) => {
  //             return { image: elt.uri };
  //           })
  //         );
  //         console.log(items);
  //       },
  //       (_, error) => console.log(error)
  //     );
  //   });
  // });

  return (
    <View style={{ flex: 1, marginHorizontal: 20 }}>
      <Header navigation={navigation} screenName={"Images"} />
      <GridImageView data={items} />
      <ReportButton navigation={navigation} />
    </View>
  );
}
export default GalleryScreen;
