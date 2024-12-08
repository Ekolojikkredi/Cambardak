// Atık türlerine ait puanlar
const atikPuanlari = {
    plastik: 5,  // Plastik için puan
    metal: 10,   // Metal için puan
    kagit: 3,    // Kağıt için puan
    cam: 7,      // Cam için puan
    yag: 15,     // Yağ için puan
    tekstil: 8,  // Tekstil için puan
    pil: 20,     // Pil için puan
    elektronik: 25 // Elektronik atık için puan
};

// Sayfa gösterim fonksiyonu
function showPage(page) {
    const contentDiv = document.getElementById("page-content");
    switch (page) {
        case "ekolojik-kredi":
            contentDiv.innerHTML = `
                <h2>Ekolojik Kredi Nedir?</h2>
                <p>Ekolojik kredi, geri dönüşüme katkı sağlamak için yapılan atık toplama ve sınıflandırma işlemleri sonucu kazanılan bir tür dijital ödüldür.</p>
            `;
            break;
        case "geri-donusum":
            contentDiv.innerHTML = `
                <h2>Geri Dönüşüm Nedir?</h2>
                <p>Geri dönüşüm, kullanılmayan veya atılacak materyallerin tekrar kullanılabilir hale getirilmesidir.</p>
            `;
            break;
        case "hazirlayanlar":
            contentDiv.innerHTML = `
                <h2>Hazırlayanlar</h2>
                <p>Danışman Öğretmen: Osman Onuk</p>
                <p>Öğrenciler: Muhammedcan Arslanparçası, Bilal Yiğit Tezcan, Yağız Efe Yılmaz</p>
            `;
            break;
        case "bize-ulasin":
            contentDiv.innerHTML = `
                <h2>Bize Ulaşın</h2>
                <p>İletişim için e-posta: info@ekolojikkredi.com</p>
            `;
            break;
        case "veri-giris":
            contentDiv.innerHTML = `
                <h2>Öğrenci Verisi Girişi</h2>
                <form id="veri-form" onsubmit="kaydetVeri(event)">
                    <label>Öğrenci Adı:</label><input type="text" id="veri-ogrenci-adi" required><br>
                    <label>Öğrenci Soyadı:</label><input type="text" id="veri-ogrenci-soyadi" required><br>
                    <label>Okul Numarası:</label><input type="text" id="veri-okul-numarasi" required><br>
                    <label>Atık Türü:</label>
                    <select id="veri-atik-turu" required>
                        <option value="plastik">Plastik</option>
                        <option value="metal">Metal</option>
                        <option value="kagit">Kağıt</option>
                        <option value="cam">Cam</option>
                        <option value="yag">Yağ</option>
                        <option value="tekstil">Tekstil</option>
                        <option value="pil">Pil</option>
                        <option value="elektronik">Elektronik</option>
                    </select><br>
                    <label>Atık Kilogram:</label><input type="number" id="veri-atik-kilo" required><br>
                    <label>Veriyi Kaydeden:</label><input type="text" id="veri-kaydeden" required><br>
                    <button type="submit">Kaydet</button>
                </form>
            `;
            break;
        case "veri-goruntuleme":
            contentDiv.innerHTML = `
                <h2>Veri Görüntüle</h2>
                <p>Öğrencinin kaydettiği verileri buradan görüntüleyebilirsiniz.</p>
                <form>
                    <label>Öğrenci E-posta:</label><input type="email" id="veri-ogrenci-email" required><br>
                    <label>Okul Numarası:</label><input type="text" id="veri-okul-numarasi-goruntule" required><br>
                    <button type="button" onclick="goruntuleVeri()">Görüntüle</button>
                </form>
                <div id="goruntule-veri"></div>
            `;
            break;
    }
}

// Verilerin kaydedilmesini sağlayan fonksiyon
function kaydetVeri(event) {
    event.preventDefault();

    const ogrenciAdi = document.getElementById("veri-ogrenci-adi").value;
    const ogrenciSoyadi = document.getElementById("veri-ogrenci-soyadi").value;
    const okulNumarasi = document.getElementById("veri-okul-numarasi").value;
    const atikTuru = document.getElementById("veri-atik-turu").value;
    const atikKilogram = document.getElementById("veri-atik-kilo").value;
    const kaydeden = document.getElementById("veri-kaydeden").value;

    if (!atikPuanlari[atikTuru]) {
        alert("Geçersiz atık türü.");
        return;
    }

    const atikPuani = atikPuanlari[atikTuru] * parseFloat(atikKilogram);

    // Veriyi kaydetmek için her türlü işlemi buraya ekleyebilirsiniz
    // Bu örnekte veriyi sadece console'a yazıyoruz
    console.log("Veri Kaydedildi:");
    console.log("Öğrenci: " + ogrenciAdi + " " + ogrenciSoyadi);
    console.log("Okul Numarası: " + okulNumarasi);
    console.log("Atık Türü: " + atikTuru);
    console.log("Atık Kilogram: " + atikKilogram);
    console.log("Puan: " + atikPuani);
    console.log("Veriyi Kaydeden: " + kaydeden);

    alert("Veri başarıyla kaydedildi!");
    
    // Formu temizleyelim
    document.getElementById("veri-form").reset();
}

// Öğrenci verisini görüntülemek için fonksiyon
function goruntuleVeri() {
    const ogrenciEmail = document.getElementById("veri-ogrenci-email").value;
    const okulNumarasi = document.getElementById("veri-okul-numarasi-goruntule").value;

    // Burada gerçek veri kontrolü yapılabilir (veritabanı vb.)
    // Örnek olarak şimdilik verileri console'a yazalım
    console.log("Öğrenci E-posta: " + ogrenciEmail);
    console.log("Okul Numarası: " + okulNumarasi);
    // Veriyi burada getirebilirsiniz
    document.getElementById("goruntule-veri").innerHTML = `
        <h3>Veri:</h3>
        <p>Öğrencinin kaydettiği atık türleri ve kazandığı puanlar buraya gelecek.</p>
    `;
}
