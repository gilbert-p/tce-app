//make sure to initialize firebase instance when document is loaded
document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();

  console.log(app);

  // displayContactPosts();
});

const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      document.write(`Welcome ${user.displayName}`);
      console.log(user);
    })
    .catch(console.log);
};

const contactSubmit = () => {
  let name = $("#inputName").val();
  let email = $("#inputEmail").val();
  let message = $("#messageInput").val();

  let db = firebase.firestore();

  db.collection("contact-messages")
    .doc()
    .set({
      name: name,
      email: email,
      message: message
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });

  document.getElementById("contact-form").reset();
};

const applicationSubmit = () => {
  let firstName = $("#apply-firstName").val();
  let lastName = $("#apply-lastName").val();
  let email = $("#apply-email").val();

  let db = firebase.firestore();

  db.collection("applicants")
    .doc()
    .set({
      firstName: firstName,
      lastName: lastName,
      email: email
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });

  document.getElementById("apply-submit").reset();
};

function uploadFile(files) {
  const storageRef = firebase.storage().ref();
  const resumeRef = storageRef.child("resume.doc");

  const file = files.item(0);

  const task = resumeRef.put(file);

  task.then(snapshot => {
    console.log(snapshot);
    console.log(snapshot.downloadURL);
  });
}

const displayContactPosts = () => {
  const db = firebase.firestore();

  const contactPosts = db.collection("contact-messages").doc("test-contact");

  contactPosts.get().then(doc => {
    const data = doc.data();
    document.write(data.name + `<br>`);
    document.write(data.email + `<br>`);
    document.write(data.message + `<br>`);
  });
};
