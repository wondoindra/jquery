$(function () {
    console.log("ready!");

    // $("button").click(function () {
    //     $("p").hide();
    //     $("#body-text").hide();
    //     $(".body-span").hide();
    // })

    // $("p").click(function () {
    //     $(this).hide();
    // });
    // $("span").dblclick(function () {
    //     $(this).hide();
    // });
    // $("h1").mouseenter(function () {
    //     alert("This is h1 element");
    // });
    // $("h1").mouseleave(function () {
    //     alert("You are leaving h1 element");
    // });

    // $("h1").mousedown(function () {
    //     alert("mouse down over h1");
    // });
    // $("h1").mouseup(function () {
    //     alert("mouse up over h1");
    // });
    // $("p").hover(function () {
    //         alert("this is p element");
    //     },
    //     function () {
    //         alert("leaving p element");
    //     });

    // $("input").focus(function () {
    //     $(this).css("background-color", "#cccccc");
    // });
    // $("input").blur(function () {
    //     $(this).css("background-color", "#ffffff");
    // });

    // $("p").on({
    //     mouseenter: function () {
    //         $(this).css("background-color", "lightgray");
    //     },
    //     mouseleave: function () {
    //         $(this).css("background-color", "lightblue");
    //     },
    //     click: function () {
    //         $(this).css("background-color", "yellow");
    //     }
    // });

    // $("#hide").click(function () {
    //     $("h1,p").hide(300);
    // });
    // $("#show").click(function () {
    //     $("h1,p").show(300);
    // });

    // $("button").click(function () {
    //     $("h1,p").toggle(400);
    // });

    // $("#hide").click(function () {
    //     $("h1, p").fadeOut(1000);
    // });
    // $("#show").click(function () {
    //     $("h1, p").fadeIn(1000);
    // });

    // $("button").click(function () {
    //     $("h1, p").fadeTo("slow", 0);
    // });

    // $("#hide").click(function () {
    //     $("h1, p").slideDown();
    // });
    // $("#show").click(function () {
    //     $("h1, p").slideUp();
    // });

    // $("button").click(function () {
    //     $("h1, p").slideToggle();
    // });

    // $("button").click(function () {
    //     $(".div-h1").animate({
    //         left: '250px',
    //         opacity: '0.5',
    //     });
    // });

    // $("button").click(function () {
    //     $(".div-h1").animate({
    //         height: 'toggle'
    //     });
    // });

    // $("button").click(function () {
    //     var div = $(".div-h1");
    //     div.animate({
    //         left: '250px'
    //     });
    //     div.animate({
    //         fontSize: '3em'
    //     });
    // });

    $("button").click(function () {
        $("h1, p").hide("slow", function () {
            alert("The paragraph is now hidden");
        });
    });
});