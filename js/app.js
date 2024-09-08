// Initialize maps
var mapWebGIS = L.map('mapWebGIS').setView([-6.200000, 106.816666], 10);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_ACCESS_TOKEN', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN'
}).addTo(mapWebGIS);

// Initialize Comparison maps
var mapComparison1 = L.map('mapComparison1').setView([-6.200000, 106.816666], 10);
var mapComparison2 = L.map('mapComparison2').setView([-6.200000, 106.816666], 10);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_ACCESS_TOKEN', {
    id: 'mapbox/streets-v11'
}).addTo(mapComparison1);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_ACCESS_TOKEN', {
    id: 'mapbox/satellite-v9'
}).addTo(mapComparison2);

// Map Inspect functionality
var mapInspect = L.map('mapInspect').setView([-6.200000, 106.816666], 10);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_ACCESS_TOKEN', {
    id: 'mapbox/streets-v11'
}).addTo(mapInspect);

document.getElementById('chooseYear').addEventListener('click', function() {
    // Logic to update map based on selected year
    alert('Pilih tahun untuk melihat data!');
});
