$("document").ready(function(){
    $("#date").datepicker({
        showOtherMonths: true,
        selectOtherMonths:true,
        showButtonPannel:true,
        changeMonth:true,
        changeYear:true,
        minDate:new Date(2019,4,5),
        maxDate:new Date(2023,10,30),
        numberOfMonths:2
    });
})