  
$(document).ready(function() {
    $('#orb').click(function(){
        if ($('body').hasClass('black')) {
            $('body').removeClass('black').addClass('white');
        }
        else {
            $('body').removeClass('white').addClass('black');
        }    
            if ($(this).hasClass('sun')) {
                $(this).removeClass('sun').addClass('moon');
            }
            else {
                $(this).removeClass('moon').addClass('sun');
            }
        if ($('#sky').hasClass('day')) {
            $('#sky').removeClass('day').addClass('night');
        }
        else {
            $('#sky').removeClass('night').addClass('day');
        }
    });
});