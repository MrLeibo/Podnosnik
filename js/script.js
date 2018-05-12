$(document).ready(function(){
 addScroled();    
}); 

$(window).scroll(function() {
 addScroled();    
});

function addScroled () {
    var navHeight = $('#main-nav').outerHeight();
    var actualPos = $(window).scrollTop();
    if(actualPos > navHeight) {
        $('#main-nav').addClass('scrolled');
    } else 
        $('#main-nav').removeClass('scrolled');

}