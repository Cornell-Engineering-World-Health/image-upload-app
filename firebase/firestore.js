import { firebase, db, addDoc, collection } from "./firebase";

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
  ref.update(
    new firebase.firestore.FieldPath(email),
    firebase.firestore.FieldValue.arrayUnion(imagePath)
  );
};

export const addImageToUser = (task, imagePath, email) => {
  var ref = db.collection("users").doc(email);
  ref.update({
    images: firebase.firestore.FieldValue.arrayUnion(imagePath),
  });
};

export const addTnToUser = (task, imagePath, email) => {
  var ref = db.collection("users").doc(email);
  ref.update({
    thumbnails: firebase.firestore.FieldValue.arrayUnion(imagePath),
  });
};

export const getLabelsForTask = (task) => {
  return db.collection("tasks").doc(task).get();
}

export function uploadBugReport(report, email) {
  const docRef = db.collection("bugs").add({
    description: report,
    user: email
  });
  console.log(docRef.id)
}
