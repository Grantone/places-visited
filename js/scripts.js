//Business logic

function PlacesVisited(location,landmark,year,notes) {
  this.location=location;
  this.landmark=landmark;
  this.year = year;
  this.notes=notes;

}


//user interface

$(document).ready(function() {
    $("form#places-visited").submit(function(event) {
      event.preventDefault();

      var inputtedFirstLocation = $("input#firstLocation").val();
      var inputtedLandMark = $("input#landmark").val();
      var inputtedYear = $("input#timeOfYear").val();
      var inputtedNotes= $("input#destinationNotes").val();

    

    });
  });
