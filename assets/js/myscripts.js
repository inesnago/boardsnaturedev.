$(document).ready(function(){


    $("a").mouseenter(function(){
        $(this).addClass("shade-dark");
    });

    $('a').mouseleave(function(){
        $(this).removeClass("shade-dark");
    });

    $(".logo-title").click(function(){
        $(this).next(".small-card").fadeToggle("fast");
    }); 
    
    $(".menu-modal").click(function(){
        $(this).fadeOut("slow");
            $(".main.nav").fadeOut("fast");
    })

    $(".toggle-icon").click(function(){
        $(".menu-modal").fadeToggle("fast");
    })

    $("#show-ul").click(function(){
        $(".sub-nav-ul").show("fast");
    });

   

})


