$(document).ready(function() {
    
    $('.navbutton a').hover(
        
        function() {
            $(this).stop().animate({
                opacity: 0.7,
            }, 300); 
        },
        
        function() {
            $(this).stop().animate({
                opacity: 1, 
            }, 300);
        }
    );
});