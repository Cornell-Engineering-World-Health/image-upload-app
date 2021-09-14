import { db } from "./firebase";

export const getUserCurrentTask = (email) => {
  return db.collection("users").doc(email).get();
};

export const changeTask = (email, task) => {
  return db.collection("users").doc(email).update({
    currentTask: task,
  });
};
