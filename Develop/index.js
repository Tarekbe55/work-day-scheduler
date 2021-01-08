function getLocalStorage(key) {
  var value = localStorage.getItem(key);
  if (value) {
    $("#text${key}").text(value);
  }
}

// JavaScript function that wraps everything
$(document).ready(function () {


  //function to adjust time (am/pm)
  function formatAMPM(hours) {
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours + ampm;
  }
  formatAMPM();

  // using moment.js to input the date for #currentday
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  // for loop to to go through the 8 hours and append the fields (cols) to the row
  for (var i = 9; i < 18; i++) {
    //row used to create the 8 slots
    var row = $(`<div data-time=${i} id='${i}' class="row">`);

    // column that will hold the time 9-5
    var time = $('<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');

    // column 2 that will hold the text area 
    var txtArea = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`);

    // column 3 that will hold the save button
    var saveBtn = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)


    // adding the columns under each row
    row.append(time);
    row.append(txtArea);
    row.append(saveBtn);

    //adding rows created to container

    $(".container").append(row);

    getLocalStorage(i);
  }
  //function to color rows for present and future
  function colorChange() {
    var currentTime = new Date().getHours();
    for (var i = 9; i < 18; i++) {
      console.log(currentTime)
      if ($(`#${i}`).data("time") == currentTime) {
        $(`text${i}`).addClass("present");
      } else if (currentTime < $(`#${i}`).data("time")) {
        $(`text${i}`).addClass("future");

      }
    }
  }
  setInterval(function () {
    colorChange();
  }, 1000);



})