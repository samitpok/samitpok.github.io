$(document).ready(
    function () {
        $("#view_button").click(getPicture);
    });
function getPicture() {
    //var dateValue = $("#date").val();
    //console.log("date value",dateValue);
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        type: "GET",
        data: {
            api_key: "DEMO_KEY",
            date: $("#date").val()
        },
        dataType: "json",
        "success": showMedia,
        "error": noMedia
    });
};
function showMedia(data) {
    console.log("data",data);
    
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