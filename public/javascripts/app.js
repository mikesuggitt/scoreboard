
$(document).ready(function() {
    var navHeight = 50;
    var navTogglePos = $('#services').offset().top;

    $('nav').affix({
        offset: {
            top: navTogglePos - navHeight - 20
        }
    })

    $('body').scrollspy({
        offset: navHeight + 1
    });


    $("a[href*=#]").click(function(e) {
        e.preventDefault();
        var link = "#" + this.href.split("#")[1];
        var position = $(link).offset().top-navHeight;
        position = (position < 0) ? 0 : position;
        $.scrollTo(position, 800);
    });
});


