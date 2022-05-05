
"use strict";


$(document).ready(function() {

    var whichone = "blank";

    var anime = {
        interval        : 0,
        counter         : 0,
        pause           : 250
    };

    $('#stop').prop("disabled",true);

    $('#animation').on('change', function() {
        whichone = this.value;
        $("#mytextarea").text(ANIMATIONS[whichone]);

    });

    $('#size').on('change', function() {
        
        $('#mytextarea').css("font-size", $(this).val() );

    });

    $("#speed").change(function() {
            
        if(this.checked) {
            anime.pause = 50;
        }else{
            anime.pause = 250;
        }
        clearInterval(anime.interval);
        startAnimation();

        console.log("speed changed",anime.pause);
    });

    $("#start").click(function(){
        
        $(this).prop("disabled",true);
        $('#animation').prop("disabled",true);
        $('#stop').prop("disabled",false);
        
        startAnimation();

    });
    function startAnimation(){
        var text =  ANIMATIONS[whichone];//$("#mytextarea").val();
       
        var animeSlides = text.split("=====\n");
       
        anime.interval = setInterval(function(){
            if(anime.counter >= animeSlides.length){
                anime.counter = 0;
            }
            $("#mytextarea").text(animeSlides[anime.counter++]);
            console.log("puase",anime.pause);

        },anime.pause);
    }
    
    $("#stop").click(function(){
        
        $(this).prop("disabled",true);
        $('#start').prop("disabled",false);
        $('#animation').prop("disabled",false);
        clearInterval(anime.interval);
    });


    
});
