
var presentDayEl = $("#currentDay");

date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
presentDayEl.text(date);

$(".time-div").each(function () {
    let timeDiv = $(this).attr("id").split("-");

    if (currentHour = timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("present");

    } else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");

    } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});
// app storage

$("#hour-9AM .time-block").val(localStorage.getItem("9AM"));
$("#hour-10AM .time-block").val(localStorage.getItem("10AM"));
$("#hour-11AM .time-block").val(localStorage.getItem("11AM"));
$("#hour-12PM .time-block").val(localStorage.getItem("12PM"));
$("#hour-1PM .time-block").val(localStorage.getItem("1PM"));
$("#hour-2PM .time-block").val(localStorage.getItem("2PM"));
$("#hour-3PM .time-block").val(localStorage.getItem("3PM"));
$("#hour-4PM .time-block").val(localStorage.getItem("4PM"));
$("#hour-5PM .time-block").val(localStorage.getItem("5PM"));

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var key = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(key,value);
});