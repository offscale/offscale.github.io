window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

function scrollToId (id, topOffSet, speed, easing) {
    var width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    topOffSet = topOffSet && width < 767 ? topOffSet + 40 : topOffSet || 0;

    var scrollTop = document.documentElement.scrollTop ?
        document.documentElement.scrollTop : document.body.scrollTop;
    var elementTop = document.getElementById(id).getBoundingClientRect().top + scrollTop + topOffSet;
    return scrollToY(!id ? 0 : elementTop, speed, easing);
}

function scrollToY (scrollTargetY, speed, easing) {
    var scrollY = window.scrollY;
    var currentTime = 0;
    scrollTargetY = scrollTargetY || 0;
    speed = speed || 2000;
    easing = easing || 'easeOutSine';

    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    var PI_D2 = Math.PI / 2,
        easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

    function tick () {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimFrame(tick);
            window.scrollTo(scrollTargetY, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            window.scrollTo(scrollTargetY, scrollTargetY);
        }
    }

    tick();
}

