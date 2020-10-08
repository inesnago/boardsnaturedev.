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

    $(".dev-col").mouseenter(function(){
        $(this).addClass("max");
    })

    $(".dev-col").mouseleave(function(){
        $(this).removeClass("max");
    })

})

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

