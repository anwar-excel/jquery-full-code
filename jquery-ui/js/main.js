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

$("document").ready(function(){
    $("#btn1").click(function(){
        $("#dialog").dialog("open")
    })
   $("#dialog").dialog({
    title:"title using property",
    draggable:false,
    resizable:false,
    closeOnEscape:false,
    model:true,
    autoOpen:false,
   })
})
// for autocomplete
// var language = 
$("document").ready(function(){
    $("#input").autocomplete({
        source:["HTML","CSS","JAVASCRIPT","PHP","C","C++",
        "C#"]
    },{
        delay:500,
        minLength:2,
        autoFocus:true
    })
});

// for widget modification
// var language = 
$("document").ready(function(){
    $("#dialog").dialog({
        draggable:true,
        resizable:true,
        closeOnEscape:true,
        model:false,
        autoOpen:true
    })
});
// for draggable
//
$("document").ready(function(){
    $(".box").draggable({
        // axis: "x",
        cursur:"grabbing",
        opacity:"0.5",
        // containment:"parent",
        snap:true,
        snapTolerance: 100,

    })
});

// for sortable
//
$("document").ready(function(){
    $(".sort").sortable({
       opacity:0.5,
       cursur:"grabbing",
       containment:"parent",
       delay:300,
       distance:50

    })
});

// for resizable
//
$("document").ready(function(){
    $("#img1").resizable({
        // animate: true,
        containment: "parent",
        maxHeight:400,
        minHeight:150,
        maxWidth:400,
        minWidth:150,
        // ghost:true,
        // aspectRatio:true,
        aspectRatio:16/9,

    })
});

// for theme
//
$("document").ready(function(){
    $("#dialog").dialog({
        draggable:true,
        resizable:true,
        closeOnEscape:true,
        model:false,
        autoOpen:true

    })
    $("#date").datepicker({
        showOtherMonths: true,
        // selectOtherMonths:true,
        // showButtonPannel:true,
        changeMonth:true,
        changeYear:true,
        // minDate:new Date(2019,4,5),
        // maxDate:new Date(2023,10,30),
        // numberOfMonths:2
    });

});