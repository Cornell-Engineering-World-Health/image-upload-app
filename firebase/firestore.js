import { firebase, db } from './firebase';

export const getLabelsFromTask = async (task) => {
  return db
    .collection('tasks')
    .where('task', '==', task)
    .get()
    .then((d) => {
      let doc = d.docs[0];
      return {
        id: doc.id,
        data: doc.data(),
      };
    });
};

export function uploadBugReport(report, email) {
  return db.collection('bugs').add({
    description: report,
    user: email,
    date: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

export function uploadImage(ref, task, userID, labels, email) {
  const docRef = db.collection('images').add({
    ref: ref,
    task: task,
    date: firebase.firestore.FieldValue.serverTimestamp(),
    labels: labels,
    user: db.doc('users/' + userID),
    email: email,
  });
}

export const getUserByEmail = async (email) => {
  return db
    .collection('users')
    .where('email', '==', email)
    .get()
    .then((d) => {
      let doc = d.docs[0];
      return {
        id: doc.id,
        data: doc.data(),
      };
    });
};
