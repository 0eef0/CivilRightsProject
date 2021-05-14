$(document).ready(function(){
    setInterval(() => {
/*         if(window.innerHeight > window.innerWidth){
            $('div.content').css('height', '30vw');
        }else{
            $('div.content').css('height', '18vw');
        } */
        $('#navbar').css('height', window.innerHeight);
        $('div.content').css('height', window.innerHeight * 0.35)
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