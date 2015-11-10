var didScroll;
var lastScrollTop = 0;
var delta = 1;
var navbarHeight = $('.jumbotron').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.jumbotron').removeClass('jumbo-down').addClass('jumbo-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.jumbotron').removeClass('jumbo-up').addClass('jumbo-down');
        }
    }

    lastScrollTop = st;
}

/*
$(function () {
    $('#lol').change(function () {
        // the value of the checkbox changed => refresh the page:
        window.location.reload();
    });
});
*/