$(document).ready(function(){
    $("#show-ul").mouseenter(function(){
        $(".sub-nav-ul").show("slow");
    });

    $("#show-ul").mouseleave(function(){
        $(".sub-nav-ul").hide("slow");
    });

    $("a").mouseenter(function(){
        $(this).addClass("shade-dark");
    });

    $('a').mouseleave(function(){
        $(this).removeClass("shade-dark");
    });

    $(".logo-title").click(function(){
        $(this).next(".small-card").fadeToggle("slow");
    });

})

