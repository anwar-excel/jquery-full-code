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
// $("document").ready(function(){
//     $("#img1").hover(function(){
//         $("#img1").slideUp(2000).css('opacity','1').slideDown(2000).fadeOut(2000).fadeIn(2000).fadeOut(4000).fadeIn(3000);
//     })
// });

$("document").ready(function(){
    /*$(".div1").click(function(){
        var x = $(".p1").html();
        $("#span1").text(x)
    }) 

    $(".div1").click(function(){
        alert($("h1").text());
    }) 

    $("#btn1").click(function(){
        alert($(".p1").attr("id","p2id"));
    })
    $(".p1").click(function(){
        alert($(".p1").attrt("id"));
    }) 

    $("#btn1").click(function(){
      $(".div1").css("background-color","green")
    })
    $(".div1").click(function(){
        alert($(".div1").css("background-color"))
    })*/
    $("#btn1").click(function(){
        $(".div1").append('<img src="images/jquery.png" height="40px" width="100px" >');
    })


    $("#btn2").click(function(){
        $(".div1").prepend("<p>this is paragraph 2 using prepend</p>");
    })

    $("#btn3").click(function(){
        $(".div1").before("<p>this is paragraph 2 using before</p>");
    })


    $("#btn4").click(function(){
        $(".div1").after("<p>this is paragraph 2 using after</p>");
    })
    $("#btn5").click(function(){
        $(".div1").remove();
    })
    $("#btn6").click(function(){
        $(".div1").empty();
    })

    
});