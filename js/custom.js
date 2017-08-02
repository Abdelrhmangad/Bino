/*global $ */

$(function () {
    'use strict';
    $('.info-list li').click(function () {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info-content div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });
});
$('.nav .nav-menu .mobile-menu li').click(function () {
    'use strict';
    $('.nav .nav-menu .classic-menu li').slideToggle(1000);
});
