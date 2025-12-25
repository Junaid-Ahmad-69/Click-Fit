(function($) {
    'use strict';

    // Mean Menu
    $('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Header Sticky
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){
            $('.navbar-area').addClass("is-sticky");
        }
        else{
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // Hero Slider
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        autoHeight: true,
        nav: false,
        dots: true,
        thumbs: true,
        thumbsPrerendered: true,
        autoplay: true,
        mouseDrag: true,
        autoplayHoverPause: true,
    })

    // Hero Slider
    $('.hero-slider-two').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        autoHeight: true,
        nav: false,
        dots: true,
        thumbs: true,
        thumbsPrerendered: true,
        autoplay: true,
        mouseDrag: true,
        autoplayHoverPause: true,
    })

    // Classes Slider
    $('.classes-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        center: true,
        autoHeight: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                center: false,
            },
            576:{
                items: 2,
                center: false,
            },
            1000:{
                items: 3
            },
        },
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ]
    })

    // Testimonials Slider
    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoHeight: true,
        center: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                center: false,
            },
            576:{
                items: 2,
                center: false,
            },
            1000:{
                items: 3
            },
        },
    })

    // Blog Slider
    $('.blog-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoHeight: true,
        center: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                center: false,
            },
            768:{
                items: 2,
                center: false,
            },
            1000:{
                items: 3
            },
        },
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ]
    })

    // Tabs Single Page
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    $('.tab ul.tabs li').on('click', function (g) {
        var tab = $(this).closest('.tab'),
            index = $(this).closest('li').index();
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
        g.preventDefault();
    });

    // FAQ Accordion JS
    $('.accordion').find('.accordion-title').on('click', function(){
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');
    });

    // Input Plus & Minus Number JS
    $('.input-counter').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.plus-btn'),
            btnDown = spinner.find('.minus-btn'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });



    // AOS JS
    AOS.init();
})($);