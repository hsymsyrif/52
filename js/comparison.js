// Inisialisasi peta untuk sisi kiri dan kanan
var mapLeft = L.map('map-left').setView([-6.200000, 106.816666], 10);
var mapRight = L.map('map-right').setView([-6.200000, 106.816666], 10);

// Menyiapkan layer peta berdasarkan tahun
var layers = {
    '2020': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
    '2023': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
    })
};

// Muat layer peta pertama kali
layers['2020'].addTo(mapLeft); // Memulai dengan peta kiri tahun 2020
layers['2020'].addTo(mapRight); // Memulai dengan peta kanan tahun 2020

// Fungsi untuk memperbarui peta berdasarkan pemilihan tahun
function updateMap(side) {
    // Ambil elemen select dan tahun yang dipilih
    var selectedYear = document.getElementById('year-' + side).value;

    // Tentukan peta yang akan diperbarui (kiri atau kanan)
    var map = side === 'left' ? mapLeft : mapRight;

    // Sembunyikan peta yang tidak dipilih
    if (side === 'left') {
        document.getElementById('map-left').classList.remove('hidden');
        document.getElementById('map-right').classList.add('hidden');
    } else {
        document.getElementById('map-right').classList.remove('hidden');
        document.getElementById('map-left').classList.add('hidden');
    }

    // Hapus semua layer dari peta yang sedang aktif
    Object.values(layers).forEach(function (layer) {
        map.removeLayer(layer);
    });

    // Tambahkan layer peta berdasarkan tahun yang dipilih
    layers[selectedYear].addTo(map);
}
