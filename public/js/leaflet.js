// Update the inital map position by updating the lat and lon below. e.g. (39.9526, -75.16552), the second number sets the zoom level. e.g. (25) is zoomed in very close and (10) is furhter out.
var map = L.map('map').setView([39.9526, -75.16552], 13);

L.Control.geocoder().addTo(map);// This is needed to search locations


var myIcon = L.icon({
    iconUrl: '/images/ourspace.png',
    iconSize: [75, 75],
    iconAnchor: [21, 75],
    popupAnchor: [-3, -76],
});


const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



function addCopy() {
  // Get the text field
  var copyText = document.getElementById("s_address");
  // Select the text field
  copyText.select();
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

