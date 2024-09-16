// Fungsi untuk memuat sidebar.html ke dalam elemen dengan id="sidebar-container"
function loadSidebar() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'sidebar.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('sidebar-container').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Panggil fungsi loadSidebar saat halaman dimuat
window.onload = loadSidebar;
