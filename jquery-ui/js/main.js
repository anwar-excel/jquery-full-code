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
$("document").ready(function(){
    $("#tool").tooltip({
        track:true,
        // show:{effect:"pulsate",duration:2000,delay:50},
        // show:{effect:"blind",duration:2000,delay:50},
        // show:{effect:"slideIn",duration:2000,delay:50},
        show:{effect:"slideOut",duration:2000,delay:50},
        hide:{effect:"explode",duration:2000}
    });
})

$("document").ready(function(){
    $("#div1").accordion({
        collapsible: true,
        icons:{header:"ui-icon-caret-1-s",activeHeader:"ui-icon-caret-1-n"},
        animate:1000,
        event:"mouseover"
    });
})