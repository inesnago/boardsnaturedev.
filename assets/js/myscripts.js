$(document).ready(function(){
    $("#show-ul").mouseenter(function(){
        $(".sub-nav-ul").show("slow");
    });

    $('a').mouseenter(function(){
        $(this).addClass("shade-dark");
    });

    $('a').mouseleave(function(){
        $(this).removeClass("shade-dark");
    });

})