
var currentHour = moment().toObject().hours

console.log(currentHour);

var descriptionEl = $(".description");
var saveButtonEl = $(".saveBtn");

var elements = $(".description").parentNo

$(document).ready(function() {

function getCalendar() {
    $("#9").text(localStorage.getItem("9"));
   $("#10").text(localStorage.getItem('10'));
   $("#11").text(localStorage.getItem("11"));
   $("#12").text(localStorage.getItem("12"));
   $("#13").text(localStorage.getItem("13"));
   $("#14").text(localStorage.getItem("14"));
   $("#15").text(localStorage.getItem("15"));
   $("#16").text(localStorage.getItem("16"));
   $("#17").text(localStorage.getItem("17"));
}

function checkCurrentTime() {

    descriptionEl.each( function(){
    if (parseInt($(this).attr("id")) > currentHour) {
    $(this).addClass("future");
   } else if (parseInt($(this).attr("id")) < currentHour) {
    $(this).addClass("past");
   } else {
    $(this).addClass("present");
   }
    })
}

saveButtonEl.on("click", function(event) {
    var parentId = $(this).parent().find(".description").attr('id');
    console.log(parentId);
    localStorage.setItem(parentId, $(this).parent().find(".description").text())
})

getCalendar();
checkCurrentTime();
    
});