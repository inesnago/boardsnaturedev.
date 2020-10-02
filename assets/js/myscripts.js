$(document).ready(function(){
    $("#show-ul").mouseenter(function(){
        $(".sub-nav-ul").show("slow");
    });

    $("#show-ul").mouseleave(function(){
        $(".sub-nav-ul").hide("slow");
    });

    $('a').mouseenter(function(){
        $(this).addClass("shade-dark");
    });

    $('a').mouseleave(function(){
        $(this).removeClass("shade-dark");
    });

    $("#dark").click(function(){
        $("body").addClass("body-dark");
        $("a").addClass("a-dark");
    })

    $("#light").click(function(){
        $("body").removeClass("body-dark");
        $("a").removeClass("a-dark");
    })


})

function changeTheme(){
    var bodyColor = document.getElementsByTagName("body");
    var heroImg = document.getElementById("main-img")

    bodyColor.background == "#rgb(33,33,33)"

    if (bodyColor = true){
        
    }
}