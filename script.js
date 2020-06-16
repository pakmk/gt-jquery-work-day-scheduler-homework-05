$(document).ready(function () {
    $("#currentDay").text(moment().format(`MMMM Do YYYY`));
    //   console.log(currentDay);
  
    var hoursArray = [
      "9am",
      "10am",
      "11am",
      "12am",
      "1pm",
      "2pm",
      "3pm",
      "4pm",
      "5pm",
      "6pm",
      "7pm",
      "8pm",
      "9pm",
      "10pm",
      "11pm",
      "12pm",
    ];
  
    for (var i = 0; i < hoursArray.length; i++) {
      var hours = hoursArray[i];
      // time-block variable
      var timeBlock = $("<div>").addClass("time-block row");
      // hours, task and save button column variables
      var hoursColumn = $("<div>").addClass("hour col-1");
      var taskColumn = $("<textarea>").addClass("description col-10");
      var saveButtonColumn = $("<button>").addClass("saveBtn col-1");
      // font awesome text icons found on w3schools.
      var saveIcon = $("<i>").addClass("fa fa-save");
      // append the time-block to the container on the html page
      $(".container").append(timeBlock);
      // append the hours, task and save button to the time-block
      timeBlock.append(hoursColumn).append(taskColumn).append(saveButtonColumn);
      // append the hours and save icon to the appropriate columns
      hoursColumn.append(hours);
      saveButtonColumn.append(saveIcon);
    }
  });
  