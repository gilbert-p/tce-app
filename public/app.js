//make sure to initialize firebase instance when document is loaded
document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();

  //load applicant information from server
  // retrieveApplicants();
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
  window.location = "./index.html";
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
};

const noResumeApply = () => {
  let firstName = $("#apply-firstName").val();
  let lastName = $("#apply-lastName").val();
  let email = $("#apply-email").val();
  let phoneNumber = removeNonNumericCharacters($("#phone-number").val());
  let resumeFile = document.getElementById("resume-file").files[0];

  let db = firebase.firestore();

  db.collection("applicants")
    .doc(email)
    .set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber
    })
    .then(function() {
      console.log("IWHBYD");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });

  if (resumeFile) {
    const storageRef = firebase.storage().ref();
    const resumeRef = storageRef.child(`resume:${email}`);

    const file = resumeFile;

    const task = resumeRef.put(file);

    task.then(snapshot => {
      console.log(snapshot);
      console.log(snapshot.downloadURL);
      $("#apply-success-modal").modal("show");

      //Reset form fields after submission
      document.getElementById("apply-submit").reset();
    });
  } else {
    $("#apply-success-modal").modal("show");

    //Reset form fields after submission
    document.getElementById("apply-submit").reset();
  }
};

//Obtain the information of table row that is clicked on
$("#applicants-table")
  .find("tr")
  .click(function() {
    let table = document.getElementById("applicants-table");

    //increment over table header
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

const retrieveApplicants = () => {
  var db = firebase.firestore();

  let table = document.getElementById("applicants-table");

  let table_row_length = document.getElementById("applicants-table").rows
    .length;

  db.collection("applicants")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // addListItem(doc.data().title, doc.data().description);
        // console.log(
        //   `${doc.data().firstName} ${doc.data().email} ${doc.data().lastName}`
        // );

        let applicant_row = table.insertRow(table_row_length);

        let name_cell = applicant_row.insertCell(0);
        let email_cell = applicant_row.insertCell(1);
        let position_cell = applicant_row.insertCell(2);
        let date_applied_cell = applicant_row.insertCell(3);
        let status_cell = applicant_row.insertCell(4);

        name_cell.innerHTML = `
        ${doc.data().firstName} ${doc.data().lastName}`;

        email_cell.innerHTML = doc.data().email;
        position_cell.innerHTML = "Delivery Driver";
        date_applied_cell.innerHTML = "1/01/2020";
        status_cell.innerHTML = "Complete";
      });
    });
};

const removeNonNumericCharacters = string => {
  return string.replace(/\D/g, "");
};
