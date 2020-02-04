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


const displayContactPosts = () => {


  const db = firebase.firestore();

  const contactPosts = db.collection("contact-messages").doc("test-contact");

  contactPosts.get().then(doc => {
    const data = doc.data();
    document.write(data.name + `<br>`);
    document.write(data.email + `<br>`);
    document.write(data.message + `<br>`);
  });
}

