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

  var db = firebase.firestore();

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
