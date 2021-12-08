import { firebase, db } from './firebase';
// import { collection, query, where } from "../firebase/firestore";

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
    })
    .catch((err) => {
      console.log('ERRORR', err);
    });
};

export function uploadBugReport(report, email) {
  const docRef = db.collection('bugs').add({
    description: report,
    user: email,
  });
  console.log('Upload bug report success');
}

export function uploadImage(ref, task, userID, labels) {
  const docRef = db.collection('images').add({
    ref: ref,
    task: task,
    date: firebase.firestore.FieldValue.serverTimestamp(),
    labels: labels,
    user: db.doc('users/' + userID),
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
    })
    .catch((err) => {
      console.log('ERRORR', err);
    });
};

// don't merge! still trying to get it to work :/
// export const q = query(collection(db, "images"), where('email', '==', user), where('task', '==', task)).count;

// export const getnumofImagesbyUserandTask = async (userID, task) => {
//   return db
//     .collection('images')
//     .where('user', '==', 'users/' + userID)
//     .where('task', '==', task)
//     .get()
//     .then((d) => {
//       let doc = d.docs[0];
//       return {
//         data: doc.count(),
//       };
//     })
//     .catch((err) => {
//       console.log('ERRORR', err);
//     });
// };
