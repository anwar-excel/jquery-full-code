// function func1()
// {
//     document.getElementById("img1").style.width="500px";
// }

// $("button").click(func1);
// function func1(){
//     $("#img1").css('width','500px');
// }

// $("button").click(function (){
//     $("#img1").css('width','500px');
// });

// $("document").ready(function(){

//     $("button").click(function (){
//     $("#img1").css('width','500px');

//     });
// });

// $("document").ready(function(){

//     $("#img1").mouseenter(function (){
//     $("#img1").css('width','500px');

//     });
//     $("#img1").mouseleave(function (){
//         $("#img1").css('width','200px');
    
//         });
// });

$("document").ready(function(){

    // $("#btn1").click(function (){
    // $("#img1").hide(2000);

    // });
    // $("#btn2").click(function (){
    // $("#img1").show(2000);
    
    // });
    // $("#btn3").click(function (){
    // $("#img1").toggle(2000);
        
    // });

    // $("#btn4").click(function (){
    //     $("#img1").fadeIn(2000);
        
    //     });
    // $("#btn5").click(function (){
    // $("#img1").fadeOut(2000);
    
    // });
    // $("#btn6").click(function (){
    // $("#img1").fadeToggle(2000);
        
    // });

    // $("#btn7").click(function (){
    //     $("#img1").slideUp(2000);
    //   });

    // $("#btn8").click(function (){
    //  $("#img1").slideDown(2000);
    // });
    // $("#btn9").click(function (){
    //  $("#img1").slideToggle(2000);
    //  });
    //  $("#btn10").click(function (){
    //     $("#img1").stop(2000);
    // });
});
$("document").ready(function(){
    $("#btn").click(function(){
        $("#img1").slideUp(2000,function(){
            $("#img1").slideDown(2000);
        })
      })
});