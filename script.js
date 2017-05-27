/**
 * Created by jeewendrakumar on 5/28/2017.
 */
var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(p) {
    var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
    var mapOptions = {
        center: LatLng,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(x, mapOptions);
    var marker = new google.maps.Marker({
        position: LatLng,
        map: map,
        title: "<div style = 'height:60px;width:200px'><b>Your location:</b><br />Latitude: " + p.coords.latitude + "<br />Longitude: " + p.coords.longitude
    });
    google.maps.event.addListener(marker, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow();
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker);
    });
}
getLocation();
