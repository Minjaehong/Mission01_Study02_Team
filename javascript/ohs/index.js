
$(document).ready(function(){
    $('.navi>li').mouseover(function(){
        
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    // $('.navi>a').mouseover(function(){
    //     $(this).find('.submenu').stop().slideDown(500);
    // }).mouseout(function(){
    //     $(this).find('.submenu').stop().slideUp(500);
    // });

    

    

    
});

