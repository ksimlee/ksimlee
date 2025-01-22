var divHeight = ($('.index-menu-screen').height() / 100) * 70;

$('.zuerich img').width(divHeight);
$(window).resize(function() {
    var divResizeHeight = ($('.index-menu-screen').height() / 100) * 70;
    $('.zuerich img').width(divResizeHeight);
});

// Main Menu Toggle
$('.main-nav .level_2').hide(); //Hide children by default

$('.main-nav .level_1').children().click(function(){
    $('.main-nav .level_2').hide(); //Hide children by default
    $(this).children('.level_2').toggle();
}).children('.level_2').click(function (event) {
    event.stopPropagation();
});

if ($(".main-nav .level_1 li").is(".trail")) {
    $(".main-nav .level_1 li.trail ul").css("display", "block");
  }

// Top right Navigation Toggle
$(".burger-icon").click(function() {
    $(".index-menu-screen").toggleClass("menu-open");
    $(".setDisplayNone").toggleClass("closed");
    $(".index-menu-screen").toggleClass("closed");
});

// Slideshow Welcome Screen
$(".background-welcome-screen-wrapper > .background-welcome-screen:gt(0)").hide();

setInterval(function() { 
  $('.background-welcome-screen-wrapper > .background-welcome-screen:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.background-welcome-screen-wrapper');
},  3000);

// Randomly Fade in the Top origamis
//(function randomFadeTop() {
//    var fadeDivsTop = $('.origamis-top:not(.already-used)'),
//        el = fadeDivsTop.removeClass('.already-used');
//        el = fadeDivsTop.eq(Math.floor(Math.random() * fadeDivsTop.length));
//        el.show().addClass('.already-used').delay(5500).hide(0, randomFadeTop); 
//})();

// Randomly Fade in the Left origamis
//(function randomFadeLeft() {
//    var fadeDivsLeft = $('.origamis-left:not(.already-used)'),
//        el = fadeDivsLeft.removeClass('.already-used');
//        el = fadeDivsLeft.eq(Math.floor(Math.random() * fadeDivsLeft.length));
//        el.show().addClass('.already-used').delay(6500).hide(0, randomFadeLeft);  
//})();

// Randomly Fade in the Right origamis
//(function randomFadeRight() {
//    var fadeDivsRight = $('.origamis-right:not(.already-used)'),
//        el = fadeDivsRight.removeClass('.already-used');
//        el = fadeDivsRight.eq(Math.floor(Math.random() * fadeDivsRight.length));
//        el.show().addClass('.already-used').delay(7500).hide(0, randomFadeRight); 
//})();


var height = $('.lehrpersonen-navigation li a').width();
 $('.lehrpersonen-navigation li a').css({ 'height': height + 'px' });



