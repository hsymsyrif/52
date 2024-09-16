// Inisialisasi peta dengan LeafletJS
var map = L.map('map').setView([-6.200000, 106.816666], 10); // Koordinat Jakarta

// Menambahkan layer Tile dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fungsi untuk mendapatkan data saat peta di-klik
function onMapClick(e) {
    var lat = e.latlng.lat.toFixed(6);
    var lng = e.latlng.lng.toFixed(6);
    
    // Menampilkan data koordinat di elemen HTML
    document.getElementById("mapData").innerHTML = `Latitude: ${lat}, Longitude: ${lng}`;
    
    // Menambahkan marker pada lokasi yang di-klik
    L.marker([lat, lng]).addTo(map)
        .bindPopup(`Latitude: ${lat}, Longitude: ${lng}`)
        .openPopup();
}

// Event listener untuk klik pada peta
map.on('click', onMapClick);
