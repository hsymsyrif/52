// Inisialisasi peta di pusat Indonesia (koordinat tengah)
var map = L.map('map').setView([-2.548926, 118.0148634], 5); // Koordinat Indonesia

// Tambahkan tile layer Mapbox dengan access token
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZnFodG15IiwiYSI6ImNtMHVpejd3cjEzeWMycnEwZjg1ZWU0eDYifQ.m2ni5UfRzTac8rLVmv7BGA', {
    attribution: 'Map data © OpenStreetMap contributors, Imagery © Mapbox',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

function onEachFeature(feature, layer) {
    // Pastikan ada data yang bisa diklik
    if (feature.properties && feature.properties.nama_lokasi) {
        layer.on('click', function () {
            // Ketika marker diklik, tampilkan informasi detail
            document.getElementById('nama-lokasi').textContent = feature.properties.nama_lokasi;
            document.getElementById('jumlah-jiwa').textContent = feature.properties.jumlah_jiwa;
            document.getElementById('jumlah-bangunan').textContent = feature.properties.jumlah_bangunan;
            document.getElementById('info-tambahan').textContent = feature.properties.info_tambahan;
        });
    }
}

// Gunakan fungsi ini saat menambahkan GeoJSON ke peta
L.geoJSON(geojsonData, {
    onEachFeature: onEachFeature // Pastikan ini digunakan untuk menghubungkan marker dengan event klik
}).addTo(map);
