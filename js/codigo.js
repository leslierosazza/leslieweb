window.addEventListener('load', function () {
    var imagenes = [];
    imagenes[0] = 'img/certificados/diploma-css-grid-layout-2017_page-0001.jpg';
    imagenes[1] = 'img/certificados/diploma-diseno-email-2016_page-0001.jpg';
    imagenes[2] = 'img/certificados/diploma-programacion-basica_page-0001.jpg';
    imagenes[3] = 'img/certificados/diploma-illustrator_page-0001.jpg';
    imagenes[4] = 'img/certificados/diploma-photoshop-basico_page-0001.jpg';

    var desc = [];
    desc[0] = 'CURSO DE CSS GRID LAYOUT';
    desc[1] = 'CURSO DE DISEÑO HTML Y CSS PARA EMAILS';
    desc[2] = 'CURSO DE PROGRAMACION BASICA';
    desc[3] = 'CURSO DE ILUSTRATOR';
    desc[4] = 'CURSO DE PHOTOSHOP';

    var Indiceimg = 0;
    var i = 0;
    var tiempo = 3000;

    function cambiarImagenes(){
        document.slider.src = imagenes[Indiceimg];
        //document.querySelector('#menu') =desc[i];

        let html = ''; 

         if(Indiceimg < 5){
            
            //if(i < 5){
               Indiceimg++;
               i = `${desc[i]}`;
           //}
            //i++;
            /* for(let i = 0; i < desc.length; i++){
               html += `${desc[i]}`;
            }
            console.log(html);
            const menu = document.querySelector('#menu');
            menu.innerHTML = html; */
            
         }else{
            Indiceimg = 0;
         }
    }
    setInterval(cambiarImagenes, tiempo);
});

const nav = document.querySelector('.header__nav');
const menu = document.querySelector('.header__nav__contenedor__menu');
const btn = document.querySelector('.header__nav__contenedor--btnMenu');

window.addEventListener('scroll', function(){
   if(this.window.scrollY > 0){
      nav.classList.add('active');
   }else{
      nav.classList.remove('active');
   }

   btn.addEventListener('click', function(){
      menu.classList.toggle('mostrarMenu');
   })
});