window.addEventListener('load', function() {
    var imagenes = [];
    imagenes[0] = 'img/certificados/Especialista-en-desarrollo-web-profesional-1.jpg';
    imagenes[1] = 'img/certificados/diploma-css-grid-layout-2017_page-0001.jpg';
    imagenes[2] = 'img/certificados/diploma-diseno-email-2016_page-0001.jpg';
    imagenes[3] = 'img/certificados/diploma-programacion-basica_page-0001.jpg';
    imagenes[4] = 'img/certificados/diploma-illustrator_page-0001.jpg';
    imagenes[5] = 'img/certificados/diploma-photoshop-basico_page-0001.jpg';
    imagenes[6] = 'img/certificados/diploma-adobe-xd-2017_page-0001.jpg';

    var Indiceimg = 0;
    var i = 0;
    var tiempo = 5000;

    function cambiarImagenes(){
        document.slider.src = imagenes[Indiceimg];

        let html = ''; 

         if(Indiceimg < 7){
            
               Indiceimg++;
               i = `${desc[i]}`;
            
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
      //console.log('hiciste scroll');
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