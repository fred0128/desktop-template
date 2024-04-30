document.addEventListener("DOMContentLoaded", function () {
    const batteryBars = document.querySelector("#battery-bars");

    // Pil durumunu kontrol et
    navigator.getBattery().then(function (battery) {
        // İlk durumu güncelle
        updateBatteryBars(battery);

        // Herhangi bir değişiklik olduğunda pil durumunu güncelle
        battery.addEventListener('chargingchange', function () {
            updateBatteryBars(battery);
        });

        battery.addEventListener('levelchange', function () {
            updateBatteryBars(battery);
        });
    });

    function updateBatteryBars(battery) {
        // Pilin doluluk oranını al (% cinsinden)
        const level = battery.level * 100;

        // Kaç tane cubuk gösterileceğini hesapla
        const numOfBars = Math.ceil(level / 10);

        // Cubukları oluştur
        let barsHTML = "";
        for (let i = 0; i < numOfBars; i++) {
            barsHTML += '<div class="battery-bar"></div>';
        }

        // Cubukları ekrana yazdır
        batteryBars.innerHTML = barsHTML;
    }
});
