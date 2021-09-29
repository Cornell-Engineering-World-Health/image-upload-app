import { firebase, db } from "./firebase";

export const getUserCurrentTask = (email) => {
  return db.collection("users").doc(email).get();
};

export const changeTask = (email, task) => {
  return db.collection("users").doc(email).update({
    currentTask: task,
  });
};

export const addImageToTask = (task, imagePath, email) => {
  var ref = db.collection("tasks").doc(task);
  ref.update({
    [email]: firebase.firestore.FieldValue.arrayUnion(imagePath),
  });
};

export const addImageToUser = (task, imagePath, email) => {
  var ref = db.collection("users").doc(email);
  ref.update({
    images: firebase.firestore.FieldValue.arrayUnion(imagePath),
  });
};
