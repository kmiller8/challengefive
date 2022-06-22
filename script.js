
//stores current date in variable
var date = moment().format('MMMM Do YYYY');

//displays date
$("#currentDay").text(date);

//stores the hours
var hours = moment().hours();

//saves text when clicking on save button
$(".saveBtn").on("click", function(){

    //stores which location the text is
    var time = $(this).siblings(".hours").text();

    //stores what the text is
    var descriptionText = $(this).siblings(".description").val();
    
    //puts it in local storage
    localStorage.setItem(time, descriptionText);
    
    });


function getPlans (){
$(".hours").each(function(){

    var plannedHour = $(this).text();
    var plans = localStorage.getItem(plannedHour);

    $(this).siblings(".description").val(plans);

})
};

//changes color of time blocks based on current hour
function hourColor () {

    $(".time-block").each(function () {
        

        var currentHour = parseInt($(this).attr("time"));
        console.log(currentHour);

        if (currentHour == hours) {
            $(this).addClass("present");


        } 
        else if (currentHour > hours) {
            $(this).addClass("future");
        
        } 
        
        else {
            $(this).addClass("past");
        
        }
    })
};

getPlans();
hourColor();
