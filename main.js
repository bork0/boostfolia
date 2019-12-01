const player = new Plyr('#player');

function burgerMenu(x) {
  x.classList.toggle("change");
}

document.getElementById("toggle").addEventListener("click", showHide);
function showHide() {
    var x = document.getElementById("map");
    if (x.style.display !== "none") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";

    }
}

function showHide() {
    $('#map').fadeToggle(500);
}

$(document).ready(function() {
   var one = $("#owl-one");
   var two = $("#owl-two");

two.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});

one.owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});

});

$(function() {
    var three = $("#owl-three"),
        owlOptions = {
            loop: true,
            nav:false,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                }
            }
        };

    if ( $(window).width() < 450 ) {
        var owlActive = three.owlCarousel(owlOptions);
    } else {
        three.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 450 ) {
            if ( $('#owl-three').hasClass('off') ) {
                var owlActive = three.owlCarousel(owlOptions);
                three.removeClass('off');
            }
        } else {
            if ( !$('#owl-three').hasClass('off') ) {
                three.addClass('off').trigger('destroy.owl.carousel');
                three.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});

document.getElementById("play_triangle").addEventListener("click", videoShow);
function videoShow() {
    var x = document.getElementById("video_modal");
    if (x.style.display !== "none") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}