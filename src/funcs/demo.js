const introJs = require('intro.js');

const intro = introJs();
const mobile = require('is-mobile');

export default function demo() {
  window.dispatchEvent(new Event('sinapsisStartLoad'));
  setTimeout(() => {
    init();
  }, 2000);
  function init() {
    intro.refresh();

    intro.setOptions({
      skipLabel: 'X',
      doneLabel: 'Terminar',
      hidePrev: true,
      showBullets: false,
      disableInteraction: true,
      hideNext: true,
      scrollPadding: 0,
      exitOnOverlayClick: true,
      nextLabel: 'Siguiente',
      prevLabel: 'Anterior',
    });

    intro.addStep({
      intro: '<h1>¡Te damos la bienvenida a Sinapsis!</h1><p>Ésta es una guía que te mostrará las principales características de la herramienta. Puedes cerrarla en cualquier momento.</p>',
    });


    intro.addStep({
      element: document.querySelectorAll('#db_ij_projectname')[0],
      position: 'right',
      intro: '<h2>Proyecto</h2><p>Cambia el nombre de tu proyecto aquí, esto te ayudará a identificar y organizar tus archivos.</p>',
    });

    intro.addStep({
      element: document.querySelectorAll('#db_ij_country')[0],
      position: 'right',
      intro: '<h2>Cambia tu país</h2><p>Selecciona tu país para cambiar términos empresariales adaptados regionalmente. Esto también convertirá todos los montos a tu moneda.</p>',
    });

    intro.addStep({
      element: document.querySelectorAll('#new_db_ijs')[0],
      position: 'right',
      intro: '<h2>Añadiendo bases</h2><p>Puedes construir una base de datos nueva, cargar un archivo en CSV o .sinapis, o seleccionar una de nuestras bases precargadas.</p>',
    });

    intro.addStep({
      element: document.querySelectorAll('#db_sidebar')[0],
      position: 'right',
      intro: '<h2>Utilizando una base</h2><p>Una vez que hayas construido o cargado una base de datos podrás explorar el listado de empresas.</p>',
    });


    intro.addStep({
      element: document.querySelectorAll('#db_new_empresa_btn')[0],
      position: 'right',
      intro: '<h2>Agregando una empresa</h2><p>Y siempre con este botón puedes agregar una nueva empresa a tus bases de datos.</p>',
    });

    intro.addStep({
      element: document.querySelectorAll('#db_currency_legend')[0],
      position: 'right',
      intro: '<h2>Diferentes monedas</h2><p>Sinapsis convierte y unifica los tipos de moneda. Aquí podrás saber en cuál se llenó cada base.</p>',
    });

    intro.addStep({
      element: document.querySelectorAll('.db_empresa')[0],
      position: 'right',
      intro: '<h2>Empresa</h2><p>Si haces clic sobre el nombre de la empresa, puedes editar la información de socios, fechas, direcciones, contratos y demás.</p>',
    });

    intro.addStep({
      element: document.querySelectorAll('#db_ij_search')[0],
      intro: '<h2>Busca</h2><p>Si te pierdes entre tantas empresas siempre podrás buscar su nombre y contenido (fechas, contratos, direcciones) en este campo.</p>',
    });


    intro.addStep({
      element: document.querySelectorAll('#db_viz_nodes')[0],
      position: 'top',
      intro: '<h2>Mapa de nodos</h2><p>En esta visualización podrás explorar las conexiones entre empresas, si la red es muy grande te sugerimos utilizar el menú lateral.</p>',
    });


    intro.addStep({
      element: document.querySelectorAll('#db_vc_tdb')[0],
      position: 'left',
      intro: '<h2>Menú lateral</h2><p>En la parte superior puedes ocultar bases de datos y seleccionar cómo quieres que se realicen los cruces.</p>',
    });

    intro.addStep({
      element: document.querySelectorAll('#db_vc_fdb')[0],
      position: 'left',
      intro: '<h2>Menú lateral</h2><p>En la siguiente sección podrás filtrar por categorías y así sólo ver lo que te interesa analizar.</p>',
    });

    intro.addStep({
      element: document.querySelectorAll('#db_vc_gdb')[0],
      position: 'left',
      intro: '<h2>Menú lateral</h2><p>Si cambias este parámetro podrás ver el tamaño de los círculos según tus intereses.</p>',
    });


    intro.addStep({
      element: document.querySelectorAll('#db_ij_projectbuttons')[0],
      intro: '<h2>Otras formas de visualizar</h2><p>Con estos controles encontrarás más información acerca de tus cruces y podrás descargarlos en CSV. ¡Te recomendamos mucho explorarlos!</p>',
    });

    // intro.addStep({
    //   element: document.querySelectorAll('#db_ij_projectbuttons_a')[0],
    //   intro: "<h2>Estadísticas</h2><p>Contiene estadísticas del llenado de tu base de datos y montos.</p>"
    // })
    //
    // intro.addStep({
    //   element: document.querySelectorAll('#db_ij_projectbuttons_b')[0],
    //   intro: "<h2>Mapa</h2><p>Visualiza las direcciones y entidades federativas introducidas en un mapa.</p>"
    // })
    //
    // intro.addStep({
    //   element: document.querySelectorAll('#db_ij_projectbuttons_c')[0],
    //   intro: "<h2>Coincidencias</h2><p>Explora las coincidencias del mapa de nodos en formato de listado y descargálas en archivos .csv.</p>"
    // })

    intro.addStep({
      element: document.querySelectorAll('#db_ij_coincidencias')[0],
      intro: '<h2>Número de coincidencias</h2><p>Aquí siempre estará a la vista la cantidad de coincidencias de las bases de datos y filtros que tengas activados.</p>',
    });

    intro.addStep({
      element: document.querySelectorAll('#ss_ij_doi')[0],
      intro: '<h2>Aislando un nodo</h2><p>Cuando das clic a un círculo o etiqueta lo aislarás del resto y podrás ver su información particular.</p>',
    });

    intro.addStep({
      element: document.querySelectorAll('#db_ij_l')[0],
      intro: '<h2>Niveles de conexión</h2><p>Añade niveles de conexión para encontrar las relaciones inmediatas entre nodos.</p>',
    });

    intro.addStep({
      element: document.querySelectorAll('#db_ij_camera')[0],
      intro: '<h2>Guarda el mapa de nodos</h2><p>Al dar clic aquí se descargará en JPG, PNG y SVG el mapa de nodos tal cual como lo tienes en ese momento.</p>',
    });

    intro.addStep({
      element: document.querySelectorAll('#db_ij_refresh')[0],
      intro: '<h2>Regresa los nodos</h2><p>Si moviste los nodos por todo el tablero y los quieres regresar a su estado original da clic aquí.</p>',
    });


    intro.addStep({
      element: document.querySelectorAll('#ss_db_save')[0],
      intro: '<h2>Guarda tu archivo</h2><p>No olvides guardar. Tu proyecto es confidencial y por lo tanto no almacenamos nada en nuestro servidor, si no lo guardas se perderán los datos.</p>',
    });

    intro.addStep({
      intro: '<h1>¡Terminamos!</h1><p>Explora la base de datos de La Estafa Maestra para conocer las funciones de Sinapsis.</p>',
    });

    intro.start();


    intro.onbeforechange((target, i) => {
      const id = target.getAttribute('id');
      document.body.classList.remove('ij_clear');
      document.body.classList.remove('ij_ft');
      document.body.classList.remove('ij_nm');
      console.log('id', id);
      window.dispatchEvent(new Event('ss_release_node'));

      if (id == 'ss_ij_doi' || id == 'db_ij_l') {
        document.body.classList.add('ij_clear');
      }

      if (id == 'db_sidebar') {
        document.body.classList.add('ij_ft');
      }

      if (id == 'db_viz_nodes') {
        document.body.classList.add('ij_nm');
      }


      if (id == 'ss_ij_doi' || id == 'db_ij_l') {
        window.dispatchEvent(new CustomEvent('ss_isolate_node', { detail: 'ij' }));
      }

      if (id == 'db_ij_l') {
        window.dispatchEvent(new CustomEvent('ss_add_level', { detail: 'ij' }));
      }
    });


    window.dispatchEvent(new Event('sinapsisEndLoad'));
  }
}
