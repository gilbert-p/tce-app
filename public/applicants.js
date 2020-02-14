let applicants = [];

applicants["john@smith.com"] = {
  completeTasks: true,
  associateTasks: false,
  amazonTasks: false
};

applicants["moskates@example.com"] = {
  completeTasks: false,
  associateTasks: true,
  amazonTasks: false
};

document.addEventListener("DOMContentLoaded", event => {
  //   const app = firebase.app();
  //   //load applicant information from server
  //   retrieveApplicants();
});

const removeNonNumericCharacters = string => {
  return string.replace(/\D/g, "");
};

const formatPhoneNumber = string => {
  let phone_string = "";

  phone_string += `(${string.slice(0, 3)})`;
  phone_string += ` ${string.slice(3, 6)}-`;
  phone_string += `${string.slice(6, 10)}`;

  return phone_string;
};

const retrieveApplicants = () => {
  var db = firebase.firestore();

  let table = document.getElementById("applicants-table");

  let table_row_length = document.getElementById("applicants-table").rows
    .length;

  db.collection("applicants")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        //Set boolean checked values

        let applicant_row = table.insertRow(table_row_length);

        let name_cell = applicant_row.insertCell(0);
        let email_cell = applicant_row.insertCell(1);
        let phone_number_cell = applicant_row.insertCell(2);
        let position_cell = applicant_row.insertCell(3);
        let date_applied_cell = applicant_row.insertCell(4);
        let status_cell = applicant_row.insertCell(5);

        name_cell.innerHTML = `
          ${doc.data().firstName} ${doc.data().lastName}`;

        email_cell.innerHTML = doc.data().email;
        phone_number_cell.innerHTML = formatPhoneNumber(
          String(doc.data().phoneNumber)
        );
        position_cell.innerHTML = "Delivery Driver";
        date_applied_cell.innerHTML = "1/01/2020";
        status_cell.innerHTML = "Complete";

        status_cell.className = "status-complete";
        ////////////////////////////////////////////////////////////////////////////////
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
      });
    });
};

///TEST

//Obtain the information of table row that is clicked on
$("#applicants-table")
  .find("tr")
  .click(function() {
    let table = document.getElementById("applicants-table");

    //increment over table header
    let row_clicked_index = $(this).index() + 1;

    let curr_email =
      table.rows[row_clicked_index].cells[current_column].innerHTML;

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

//handling checkbox inputs
//check for complete status

//need to put a handle on a specific row checkbox
$("input[type='checkbox']").click(function() {
  //'this' refers to the object of checkbox that was selected

  this.value = !this.value;

  checkStatus();
});

//going to need to need to keep track of with row object we are referring too

const checkStatus = () => {
  let check_boxes = $("input[type='checkbox']");
  let count_checks = 0;

  console.log(check_boxes);

  for (let checks = 0; checks < check_boxes.length; checks++) {
    if (check_boxes[checks]["checked"]) {
      count_checks++;
    }
  }

  if (count_checks >= 3) {
    // alert("Onboarding status complete!");
    $("#onboarding-status")
      .removeClass("status-incomplete")
      .addClass("status-complete");
  } else {
    $("#onboarding-status")
      .removeClass("status-complete")
      .addClass("status-incomplete");
  }
};
