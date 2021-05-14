$(document).ready(function(){
    setInterval(() => {
        $('#bigContent').css('height', window.innerHeight * 0.8);
        $('#bigContent').css('marginBottom', window.innerHeight * 0.05);
    }, 100);

    $(window).scroll(function(){
        $('.left').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow) {
                $(this).removeClass('animate__fadeInLeft');
                $(this).addClass('animate__fadeOutLeft');
            }else{
                $(this).addClass('animate__fadeInLeft');
                $(this).removeClass('animate__fadeOutLeft');
            }
        })
        $('.right').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            
            if (imagePos < topOfWindow) {
                $(this).removeClass('animate__fadeInRight');
                $(this).addClass('animate__fadeOutRight');
            }else{
                $(this).addClass('animate__fadeInRight');
                $(this).removeClass('animate__fadeOutRight');
            }
        })
    })
})