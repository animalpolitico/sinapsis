import React from 'react'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from "react-router-dom";
import * as d3 from "d3";
import { Link as ScrollLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Helmet} from "react-helmet";
import buildLink from "../funcs/buildlink";
import SSMB from "../parts/menu";

var httpBuildQuery = require('http-build-query');


export default class Index extends React.Component{
  componentDidMount(){
    window.scroll(0,0);
  }
  render(){
    return(
      <div id="ss_sinapsis_home">
        <SSMB {...this.props}/>
        <Helmet>
          <title>Sinapsis, una herramienta para descrubir conexiones entre empresas</title>
        </Helmet>
        <Landing />
        <DiagBg>
          <div id="ss_my" style={{paddingTop: '4rem'}}></div>
          <Element name="video">
            <GoTo history={this.props.history}/>
          </Element>
        </DiagBg>
        <UsaSinapsis />
        <DiagBg>
          <Casos />
          <FAQ />
        </DiagBg>
        <Credits />
        <Footer />
      </div>
    )
  }
}

class Footer extends React.Component{
  render(){
    var r = [
      {
        name: 'Facebook',
        url: 'https://facebook.com/pajaropolitico',
        icon: 'facebook'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/pajaropolitico',
        icon: 'twitter'
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/channel/UCwUr2RA-8YxAB5COLWTLhOw',
        icon: 'youtube'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/pajaropolitico/?hl=es-la',
        icon: 'instagram'
      }
    ];

    return(
      <div className="ss_footer">
        <div className="ss_footer_row">
          <div className="ss_footer_row_ap">
            <a href="https://animalpolitico.com" target="_blank">
              <img src={require('../static/apgray.png')} />
            </a>
          </div>
        </div>
        <div className="ss_footer_row">
          <SingleSharers />
        </div>
        <div className="ss_footer_row">
          <div className="ss_footer_row_contacto">
            <div className="ss_footer_row_contacto_td">
              <a href="mailto:sinapsis@animalpolitico.com">
                sinapsis@animalpolitico.com
              </a>
            </div>
            <div className="ss_footer_row_contacto_td">
              <a href="https://t.me/sinapsislat" target="_blank">
                Grupo de Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

var credits = {
  main: [
    {
      credit: 'Diseño de información y coordinación',
      persons: [
        {
          name: 'Yosune Chamizo Alberro',
          tw: '_yosune'
        }
      ]
    },
    {
      credit: 'Desarollo de versión alpha',
      persons: [
        {
          name: 'Gilberto León',
          tw: 'gilbertoleon'
        }
      ]
    },
    {
      credit: 'Desarrollo de versión beta',
      persons: [
        {
          name: 'Mauricio Martínez Robles',
          tw: 'lopsum'
        }
      ]
    },
    {
      credit: 'Diseño y desarrollo web',
      persons: [
        {
          name: 'Jesús Santamaría',
          tw: 'RE_Ilustrador'
        },
        {
          name: 'Mauricio Martínez Robles',
          tw: 'lopsum'
        }
      ]
    },
    {
      credit: 'Identidad gráfica',
      persons: [
        {
          name: 'Jesús Santamaría',
          tw: 'RE_Ilustrador'
        }
      ]
    },
    {
      credit: 'Video',
      persons: [
        {
          name: 'Elizabeth Cruz',
          tw: 'elycruzla'
        },
        {
          name: 'Rodrigo Crespo',
          tw: 'rodrigocrespo_'
        }
      ]
    },
    {
      credit: 'Redes sociales',
      persons: [
        {
          name: 'Jorge Ramis',
          tw: 'jramiiis'
        }
      ]
    },
    {
      credit: 'Investigación',
      persons: [
        {
          name: 'Nayeli Roldán',
          tw: 'nayaroldan'
        },
        {
          name: 'Manuel Ureste',
          tw: 'ManuVPC'
        },
        {
          name: 'Miriam Castillo',
          tw: 'Micmoya'
        }
      ]
    },
    {
      credit: 'Dirección y edición general',
      persons: [
        {
          name: 'Tania L. Montalvo',
          tw: 'tanlmont'
        },
        {
          name: 'Francisco Sandoval',
          tw: 'MrTerremoto'
        },
        {
          name: 'Daniel Moreno',
          tw: 'dmorenochavez'
        }
      ]
    },
  ],
  colab: [
    {
      name: 'Nicolás',
      credit: 'Argentina'
    },
    {
      name: 'Raisa Valda Ampuero',
      medio: 'Warmi.Red',
      credit: 'Bolivia'
    },
    {
      name: 'Gisele da Silva Craveiro',
      medio: 'Colab-USP/ILDA',
      credit: 'Brasil'
    },
    {
      name: 'María Victoria Coutts Silva y Francisca Garay Massardo',
      credit: 'Chile'
    },
    {
      name: 'Juliana Galvis y Juan Pablo Marín Díaz',
      medio: 'Datasketch',
      credit: 'Colombia'
    },
    {
      name: 'Ana Sofía Ruiz',
      medio: 'Iniciativa Latinoamericana por los Datos Abiertos (ILDA)',
      credit: 'Costa Rica'
    },
    {
      name: 'Camilo Burneo y Cristina Burneo Salazar',
      credit: 'Ecuador'
    },
    {
      name: 'Suchit Chávez',
      medio: 'Plaza Pública',
      credit: 'Guatemala'
    },
    {
      name: 'Felisa Franco',
      medio: 'Secretaría de Finanzas',
      credit: 'Honduras'
    },
    {
      name: 'Lia Hernández',
      medio: 'IPANDETEC',
      credit: 'Panamá'
    },
    {
      name: 'Maricarmen Sequera',
      medio: 'TEDIC NGO',
      credit: 'Paraguay'
    },
    {
      name: 'Gabriela Flores Ch.',
      medio: 'Asociación civil Japiqay, Memoria y Ciudadanía',
      credit: 'Perú'
    },
    {
      name: 'Daniel Harel',
      credit: 'República Dominicana'
    },
    {
      name: 'Yuleina Carmona',
      credit: 'Venezuela'
    },
  ]
}


class Credits extends React.Component{
  render(){
    return(
      <div className="ss_h_s" id="ss_h_credits">
        <div className="ss_h_s_credits">
          <SSH1 bold="Créditos" />
          <CreditsGroup g={credits.main} />
          <CreditsGroup g={credits.colab} title={<>Agradecimientos <span>(En las equivalencias de términos empresariales)</span></>} />
        </div>
      </div>
    )
  }
}


class CreditsGroup extends React.Component{
  render(){
    var cs = ["ss_h_s_credits_group"];
    if(this.props.title){
      cs.push('ss_h_small');
    }
    return(
      <div className={cs.join(' ')}>
        {
          this.props.title ?
          <div className="ss_h_s_credits_group_title">
            {this.props.title}
          </div>
          : null
        }
        <div className="ss_h_s_credits_group_container">
          {this.props.g.map(function(e){
            return <CreditsPerson e={e} />
          })}
        </div>
      </div>
    )
  }
}

class CreditsPerson extends React.Component{
  render(){
    var e = this.props.e;
    var isg = e.persons ? true : false;
    var persons = isg ? e.persons : [e];

    return(
      <div className="ss_h_s_credits_group_container_p">
        <div className="ss_h_s_credits_group_container_i">
          <div className="ss_h_s_credits_group_container_p_i_c">{e.credit}</div>
          {
            persons.map(function(_e){
              return(
                <>
                <div className="ss_h_s_credits_group_container_p_i_n">
                  <div>{_e.name}</div>
                  {
                    _e.tw ?
                    <a href={"https://twitter.com/" + _e.tw} target="_blank">
                      @{_e.tw}
                    </a>
                    : null
                  }
                </div>
                {
                  _e.medio ?
                  <div className="ss_h_s_credits_group_container_p_i_m">
                    {_e.medio}
                  </div>
                  : null
                }
                </>
              )
            })
          }

        </div>
        <div className="ss_h_s_credits_group_container_p_d">
          <div></div>
        </div>
      </div>
    )
  }
}



class DiagBg extends React.Component{
  render(){
    return(
      <div className="ss_diagc">
        {this.props.children}
      </div>
    )
  }
}

class H1AndP extends React.Component{
  render(){
    return(
      <div className="ss_h_s_h1p">
        <SSH1 {...this.props} />
        <div className="ss_h_s_h1p_p">
          {this.props.text || this.props.children}
        </div>
      </div>
    )
  }
}

class UsaSinapsis extends React.Component{
  render(){
    var points = [
      {
        title: ['Siempre', 'gratis'],
        content: 'Sinapsis es y seguirá siendo gratuito para todo el público.'
      },
      {
        title: ['Abierto para la', 'comunidad'],
        content: <>Sinapsis es un proyecto de código abierto, ayúdanos a mantenerlo y contribuye a través de <a href="https://github.com/animalpolitico/sinapsis" target="_blank">nuestro repositorio</a>.</>,
        // link: {
        //   text: 'Visita nuestro repositorio.',
        //   url: 'https://github.com/animalpolitico/sinapsis'
        // }
      },
      {
        title: ['Tus datos son', 'privados'],
        content: 'Sinapsis funciona directamente en tu navegador, ninguna información se guarda en nuestros servidores, por lo que tu proyecto es confidencial.'
      },
      {
        title: ['Bases', 'precargadas'],
        content: 'Precargamos bases de datos públicas de Latinoamérica. Algunas de ellas son las de la investigación de La Estafa Maestra, las listas de empresas fantasmas del Servicio de Administración Tributaria (SAT) de México, las mil empresa más grandes por ingresos en 2017 de Colombia, entre otras.'
      },
    ]
    return(
      <div className="ss_h_s" id="ss_h_usa">
        <Txtr/>
        <H1AndP
          pre="Usa"
          bold="Sinapsis"
        >
          Sinapsis es una herramienta que permite cruzar bases de datos para obtener conexiones entre empresas (a través de personas, fechas, instancias, direcciones, contratos, etc).
          <br/><br/>
          Puedes elaborar tu propia base, añadir una existente (usando nuestra plantilla), o utilizar una de las bases públicas precargadas.
          <br/><br/>
          En Animal Político diseñamos este software pensando en las necesidades de periodistas e investigadores y al utilizar la herramienta podrás conocer y replicar la metodología de La Estafa Maestra.
          <br/><br/>
          ¡Úsala!
        </H1AndP>

        <Points p={points} />
      </div>
    )
  }
}


class FAQ extends React.Component{
  render(){
    var points = [
      {
        title: ['¿Sinapsis guarda tus datos personales?'],
        content: 'No, cada vez que haces un cruce de información se lleva a cabo en el navegador y no se guarda ninguna información. La base de datos que uses está sólo en tu computadora, sin embargo, puedes guardar y compartir tu archivo .sinapsis'
      },
      {
        title: ['¿Qué conocimientos necesito para usarlo?'],
        content: 'Necesitas tener nociones mínimas de uso de hojas de cálculo (Excel, SpreadSheets y afines) y saber navegar en internet.'
      },
      {
        title: ['¿Qué características debe tener mi computadora para usar Sinapsis?'],
        content: 'Utilizar alguno de los siguientes navegadores: Chrome, Safari, Firefox o Brave, de preferencia actualizado en su última versión. Entre mejores características tenga tu computadora, mayor eficiencia notarás en los procesos, sin embargo, te recomendamos tener al menos 4GB de memoria RAM y una computadora con disco de estado sólido.'
      },
      {
        title: ['¿Cuál es la diferencia entre contrato, convenio y transferencia?'],
        content: 'Contrato: es un documento legal entre una empresa y una instancia de gobierno, entre una empresa y otra empresa o entre una empresa y un prestador de servicios. Convenio: es un documento legal entre dos instancias o dependencias de gobierno. Transferencia: es el traspaso de dinero de una entidad a otra sin necesidad de un documento legal que lo avale.'
      },
      {
        title: ['¿Por qué hay círculos más grandes que otros?'],
        content: 'Existen dos formas de ver el tamaño de los círculos, por monto y por cantidad de coincidencias. Si eliges el de monto verás más grande a la empresa que se haya llevado una mayor cantidad de dinero, si eliges por coincidencias el círculo más grande será aquel que tenga más coincidencias, por ejemplo, si 30 contratos se hicieron el 20 de abril y 10 el 18 de septiembre, el círculo de 30 de abril será más grande. Esto puede ayudarte a detectar “focos rojos” muy rápido.'
      },
      {
        title: ['¿Qué significan las líneas azules entre un círculo y otro?'],
        content: 'Significan conexiones de algún tipo, el objetivo de Sinapsis es mostrar elementos conectados. Si quieres saber más detalles de la conexión siempre recomendamos regresar a la base de datos para ver todos los detalles de la empresa relacionada.'
      },
      {
        title: ['¿Cómo puedo compartir la visualización?'],
        content: 'En la parte superior derecha encontrarás un botón llamado "Guardar archivo" que te descargará un .zip con tu proyecto, tus bases de datos en formato CSV e imágenes del mapa de nodos que estás visualizando.'
      },
      {
        title: ['¿Cómo puedo colaborar en Sinapsis?'],
        contentPoints: [
          {
            title: 'Código',
            content: <>Sinapsis es código abierto, si quieres colaborar a nivel de programación y desarrollo puedes hacerlo en nuestro <a href="https://github.com/animalpolitico/sinapsis" target="_blank">repo de GitHub</a></>
          },
          {
            title: 'Bases de datos',
            content: <>Si tienes alguna base pública que no esté cargada envíala a <a href="mailto:sinapsis@animalpolitico.com">sinapis@animalpolitico.com</a></>
          },
          {
            title: 'Equivalencias de términos empresariales',
            content: <>Aún nos faltan varios países de la región, si el tuyo no está en Sinapsis envíanos un correo con los términos para añadirlo a la herramienta</>
          },
          {
            title: 'Casos de uso',
            content: <>¿Usaste Sinapsis para alguna investigación?, cuéntanos cómo fue tu experiencia por <a href="mailto:sinapsis@animalpolitico.com">correo</a> o en nuestro <a href="http://t.me/sinapsislat" target="_blank">grupo de Telegram</a></>
          },
        ]
      },
      {
        title: ['¿Cómo funciona?'],
        content: 'Sinapsis lee tus bases de datos y genera la información necesaria directamente en el navegador, estas bases de datos nunca pasan por nuestros servidores por lo cual tu información está completamente protegida.'
      },
    ]
    return(
      <div className="ss_h_s" id="ss_h_faq">
        <Txtr/>
        <H1AndP
          pre="Preguntas"
          bold="Frecuentes"
        >
          ¿Tienes una pregunta que no está listada aquí?
          <br/>
          <br/>
          ¡Contáctanos!
          <br/>
          <a href="mailto:sinapsis@animalpolitico.com">sinapsis@animalpolitico.com</a>
          <br/>
          <a href="https://t.me/sinapsislat" target="_blank">Grupo de Telegram</a>
        </H1AndP>
        <Points p={points} />
      </div>
    )
  }
}

var casosUso = [
  {
    logo_publisher: require('../static/apgray.png'),
    logo: require('../static/logoestafa.png'),
    bg: require('../static/bgestafa.png'),
    url: 'https://animalpolitico.com/estafa-maestra'
  },
  {
    logo_publisher: require('../static/apgray.png'),
    logo: require('../static/logoveracruz.png'),
    bg: require('../static/bgduarte.png'),
    url: 'https://animalpolitico.com/las-empresas-fantasma-de-veracruz'
  }
]

class Casos extends React.Component{
  render(){



    return(
      <div className="ss_h_s" id="ss_h_casos">
        <Txtr/>
        <H1AndP
          pre="Casos"
          bold="de uso"
          text="Sinapsis se construyó durante la investigación de los siguientes proyectos periodísticos."
        />

      <div className="ss_h_s_casos">
        {casosUso.map(function(c){
          return(
            <div
              className="ss_h_s_casos_caso"
              onClick={() => window.open(c.url)}
              style={{
                backgroundImage: 'url(' + c.bg + ')'
              }}
            >
            <div className="ss_h_s_casos_caso_logo">
              <img src={c.logo} />
            </div>
            <div className="ss_h_s_casos_caso_publisher">
              <div className="ss_h_s_casos_caso_publisher_a">
                Publicado por
              </div>
              <div className="ss_h_s_casos_caso_publisher_b">
                <img src={c.logo_publisher} />
              </div>
            </div>
            </div>
          )
        })}
      </div>

      </div>
    )
  }
}

class Points extends React.Component{
  render(){
    return(
      <div className="ss_h_points">
        {this.props.p.map(function(d){
          return <Point d={d} />
        })}
      </div>
    )
  }
}

class Point extends React.Component{
  render(){
    var d = this.props.d;
    return(
      <div className="ss_h_points_point">
        <div className="ss_h_points_point_decorator">
          <div></div>
        </div>
        <div className="ss_h_points_point_title">
          <div>
            {d.title[0]}
            {d.title[1] ? <strong>{d.title[1]}</strong> : null}
          </div>
        </div>
        <div className="ss_h_points_point_content">
          {
            d.content ?
            <div>
              {d.content}
            </div>
            : null
          }
          {
            d.contentPoints ?
            <div className="ss_h_subpoints">
              {
                d.contentPoints.map(function(p, i){
                  return (
                    <div className="ss_h_subpoints_p">
                      <div className="ss_h_subpoints_p_t"><span>{i + 1 + '.'}</span>{p.title}</div>
                      <div className="ss_h_subpoints_p_c">{p.content}</div>
                    </div>
                  )
                })
              }
            </div>
            : null
          }

        </div>
      </div>
    )
  }
}

class Txtr extends React.Component{
  render(){
    return(
      <div className="ss_txtr"></div>
    )
  }
}

class GoTo extends React.Component{
  render(){
    return(
      <div className="ss_h_s" id="ss_h_goto">
        <Txtr/>
        <div className="ss_h_s_goto_container">
          <div className="ss_h_s_goto_container_slogan">
            <span></span> Herramienta para descubrir<br /><strong>conexiones entre empresas</strong>
          </div>
          <div className="ss_h_s_goto_container_slogan_two">
            <span>#</span>SinapsisLat
          </div>
          <div className="ss_h_s_goto_container_img">
            <img src={require('../static/brain2.png')} />
          </div>
          <div style={{marginBottom: '1.2rem'}}>
            <SingleSharers />
          </div>


          <div className="ss_h_s_goto_container_ctas">
            <div className="ss_h_s_goto_container_ctas_cta" onClick={() => this.props.history.push(buildLink('/herramienta'))}>
              Ir a la herramienta
            </div>
          </div>

        </div>
      </div>
    )
  }
}

class Video extends React.Component{
  render(){
    return(
        <div className="ss_h_s" id="ss_h_video">
          <div className="ss_h_s_video">
            <div className="ss_h_s_video_ball"></div>
            <div className="ss_h_s_video_icon"><Icon>play_circle_outline</Icon></div>
            <SSH1 pre="¿Qué es" bold="Sinapsis?" />
          </div>
        </div>
    )
  }

}

class SSH1 extends React.Component{
  render(){
    return(
      <div className="ss_h_h1">
        <div className="ss_h_h1_s">{this.props.pre}</div>
        <div className="ss_h_h1_b">{this.props.bold}</div>
      </div>
    )
  }
}

class Landing extends React.Component{
  render(){
    return (
      <div className="ss_h_s" id="ss_h_landing">
        <div className="ss_h_s_c">
          <div className="ss_h_s_c_logo">
            <a href="https://animalpolitico.com" target="_blank">
              <img src={require('../static/api.png')} alt="Animal Político"/>
            </a>
          </div>

          <div className="ss_h_s_c_g">

          </div>
          <ScrollLink to="video" smooth={true}>
            <div className="ss_h_s_c_arrows">
              <Icon>keyboard_arrow_down</Icon>
              <Icon>keyboard_arrow_down</Icon>
            </div>
          </ScrollLink>
        </div>
      </div>
    )
  }
}

class SingleSharers extends React.Component{
  render(){

    /* Twitter */
    var u = 'https://twitter.com/intent/tweet';
    var p = {
      'url' : window.location.href,
      'via' : 'pajaropolitico',
      'text' : '#SinapsisLat: Herramienta para descubrir conexiones entre empresas'
    };
    var url = u + '?' + httpBuildQuery(p);
    var twurl = url;

    /* Facebook */
    var u = 'https://www.facebook.com/sharer/sharer.php';
    var p = {
      'u' : window.location.href,
    };
    var url = u + '?' + httpBuildQuery(p);
    var fburl = url;

    /* WhatsApp */
    var u = 'https://api.whatsapp.com/send';
    var p = {
      'text' : '#SinapsisLat: Herramienta para descubrir conexiones entre empresas ' + window.location.href,
    };
    var url = u + '?' + httpBuildQuery(p);
    var waurl = url;

    /* Mail */
    var u = 'mailto:';
    var p = {
      'body' : window.location.href,
      'subject' : '#SinapsisLat: Herramienta para descubrir conexiones entre empresas'
    };
    var url = u + '?' + httpBuildQuery(p);
    var mailurl = url;


    var shs = [
      {
        url: twurl,
        name: 'Twitter',
        icon: 'twitter'
      },
      {
        url: fburl,
        name: 'Facebook',
        icon: 'facebook'
      },
      {
        url: waurl,
        name: 'WhatsApp',
        icon: 'whatsapp'
      },
      {
        url: mailurl,
        name: 'Mail',
        icon: 'mail'
      },
    ];


    return(
      <div className="single_sharers">
        <div className="single_sharers_td single_sharers_td_label">Comparte</div>
        <div className="single_sharers_td single_sharers_td_content">
          {
            shs.map(function(sh){
              return(
                <div className="ssh_td">
                  <a href={sh.url} target="_blank" title={"Comparte en " + sh.name} alt={"Comparte en " + sh.name}>
                    <div className={"ssh_td_icon socicon-" + sh.icon}>
                    </div>
                  </a>
                </div>
              )

            })
          }
        </div>
      </div>
    )
  }
}
