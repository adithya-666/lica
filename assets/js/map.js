document.addEventListener('DOMContentLoaded', function() { 
 
    // Inisialisasi peta
    var map = L.map('map').setView([-7.6145, 110.7129], 7);

    function adjustMapView() {
        if (window.innerWidth <= 812) { // Perangkat seluler dengan lebar maksimum 812px
            map.setView([-7.6145, 110.7129], 6); // Koordinat untuk Pulau Jawa dan tingkat zoom yang sesuai
        }
    }

    // Tambahkan tampilan peta dari sumber terbuka, misalnya OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Misalkan Anda memiliki gambar dengan nama 'marker.png' dalam folder 'assets'
    var customIcon = L.icon({
        iconUrl: 'assets/images/clients/marker.png',
        iconSize: [32, 32], // Ukuran ikon dalam piksel
        iconAnchor: [16, 32], // Posisi titik tengah bawah ikon dalam piksel
        popupAnchor: [0, -32] // Posisi popup terkait ikon dalam piksel
    });


   // Tambahkan marker ke peta
    var bbkpm = L.marker([-6.92025645866112, 107.59649726930795], { icon: customIcon });
    var rsj = L.marker([-6.810121245173328, 107.56330108883688], { icon: customIcon });
    var soedjono = L.marker([-7.467697776342632, 110.22601552237876], { icon: customIcon });
    var cahayaMedika = L.marker([-7.673007068013567, 109.66056386656432], { icon: customIcon });
    var pindad = L.marker([-6.939829638686014, 107.6462123665536], { icon: customIcon });
    var permataCirebon = L.marker([-6.708204862521024, 108.5337230665503], { icon: customIcon });
    var bbkpmGarut = L.marker([-7.219878642591059, 107.89934358163963], { icon: customIcon });
    var bbkpmCianjur = L.marker([-6.824207447973496, 107.13773793771547], { icon: customIcon });
    var rsudIndramayu = L.marker([-6.3293678350186315, 108.3219099662944], { icon: customIcon });
    var pku = L.marker([-7.800873433487037, 110.36222368168707], { icon: customIcon });
    var rsifc = L.marker([-7.692100111063011, 109.0250624107472], { icon: customIcon });
    var patrol = L.marker([-6.314169173653869, 107.99862762236232], { icon: customIcon });
    var labkesda = L.marker([-6.908765154765771, 106.89083834114417], { icon: customIcon });
    var yap = L.marker([-7.780575191003182, 110.37504271074863], { icon: customIcon });
    var cicalengka = L.marker([-6.982120504683952, 107.84261098004473], { icon: customIcon });
    var soreang = L.marker([-7.027875224911107, 107.54349096655487], { icon: customIcon });
    var respira = L.marker([-7.905335854641143, 110.32060028191407], { icon: customIcon });
    var majalaya = L.marker([-7.0486108140973665, 107.77211179575967], { icon: customIcon });

  
    // Tambahkan marker ke peta
    bbkpm.addTo(map);
    rsj.addTo(map);
    soedjono.addTo(map);
    cahayaMedika.addTo(map);
    pindad.addTo(map);
    permataCirebon.addTo(map);
    bbkpmGarut.addTo(map);
    bbkpmCianjur.addTo(map);
    rsudIndramayu.addTo(map);
    pku.addTo(map);
    rsifc.addTo(map);
    patrol.addTo(map);
    labkesda.addTo(map);
    yap.addTo(map);
    cicalengka.addTo(map);
    soreang.addTo(map);
    respira.addTo(map);
    majalaya.addTo(map);


    // Tambahkan popup untuk marker
    bbkpm.bindPopup("<div class='popup-container'><img src='assets/images/clients/BBKPM LOGO.png' alt='Gambar Lokasi'><p>BBKPM BANDUNG</p></div>");
    bbkpmGarut.bindPopup("<div class='popup-container'><img src='assets/images/clients/BBKPM LOGO.png' alt='Gambar Lokasi'><p>BBKPM GARUT</p></div>");
    bbkpmCianjur.bindPopup("<div class='popup-container'><img src='assets/images/clients/BBKPM LOGO.png' alt='Gambar Lokasi'><p>BBKPM CIANJUR</p></div>");
    rsj.bindPopup("<div class='popup-container'><img src='assets/images/clients/rsj.jpeg' alt='Gambar Lokasi'><p>RSJ PROV JABAR</p></div>");
    soedjono.bindPopup("<div class='popup-container'><img src='assets/images/clients/logo-diponegoro.png' alt='Gambar Lokasi'><p>RST dr. Soedjono</p></div>");
    cahayaMedika.bindPopup("<div class='popup-container'><img src='assets/images/clients/logo-small.jpg' alt='Gambar Lokasi'><p>KLINIK CAHAYA MEDIKA</p></div>");
    pindad.bindPopup("<div class='popup-container'><img src='assets/images/clients/logo-pindad.png' alt='Gambar Lokasi'><p>RSU PINDAD</p></div>");
    permataCirebon.bindPopup("<div class='popup-container'><img src='assets/images/clients/logo-permata.png' alt='Gambar Lokasi'><p>RS PERMATA CIREBON</p></div>");
    rsudIndramayu.bindPopup("<div class='popup-container'><img src='assets/images/clients/11zon_cropped.png' alt='Gambar Lokasi'><p>RSUD INDRAMAYU</p></div>");
    pku.bindPopup("<div class='popup-container'><img src='assets/images/clients/logors.png' alt='Gambar Lokasi'><p>RS PKU MUHAMMADIYAH YOGYAKARTA</p></div>");
    rsifc.bindPopup("<div class='popup-container'><img src='assets/images/clients/rsifc.png' alt='Gambar Lokasi'><p>RS ISLAM FATIMAH CILACAP</p></div>");
    patrol.bindPopup("<div class='popup-container'><img src='assets/images/clients/patrol.jpeg' alt='Gambar Lokasi'><p>RSUD PANTURA M.A SENTOT PATROL</p></div>");
    labkesda.bindPopup("<div class='popup-container'><img src='assets/images/clients/labkesda.jpeg' alt='Gambar Lokasi'><p>LABORATORIUM KESEHATAN DAN KLINIK KESEHATAN DAERAH KAB. SUKABUMI</p></div>");
    yap.bindPopup("<div class='popup-container'><img src='assets/images/clients/yap.jpeg' alt='Gambar Lokasi'><p>RS MATA DR.YAP YOGYAKARTA</p></div>");
    cicalengka.bindPopup("<div class='popup-container'><img src='assets/images/clients/rsud.jpeg' alt='Gambar Lokasi'><p>RSUD CICALENGKA</p></div>");
    soreang.bindPopup("<div class='popup-container'><img src='assets/images/clients/rsud.jpeg' alt='Gambar Lokasi'><p>RSUD OTO ISKANDAR DINATA</p></div>");
    majalaya.bindPopup("<div class='popup-container'><img src='assets/images/clients/rsud.jpeg' alt='Gambar Lokasi'><p>RSUD MAJALAYA</p></div>");
    respira.bindPopup("<div class='popup-container'><img src='assets/images/clients/respira.png' alt='Gambar Lokasi'><p>RS PARU RESPIRA YOGYAKARTA</p></div>");
 
  

    // Tambahkan event click untuk menampilkan popup saat marker diklik
    bbkpm.on('click', function () {
        bbkpm.openPopup();
    });
    rsj.on('click', function () {
        rsj.openPopup();
    });
    soedjono.on('click', function () {
        soedjono.openPopup();
    });
    cahayaMedika.on('click', function () {
        cahayaMedika.openPopup();
    });
    pindad.on('click', function () {
        pindad.openPopup();
    });
    permataCirebon.on('click', function () {
        permataCirebon.openPopup();
    });
   bbkpmGarut.on('click', function () {
       bbkpmGarut.openPopup();
    });
   bbkpmCianjur.on('click', function () {
       bbkpmCianjur.openPopup();
    });
   rsudIndramayu.on('click', function () {
       rsudIndramayu.openPopup();
    });
   pku.on('click', function () {
       pku.openPopup();
    });
   rsifc.on('click', function () {
       rsifc.openPopup();
    });
   patrol.on('click', function () {
       patrol.openPopup();
    });
   labkesda.on('click', function () {
       labkesda.openPopup();
    });
   yap.on('click', function () {
       yap.openPopup();
    });
   cicalengka.on('click', function () {
       cicalengka.openPopup();
    });
   soreang.on('click', function () {
       soreang.openPopup();
    });
   respira.on('click', function () {
       respira.openPopup();
    });
   majalaya.on('click', function () {
       majalaya.openPopup();
    });

// Panggil fungsi saat halaman dimuat dan saat ukuran layar berubah
window.addEventListener('load', adjustMapView);
window.addEventListener('resize', adjustMapView);
        });