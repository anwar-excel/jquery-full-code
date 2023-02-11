$(document).ready(function(){
    $('.text').click(function(){
        $('.one').hide(1000);
    });
});
$(document).ready(function(){
    $('h3').click(function(){
        $(this).hide(1000);
    });
});
$(document).ready(function(){
    $('button').click(function(){
        $('.third p.lorem1').hide(1000);
    });
});
$(document).ready(function(){
    $('button').click(function(){
        $('.child p:first').hide(1000);
    });
});
// ul first li delete
// $(document).ready(function(){
//     $('.delete').click(function(){
//         $('ul li:first').hide(1000);
//     });
// });

$(document).ready(function(){
    $('.delete').click(function(){
        $('ul li:first-child').hide(1000);
    });
});