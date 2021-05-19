import * as SQLite from "expo-sqlite";

/** Local SQLite db for local gallery. */
function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db1.db");
  return db;
}

const db = openDatabase();

export default db;
