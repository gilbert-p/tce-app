//make sure to initialize firebase instance when document is loaded
document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();

  console.log(app);
});

const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      console.log(user);

      window.location = "./applications-dashboard.html";
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

  let resumeFile = document.getElementById("resume-file").files[0];

  let db = firebase.firestore();

  db.collection("applicants")
    .doc(email)
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

  //uploading file that was saved to global variable

  const storageRef = firebase.storage().ref();
  const resumeRef = storageRef.child(`resume-${email}`);

  const file = resumeFile;

  const task = resumeRef.put(file);

  task.then(snapshot => {
    console.log(snapshot);
    console.log(snapshot.downloadURL);
    $("#apply-success-modal").modal("show");
    document.getElementById("apply-submit").reset();
  });

  // this.currentFile = null;

  //Reset form fields after submission
};
