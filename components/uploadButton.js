import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import db from "../util/db";

/** Upload button:
 * 1. upload image and metadata to database [TODO]
 * 2. store image locally in gallery
 */
function UploadButton({ navigation, image }) {
  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists gallery (id integer primary key not null, uri text not null);",
        [],
        () => {},
        (_, error) => console.log(error)
      );
    });
  }, []);

  return (
    <TouchableOpacity
      style={style.button}
      onPress={() => {
        // 1. upload image and metadata to database [TODO]
        // 2. store image locally in gallery
        db.transaction((tx) => {
          tx.executeSql(
            "insert into gallery (uri) values (?)",
            [image.image_uri],
            () => {},
            (_, error) => console.log(error)
          );
          console.log(image.image_uri);
        });
        navigation.navigate("Home");
      }}
    >
      <Text style={style.buttonText}>UPLOAD</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: "#C4C4C4",
    padding: 20,
    borderRadius: 5,
    alignSelf: "stretch",
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#000",
  },
});
export default UploadButton;
