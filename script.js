
window.onload = function() {
    const params = new URLSearchParams(window.location.search)
    const type = params.get("type");
    const flespi_id = params.get("flespi_id");
    document.getElementById('car-select').addEventListener('change', function() {
        var selectedValue = this.value;
        var textSignal = document.getElementById('ultimo-sinal');
        var textVel = document.getElementById('velocidade-max');
        var textGas = document.getElementById('combustivel');
        var textKm = document.getElementById('km-rodado');
        var textBattery = document.getElementById('voltagem-bateria');
        var textBloq = document.getElementById('IoT-bloq');
        var textDesb = document.getElementById('IoT-desb');
        var image = document.getElementById('car-image');
        switch(selectedValue) {
            case '1':
                textSignal.style.transform = 'translate(400px, 140px)';
                textVel.style.transform = 'translate(220px, 705px)';
                textGas.style.transform = 'translate(850px, 580px)';
                textKm.style.transform = 'translate(850px, 590px)';
                textBattery.style.transform = 'translate(1600px, 220px)';
                textBloq.style.transform = 'translate(1060px, -70px)';
                textDesb.style.transform = 'translate(1360px, -132px)';
                image.src = 'http://site.awto.com.br/wp-content/uploads/2024/04/HybridNightfall.png';
                break;
            case '2':
                textSignal.style.transform = 'translate(400px, 125px)';
                textVel.style.transform = 'translate(220px, 690px)';
                textGas.style.transform = 'translate(850px, 565px)';
                textKm.style.transform = 'translate(850px, 575px)';
                textBattery.style.transform = 'translate(1600px, 205px)';
                textBloq.style.transform = 'translate(1060px, -85px)';
                textDesb.style.transform = 'translate(1360px, -148px)';
                image.src = 'http://site.awto.com.br/wp-content/uploads/2024/04/Hybrid.png';
                break;
            case '3':
                textSignal.style.transform = 'translate(340px, 190px)';
                textVel.style.transform = 'translate(220px, 685px)';
                textGas.style.transform = 'translate(700px, 580px)';
                textKm.style.transform = 'translate(700px, 590px)';
                textBattery.style.transform = 'translate(1600px, 190px)';
                textBloq.style.transform = 'translate(880px, -75px)';
                textDesb.style.transform = 'translate(1180px, -137px)';
                image.src = 'http://site.awto.com.br/wp-content/uploads/2024/04/TopSedan.png';
                break;
            case '4':
                textSignal.style.transform = 'translate(280px, 115px)';
                textVel.style.transform = 'translate(260px, 670px)';
                textGas.style.transform = 'translate(770px, 595px)';
                textKm.style.transform = 'translate(770px, 605px)';
                textBattery.style.transform = 'translate(1600px, 200px)';
                textBloq.style.transform = 'translate(1020px, -95px)';
                textDesb.style.transform = 'translate(1320px, -160px)';
                image.src = 'http://site.awto.com.br/wp-content/uploads/2024/04/SUVJeep.png';
                break;
            case '5':
                textSignal.style.transform = 'translate(220px, 100px)';
                textVel.style.transform = 'translate(285px, 680px)';
                textGas.style.transform = 'translate(775px, 605px)';
                textKm.style.transform = 'translate(775px, 605px)';
                textBattery.style.transform = 'translate(1615px, 195px)';
                textBloq.style.transform = 'translate(1100px, -80px)';
                textDesb.style.transform = 'translate(1350px, -140px)';
                image.src = 'http://site.awto.cl/wp-content/uploads/2024/04/SUVTracker.png';
                break;
            case '6':
                textSignal.style.transform = 'translate(240px, 90px)';
                textVel.style.transform = 'translate(350px, 700px)';
                textGas.style.transform = 'translate(785px, 610px)';
                textKm.style.transform = 'translate(785px, 610px)';
                textBattery.style.transform = 'translate(1615px, 235px)';
                textBloq.style.transform = 'translate(1075px, -40px)';
                textDesb.style.transform = 'translate(1350px, -105px)';
                image.src = 'http://site.awto.cl/wp-content/uploads/2024/04/Cargo.png';
                break;
            case '7':
                textSignal.style.transform = 'translate(225px, 105px)';
                textVel.style.transform = 'translate(180px, 715px)';
                textGas.style.transform = 'translate(700px, 605px)';
                textKm.style.transform = 'translate(705px, 605px)';
                textBattery.style.transform = 'translate(1635px, 205px)';
                textBloq.style.transform = 'translate(1050px, -95px)';
                textDesb.style.transform = 'translate(1320px, -160px)';
                image.src = 'http://site.awto.cl/wp-content/uploads/2024/04/SUV.png';
                break;
            case '8':
                textSignal.style.transform = 'translate(420px, 227px)';
                textVel.style.transform = 'translate(510px, 635px)';
                textGas.style.transform = 'translate(840px, 570px)';
                textKm.style.transform = 'translate(840px, 560px)';
                textBattery.style.transform = 'translate(1430px, 180px)';
                textBloq.style.transform = 'translate(880px, -167px)';
                textDesb.style.transform = 'translate(1140px, -230px)';
                image.src = 'http://site.awto.cl/wp-content/uploads/2024/04/Group-15.png'; //E-Scooter URL
                break;
            case '9':
                textSignal.style.transform = 'translate(420px, 150px)';
                textVel.style.transform = 'translate(530px, 620px)';
                textGas.style.transform = 'translate(870px, 557px)';
                textKm.style.transform = 'translate(870px, 555px)';
                textBattery.style.transform = 'translate(1430px, 127px)';
                textBloq.style.transform = 'translate(880px, -147px)';
                textDesb.style.transform = 'translate(1140px, -210px)';
                image.src = 'http://site.awto.cl/wp-content/uploads/2024/04/E-Moto.png';
                break;
            default:
                image.src = ''; 
                break;
        }
    });
};