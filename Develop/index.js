function getLocalStorage(key) {
  var value = localStorage.getitem(key);
  if (value) {
    $("#text${key}").text(value);
  }
}

// JavaScript function that wraps everything
$(document).ready(function ()) {

  // using moment.js to input the date for #currentday
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  // for loop to to go through the 8 hours and append the fields (cols) to the row
  for (var i = 9; i < 18; i++) {
    //row used to create the 8 slots
    var row = $(`<div data-time=${i} id='${i}' class="row">`);

    // column that will hold the time 9-5














  }










}