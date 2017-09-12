$(window).scroll(function() {
    $(".hide").each( function() {
        if( $(window).scrollTop() > $(this).offset().top - 100 ) {
            $(this).css('opacity',1);
        } else {
            $(this).css('opacity',0);
        }
    });
});
