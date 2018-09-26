$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 50) { 
            $('#goUp').fadeIn(); 
        } else { 
            $('#goUp').fadeOut(); 
        } 
});
 
    $('#goUp').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});