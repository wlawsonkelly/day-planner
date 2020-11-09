
var currentHour = moment().toObject().hours

console.log(currentHour);

var descriptionEl = $(".description");

$(document).ready(function() {

function checkCurrentTime() {
    console.log($(".description"));
    console.log(parseInt($(".description").attr("id")));
   if (parseInt($(".description").attr("id")) > currentHour) {
    $(".description").addClass(".future");
   } else if (parseInt($(".description").attr("id")) < currentHour) {
    $(".description").addClass(".past");
   } else {
    $(".description").addClass(".present");
   }
}
checkCurrentTime();
    
});