var parent, ink, d, x, y;
$(function () {
    $(".animation").click(function (e) {
        parent = $(this);

        ink = $(".ink");
        ink1 = $(".ink1");
        ink2 = $(".ink2");

        ink.removeClass("animate");
        ink1.removeClass("animate");
        ink2.removeClass("animate");

        //set size of .ink
        if (!ink.height() && !ink.width())
        {
            //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
            d = parent.outerWidth();
            ink.css({height: d, width: d});
            ink1.css({height: d, width: d});
            ink2.css({height: d, width: d});
        }

        //get click coordinates
        x = 0;
        y = -ink.height() / 2 + 100;
        //set the position and add class .animate
        ink.css({top: y + 'px', left: x}).addClass("animate");
        ink1.css({top: y + 'px', left: x}).addClass("animate");
        ink2.css({top: y + 'px', left: x}).addClass("animate");
    });
    var triggered_times = 0;
    $(document).on('scroll', function () {
        if (($(document).scrollTop() >= $(".header")[0].scrollHeight - 200) && triggered_times == 0) {
            aminate();
            triggered_times = 1;
        }
        if ($(document).scrollTop() == 0) {
            triggered_times = 0;
        }
    });
});

var aminate = function () {
    var counter = 1;
    (function repeat() {
        $("*").click();
        $(".anima").addClass("heart-anim");
        if (counter < 3) {
            counter++;
            setTimeout(repeat, 2000);
        }
    })();
};