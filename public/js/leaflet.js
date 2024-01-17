// Update the inital map position by updating the lat and lon below. e.g. (39.9526, -75.16552), the second number sets the zoom level. e.g. (25) is zoomed in very close and (10) is furhter out.
var map = L.map('map').setView([39.9526, -75.16552], 13);

let aptAddress = "30 N. 23rd Street Philadelphia PA 19103"

L.Control.geocoder().addTo(map);// This is needed to search locations

// This drops a marker over the University of Pennsylvania
var UPENN = L.marker([39.95238, -75.19318]).addTo(map).bindPopup('UPenn');

// This creates a circle over the area based on the coordinates entered. This could be used for search radius functionality
// var cityHall = L.circle([39.95264, -75.16363], {
//     color: 'green',
//     fillColor: 'green',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map).bindPopup('City Hall');

// Pop up lable for Point Breeze Polygon
// var popup = L.popup()
//     .setLatLng([39.934025037624686, -75.17737267153923])
//     .setContent("Point Breeze")
//     .openOn(map);

// We could use polygons to highlight desired neigborhoods
// Can we create predefined boundries and set them as featured neighborhoods?
// var polygon = L.polygon([
//     [39.94004671758236, -75.18488285653318],
//     [39.93033937649742, -75.18702862367431],
//     [39.92803573751226, -75.16896126434601],
//     [39.93777631031717, -75.16677258186205]
// ]).addTo(map).bindPopup('Point Breeze');

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



