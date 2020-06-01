let jumlahKartu = 10;
let kartuPertama = kartuKedua = 0;
let gambarKartu = {
    1:'<img class="gambar" src="image/kucing1.jpg" alt="gambar" />',
    2:'<img class="gambar" src="image/kucing2.jpg" alt="gambar" />',
    3:'<img class="gambar" src="image/kucing3.jpg" alt="gambar" />',
    4:'<img class="gambar" src="image/kucing4.jpeg" alt="gambar" />',
    5:'<img class="gambar" src="image/kucing5.jpeg" alt="gambar" />',
    6:'<img class="gambar" src="image/kucing6.jpeg" alt="gambar" />',
    7:'<img class="gambar" src="image/kucing7.jpeg" alt="gambar" />',
    8:'<img class="gambar" src="image/kucing8.jpg" alt="gambar" />',
    9:'<img class="gambar" src="image/kucing9.jpeg" alt="gambar" />',
    10:'<img class="gambar" src="image/kucing10.jpeg" alt="gambar" />',
};

function buatAngka() {
    let angkaBerurut = []
    for(let i=1; i<=jumlahKartu; i++){
        angkaBerurut.push(i, i)
    }
    return angkaBerurut;
}

function acakAngka(angkaBerurut){
    let angkaAcak = angkaBerurut.sort(
        function(){
            return 0.5 - Math.random();
        }
    );
    return angkaAcak
}

function persiapanKartu(angkaAcak){
    let str = '';

    angkaAcak.forEach(function(i){
        str += '<div class="kartu" nilai="'+i+'">' +
               '<div class="back"><img  class="gambar" src="image/ashoy2.png" alt="logo"/></div>' +
               '<div class="front">'+gambarKartu[i]+'</div>' +
               '</div>'
    });
    $('#game').append(str);
}

function pengendali(){
    $('.kartu').on('click', function(){
        $(this).addClass('buka');
        

        if(kartuPertama == 0){
            kartuPertama = $(this).attr('nilai');
            console.log('pertama'+ kartuPertama)
        }else{
            kartuKedua = $(this).attr('nilai');
            console.log('kedua'+kartuKedua)

            if(kartuPertama == kartuKedua){
                console.log('benar')
                $('.buka').addClass('benar');
                $('.benar').removeClass('buka');
                kartuPertama = kartuKedua = 0;
            }else{
                console.log('salah')
                kartuPertama = kartuKedua = 0
                $(this).one('transitionend', function(){
                    $('.kartu').removeClass('buka')
                });
            }
        }
    })
}

$(document).ready(function(){
    let angkaBerurut = buatAngka();

    let angkaAcak = acakAngka(angkaBerurut);

    persiapanKartu(angkaAcak);

    pengendali();
})