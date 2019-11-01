import React from 'react'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from "react-router-dom";
import * as d3 from "d3";
import { Link as ScrollLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Helmet} from "react-helmet";
import buildLink from "../funcs/buildlink";

export default class Index extends React.Component{
  componentDidMount(){
    window.scroll(0,0);
  }
  render(){
    return(
      <div id="ss_sinapsis_home">
        <Helmet>
          <title>Sinapsis, una herramienta para descrubir conexiones entre empresas</title>
        </Helmet>
        <Landing />
        <DiagBg>
          <Video />
          <GoTo history={this.props.history}/>
        </DiagBg>
        <UsaSinapsis />
        <DiagBg>
          <Casos />
          <FAQ />
        </DiagBg>
        <Credits />
      </div>
    )
  }
}

var credits = {
  main: [
    {
      name: 'Yosune Chamizo',
      credit: 'Diseño de información',
      tw: '_yosune',
    },
    {
      name: 'Jesús Santamaría',
      credit: 'Diseño de identidad y UI',
      tw: 'RE_Ilustrador',
    },
    {
      name: 'Gilberto León',
      credit: 'Programación de versión alpha',
      tw: 'gilbertoleon'
    },
    {
      name: 'Mauricio Robles',
      credit: 'Programación de versión beta',
      tw: 'lopsum'
    }
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
      name: 'Juliana Galvis',
      medio: 'Datasketch',
      credit: 'Colombia'
    },
    {
      name: 'Ana Sofía Ruiz',
      medio: 'Iniciativa Latinoamericana por los Datos Abiertos (ILDA)',
      credit: 'Costa Rica'
    },
    {
      name: 'Camilo Burneo',
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
          <CreditsGroup g={credits.colab} title="Traducciones" />
        </div>
      </div>
    )
  }
}


class CreditsGroup extends React.Component{
  render(){
    return(
      <div className="ss_h_s_credits_group">
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
    return(
      <div className="ss_h_s_credits_group_container_p">
        <div className="ss_h_s_credits_group_container_i">
          <div className="ss_h_s_credits_group_container_p_i_c">{e.credit}</div>
          <div className="ss_h_s_credits_group_container_p_i_n">
            <div>{e.name}</div>
            {
              e.tw ?
              <a href={"https://twitter.com/" + e.tw} target="_blank">
                @{e.tw}
              </a>
              : null
            }
          </div>
          {
            e.medio ?
            <div className="ss_h_s_credits_group_container_p_i_m">
              {e.medio}
            </div>
            : null
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
          {this.props.text}
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
        title: ['Apoyado por la', 'comunidad'],
        content: 'Sinapsis es mantenido por la comunidad al ser de código abierto.',
        link: {
          text: 'Visita nuestro repositorio.',
          url: 'https://github.com/animalpolitico/sinapsis'
        }
      },
      {
        title: ['Tus datos son', 'privados'],
        content: 'Sinapsis funciona directamente en tu navegador, ninguna información es guardada en nuestros servidores por lo cual tu proyecto es confidencial.'
      },
      {
        title: ['Bases', 'precargadas'],
        content: 'Precargamos bases de datos públicas de latinoamérica. Algunas de ellas son La Estafa Maestra, las listas de empresas fantasmas del SAT entre otras'
      },
    ]
    return(
      <div className="ss_h_s" id="ss_h_usa">
        <Txtr/>
        <H1AndP
          pre="Usa"
          bold="Sinapsis"
          text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        />
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
        content: 'No, cada vez que haces un cruce de información se lleva a cabo en el navegador y no se guarda ninguna información, la base de datos que uses está sólo en tu computadora, sin embargo, puedes guardar y compartir tu archivo .sinapsis'
      },
      {
        title: ['¿Qué conocimientos necesito para usarlo?'],
        content: 'Necesitas tener nociones mínimas de uso de hojas de cálculo (Excel, SpreadSheets y afines) y saber navegar en internet.'
      },
      {
        title: ['¿Qué características debe tener mi computadora para usar Sinapsis?'],
        content: 'Utilizar un navegador moderno (Chrome, Safari, Firefox o Brave), de preferencia actualizado en su ultima versión. Entre mejores características tenga tu computadora, mayor eficiencia notarás en los procesos, sin embargo, te recomendamos tener al menos 4GB de memoria RAM y una computadora con disco de estado sólido'
      },
      {
        title: ['¿Cuál es la diferencia entre contrato, convenio y transferencia?'],
        content: 'Contrato: es un documento legal entre una empresa y una instancia de gobierno, entre una empresa y otra empresa o entre una empresa y un prestador de servicios. Convenio: es un documento legal entre dos instancias o dependencias de gobierno. Transferencia: es el traspaso de dinero de una entidad a otra sin necesidad de un documento legal que lo avale'
      },
      {
        title: ['¿Por qué hay círculos más grandes que otros?'],
        content: 'Existen dos formas de ver el tamaño de los círculos, por monto y por cantidad de coincidencias. Si eliges el de monto verás más grande a la empresa que se haya llevado una mayor cantidad de dinero, si eliges por coincidencias el círculo más grande será aquel que tenga más coincidencias, por ejemplo, si 30 contratos se hicieron el 20 de abril y 10 el 18 de septiembre, el círculo de 30 de abril será más grande. Esto puede ayudarte a detectar “focos rojos” muy rápido'
      },
      {
        title: ['¿Qué significan las líneas azules entre un círculo y otro?'],
        content: 'Significan conexiones de algún tipo, el objetivo de Sinapsis es mostrar elementos conectados, si quieres saber más detalles de la conexión siempre recomendamos regresar a la base de datos para ver todos los detalles de la empresa relacionada'
      },
      {
        title: ['¿Cómo puedo compartir la visualización?'],
        content: 'En la parte superior derecha encontrarás un botón llamado "Guardar archivo" que te descargará un .zip con tu proyecto, tus bases de datos en formato CSV e imágenes del mapa de nodos que estás visualizando.'
      },
      {
        title: ['¿Cómo puedo colaborar en Sinapsis?'],
        content: 'Sinapsis es código abierto, si quieres colaborar a nivel de programación y desarrollo puedes hacerlo en nuestro repo de GitHub'
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
          text="¿Tienes una pregunta que no está listada aquí? ¡Contáctanos!"
        />
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
          text="Investigaciones periodísticas donde se utilizó Sinapsis"
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
          <div>
            {d.content}
          </div>
          {d.link ? <a href={d.link.url} target="_blank">{d.link.text}</a> : null}
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
          <div className="ss_h_s_goto_container_img">
            <img src={require('../static/brain2.png')} />
          </div>

          <div className="ss_h_s_goto_container_ctas">
            <div className="ss_h_s_goto_container_ctas_cta" onClick={() => this.props.history.push(buildLink('/construir'))}>
              Ir a Sinapsis
            </div>
            <div className="ss_h_s_goto_container_ctas_cta hcta_outlined" onClick={() => this.props.history.push(buildLink('/construir/estafa-maestra'))}>
              Explorar La Estafa Maestra
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
      <Element name="video">
        <div className="ss_h_s" id="ss_h_video">
          <div className="ss_h_s_video">
            <div className="ss_h_s_video_ball"></div>
            <div className="ss_h_s_video_icon"><Icon>play_circle_outline</Icon></div>
            <SSH1 pre="¿Qué es" bold="Sinapsis?" />
          </div>
        </div>
      </Element>
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
