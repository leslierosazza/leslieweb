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

window.onscroll = function(){
   if(document.documentElement.scrollTop > 100){
      document.querySelector('.go-top-contaniner').classList.add('show');
   }else{
      document.querySelector('.go-top-contaniner').classList.remove('show');
   }
}

document.querySelector('.go-top-contaniner').addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   })
});

/*const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#trucazo');

$form.addEventListener('submit', handleSubmit);

 function handleSubmit(event){
   event.preventDefault();
   const form = new FormData(this);
   $buttonMailto.setAttribute('href', `mailto:leslierosazza@gmail.com?subject=nombre ${form.get('name')} correo ${form.get('correo')} celular ${form.get('celular')}&body=${form.get('mensaje')}`);
   $buttonMailto.click();
} */

const $form = document.querySelector('#form');
$form.addEventListener('submit', handleSubmit);
async function handleSubmit(event){
   event.preventDefault();
   const form = new FormData(this);
   const response = await fetch(this.action, {
      method: this.method, 
      body: form, 
      headers: {
      'Accept': 'application/json'
      }
   });

   if(response.ok){
      this.reset();
      alert('Gracias por contactarte, te escribire pronto :)');
   }
};