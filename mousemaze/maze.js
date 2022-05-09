


$(document).ready(function(){

    var wallHit = false;
    var messageShownFlag = false;
    var beginGame = false;


    $( "#start" ).click(function() {
        beginGame = true;
        wallHit = false;
        messageShownFlag = false;
        $( ".boundary" ).removeClass( "youlose" );
        $("#status").text("Game is Running");
    });


    displayLostMessage = function(){
        $("#status").text("Sorry you lost. :[");
    }


    gameLostCss = function(){
        $( ".boundary" ).addClass( "youlose" );
    }
    
    

    $( "#maze" ).mouseleave(function() {
        if(beginGame && !messageShownFlag){
            displayLostMessage();
            gameLostCss();
        }
    
    });

    
    $( ".boundary" ).mouseover(function() {
        if(beginGame && !messageShownFlag){
            gameLostCss();
            //$( ".boundary" ).addClass( "youlose" );
            if(!messageShownFlag){
                setTimeout(displayLostMessage, 500);
                //alert("Sorry you lost. :[");
                messageShownFlag = true;
            }
            wallHit = true;
        }
      });



      $( "#end" ).mouseover(function() {
        if(beginGame){
            if(!wallHit && !messageShownFlag){
                $("#status").text("you win! :]");
                messageShownFlag = true;
            }
        }
      });


});