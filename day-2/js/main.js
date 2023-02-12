// $(document).ready(function(){
//     $('button').click(function(){
//     $('[href]').remove();
//     });
// });
// $(document).ready(function(){
//     $('button').click(function(){
//     $('p[class!="text"]').remove();
//     });
// });
// $(document).ready(function(){
//     $('button').click(function(){
//     $('[class="text"]').remove();
//     });
// });
// $(document).ready(function(){
//     $('button').dblclick(function(){
//    alert("double click");
//     });
// });
// $(document).ready(function(){
//     $('.one').mouseenter(function(){
//    alert("double click");
//     });
// });
// $(document).ready(function(){
//     $('.one').mouseleave(function(){
//    alert("double click");
//     });
// });
// $(document).ready(function(){
//     $('.one').mouseenter(function(){
//    alert("double click");
//     });
// });
// $(document).ready(function(){
//    $('.one').hover(function(){
//     alert('enter');
//    },function(){
//     alert('leave');
//    });
// });
// $(document).ready(function(){
//     $('button').on('click',function(){
// alert("Clicked");
//     });
//  });
$(document).ready(function(){
    $('button').on({
        click:function() {
            console.log("click")
        },
        mouseenter:function() {
            console.log("mouseenter")
        },
        mouseleave:function() {
            console.log("mouseleave")
        },
        mousedown:function() {
            console.log("mousedown")
        },
        mouseup:function() {
            console.log("mouseup")
        },
    });
 });