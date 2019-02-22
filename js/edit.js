$(window).on('load', function () {
    $('.loader').fadeOut(500, function () {
        $(this).remove();
    });      
});

/*global $ */
$(document).ready(function ($) {
    'use strict';
 
    // WOW 
    new WOW().init();

    // NICE SCROLL
    $("body").niceScroll({
        cursorcolor: "rgb(54, 164, 193)",
        cursorwidth: "5",
        cursorminheight: 40,
        background: "transparent",
        cursorborder: "1px solid rgb(54, 164, 193)",
        cursorborderradius: 5
    });

    // Open navbarSide when button is clicked
    $('.header-nav .btn').on('click', function () {
        $('.header-nav ul').addClass('show-sidenav');
        $('.header-nav  .over-lay').show();
    });

    // Close navbarSide when the outside of menu is clicked
    $('.header-nav  .over-lay').on('click', function () {
        $('.header-nav ul').removeClass('show-sidenav');
        $('.header-nav  .over-lay').hide();
    });



    // STICKY NAV  FIXED
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.header-nav').addClass("navbar-fixed-top");
            $('.header-nav').slideDown(5000);
        }
        else {
            $('.header-nav').removeClass("navbar-fixed-top");
            $('.navbar-fixed-top').slideUp();
        }
    });


    // HASH TAG SCROLL 
    $(".nav-link").on("click", function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 2000);
    });

    // SCROLL TO DOWN  
    $(".scroll-todown").on("click", function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 2000);
    });


    // INITIATE HOVER 3D 
    $(".service-box").hover3d({
        selector: ".service-card"
    });



    // MOVING IMAGES IN ABOUT SECTION 
    $(document).on('scroll', function() {
        if( $(this).scrollTop() >= $('.about').position().top ){
            $('.about').addClass('moving'); 
        } else{
            $('.about').removeClass('moving'); 
        }
    });


    // HOVER BLOG BOX 
    $(function() {
        $('.blog-box').hover(function() {
            $('.blog-box').css('transform', 'scale(0.9)');
            $(this).css('transform', 'scale(1.005)');
        }, function() {
            $('.blog > div').css('transform', 'scale(1)');
            $(this).css('transform', 'scale(1)');
        });
    });

});




// MAP 
var beaches = [
    ['Matrouh', 31.356888, 27.267245, 1]
];

function initMap() {
    var myLatLng = { lat: 31.3568883, lng: 27.2672453 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: myLatLng
    });
    setMarkers(map);
}

function setMarkers(map) {
    var image = {
        url: 'images/marker.png',
        size: new google.maps.Size(50, 82),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32)
    };
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < beaches.length; i++) {
        var beach = beaches[i];
        var marker = new google.maps.Marker({
            position: { lat: beach[1], lng: beach[2] },
            map: map,
            icon: image,
            shape: shape,
            title: beach[0],
            zIndex: beach[3]
        });
    }
}

