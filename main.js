// owl-carousal
$('.site-main .about-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    nav: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        544: {
            items: 2
        }
    }



});

function greetings() {
    var userName = window.prompt("Hello, welcome to the webpage. May i know your name?");
    var str = "Nice to meet you " + userName + " Welcome to my website,I hope you like what you see! ";

    alert(str);
};

// sticky navigation menu

let nav_offset_top = $('.header_area').height() + 50;

function navbarFixed() {
    if ($('.header_area').length) {
        $(window).scroll(function() {
            let scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $('.header_area .main-menu').addClass('navbar_fixed');
            } else {
                $('.header_area .main-menu').removeClass('navbar_fixed');
            }
        })
    }
}
navbarFixed();

$('.move-up span').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 1000);
})

AOS.init();