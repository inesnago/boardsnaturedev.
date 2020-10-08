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
    

    $(".toggle-icon").click(function(){
        $(".menu-modal").fadeIn("fast");
    })

    $(".menu-modal").click(function(){
        if($("body").width() < 575){
            $(".menu-modal").fadeOut("fast")
        }
    });

    $(window).resize(function(){
        if ($("body").width() > 576){
            $(".menu-modal").show();
        }
    });


    $("#show-ul").click(function(){
        $(".sub-nav-ul").show("fast");
    });

    $(".dev-col").mouseenter(function(){
        $(this).addClass("max");
    })

    $(".dev-col").mouseleave(function(){
        $(this).removeClass("max");
    })

});

var myGoUpButton = document.getElementById("go-up");

window.onscroll = scrollUp()

function scrollUp(){
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        myGoUpButton.style.visibility = "visible";
    } else{
        myGoUpButton.style.visibility = "hidden";
    }
}

function goUp(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

