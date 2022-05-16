$(document).ready(
    function () {
        $("#view_button").click(fetchNasaMedia);
    });



const fetchNasaMedia = async () => {
    var dateValue = $("#date").val();
    try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date='+dateValue);
        const data = await response.json();
        showMedia(data); 
    } catch (error) {
        noMedia(error); 
    }
};

 
function showMedia(data) {
    //console.log("data",data);
    
    $("#media-title").text(data.title);
    if(data.media_type == "video"){
        $("#video")[0].src = data.url;
        $("#video").show();
        $("#pic").hide();
    }else if(data.media_type == "image"){
        $("#video").hide();
        $("#pic").attr("src", data.url);
        $("#pic").attr("title",data.title)
        $("#pic").show();
    }
    
    
};

function noMedia(error) {
    $("#media-title").text("");
    alert(error.responseText);
};