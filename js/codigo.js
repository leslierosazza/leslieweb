window.addEventListener('load', function () {
    var imagenes = [];
    imagenes[0] = 'img/certificados/diploma-css-grid-layout-2017_page-0001.jpg';
    imagenes[1] = 'img/certificados/diploma-diseno-email-2016_page-0001.jpg';
    imagenes[2] = 'img/certificados/diploma-programacion-basica_page-0001.jpg';
    imagenes[3] = 'img/certificados/diploma-illustrator_page-0001.jpg';
    imagenes[4] = 'img/certificados/diploma-photoshop-basico_page-0001.jpg';

    var i = 0;
    tiempo = 2000;

    function cambiarImagenes(){
        document.slider.src = imagenes[i];

        if(i < 5){
            i++;
        }else{
            i = 0;
        }
    }
    setInterval(cambiarImagenes, tiempo);
});