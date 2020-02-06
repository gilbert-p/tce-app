//make sure to initialize firebase instance when document is loaded
document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();

  console.log(app);
});

//User login using Google Auth
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

  const storageRef = firebase.storage().ref();
  const resumeRef = storageRef.child(`resume-${email}`);

  const file = resumeFile;

  const task = resumeRef.put(file);

  task.then(snapshot => {
    console.log(snapshot);
    console.log(snapshot.downloadURL);
    $("#apply-success-modal").modal("show");

    //Reset form fields after submission
    document.getElementById("apply-submit").reset();
  });
};

//Obtain the information of table row that is clicked on
$("#applicants-table")
  .find("tr")
  .click(function() {
    let table = document.getElementById("applicants-table");

    //incrementing skips over the table header
    let row_clicked_index = $(this).index() + 1;

    //Assign the row values to the modal.
    for (
      let current_column = 0;
      current_column < table.rows[row_clicked_index].cells.length;
      current_column++
    ) {
      current_col_info =
        table.rows[row_clicked_index].cells[current_column].innerHTML;

      switch (current_column) {
        case 0:
          $("#applicant-name").text(current_col_info);
          break;
        case 1:
          $("#applicant-email").text(current_col_info);
          break;
        case 2:
          $("#applicant-position").text(current_col_info);
          break;
        case 3:
          $("#applicant-date-applied").text(current_col_info);
          break;
        case 4:
          $("#applicant-status").text(current_col_info);
          break;
      }
    }

    //Shows modal after setting user values

    $("#applicant-view-modal").modal("show");
  });
