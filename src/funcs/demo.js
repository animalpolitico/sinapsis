const introJs = require('intro.js');
const intro = introJs();
var mobile = require('is-mobile');

export default function demo(){
  window.dispatchEvent(new Event('sinapsisStartLoad'));
  setTimeout(function(){
    init()
  }, 2000)
  function init(){

    intro.setOptions({
      skipLabel: 'Cerrar',
      doneLabel: 'Cerrar',
      hidePrev: true,
      showBullets: false,
      disableInteraction: true,
      hideNext: true,
      scrollPadding: 0,
      exitOnOverlayClick: false,
      nextLabel: 'Siguiente',
      prevLabel: 'Anterior'
    })

    intro.addStep({
      intro: "<h1>¡Bienvenidx a Sinapsis!</h1><p>Ésta es una guía que te llevará sobre las características de la herramienta. Puedes cerrarla en cualquier momento.</p>"
    })



    intro.addStep({
      element: document.querySelectorAll('#db_ij_projectname')[0],
      position: 'right',
      intro: "<h2>Proyecto</h2><p>Cambia el nombre de tu proyecto aquí, esto te ayudará a identificar y organizar tus archivos.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#db_ij_country')[0],
      position: 'right',
      intro: "<h2>Cambia tu país</h2><p>Selecciona tu país para cambiar términos oficiales adaptados regionalmente. Esto también convertirá todos los montos a la moneda de tu país.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#new_db_ijs')[0],
      position: 'right',
      intro: "<h2>Añadiendo bases</h2><p>Puedes empezar una base de datos desde cero, cargar un archivo en CSV o .sinapis, o seleccionar una base precargada.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#db_sidebar')[0],
      position: 'right',
      intro: "<h2>Utilizando una base</h2><p>Una vez que hayas creado o cargado una base de datos podrás explorar las empresas del lado izquierdo.</p>"
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
      element: document.querySelectorAll('#db_viz_nodes')[0],
      position: 'top',
      intro: "<h2>Mapa de nodos</h2><p>Aquí podrás encontrar la visualización de las coincidencias de tu proyecto.</p>"
    })



    intro.addStep({
      element: document.querySelectorAll('#db_vc_tdb')[0],
      position: 'left',
      intro: "<h2>Controles de visualización</h2><p>Aquí puedes ocultar bases de datos y seleccionar cómo quieres que se realicen los cruces.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#db_vc_fdb')[0],
      position: 'left',
      intro: "<h2>Filtros</h2><p>Filtra por categoría.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#db_vc_gdb')[0],
      position: 'left',
      intro: "<h2>Tamaño de círculos</h2><p>Cambia el parámetro con el cual los círculos cambian de tamaño.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#db_ij_search')[0],
      intro: "<h2>Busca</h2><p>Busca por término dentro del mapa de nodos.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#db_ij_projectbuttons')[0],
      intro: "<h2>Más formas de visualizar</h2><p>En estos controles encontrarás más información acerca de tus cruces.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#db_ij_projectbuttons_a')[0],
      intro: "<h2>Estadísticas</h2><p>Contiene estadísticas del llenado de tu base de datos y montos.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#db_ij_projectbuttons_b')[0],
      intro: "<h2>Mapa</h2><p>Visualiza las direcciones y entidades federativas introducidas en un mapa.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#db_ij_projectbuttons_c')[0],
      intro: "<h2>Coincidencias</h2><p>Explora las coincidencias del mapa de nodos en formato de listado y descargálas en archivos .csv.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#db_ij_coincidencias')[0],
      intro: "<h2>Número de coincidencias</h2><p>Este es el número de conexiones que se encontraron.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#ss_ij_doi')[0],
      intro: "<h2>Aislando un nodo</h2><p>Cuando das clic a un círculo o etiqueta lo aislarás del resto.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#db_ij_l')[0],
      intro: "<h2>Niveles de conexión</h2><p>Añade niveles de conexión para encontrar conexiones secundarias.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#db_ij_camera')[0],
      intro: "<h2>Guarda tu visualización</h2><p>Guarda tu visualización en un .zip que contiene tu mapa en JPG, PNG y SVG.</p>"
    })

    intro.addStep({
      element: document.querySelectorAll('#db_ij_refresh')[0],
      intro: "<h2>Reinicia la visualización</h2><p>Selecciona este botón si necesitas comenzar de nuevo la visualización del mapa de nodos.</p>"
    })


    intro.addStep({
      element: document.querySelectorAll('#ss_db_save')[0],
      intro: "<h2>¡Guarda tu archivo!</h2><p>No olvides guardar tu archivo cuando hayas terminado tu sesión, tus datos son completamente confidenciales y por lo tanto no guardamos tus datos en nuestro servidor.</p>"
    })

    intro.addStep({
      intro: "<h1>¡Estás listx!</h1><p>Explora La Estafa Maestra para conocer todas las capacidades de Sinapsis.</p>"
    })

    intro.start();


    intro.onbeforechange(function(target, i){
      var id = target.getAttribute("id");
      document.body.classList.remove('ij_clear');
      document.body.classList.remove('ij_ft');
      document.body.classList.remove('ij_nm');
      console.log('id', id);
      window.dispatchEvent(new Event('ss_release_node'));

      if(id == "ss_ij_doi" || id == "db_ij_l"){
        document.body.classList.add('ij_clear');
      }

      if(id == "db_sidebar"){
        document.body.classList.add('ij_ft');
      }

      if(id == "db_viz_nodes"){
        document.body.classList.add('ij_nm');
      }


      if(id == "ss_ij_doi" || id == "db_ij_l"){
        window.dispatchEvent(new CustomEvent('ss_isolate_node', {detail:  "ij"}))
      }

      if(id == "db_ij_l"){
        window.dispatchEvent(new CustomEvent('ss_add_level', {detail:  "ij"}))
      }

    })



    window.dispatchEvent(new Event('sinapsisEndLoad'));


  }






}
