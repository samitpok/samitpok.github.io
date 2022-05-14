$(document).ready(
    function () {
        $("#view_button").click(getPicture);
    });
function getPicture() {
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        type: "GET",
        data: {
            api_key: "DEMO_KEY",
            date: $("date").val()
        },
        dataType: "json",
        "success": showPicture,
        "error": noPicture
    });
};
function showPicture(data) {
    console.log("data",data)
    $("#pic").attr("src", data.url);
    $("#pic").attr("title",data.title)
};
function noPicture(error) {
    alert(error.responseText);
};