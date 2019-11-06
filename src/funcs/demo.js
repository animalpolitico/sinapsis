const introJs = require('intro.js');
const intro = introJs();
export default function demo(){
  window.dispatchEvent(new Event('sinapsisStartLoad'));
  setTimeout(function(){
    init();
  }, 3000)
  function init(){

    intro.setOptions({
      skipLabel: 'Cerrar',
      doneLabel: 'Cerrar',
      hidePrev: true,
      showBullets: false,
      disableInteraction: true,
      hideNext: true,
      scrollPadding: 0,
      nextLabel: 'Siguiente',
      prevLabel: 'Anterior'
    })

    intro.addStep({
      intro: "<h2>¡Bienvenidx a Sinapsis!</h2><p>Ésta es una guía que te llevará sobre las características de la herramienta. Puedes cerrarla en cualquier momento.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#new_db_ijs')[0],
      position: 'right',
      intro: "<h2>Añadiendo bases</h2><p>Puedes empezar una base de datos desde cero, cargar un archivo en CSV o .sinapis, o seleccionar una base precargada.</p>"
    })


    intro.addStep({
      element: document.querySelectorAll('#db_sidebar')[0],
      position: 'right',
      intro: "<h2>Utilizando una base</h2><p>Una vez que hayas creado o cargado una base de datos podrás explorar las empresas del lado izquierdo...</p>"
    })


    intro.addStep({
      element: document.querySelectorAll('#db_new_empresa_btn')[0],
      position: 'right',
      intro: "<h2>Agregando una empresa</h2><p>Con este botón puedes agregar una nueva empresa a esta base de datos</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#db_currency_legend')[0],
      position: 'right',
      intro: "<h2>Diferentes monedas</h2><p>Sinapsis convierte y unifica diferentes tipos de moneda. En esta leyenda puedes ver en qué moneda se encuentran los montos.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('.db_empresa')[0],
      position: 'right',
      intro: "<h2>Empresa</h2><p>Ésta es una fila de empresa, puedes añadir, visualizar y editar su información al dar clic.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#db_viz')[0],
      position: 'left',
      intro: "<h2>Visualización</h2><p>Aquí podrás encontrar la visualización de las coincidencias de tu proyecto.</p>"
    })



    intro.addStep({
      element: document.querySelectorAll('#db_vc_tdb')[0],
      position: 'left',
      intro: "<h2>Controles de visualización</h2><p>Aquí puedes ocultar bases de datos y seleccionar cómo quieres que se realicen los cruces.</p>"
    })

    intro.start();


    intro.onbeforechange(function(target, i){
      var id = target.getAttribute("id");
      // if(id == "new_db_ijs"){
      //   window.dispatchEvent(new Event('ij_open_newdb'))
      // }

    })

    window.dispatchEvent(new Event('sinapsisEndLoad'));


  }






}
