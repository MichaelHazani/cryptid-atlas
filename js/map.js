var map = null;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 51.4800, lng: 0},
    zoom: 3,
    // mapTypeId: google.maps.MapTypeId.SATELLITE
    });
}
