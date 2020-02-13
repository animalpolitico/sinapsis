import React from 'react';
import * as d3 from "d3";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Tooltip from 'tooltip.js';
import { saveAs } from 'file-saver';
import Paper from '@material-ui/core/Paper';
import formatMoney, {convertCurrency} from '../../funcs/formatMoney';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Switch from '@material-ui/core/Switch';
import CountTo from 'react-count-to';
import Map from './map';
import { isMexico, _t, getCurrentCountry } from '../../vars/countriesDict';
import Analytics from './analytics';
import Grow from '@material-ui/core/Grow';
var slugify = require('slugify');
var startLoad = new Event('sinapsisStartLoad');
var endLoad = new Event('sinapsisEndLoad');
var JSZip = require("jszip");


var mobile = require('is-mobile');

export default class DbViz extends React.Component{
  state = {
    showSearch: true,
    showcontrols: mobile({tablet: true}) ? false : true,
    displayAnalytics: false,
    displayMap: false,
    r: 0
  }
  constructor(props){
    super(props);
    this.nodesRef = React.createRef();
  }

  toggleAnalytics(){
    window.dispatchEvent(new Event('sinapsisStartLoad'));
    var ns = !this.state.displayAnalytics;
    this.setState({
      displayAnalytics: ns,
      r: Math.random() * 1000000
    })
    document.body.classList.toggle('ss_showing_analytics', ns);

    if(!ns){
      window.dispatchEvent(new Event('sinapsisEndLoad'));
    }
  }

  toggleMap(){
    this.setState({
      displayMap: !this.state.displayMap
    })
  }

  toggleControls(){
    this.setState({
      showcontrols: !this.state.showcontrols
    })
  }

  closeAllWindows(){
    this.setState({
      displayAnalytics: false,
      displayMap: false,
      openListado: false
    })
    this.nodes.setState({
      openListado: false
    })
    document.body.classList.remove('ss_showing_analytics');
  }

  render(){
    var self = this;
    var csn = ['nodes_controls'];
    if(this.state.showcontrols){
      csn.push('nodes_controls_showing');
    }


    return(
      <>
      <div className="db_viz">
        {
          this.nodes && !this.state.hideNoResults ?
          <SSNoResults parent={this} nodes={this.nodes} onClose={() => this.setState({hideNoResults: true})}/>
          : null
        }
        <Nodes ref={(ref) => this.nodes = ref} parent={this} categoryToggle={this.categoryToggle}/>

        <div className={csn.join(' ')}>
          <div className="nodes_controls_button" onClick={() => this.toggleControls()}>
            <Icon>{this.state.showcontrols ? 'keyboard_arrow_right' : 'keyboard_arrow_left'}</Icon>
          </div>
          <div className="nodes_controls_container" >
            <SSDBControl nodesMap={this.nodes} />
            <SSCategoryToggle nodesMap={this.nodes} ref={(ref) => this.categoryToggle = ref} />
            <SSNodeSize nodesMap={this.nodes}/>
          </div>
        </div>
        <div className="project_buttons" id="db_ij_projectbuttons">
          {
            !this.state.displayAnalytics ?
          <div className="project_buttons_button"
            id="db_ij_projectbuttons_a"
            onClick={function(){
              self.closeAllWindows();
              self.toggleAnalytics();
            }}
            >
            <Icon>bar_chart</Icon>
            <div>Estadísticas</div>
          </div>
          : null }
          {
            !this.state.displayMap ?
          <div className="project_buttons_button"
            id="db_ij_projectbuttons_b"
            onClick={function(){
              self.closeAllWindows();
              self.toggleMap();
            }}
          >
            <Icon>map-marker</Icon>
            <div>Mapa</div>
          </div>
          : null }
          {
            !this.state.openListado ?
          <div
            className="project_buttons_button"
            id="db_ij_projectbuttons_c"
            onClick={function(){
              self.closeAllWindows();
              self.nodes.openListado([], self);
            }}
            parent={this}>
            <Icon>format_list_bulleted</Icon>
            <div>Coincidencias</div>
          </div>
          : null }
          {
            this.state.displayMap || this.state.displayAnalytics || this.state.openListado ?
          <div className="project_buttons_button" onClick={() => this.closeAllWindows()}>
            <Icon>bubble_chart</Icon>
            <div>Nodos</div>
          </div>
          : null }
        </div>
          {
            this.state.displayAnalytics ?
            <Analytics onClose={() => this.toggleAnalytics()} r={this.state.r} nodesMap={this.nodes}/>
            : null
          }
          {
            this.state.displayMap ?
            <Map onClose={() => this.toggleMap()}/>
            : null
          }
      </div>
      <Search nodesMap={this.nodes}/>
      </>
    )
  }
}

class SSDBControl extends React.Component{
  state = {
    hiddenDbs: [],
    showing: true,
    mch: 'all'
  }

  componentDidMount(){
    var self = this;
    window.addEventListener('ss_activate_all_dbs', () => this.showAll())
    window.addEventListener('sinapsis_deleted_db', () => this.handleMostrarCoincidencias('all'));
    window.addEventListener('ss_toggle_db', function(e){
      try{
        var id = e.detail.id;
        self.toggleDb(id);

      }catch{

      }
    })

  }

  toggleDb(dbid){
    window.dispatchEvent(startLoad);
    var self = this;
    setTimeout(function(){
      var s = self.state.hiddenDbs;
      if(s.indexOf(dbid) == -1){
        var h = true;
        s.push(dbid);
      }else{
        var h = false;
        s.splice(s.indexOf(dbid), 1);
      }
      self.setState({
        hiddenDbs: s
      })

      var o = {
        id: dbid,
        h: h
      }

      window.dispatchEvent(new CustomEvent('ss_on_db_toggle', {'detail': o}));

      window.dbf.hideDbs(s);
      var ev = new Event('ss_lazy_indicator');
      window.dispatchEvent(ev);
    }, 500)
  }

  showAll(){
    window.dispatchEvent(startLoad);
    var self = this;
    setTimeout(function(){
      var s = [];
      self.setState({
        hiddenDbs: s
      })
      window.dbf.hideDbs(s);
    }, 500)
  }

  getVisibleDbs(){
    var self = this;
    var dbs = window.dbf.getDbs();
        dbs = Object.values(dbs);
    return dbs.filter(db => self.state.hiddenDbs.indexOf(db.id) == -1);
  }

  handleMostrarEmpresas(v){
    var showall = v == "all";
    if(showall){
      this.setState({
        showWarning: true
      })
    }else{
      this.setState({
        mostrarV: v
      })
      window.dbf.obj.mostrarV = false;
      window.dispatchEvent(startLoad);
      this.props.nodesMap.toggleEmpresas(showall);
    }
  }

  proceedTodas(){
    window.dispatchEvent(startLoad);
    this.props.nodesMap.toggleEmpresas(true);
    this.setState({
      mostrarV: 'all',
      showWarning: false
    })
    window.dbf.obj.mostrarV = true;
    setTimeout(function(){
      window.dispatchEvent(new Event('ss_change_mostrarv'))
    }, 100);
  }

  handleMostrarCoincidencias(type){
    window.dispatchEvent(startLoad);
    this.props.nodesMap.toggleOnlyAll(type);
    this.setState({
      mch: type
    })
  }

  render(){
    var self = this;
    var dbs = window.dbf.getDbs();
        dbs = Object.values(dbs);

    var visible = this.getVisibleDbs();
    var totalPotentialEmpresas = 0;
    visible.map(function(_db){
      if(_db.empresas){
        totalPotentialEmpresas += Object.values(_db.empresas).length;
      }
    })

    return(
      <div className="ss_control_node_filter ss_control_group" id="db_vc_tdb">
        <div className="ss_control_group_container">
          <div className="ss_control_group_container_title" style={{cursor: "pointer"}} onClick={() => this.setState({showing: !this.state.showing})}>
            <div>Bases de datos</div><Icon>{this.state.showing ? "expand_more" : "expand_less"}</Icon>
          </div>
        </div>
        {
          this.state.showing ?
          <>
            <div className="ss_control_group_container_dbs">
              {dbs.map(function(db){
                if(db.empresas){
                  var esize = Object.values(db.empresas).length
                }else{
                  var esize = 0;
                }
                var ish = self.state.hiddenDbs.indexOf(db.id) > -1;
                var cs = ["ss_db"];
                if(ish){
                  cs.push("ss_db_hidden");
                }
                return(
                  <div className={cs.join(' ')}  onClick={() => self.toggleDb(db.id)}>
                    <div className="ss_db_info">
                      <div className="ss_db_info_name">
                        {db.name}
                      </div>
                      <div className="ss_db_info_empresas">
                        <strong>{esize}</strong> empresas
                      </div>
                    </div>
                    <div className="ss_db_toggle">
                      <Icon>{!ish ? "visibility" : "visibility_off"}</Icon>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="ss_control_group_container_extracontrols">
              {
                visible.length > 1 ?
                <div className="ss_control_extra">
                  <label>Mostrar coincidencias</label>
                  <div className="ss_control_extra_f"><Icon>keyboard_arrow_down</Icon></div>
                  <select onChange={(e) => this.handleMostrarCoincidencias(e.target.value)} value={this.state.mch}>
                    <option value="all">TODAS (dentro de la misma base de datos y entre otras bases de datos)</option>

                    <option value="twoormore">MÍNIMO 2 (tiene que coincidir en por lo menos 2 distintas bases)</option>
                      {
                        visible.length > 2 ?
                        <option value="onlyinall">ENTRE LAS {visible.length} (tiene que coincidir en las {visible.length} bases de datos)</option>
                        : null
                      }
                  </select>
                </div>
                : null
              }

              <div className="ss_control_extra">
                <label>Mostrar empresas</label>
                <div className="ss_control_extra_f"><Icon>keyboard_arrow_down</Icon></div>
                <select onChange={(e) => this.handleMostrarEmpresas(e.target.value)} value={this.state.mostrarV}>
                  <option value="default">Solo con coincidencias</option>
                  <option value="all">Todas las empresas</option>
                </select>
              </div>

              <Dialog open={this.state.showWarning} onClose={() => this.setState({showWarning: false})}>
                <DialogTitle id="form-dialog-title"><Icon style={{color: "yellow"}}>warning</Icon>Cuidado</DialogTitle>
                  <DialogContent>
                    Esta acción va a mostrar todas las empresas de tu proyecto, esto podría saturar la visualización de nodos
                    <br/>
                    ¿Deseas continuar?
                  </DialogContent>
                <DialogActions>
                  <Button color="secondary" onClick={() => this.setState({showWarning: false, mostrarV: 'default'})}>
                    No, regresar
                  </Button>
                  <Button color="secondary" onClick={() => this.proceedTodas()}>
                    Sí, continuar
                  </Button>
                </DialogActions>
              </Dialog>



            </div>
          </>
        : null
        }

      </div>
    )
  }
}

function getTypeColor(t){
  switch(t){
    case "empresa":
      return "#F6F6F6";
    break;
    case "rfc":
      return "#FFFF00";
    break;
    case "date":
      return "#885BFA";
    break;
    case "website":
    return "#866129";
    break;
    case "person":
      return "#FF00A8";
    break;
    case "titular":
      return "#FF0054";
    break;
    case "email":
      return "#A8FF00";
    break;
    case "convenio":
      return "#ff9900";
    break;
    case "instancia":
      return "#222";
    break;
    case "contrato":
      return "#885BFA"
    break;
    case "no_notaria":
    return "#00FFFF";
    break;
    case "address":
      return "#fb5d5d";
    break;
    case "phone":
      return "rgb(53, 138, 125)";
    break;
    default:
      return "#888888";
    break;
  }
}

function getTypeName(t){
  var o = false;
  switch(t){
    case "empresa":
       o = "Empresa";
    break;
    case "rfc":
      o =  "RFC";
    break;
    case "website":
      o =  "Sitio web";
    break;
    case "person":
      o =  "Persona";
    break;
    case "date":
      o =  "Fecha";
    break;
    case "email":
      o = "Correo electrónico";
    break;
    case "convenio":
      o =  "Convenio / Contrato";
    break;
    case "instancia":
      o =  "Instancia / Dependencia";
    break;
    case "titular":
      o =  "Titular de instancia";
    break;
    case "no_notaria":
      o =  "No. notaría";
    break;
    case "contrato":
      o =  "Convenio / Contrato";
    break;
    case "address":
      o = "Dirección";
    break;
    case "phone":
      o = "Teléfono";
    break;
    default:
      o = t;
    break;
  }
  return _t(o);
}

function getTypeIcon(t){
  var o = "";
  switch(t){
    case "empresa":
      o =  "apartment";
    break;
    case "rfc":
      o =  "home_work";
    break;
    case "website":
      o =  "public";
    break;
    case "person":
      o =  "person";
    break;
    case "date":
      o =  "date_range";
    break;
    case "email":
      o = "mail";
    break;
    case "convenio":
      o =  "monetization_on";
    break;
    case "instancia":
      o =  "business";
    break;
    case "titular":
      o =  "person_outline";
    break;
    case "no_notaria":
      o =  "how_to_reg";
    break;
    case "contrato":
      o =  "monetization_on";
    break;
    case "address":
      o = "my_location";
    break;
    case "phone":
      o = "phone";
    break;
    default:
      o = "trip_origin";
    break;
  }
  return o;
}


export class Search extends React.Component{
  state = {
    results: [],
    v: '',
    showResults: true
  }

  searchResults(v){
    this.setState({
      v: v,
      showResults: true
    })
    var f = [];

    if(v){
      var sv = slugify(v, {lower: true});

      d3.selectAll('.node')
        .each(function(n){
          var ns = slugify(n.name, {lower: true});
          var add = false;
          if(ns.length > sv.length){
            add = ns.indexOf(sv) > -1;
          }else{
            add = sv.indexOf(ns) > -1;
          }
          if(add && ns.length > 1){
            f.push(n);
          }
        })
    }

    this.setState({
      results: f
    })

  }


  handleResultSelect(v){
    this.setState({
      v: v,
      showResults: false
    })
  }

  render(){
    var r = Math.random() * 10000000;
    document.body.classList.toggle('ss_showing_search', this.state.results.length > 0);
    return(
      <ClickAwayListener onClickAway={() => this.setState({showResults: false})}>
        <div className="db_search_nodes" id="db_ij_search">
          <div className="db_search_nodes_input">
            <input
              onFocus={() => this.searchResults(this.state.v)}
              value={this.state.v}
              placeholder="Buscar..."
              type="text"
              onChange={(e) => this.searchResults(e.target.value) }
            />
            <Icon>search</Icon>
          </div>
          <div className="db_search_nodes_results">
            {
              this.state.showResults ?
                <SearchResults r={r} nodeMap={this.props.nodesMap} results={this.state.results} v={this.state.v} onSelect={(v) => this.handleResultSelect(v)}/>
              : null
            }
          </div>
        </div>
      </ClickAwayListener>
    )
  }
}

class SearchResults extends React.Component{
  state = {
    selectedIndex: 0
  }

  componentDidMount(){
    this.set();
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  set(){
    this.setState({
      selectedIndex: 0
    })
    this.results = [];
  }

  componentDidUpdate(pp){
    if(pp.r !== this.props.r){
      this.set();
    }
  }

  handleKeyDown(e){
    var w = e.which;
    /** Up or down **/
    if(w == 38 || w == 40){
      var c = this.state.selectedIndex;
      var r = this.props.results;
      var max = r.length;
      var i = w == 38 ? -1 : 1;
          c += i;
          c = Math.max(0, c);
          c = Math.min(max, c);
      this.setState({
        selectedIndex: c
      })

      /** Scrollea el contenedor **/
      try{
        var em = document.getElementById('ss_r_' + c);
        var top = em.offsetTop - 50;
            top = Math.max(top, 0);
        if(top > (this.resultsContainer.offsetHeight - 50)){
          this.resultsContainer.scrollTop = top;
        }

      }catch(err){

      }

    }

    if(w == 13){
      window.dispatchEvent(new Event('sinapsis_close_edit'));
      var r = this.props.results;
      var em = r[this.state.selectedIndex - 1];
      if(em){
        this.isolateNode(em.id, em.name);
      }
    }


  }

  isolateNode(id, n){
    if(this.props.nodeMap){
      this.props.nodeMap.isolateNode(id);
      this.props.nodeMap.setInitialZoom();
      this.props.onSelect(n);
    }
  }

  render(){
    var self = this;
    var r = this.props.results;

    var s = "";

    if(r.length){
      s = r.length + ' resultado' + (r.length > 1 ? 's' : '') ;
    }else{
      s = "Sin resultados";
    }


    return(
      <div className="db_search_nodes_results_c">
        {
          r.length ?
        <div className="db_search_nodes_results_c_r" ref={(ref) => this.resultsContainer = ref}>
          {r.map(function(result, i){
            var cs = ['ss_search_result'];
            if((i + 1) == self.state.selectedIndex){
              cs.push('ss_selected');
            }
            var c = getTypeColor(result.type);
            var fromdb = false;
            if(result.type == "empresa"){
              fromdb = result.fields[0].fromdb;
              fromdb = window.dbf.getDb(fromdb).name;
            }

            return(
              <div id={"ss_r_" + (i + 1)}className={cs.join(' ')} onClick={(e) => self.isolateNode(result.id, result.name)}>
                <div className="ss_search_result_container">
                  <div className="ss_search_result_type">

                    <span style={{color: c}}>/</span> <div>{getTypeName(result.type)}</div>
                  </div>
                  {
                    fromdb ?
                    <div style={{fontSize: '0.8em', marginBottom: '2px', marginTop: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)'}}>{fromdb}</div>
                    : null
                  }
                  <div className="ss_search_result_name">
                    {result.name}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        : null}

        {
          this.props.v.length ?
          <div className="db_search_nodes_results_c_count">
            {s}
          </div>
          : null
        }
      </div>
    )
  }

}

class Nodes extends React.Component{
  state = {
    hasloaded: false,
    loading: false,
    isPerfectZoom: true,
    coincidencias: 0,
    nodeSizeParam: 'monto',
    showall: false,
    onlyinall: "all",
    displayDoi: true,
    minimizeDoi: false,
    initLoaded: false,
    isbig: false,
    level: 0,
    listadoTypes: [
      "rfc",
      "website",
      "person",
      "date",
      "email",
      "phone",
      "instancia",
      "convenio",
      "address",
      "no_notaria",
      ...window.dbf.getNewOtros()
    ],
    openListado: false
  }
  componentDidMount(){
    var self = this;
    self.set();
    window.addEventListener('sinapsisBigModified', function(){
      d3.selectAll('#db_viz_nodes_canvas *').remove();
      self.set();
    })
    window.addEventListener('sinapsisDrawerToggle', function(){
      setTimeout(function(){
        self.resize();
      }, 300);
    })

    window.addEventListener('sinapsis_lang_change', function(){
      d3.selectAll('#db_viz_nodes_canvas *').remove();
      self.set();
    })

    window.addEventListener('ss_lazy_indicator', function(){
      var cs = document.getElementsByClassName('db_viz_glow_indicator')[0];
      cs.classList.remove('ss_active');
      cs.classList.add('ss_active');
      setTimeout(function(){
        cs.classList.remove('ss_active');
      }, 1000);
    })

    window.addEventListener('ss_isolate_node', function(e){
      var id = e.detail;
      if(id == "ij"){
        d3.selectAll('.node[data-name="ESGER, Servicios y Construcciones, S. A. de C. V."]')
          .each(d => id = d.id)
        console.log('id', id);
      }
      self.isolateNode(id);
    })

    window.addEventListener('ss_release_node', function(){
      self.releaseNode();
    })

    window.addEventListener('keydown', function(e){
      var w = e.which;
      if(w == 27){
        self.releaseNode();
      }
      if((w == 187 || w == 189) || (w == 171 || w == 173) && self.state.isolatingNode){
        self.addLevel((w == 187 || w == 171) ? 1 : -1);
      }
    })

    window.addEventListener('ss_add_level', function(){
      self.addLevel(2);
    })


  }

  numberWithCommas(x) {
    return window.dbf.numberWithCommas(x);
  }

  resize(){
    try{
      var container = this.container;
      const width = container.offsetWidth,
            height = container.offsetHeight;
      this.canvas.attr('width', width)
                 .attr('height', height);
      this.setInitialZoom();
    }catch(ex){

    }

  }


  setBig(matches){


  }

  async set(){
    try{
      if(this.props.categoryToggle){
        this.props.categoryToggle.reset();
      }
      if(this.state.initLoaded){
        window.dispatchEvent(startLoad);
      }
      d3.selectAll('#db_viz_nodes_canvas *').remove();
      this.setState({
        loading: true,
        isolatingNode: null
      })
      var self = this;
      var container = this.container;
      var onlyinall = this.state.onlyinall;
      var nodesData = window.dbf.getMatches(onlyinall);

      var s = JSON.stringify(window.dbf.obj).length * 0.000000125;
      if(s > 5000){
        /* Caso donde es muy grande el proyecto */
        this.setState({
          isbig: true
        })
        window.dbf.obj.isbig = true;
        this.setBig(nodesData);
        return;
      }
      window.dbf.obj.isbig = false;
      this.setState({
        isbig: false
      })

      this.nodesData = nodesData;
      this.moneyLinks = nodesData.moneyLinks;
      var _links = this.buildLinks();
      nodesData.links = _links;

      this.nodesData = nodesData;

      var nodesData = this.filterInitNodes();

      this.nodesData = nodesData;

      const width = container.offsetWidth,
            height = container.offsetHeight;
      var canvas = d3.select("#db_viz_nodes_canvas")
                     .attr('width', width)
                     .attr('height', height);
      this.canvas = canvas;


    var bgs = canvas.append('rect')
            .attr('class', 'nodes_container_bg')
            .attr('width', width)
            .attr('height', height)
            .attr('fill', 'transparent')


      var simulation = d3.forceSimulation()
                         .force("charge", d3.forceManyBody(1))
                         .force("link",
                            d3.forceLink()
                              .id(function(d){
                                return d.id;
                              })
                          )
                         .force('collide', d3.forceCollide(1000).strength(0.2))
                         .force('center', d3.forceCenter(width / 2, height / 2))
                         .force("y", d3.forceY(0.01))
                         .force("x", d3.forceX(0.01).x(1.1));

     this.simulation = simulation;
     this.nodesContainer = canvas.append('g').attr('class', 'nodes_container');

     var zoom = d3.zoom()
                  .extent([[0, 0], [width, height]])
                  .scaleExtent([-3, 8])
                  .on("zoom", function(z){
                     var d = d3.event.transform;
                     self.setState({
                       isPerfectZoom: false
                     })
                     canvas.select('.nodes_container').attr('transform', d);
                   })
                   .on('start', function(){
                     document.getElementById('db_viz_nodes_canvas').style.cursor = "grabbing";
                     d3.selectAll('.ss_guide').style('opacity', 1);
                   })
                   .on('end', function(){
                     document.getElementById('db_viz_nodes_canvas').style.cursor = "grab";
                     d3.selectAll('.ss_guide').style('opacity', 0);
                   })
     this.zoom = zoom;
     canvas.call(zoom)


     simulation.nodes(nodesData.nodes)
               .on('tick', this.drawNodes)




     simulation.force('link')
               .links(nodesData.links);


      var data = this.nodesData;
      var circlesData = [];
      var labelsData = [];

      /* Convenios solo vía contratos */
      data.links = data.links.filter(function(l){
        if(l.type == "money"){
          return true;
        }
        var s = l.source;
        var t = l.target;
        var pass = true;
        if(s.type == "instancia"){
          var f = s.fields;
          pass = false;
          f.map(function(_f){
            if(_f.group == "contrato"){
              pass = true;
            }
          })
        }
        return pass;
      })


      data.nodes.map(function(d){
        var t = d.type;
        var labelTypes = ['dependencia', 'instancia', 'titular'];
        var istitular = false;
        if(d.fields && d.fields.length && d.type == "person"){
            d.fields.map(function(_d){
              if(_d.matchWith.indexOf('titular') > -1){
                istitular = true;
                d.istitular = true;
              }
            })
        }
        if(labelTypes.indexOf(t) > -1 || istitular){
          labelsData.push(d);
        }else{
          circlesData.push(d);
        }
      })

      var lMin = 8;
      var lMax = 50;

      var lRange=[0, 1700];

      var lMaxSize = Math.min(lRange[1], data.links.length);

      var lPct = Math.abs(1 - (lMaxSize / lRange[1]));

      var lSize = (lMax * lPct) + lMin;



      var links = self.nodesContainer
                     .selectAll('line')
                     .data(data.links)
                     .enter()
                     .append('line')
                     .attr('stroke-width', Math.round(lSize) +'px')
                     .attr('class', 'nodes_link')
                     .attr('data-from', l => l.source.id)
                     .attr('data-from-type', l => l.source.type)
                     .attr('data-to', l => l.target.id)
                     .attr('data-to-type', l => l.target.type)
                     .attr('stroke-dasharray', (d) => d.type == "money" ? '20,20' : 0)
                     .attr('stroke', function(d){
                         return d.type == "money" ? 'rgba(232, 224, 43, 0.38)' : 'rgba(0, 114, 255, 0.4)';
                     })
      this.links = links;





      bgs.on('click', function(){
              if(self.state.isolatingNode){
                self.releaseNode();
              }
              self.simulation.stop();
            })

      var firstC = this.getCoincidenciasSize();

      this.setState({
        firstCoincidencias: firstC
      })

      var nodesLabels = self.nodesContainer
                            .selectAll('.nodes_label')
                            .data(labelsData)
                            .enter(labelsData)
                            .append('g')
                            .attr('class', 'nodes_label node')
                            .attr('data-id', d => d.id)
                            .attr('data-type', function(d){

                              return d.type;
                            })
                            .call(this.drag())

      var rects = nodesLabels
                   .append('rect')
                   .attr('fill', function(d){
                     var c = getTypeColor(d.type);
                     if(d.type == "instancia"){

                       var counts = {r: 0, e: 0};
                       d.isreceptor = false;
                       d.isemisor = false;
                       d.fields.map(function(_f){
                         if(_f.group == "convenio"){
                           var k = _f.category == "receptor" ? "r" : "e";
                           counts[k] = counts[k] + 1;
                         }
                       })
                       if(counts.r > 0){
                         /* Diferencia de emisor/receptor */
                         d.isreceptor = true;
                       }
                       if(counts.e > 0){
                         d.isemisor = true;
                       }
                     }
                     return c;
                   })
                   .attr('stroke-width', 24)
                   .attr('stroke', d => d.type == "instancia" ? d.isreceptor ? "#FF0054" : "#3372ff" : null)

      nodesLabels.filter(d => d.isreceptor && d.isemisor)
                 .append('polyline')
                 .attr('stroke-width', 24)
                 .attr('stroke', "#3372ff")
                 .attr('fill', 'rgba(0,0,0,0)')


      nodesLabels.append('text')
                 .text((d) => d.name.toUpperCase())
                 .attr('fill', 'white')
                 .attr('font-family', 'benton-sans, sans-serif')
                 .attr('font-size', 350)
                 .attr('font-weight', (d) => d.type == "person" ? 600 : 400)
                 .attr('text-anchor', 'middle')

      var nodesPaddingLeft = 100;
      var nodesPaddingTop = 45;

      nodesLabels.each(function(d){
        var g = d3.select(this);

        var bb = null;
        var t = g.selectAll('text')
                  .each(function(){
                    bb = this.getBBox();
                  })

        if(bb){
          var w = bb.width;
          var h = bb.height;

          var ww = w + (nodesPaddingLeft * 2);
          var hh = h + (nodesPaddingTop * 2);

          g.selectAll('rect')
           .attr('width', ww)
           .attr('height', hh)
           .attr('x', -ww / 2)
           .attr('y', -h + nodesPaddingTop)

          g.selectAll('polyline')
           .attr('points', function(){
             var p = ww / 2 + ' ' + hh + ' ' + 0 + ' ' + hh + ' ' + 0 + ' ' + 0 + ' ' + ww / 2 + ' ' + 0;
             return p;
           })
           .attr('transform', 'translate('+ -ww / 2 +', '+ (-h + 45) +')')

        }

      })



      var nodesCircles = self.nodesContainer
                        .selectAll('circle')
                        .data(circlesData)
                        .enter()
                        .append('circle')
                        .attr('class', 'node node_circle')
                        .attr('data-name', (d) => d.name)
                        .attr('data-id', d => d.id)
                        .attr('data-type', d => d.type)
                        .attr('data-sum', function(d){
                          var t = d.type;
                          if(t == "empresa"){
                            var s = d.sum ? d.sum : 0;
                            return s;
                          }else{
                            return "notvalid";
                          }
                        })
                        .attr('id', (d, i) => 'node_'+i)
                        .attr('stroke', function(d){
                          var c = "#2a2a2a";
                          if(d.type == "empresa"){
                            var bs = d.banderasRojas;
                            var hbs = bs.length > 0;
                            d.hasBanderasRojas = hbs;
                            d.bs = bs;
                            if(hbs){
                              return "#ff4b33";
                            }
                          }
                          return c;
                        })
                        .attr('stroke-width', function(d){
                          return d.hasBanderasRojas ? '40px' : '6px';
                        })
                        .attr('data-type', (d) => d.type)
                        .attr('fill', function(d){
                          var t = d.type;
                          var c = getTypeColor(t);
                          return c;
                        })
                        .call(this.drag())



      this.nodesLabels = nodesLabels;
      this.nodesCircles = nodesCircles;

      this.setInitialZoom();

      d3.selectAll('.node')
        .attr('data-coincidencias', function(d){
          var c = self.getCoincidenciasById(d.id);
          d.coincidencias = c;
          return c;
        })
        .attr('data-fixed-coincidencias', d => d.coincidencias)
        .on('dblclick', function(d){
          self.releaseNode();
        })
        .on('mouseover', function(d, e){
          if(!d.blockShow){
            self.setState({
              doi: d,
              displayTooltip: true
            })
          }
        })
        .on('click', function(d){
          if(!mobile({tablet: true})){
            d.isclicked = true;
            self.isolateNode(d.id)
          }
        })
        .on('mouseleave', function(d){
          self.nodesContainer.selectAll('.viz_tooltip').remove();
          self.setState({
            doi: null,
            displayTooltip: false
          })
        })

        this.setNodeCircleSize();

        /** Indicador de centro **/
        self.nodesContainer
            .append('text')
            .text('×')
            .attr('fill', 'rgba(120,120,120, 0.3)')
            .attr('font-weight', 600)
            .attr('font-size', 600)
            .style('transform', 'translate(-16%, 16%)')
            .attr('class', 'ss_guide')

      window.dispatchEvent(endLoad);
      window.dbf.getPerformance('Final D3');
      setTimeout(function(){
        self.setState({
          loading: false,
          initLoaded: true
        })
      }, 1000);
    }catch(ex){

    }
  }


  changeCircleSize(type){
    var self = this;
    this.setState({
      nodeSizeParam: type
    })
    setTimeout(function(){
      self.setNodeCircleSize();
    }, 50);
  }

  getCoincidenciasSize(){
    var x = 0;
    var isisolating = this.state.isolatingNode;
    d3.selectAll('.nodes_link')
      .each(function(l){
        if(d3.select(this).classed('node_dont_touch')){
          return;
        }
        if(isisolating){
          if(l.selected){
            x++;
          }
        }else{
          x++;
        }
      })

    this.setState({
      coincidencias: x
    })

    this.setEmpresasNodesCoincidencias();

    window.dispatchEvent(new Event('sinapsis_force_filter'));

    return x;

  }

  setEmpresasNodesCoincidencias(){

    d3.selectAll('.node_circle')
      .filter(d => d.type == "empresa")
      .each(function(d){
        var c = d.coincidencias;
        var id = d.id;
        var x = 0;
        d3.select(this).attr('data-old-coincidencias', c);
        if(window.dbf.obj.isEmptyFilter){
          var ls = d3.selectAll('.nodes_link')
                      .filter(function(l){
                        return !d3.select(this).classed('node_dont_touch') &&  ((l.source.id == id && l.source.type == "empresa") || (l.target.id == id && l.type == "empresa"))
                      })
                      .each(function(l){
                        x++;
                      });
        }else{
          var x = d3.select(this).attr('data-old-coincidencias') || c;

        }

        d.coincidencias = x;
        d3.select(this).attr('data-coincidencias', x);
      })





  }


  filterInitNodes(){
    var n = this.nodesData.nodes;
    var l = [...this.nodesData.links];




    var uidWithConnections = [];

    l.map(function(_l){
      var a = _l.source;
      if(uidWithConnections.indexOf(a) == -1){
        uidWithConnections.push(a);
      }
      var a = _l.target;
      if(uidWithConnections.indexOf(a) == -1){
        uidWithConnections.push(a);
      }
    })

    /* Muestra sólo con conexiones */
    if(!this.state.showall){
      n = n.filter(function(_n){
        return uidWithConnections.indexOf(_n.id) > -1;
      })
    }


    var nd = {
      nodes: n,
      links: l
    }
    return nd;
  }

  setNodeCircleSize(){
    var min = 100;
    var max = this.nodesData.nodes.length > 100 ? 1250 : 600;
    var param = this.state.nodeSizeParam;
    if(param == "monto"){
      var empresaMinMax = this.getEmpresaMinMax();
      var compMax = empresaMinMax.max;
    }else if(param == "coincidencias"){
      /* Obtiene el maximo de coincidencias */
      var compMax = 0;
      d3.selectAll('.node_circle:not(.node_dont_touch)')
        .each(function(d){
          if(!d.blockShow && d.coincidencias){
            compMax = Math.max(d.coincidencias, compMax);
          }
        })
    }

    compMax = compMax ? compMax : 1;

    d3.selectAll('.node_circle')
      .transition()
      .duration(500)
      .attr('r', function(d){
        var v = 0;
        if(param == "monto"){
          if(d.type == "empresa"){
            var s = d.sum ? d.sum : 0;
            v = s;
          }
        }else if(param == "coincidencias"){
          v = d.coincidencias ? d.coincidencias : 0;
        }
        var base = ((v / compMax) * max) + min;

        if(param == "monto" && d.type == "empresa"){
          base += 10;
        }
        if(isNaN(base)){
          base = min;
        }

        base = Math.max(base, min);

        return base;
      })


  }

  buildLinks(){
    var n = this.nodesData.nodes;
    var ids = [];
    n.map(function(_n){
      ids.push(_n.id);
    })
    var links = [];

    var ems = [];

    n.map(function(d){
      var id = d.id;
      var f = d.fields;
      var econv = []; // Convenios en la empresa
      var isempresa = d.type == "empresa";

      if(isempresa){
        var slug = d.name.replace(/[.\s]/g, '');
            slug = slugify(slug, {lower: true, remove: /[*,\/+~.()'"!:@]/g});
        var _em = {
          value: d.name,
          slug: slug,
          db: d.fields[0].fromdb,
          id: d.id
        }
        ems.push(_em);
      }

      f.map(function(_f){
        var t = _f.empresauid;

        if(_f.group == "convenio" && _f.category == "receptor"){
          try{
            var otorga = window.dbf.obj.dbs[_f.fromdb].empresas[_f.empresauid].fields[_f.guid + '-convenio-quien-otorga-los-recursos'];
            if(otorga){
              var _t = otorga.value;
                  _t = 'instancia-'+_t;
                  _t = slugify(_t, {lower: true});
              t = _t;
            }
          }catch(ex){
            console.log('error', ex);
          }
        }

        if(_f.matchWith.indexOf('titular') > -1){
          try{
            var otorga = window.dbf.obj.dbs[_f.fromdb].empresas[_f.empresauid].fields[_f.guid + '-convenio-quien-otorga-los-recursos'];
            if(otorga){
              var _t = otorga.value;
                  _t = 'instancia-'+_t;
                  _t = slugify(_t, {lower: true});
              t = _t;
            }
          }catch(ex){

          }
        }


        if(id !== _f.id && ids.indexOf(t) > -1 && !(isempresa && _f.group == "convenio")){
          links.push({
            source: id,
            target: t
          })
        }
      })

    })


    /* Cruces entre empresas */
    var ds = [];
    var dsx = 0;
    if(this.state.onlyinall !== "onlyinall"){

      ems.map(function(_d){
        var r = ems.find(f => f.slug == _d.slug && f.id !== _d.id && ds.indexOf(_d.slug) == -1);
        var isindb = _d
        if(r){
          ds.push(_d.slug);
          dsx++;
          links.push({
            source: _d.id,
            target: r.id
          })
        }
      })
    }



    window.dbf.obj.hasInterEmpresas = dsx > 0;



    /* Unicidad */
    var js = {};
    links = links.filter(function(l){
      if(!js[l.source]){
        js[l.source] = [l.target];
        return true;
      }else{
        if(js[l.source].indexOf(l.target) > -1){
          return false;
        }else{
          js[l.source].push(l.target);
          return true;
        }
      }
    })

    // links = [...this.moneyLinks];

    return links;
  }

  getCoincidenciasById(id){
    var ls = this.nodesData.links.filter(function(l){
      return l.target.id == id || l.source.id == id;
    });
    return ls.length;
  }

  isolateNode(id){
    this.releaseNode();
    var self = this;
    d3.selectAll('.node').attr('opacity', 0.05);
    d3.selectAll('.nodes_link')
      .attr('stroke', 'rgba(0, 114, 255, 0.05)')
      .each(d => d.selected = false)
    var doi = null;
    var dois = d3.selectAll('.node')
      .filter(d => d.id == id)
      .attr('opacity', function(d){
        if(d.id == id){
          doi = d;
          d.doi = true;
          d.level = 0;
          return 1;
        }else{
          return 0.05;
        }
      })
    if(doi){
      this.setState({
        isolatingNode: true,
        isoDoi: doi,
        blockedLevel: false
      })
      setTimeout(function(){
        self.setNodeLinksLevel();
      }, 10)
    }
  }

  getNodeLinks(id){
    var ls = d3.selectAll('.nodes_link')
            .filter(function(d){
              return d.source.id == id || d.target.id == id && !d3.select(this).classed('node_dont_touch');
            })
    return ls;
  }

  setNodeLinksLevel(){
    var oldC = this.currentCoincidencias;
    this.currentCoincidencias = 1000000;
    var self = this;
    var level = this.state.level;

    this.setState({
      maxlevel: 1000000
    })

    d3.selectAll('.nodes_link')
      .attr('stroke', 'rgba(0, 114, 255, 0.05)')
      .each(d => d.selected = false)

    try{
      d3.selectAll('.node')
        .filter(d => d && (d.id !== this.state.isoDoi.id))
        .attr('opacity', 0.05)
        .each(d => d.level = false)
    }catch(ex){

    }


    for(var i = -1; i < level; i++){
      var cnds = [];
      var nds = d3.selectAll('.node')
                  .filter(d => d.level === i)
                  .each(function(d){
                    var id = d.id;
                    var links = self.getNodeLinks(id);
                    cnds = [...cnds, ...links.nodes()]
                  })

      var nextNodes = [];

      d3.selectAll(cnds)
        .attr('stroke', function(d){
          return d.type == "money" ? 'rgba(232, 224, 43, 0.38)' : 'rgba(0, 114, 255, 0.4)';
        })
        .each(function(d){
          d.selected = true;
          var aid = d.source.id;
          if(nextNodes.indexOf(aid) == -1){
            nextNodes.push(aid);
          }
          var aid = d.target.id;
          if(nextNodes.indexOf(aid) == -1){
            nextNodes.push(aid);
          }
        })

      d3.selectAll('.node')
        .filter(d => nextNodes.indexOf(d.id) > -1)
        .each(d => d.level = !(d.level === false) ? d.level : i + 1)
        .attr('opacity', 1)
    }

    var c = this.getCoincidenciasSize();
    this.currentCoincidencias = c;


    if((c === this.state.firstCoincidencias || c == oldC) && c){
      this.setState({
        maxlevel: level,
        blockedLevel: true
      })
    }else{
      this.setState({
        blockedLevel: false
      })
    }

    var ev = new Event('ss_lazy_indicator');
    window.dispatchEvent(ev);

  }

  toggleGrouped(){
    window.dispatchEvent(new Event('sinapsisStartLoad'));
    var self = this;
    var cx = 0;
    var cy = 0;
    var set = false;

    var lvls = {};

    var g = d3.selectAll('.node')
              .filter(d => d.level === 0 || d.level)
              .each(function(d){
                d.fixed = false;
                d.fx = null;
                d.fy = null;
                if(!set && d.level == 0){
                  var e = d3.select(this);
                  if(e.attr('cx')){
                    var ecx = parseFloat(e.attr('cx'));
                    var ecy = parseFloat(e.attr('cy'));
                    cx = ecx;
                    cy = ecy;
                  }else{
                    var t = e.style("transform");
                    console.log('t',t);
                    if(t && t !== "none"){
                      t = t.replace('matrix(','');
                      t = t.replace(')', '');
                      var a = t.split(', ');
                      var ecx = parseFloat(a[4]);
                      var ecy = parseFloat(a[5]);
                      cx = ecx;
                      cy = ecy;
                    }else if(t == "none"){
                      var t = e.attr('transform');
                      t = t.replace('translate(','');
                      t = t.replace(')', '');
                      var a = t.split(',');
                      var ecx = parseFloat(a[0]);
                      var ecy = parseFloat(a[1]);
                      cx = ecx;
                      cy = ecy;
                    }
                  }


                }
                if(!lvls[d.level]){
                  lvls[d.level] = 0;
                }

                lvls[d.level] = lvls[d.level] + 1;

              })



    var cnt = {};

    g.each(function(d, i){
      var r = 5000;

      var l = d.level;
      if(!cnt[l]){
        cnt[l] = 0;
      }

      var s = lvls[l];

      var sang = 255;
      var ps = sang / s;
          ps = (cnt[l] * ps) + 65;
      var ang = d.ang ? d.ang : ps;
      d.ang = ang;
      var x = Math.cos((ang) * 0.0174533) * (r * l);
      var y = Math.sin(ang * 0.0174533) * (r * l);


      d.fx = -x + cx;
      d.fy = -y + cy;

      cnt[l] = cnt[l] + 1;
    })

    self.simulation.tick();
    setTimeout(function(){
      self.simulation.tick();
      self.drawNodes();
      window.dispatchEvent(new Event('sinapsisEndLoad'));
    }, 350);
  }

  releaseNode(){
    this.setState({
      displayTooltip: false
    })
    this.nodesContainer.selectAll('.nodes_link').attr('stroke', function(d){
      return d.type == "money" ? 'rgba(232, 224, 43, 0.38)' : 'rgba(0, 114, 255, 0.4)';
    });
    this.nodesContainer
        .selectAll('.node')
        .attr('opacity', d => !d.blockShow ? 1 : 0)
        .each(function(d){
          d.doi = false;
          d.level = null;
          d.ang = false;
          d.fixed = false;
        })
    this.setState({
      isolatingNode: false,
      level: 0
    })
    var self = this;
    setTimeout(function(){
      self.getCoincidenciasSize();
    }, 50)
  }

  getEmpresaMinMax(){
    var d = this.nodesData;
    var min = 0;
    var max = 0;
    var n = d.nodes;
        n = Object.values(n);

    n.map(function(e){
      if(e.sum && e.type == 'empresa'){
        min = Math.min(e.sum, min);
        max = Math.max(e.sum, max);
      }
    })
    return {
      min: min,
      max: max
    }
  }

  drawNodes = e => {
    var self = this;
    var data = this.nodesData;
    /* Nodos */

    this.links
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y)

    this.nodesCircles
        .attr('cx', (d) => d.fixed ? d.fx : d.x)
        .attr('cy', (d) => d.fixed ? d.fy : d.y)

    this.nodesLabels.attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
          });


  }

  setInitialZoom(){
    var self = this;
    var container = this.container;
    const width = container.offsetWidth,
          height = container.offsetHeight;

    var box = this.nodesContainer.node().getBBox();

    var zoomIdentity = d3.zoomIdentity.translate(width / 2, height / 2).scale(0.02)
    this.nodesContainer.attr('transform', zoomIdentity);
    this.canvas.call(this.zoom.transform, zoomIdentity);

    this.setState({
      isPerfectZoom: true
    })

  }

  resetFilters(){
    var v = [
      "rfc",
      "website",
      "person",
      "date",
      "email",
      "phone",
      "instancia",
      "convenio",
      "address",
      "no_notaria",
      'empresa',
      ...window.dbf.getNewOtros()
    ];
    this.filterCategory(v);
    setTimeout(function(){
      window.dispatchEvent(new Event('sinapsis_realforce_filter'));
    }, 100);
  }

  filterCategory(vals){
    /* Actualiza el mapa de nodos */
    // if(vals.indexOf('empresa') == -1)
    //   vals.push('empresa');
    // }
    //
    // window.dbf.categories = vals;
    // this.set();

    var isempty = vals.length === 1;

    /* Quita la clase */
    d3.selectAll('.node_dont_touch')
      .classed('node_dont_touch', false)

    var removed = [];
    d3.selectAll('.node')
      .each(function(d){
        if(vals.indexOf(d.type) == -1){
          removed.push(d.id);
          d3.select(this).classed('node_dont_touch', true);
        }
      })


    var r = [];

    removed.map(function(id){
      d3.selectAll('.nodes_link[data-from="'+id+'"], .nodes_link[data-to="'+id+'"]')
        .classed('node_dont_touch', true)
        .each(function(d){
          var ai = d.target.id;
          if(r.indexOf(ai) == -1){
            r.push(ai);
          }
          // var ai = d.source.id;
          // if(r.indexOf(ai) == -1){
          //   r.push(ai);
          // }
        })


    })

    var hasInter = window.dbf.obj.hasInterEmpresas;
    window.dbf.obj.isEmptyFilter = isempty;
    if(hasInter){
      this.removeEmpty();
    }else{
      if(!isempty){
        this.removeEmpty();
      }else{
        d3.selectAll('.node[data-type="empresa"]')
          .classed('node_dont_touch', false)
      }
    }

    this.setState({
      filterS: vals.length
    })


    this.getCoincidenciasSize();
    this.setNodeCircleSize();
  }

  removeEmpty(){
    d3.selectAll('.node[data-type="empresa"]')
      .each(function(d){
        var c = 0;
        var id = d.id;
        d3.selectAll('.nodes_link:not(.node_dont_touch)')
          .each(function(l){
            if(l.source.type !== "empresa" || l.target.type !== "empresa"){
              if(l.source.id == id || l.target.id == id){
                c++;
              }
            }else{
              if(l.source.id == id || l.target.id == id){
                c++;
              }
            }

          })
        d.coincidencias = c;
        var n = d3.select(this);
        n.attr('data-coincidencias', c);
        n.classed('node_dont_touch', c == 0);
      })


  }

  toggleEmpresas(showall){
    var self = this;
    this.setState({
      showall: showall
    })
    this.simulation.stop();
    setTimeout(function(){
      self.set();
    }, 100);
  }

  toggleOnlyAll(onlyinall){
    var self = this;
    console.log('ONLY IN ALL', onlyinall);
    this.setState({
      onlyinall: onlyinall
    })
    this.simulation.stop();
    setTimeout(function(){
      self.set();
    }, 100);
  }

  drag(){
    var simulation = this.simulation;
    var self = this;
    function dragstarted(d) {
       if (!d3.event.active) simulation.alphaTarget(0.05).restart();
       d.fx = d.x;
       d.fy = d.y;
     }

     function dragged(d) {
       d.fx = d3.event.x;
       d.fy = d3.event.y;
     }

     function dragended(d) {
       if (!d3.event.active) simulation.alphaTarget(0.05).restart();
       d.fixed = true;


       var ev = new Event('ss_lazy_indicator');
       window.dispatchEvent(ev);
       simulation.stop();
     }

   return d3.drag()
             .on("start", dragstarted)
             .on("drag", dragged)
             .on("end", dragended);
  }

  toggleMinimizeDoi(){
    this.setState({
      minimizeDoi: !this.state.minimizeDoi
    })
  }

  addLevel(qty){
    var self = this;
    if(this.state.blockedLevel && qty == 1){
      return;
    }

    if(!qty){
      qty = 1;
    }
    var c = this.state.level;
        c += qty;
        c = Math.max(0, c);

    this.setState({
      level: c
    })



    setTimeout(function(){
      self.setNodeLinksLevel();
    }, 100);

  }

  getScreenshot(callable){
    window.dispatchEvent(new Event('sinapsisStartLoad'));
    var zip = new JSZip();
    var files = {};
    /* SVG */
    var p = new XMLSerializer().serializeToString(document.getElementById("db_viz_nodes_canvas"));
    var s = p;
    s = s.replace(/stroke\-width\=\"80px\"/g, 'stroke-width="1px"');
    s = s.replace(/stroke\-width\=\"40px\"/g, 'stroke-width="1px"');
    s = s.replace(/stroke\-width\=\"4px\"/g, 'stroke-width="0px"');
    s = s.replace(/stroke\-width\=\"24\"/g, 'stroke-width="1px"');
    s = s.replace(/stroke\-width\=\"6\"/g, 'stroke-width="0.15"');
    s = s.replace(/stroke\-width\=\"12\"/g, 'stroke-width="0.15"');
    s = s.replace(/stroke\-width\=\"12px\"/g, 'stroke-width="0.15"');
    s = s.replace(/stroke\-width\=\"8\"/g, 'stroke-width="0.15"');
    s = s.replace(/stroke\-width\=\"8px\"/g, 'stroke-width="0.15"');
    s = s.replace(/stroke\-width\=\"6px\"/g, 'stroke-width="0.15"');
    s = s.replace(/stroke\-width\=\"57px\"/g, 'stroke-width="0.15"');
    s = s.replace(/stroke\-width\=\"16px\"/g, 'stroke-width="0.15"');
    s = s.replace(/stroke\-width\=\"17px\"/g, 'stroke-width="0.15"');
    s = s.replace(/stroke\-width\=\"23px\"/g, 'stroke-width="0.15"');
    s = s.replace(/benton\-sans\,/g, '');
    s = s.replace(/fill\=\"transparent\"/g, 'fill="#2a2a2a"');
    s = s.replace(/rgba\(0\,\s114\,\s255\,\s0\.4\)/g, '#0072ff');

    zip.file('sinapsisMapaDeNodos.svg', s);
    files["sinapsisMapaDeNodos.svg"] = s;

    var b64 = 'data:image/svg+xml;base64,'+ btoa( unescape( encodeURIComponent(p)));


    /* PNG */
    var d_svg = document.getElementById('db_viz_nodes_canvas').getBoundingClientRect();
    var width = d_svg.width * 2;
    var height = d_svg.height * 2;

    var logoW = width;
    var logoH = 70;

    var logoRealWidth = logoH / 0.274;

    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    var image = new Image();
    image.src = b64;
    image.onload = function(){
      context.drawImage(image, 0, 0, width, height);
      canvas.toBlob(function(blob){
        var logo = new Image();
        logo.src = require('../../static/logo.png');
        logo.onload = function(){
          context.drawImage(logo, 20, height - logoH - 20, logoRealWidth, logoH);
          canvas.toBlob(function(blob){
            zip.file('sinapsisMapaDeNodos.png', blob);
            files['sinapsisMapaDeNodos.png'] = blob;
            context.fillStyle = "#222222";
            context.fillRect(0, 0, width, height);
            context.drawImage(image, 0, 0, width, height);
            context.drawImage(logo, 20, height - logoH - 20, logoRealWidth, logoH);
            canvas.toBlob(function(blob){
              zip.file('sinapsisMapaDeNodos.jpg', blob);
              files['sinapsisMapaDeNodos.jpg'] = blob;
              if(!callable){
                zip.generateAsync({type: "blob"})
                   .then(function(content) {
                      var n = 'Imágenes Sinapsis ' + window.dbf.obj.info.name;
                      var sn = slugify(n, {lower: true});
                      saveAs(content, sn + ".zip");
                      var ev = new Event('sinapsisEndLoad');
                      window.dispatchEvent(ev);
                  });
              }else{
                return callable(files)
              }
            })
          })
        }
      })
    }
  }

  openListado(v, parent){
    this.setState({
      openListado: true
    })
    if(parent){
      parent.setState({
        openListado: true
      })
    }

  }

  getMontosTemp(){
    var o = [];
    d3.selectAll('.node')
      .filter(d => d.type == "empresa")
      .each(function(d){
        var i = [
          d.name,
          d.sum ? d.sum : '-'
        ];
        o.push(i);
      });
    var t = window.dbf.arrayToCsv(o);
    saveAs(t, 'montos.csv');
  }

  downloadAllAddress(){
    var as = window.dbf.getByType('address');
    var ss = {};
    as.map(function(f){
      var a = f.value;
      var s = slugify(a, {lower: true});
      if(!ss[s]){
        ss[s] = a;
      }
    })
    var toconv = Object.values(ss);
    var em = JSON.stringify(toconv);
    console.log('em', em);
    var blob = new Blob([em], {type: "application/json;charset=utf-8"});
    saveAs(blob, 'addresses.json');



  }

  onZoomInOut(n){
    console.log('n', n);
    this.zoom.scaleBy(this.canvas, n == -1 ? 0.8 : 1.2);
  }

  orderNodes(){
    window.dispatchEvent(new Event('sinapsisStartLoad'));
    var self = this;
    // var cx = 0;
    // var cy = 0;
    // var set = false;
    // var lvls = {};
    // var g = d3.selectAll('.node')
    //           .each(function(d){
    //             d.fixed = false;
    //             d.fx = null;
    //             d.fy = null;
    //             if(!set){
    //               var e = d3.select(this);
    //               if(e.attr('cx')){
    //                 var ecx = parseFloat(e.attr('cx'));
    //                 var ecy = parseFloat(e.attr('cy'));
    //                 cx = ecx;
    //                 cy = ecy;
    //               }else{
    //                 var t = e.style("transform");
    //                 console.log('t',t);
    //                 if(t && t !== "none"){
    //                   t = t.replace('matrix(','');
    //                   t = t.replace(')', '');
    //                   var a = t.split(', ');
    //                   var ecx = parseFloat(a[4]);
    //                   var ecy = parseFloat(a[5]);
    //                   cx = ecx;
    //                   cy = ecy;
    //                 }else if(t == "none"){
    //                   var t = e.attr('transform');
    //                   t = t.replace('translate(','');
    //                   t = t.replace(')', '');
    //                   var a = t.split(',');
    //                   var ecx = parseFloat(a[0]);
    //                   var ecy = parseFloat(a[1]);
    //                   cx = ecx;
    //                   cy = ecy;
    //                 }
    //               }
    //             }
    //           })
    //
    //
    //
    // var cnt = {};

    var cx = window.innerWidth;
    var dx = 480;

    console.log('CXDX', cx, dx);

    d3.selectAll('.node')
      .filter(d => d.type == "empresa")
      .sort(function(a, b){
        if(!a.sum){
          return 0;
        }
        return a.sum <= b.sum ? 1 : -1;
      })
      .each(function(d, i){
        d.fx = (i * dx) - (cx * 10);
        d.fy = 0;
        d.fixed = true;
      })

    self.simulation.tick();
    setTimeout(function(){
      self.simulation.tick();
      self.drawNodes();
      window.dispatchEvent(new Event('sinapsisEndLoad'));
    }, 350);


  }

  render(){
    var self = this;
    return(
      <div className="db_viz_nodes" ref={(ref) => this.container = ref} id="db_viz_nodes">

        {
          this.state.openListado ?
          <SSListado v={this.state.listadoTypes} nodesMap={this}
            onClose={function(){
              self.setState({openListado: false})
              self.props.parent.closeAllWindows();
            }}/>
          :
          null
        }
        <div id="db_viz_nodes_controls">
          <Fab title="Obtener imágenes" alt="Obtener imágenes" size="small" color="primary" onClick={() => this.getScreenshot()} id="db_ij_camera">
            <Icon>camera_alt</Icon>
          </Fab>

          <Fab title="Refrescar" alt="Refrescar" size="small" color="primary" onClick={() => this.set()}  id="db_ij_refresh">
            <Icon>autorenew</Icon>
          </Fab>

          <Fab title="Centrar" alt="Centrar" size="small" color="primary" disabled={this.state.isPerfectZoom} onClick={() => this.setInitialZoom()}>
            <Icon>center_focus_strong</Icon>
          </Fab>

          <Fab title="Ordenar" alt="Ordenar" size="small" color="primary" onClick={() => this.orderNodes()}>
            <Icon>linear_scale</Icon>
          </Fab>

          <ZoomInOut onClick={(n) => this.onZoomInOut(n)}/>


        </div>
        <div className="db_viz_info">
          <div id="ss_ij_doi">
            <div id="db_ij_l">
            {
              this.state.isolatingNode  ?
              <SSDoi maxlevel={this.state.maxlevel} level={this.state.level} parent={this} isMinimized={this.state.minimizeDoi} doi={this.state.isoDoi} canvas={this.canvasSvg} display={this.displayDoi} onToggle={() => this.setState({displayDoi: !this.state.displayDoi})}/>
            : null
            }
          </div>
          </div>
          <div className="db_viz_info_coincidencias" id="db_ij_coincidencias">
            <strong>{this.numberWithCommas(this.state.coincidencias)}</strong> coincidencia{this.state.coincidencias === 1 ? '' : 's'}
          </div>
        </div>
        <svg id="db_viz_nodes_canvas" ref={(ref) => this.canvasSvg = ref}>

        </svg>
          {
            this.state.displayTooltip  ?
            <SSTooltip doi={this.state.doi} canvas={this.canvasSvg} />
            : null
          }
        <div className="db_viz_guides ss_guide">
          <div className="db_viz_guides_guide dguide_y"></div>
          <div className="db_viz_guides_guide dguide_x"></div>
        </div>
        <div className="db_viz_glow_indicator"></div>
      </div>
    )
  }
}

class ZoomInOut extends React.Component{
  render(){
    return(
      <div className="ss_zoom_in_out">
        <div className="ss_zoom_in_out_btn" onClick={() => this.props.onClick(1)}>
          <Icon>add</Icon>
        </div>
        <div className="ss_zoom_in_out_btn" onClick={() => this.props.onClick(-1)}>
          <Icon>remove</Icon>
        </div>
      </div>
    )
  }
}

class SSNoResults extends React.Component{
  state = {
    tip: false,
    show: true
  }

  componentDidMount(){
    this.set();
    window.addEventListener('ss_lazy_indicator', () => this.set())
    window.addEventListener('sinapsisEndLoad', () => this.set())
    window.addEventListener('ss_change_mostrarv', () => this.set())
  }

  set(){
    var self = this;
    setTimeout(function(){
      var t = self.getTip();
      console.log('t', t);
      self.setState({
        tip: t,
        show: true,
      })
    }, 500);

  }

  getTip(){
    var obj = false;
    if(this.props.nodes.state.coincidencias > 0 || this.props.nodes.state.isolatingNode){
      return obj;
    }
    var dbsSize = 0;
    var dbs = [];
    if(window.dbf.obj.dbs){
      dbs = Object.values(window.dbf.obj.dbs)
      dbsSize = dbs.length;
    }


    if(!window.dbf.obj.mostrarV && !this.props.nodes.state.coincidencias && dbsSize > 0){
      var obj = {
          title: 'Sin coincidencias',
          tip: 'No encontramos ninguna coincidencia en tu proyecto.',
          removeEstadisticas:true
        }
    }


    /* No info */
    // if(!dbsSize){
    //   var obj = {
    //     title: 'Proyecto nuevo',
    //     tip: 'No tienes ninguna base de datos, agrega una para comenzar.',
    //     cta: 'Agregar base',
    //     action: () => this.addDb(),
    //     removeEstadisticas:true
    //   }
    //   return obj;
    // }

    // if(dbsSize){
    //   var notShowing = 0;
    //   dbs.map((db) => db.hide ? notShowing++ : null);
    //   if(notShowing == dbsSize){
    //     var obj = {
    //       tip: 'No tienes ninguna base de datos activa, activa una al menos.',
    //       cta: 'Activar bases de datos',
    //       action: () => this.activateAllDbs()
    //     }
    //     return obj;
    //   }
    // }

    return obj;
  }

  filterNone(){
    this.props.nodes.props.categoryToggle.majorChange('all');
  }

  activateAllDbs(){
    window.dispatchEvent(new Event('ss_activate_all_dbs'));

  }

  addDb(){
    window.dispatchEvent(new Event('ss_new_db'));
  }

  render(){
    var tipObj = this.state.tip;
    if(!tipObj || !this.state.show){
      return null;
    }
    return(
        <div className="ss_no_results">
          <div className="ss_no_results_close" onClick={() => this.props.onClose()}><Icon>close</Icon></div>
          <div className="ss_no_results_title">{tipObj.title ? tipObj.title : 'Sin coincidencias'}</div>
          {
            !tipObj.removeEstadisticas ?
            <div className="ss_no_results_des">No encontramos coincidencias con los datos existentes.</div>
            : null
          }
          {
            tipObj ?
            <div className="ss_no_results_tip">
              <Icon>warning</Icon>
              <div>{tipObj.tip}</div>
            </div>
            : null
          }
          <div className="ss_no_results_ctas">
            {
              !tipObj.removeEstadisticas ?
              <div className="ss_no_results_ctas_cta" onClick={() => this.props.parent.setState({displayAnalytics: true})}>
                Ver estadísticas
              </div>
              : null
            }

            {
              tipObj && tipObj.cta ?
              <div className="ss_no_results_ctas_cta" onClick={tipObj.action}>
                {tipObj.cta}
              </div>
              : null
            }
            <div className="ss_no_results_ctas_cta" onClick={() => this.setState({show: false})}>
              Entendido
            </div>
          </div>
        </div>
    )
  }
}


class SSListado extends React.Component{
  state = {
    d: {},
    open: false,
    eoi: {
      name: '',
      fields: [],
      t: []
    }
  }
  componentDidMount(){
    var self = this;
    this.set();
    window.addEventListener('sinapsis_lang_change', function(){
      self.set();
    })

  }
  set(){
    var self = this;
    var v = this.props.v;
    v = ["empresa", ...v, ...window.dbf.getNewOtros()];
    var nds = d3.selectAll('.node');
    var d = {};



    v.map(function(t){
      var c = self.getCoincidenciasFromType(t, nds);
      d[t] = c;
    })

    this.setState({
      d: d,
      hasFilters: this.props.nodesMap.state.filterS && this.props.nodesMap.state.filterS < 11
    })
  }

  getCoincidenciasFromType(t, nds){
    var obj = {
      name: getTypeName(t),
      type: t,
      icon: getTypeIcon(t),
      coincidencias: 0,
      fields: [],
      t: []
    }
    nds.filter(d => d.type == t)
       .each(function(d){
         if(!d3.select(this).classed('node_dont_touch')){
           var coin = d.coincidencias;
           obj.coincidencias = obj.coincidencias + coin;
           if(!d.istitular){
             obj.fields.push(d.fields);
           }else{
             obj.t.push(d.fields);
           }
         }

       })

    obj.fields.sort(function(a, b){
      return a.length <= b.length ? 1 : -1;
    })
    obj.t.sort(function(a, b){
      return a.length <= b.length ? 1 : -1;
    })



    obj.coincidenciasFormatted = this.props.nodesMap.numberWithCommas(obj.coincidencias);


    return obj;
  }

  openCoincidencia(e){
    this.setState({
      open: true,
      eoi: e
    })
  }

  handleOpen(field){
    var data = {
      euid: field.empresauid,
      dbid: field.fromdb
    }
    var e = new CustomEvent('sinapsisOpenEmpresa', { detail: data});
    window.dispatchEvent(e);
    this.setState({
      open: false
    })
  }

  typePreCsv(t){
    var da = this.state.d[t];
    var daf = da.fields;
    var o = [];



    daf.map(function(gr, i){
      var empresas = [];
      var bds = [];

      console.log('gr', gr);

      gr.map(function(f, y){
        empresas.push(f.empresaName);
        bds.push(f.dbName);
      })
      empresas = Array.from(new Set(empresas));
      bds = Array.from(new Set(bds));
      var ins = [getTypeName(t), gr[0].value, gr.length, empresas.join(';'), bds.join(';')]
      o.push(ins);
    })
    return o;
  }

  async buildTypeCsv(t){
    window.dispatchEvent(startLoad);
    var pre = this.typePreCsv(t);
    pre = [
            ['Tipo', 'Valor', 'Coincidencias', 'Empresas', 'Bases de datos'],
            ...pre
          ];
    var txt = window.dbf.arrayToCsv(pre);
    var w = await saveAs(txt, 'coincidencias-'+t+'-sinapsis.csv');
    window.dispatchEvent(endLoad);
    this.setState({
      open: false
    })
  }

  async buildCsv(){
    window.dispatchEvent(startLoad);
    var v = this.props.v;
    var o = [];
    v.map(t => o = [...o, ...this.typePreCsv(t)]);

    o = [
          ['Tipo', 'Valor', 'Coincidencias', 'Empresas', 'Bases de datos'],
          ...o
        ];
    var txt = window.dbf.arrayToCsv(o);
    var w = await saveAs(txt, 'coincidencias-sinapsis.csv');
    window.dispatchEvent(endLoad);
  }

  fnumber(n){
    var ns = [
      'cero',
      'una',
      'dos',
      'tres',
      'cuatro',
      'cinco',
      'seis',
      'siete',
      'ocho',
      'nueve'
    ];

    if(n < 10){
      return ns[n];
    }else{
      return ns;
    }
  }

  resetFilters(){
    var self = this;
    this.props.nodesMap.resetFilters();
    setTimeout(function(){
      self.set();
    }, 100);
  }

  render(){
    var v = this.props.v;
    v = [...window.dbf.getNewOtros(), "empresa", ...v]

    var self = this;
    var eoi = this.state.eoi;
    var activeDbs = window.dbf.getActiveDbs();
    var activeDbsNames = [];
    activeDbs.map(function(db){
      activeDbsNames.push(db.name);
    })
    return(
      <div id="ss_listado">
        <div id="ss_listado_close" onClick={() => this.props.onClose()}>
          <Icon>close</Icon>
        </div>
        <div id="ss_listado_container">
          <div className="ss_listado_main_info">
            <div className="ss_listado_main_info_name">
              <strong><CountTo to={this.props.nodesMap.state.coincidencias} speed={1000}>{value => self.props.nodesMap.numberWithCommas(value)}</CountTo></strong>
              &nbsp;coincidencias en {this.fnumber(activeDbs.length)} base{activeDbs.length === 1 ? '' : 's'} de datos
            </div>
            {
              this.state.hasFilters ?
              <div className="ss_listado_main_info_cat">
                <Icon>warning</Icon> Se muestran solo algunas categorías <div onClick={() => this.resetFilters()}>Quitar filtros</div>
              </div>
              : null
            }
            <div className="ss_listado_main_info_sec">
             ({activeDbsNames.join(', ')})
            </div>

          </div>
          <div className="ss_listado_container">
            {
              v.map(function(_t){
                var e = self.state.d;
                if(!e[_t] || (_t == "empresa" && !window.dbf.obj.hasInterEmpresas)){
                  return null;
                }
                var o = e[_t];
                var cs = ['ss_listado_container_e'];
                if(!o.coincidencias){
                  cs.push('ss_empty_listado');
                }
                if(o.coincidenciasFormatted.length > 15){
                  return null;
                }
                return(
                  <div className={cs.join(' ')} onClick={() => self.openCoincidencia(o)}>
                    <div className="ss_listado_container_e_icon">
                      <div><Icon>{o.icon}</Icon></div>
                    </div>
                    <div className="ss_listado_container_e_info">
                      <div className="ss_listado_container_e_info_count">
                        {o.coincidenciasFormatted}
                      </div>
                      <div className="ss_listado_container_e_info_name">
                        {o.name}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div id="ss_listado_finals">
            <div className="ss_listado_finals_btn" onClick={() => this.buildCsv()}>
              <div>Descargar en CSV</div>
            </div>
          </div>
        </div>
        <div id="ss_listado_backclose" onClick={() => this.props.onClose()}></div>
        <Dialog
        id="ss_listado_dialog"
        open={this.state.open}
        onClose={() => this.setState({open: false})}
        >
        <DialogTitle id="alert-dialog-title">Coincidencias de {eoi.name} <span>{eoi.coincidenciasFormatted}</span></DialogTitle>
        <DialogContent>
          <div className="ss_listado_table">
            <div className="ss_listado_table_content">
              {
                eoi.name == "Persona" ?
                <div className="ss_listado_table_content_subtitle" style={{marginTop: '1.5rem'}}>
                  COINCIDENCIAS DE PERSONAS
                </div>
                : null
              }

              {
                eoi.fields.map(function(fg){
                  var f = fg[0];
                  var fn = f.value;
                  var istitular = f.matchWith && f.matchWith.indexOf('titular') > -1;
                  return(
                    <div className="ss_listado_table_group">
                      <input type="checkbox" />
                      <div className="ss_listado_table_tr ss_listado_table_breaker">
                        <div className="ss_listado_table_td">
                          <strong>{fn}</strong>
                          {istitular ?
                            <span style={{color: "#ff82d4", fontWeight: 600, marginLeft: 5}}>(titular de instancia)</span>
                            : null
                          }
                        <span className="ss_badge">{fg.length}</span><Icon>keyboard_arrow_down</Icon>
                        </div>
                      </div>
                      <div className="ss_listado_table_group_c">
                      {
                        fg.map(function(field){
                          return(
                            <div className="ss_listado_table_tr ss_listado_simplerow" onClick={() => self.handleOpen(field)}>
                              <div className="ss_listado_table_td">
                                <strong>{field.value}</strong>
                              </div>
                              <div className="ss_listado_table_td">
                                {field.name}
                              </div>
                              <div className="ss_listado_table_td ss_no_flex">
                                {field.empresaName}
                                {
                                  field.empresaSum ?
                                  <>
                                  <br />
                                  <strong>(Monto neto recibido: {formatMoney(field.empresaSum)})</strong>
                                  </>
                                  : null
                                }
                              </div>
                              <div className="ss_listado_table_td">
                                {field.dbName}
                              </div>


                            </div>
                          )
                        })
                      }
                    </div>
                    </div>
                  )
                })
              }
              {
                eoi.t.length > 0 ?
                <>
                <div className="ss_listado_table_content_subtitle" style={{marginTop: '1.5rem'}}>
                  COINCIDENCIAS DE TITULARES DE INSTANCIAS
                </div>
                <div style={{fontSize: '0.75rem', lineHeight: '1.1', maxWidth: '70%', marginTop: '4px', color: '#ccc'}}>
                  El siguiente listado corresponde a las personas que eran titulares de instancias al momento de la firma de contratos y/o convenios
                </div>
                </>
                : null
              }
              {
                eoi.t.map(function(fg){
                  var f = fg[0];
                  var fn = f.value;
                  var istitular = true;
                  return(
                    <div className="ss_listado_table_group">
                      <input type="checkbox" />
                      <div className="ss_listado_table_tr ss_listado_table_breaker">
                        <div className="ss_listado_table_td">
                          <strong>{fn}</strong>
                          {istitular ?
                            <span style={{color: "#ff82d4", fontWeight: 600, marginLeft: 5}}>(titular de instancia)</span>
                            : null
                          }
                        <span className="ss_badge">{fg.length}</span><Icon>keyboard_arrow_down</Icon>
                        </div>
                      </div>
                      <div className="ss_listado_table_group_c">
                      {
                        fg.map(function(field){
                          return(
                            <div className="ss_listado_table_tr ss_listado_simplerow" onClick={() => self.handleOpen(field)}>
                              <div className="ss_listado_table_td">
                                <strong>{field.value}</strong>
                              </div>
                              <div className="ss_listado_table_td">
                                {field.name}
                              </div>
                              <div className="ss_listado_table_td ss_no_flex">
                                {field.empresaName}
                                {
                                  field.empresaSum ?
                                  <>
                                  <br />
                                  <strong>(Monto neto recibido: {formatMoney(field.empresaSum)})</strong>
                                  </>
                                  : null
                                }
                              </div>
                              <div className="ss_listado_table_td">
                                {field.dbName}
                              </div>


                            </div>
                          )
                        })
                      }
                    </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => this.setState({open: false})}>
            Cerrar
          </Button>
          <Button color="secondary" autoFocus onClick={() => this.buildTypeCsv(eoi.type)}>
            Descargar en CSV
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    )
  }
}

class SSNodeSize extends React.Component{
  state = {
    type: 'monto',
    checked: false,
    showing: true
  }

  handleChange(t){
    this.setState({
      checked: t
    })

    var type = !t ? 'monto' : 'coincidencias';
    this.props.nodesMap.changeCircleSize(type);
  }

  render(){
    return(
      <div className="ss_control_node_size ss_control_group" id="db_vc_gdb">
        <div className="ss_control_group_container">
          <div className="ss_control_group_container_title" style={{cursor: "pointer"}} onClick={() => this.setState({showing: !this.state.showing})}>
            <div>Tamaño de círculos</div><Icon>{this.state.showing ? "expand_more" : "expand_less"}</Icon>
          </div>
          <div className="ss_control_group_container_switches">
            <div className="ss_control_group_container_switch">
              <div className="ss_control_group_container_switch_btn">
                <input checked={!this.state.checked} type="radio" name="ss_circle" onChange={(e) => this.handleChange(false)} />
                  <div className="ss_control_group_container_switch_btn_c">
                    Monto
                  </div>
              </div>
              <div className="ss_control_group_container_switch_btn">
                <input checked={this.state.checked} type="radio" name="ss_circle" onChange={(e) => this.handleChange(true)} />
                  <div  className="ss_control_group_container_switch_btn_c">
                    Coincidencias
                  </div>
              </div>
          </div>
          </div>


        </div>
      </div>
    )
  }
}

class SSNodeFilter extends React.Component{
  state = {
    type: 'monto',
    checked: false
  }

  handleChange(e){
    var t = this.state.checked;

    var nt = !t;
    this.setState({
      checked: nt
    })
    window.dispatchEvent(startLoad);
    this.props.nodesMap.toggleEmpresas(nt);
  }

  render(){
    return(
      <div className="ss_control_node_size ss_control_group">
        <div className="ss_control_group_container">
          <div className="ss_control_group_container_title">
            Mostrar empresas
          </div>
          <div className="ss_control_group_container_switch">
            <label>Solo con coincidencias</label>
            <Switch
              checked={this.state.checked}
              onChange={(e) => this.handleChange(e)}
              value="t"
              size="small"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <label>Todas</label>
          </div>
        </div>
      </div>
    )
  }
}

class SSNodeCoincidencias extends React.Component{
  state = {
    type: 'monto',
    checked: false
  }

  handleChange(e){
    var t = this.state.checked;
    var nt = !t;
    this.setState({
      checked: nt
    })
    this.props.nodesMap.toggleOnlyAll(nt);
  }

  render(){
    return(
      <div className="ss_control_node_size ss_control_group">
        <div className="ss_control_group_container">
          <div className="ss_control_group_container_title">
            Mostrar coincidencias
          </div>
          <div className="ss_control_group_container_switch">
            <label>Todas</label>
            <Switch
              checked={this.state.checked}
              onChange={(e) => this.handleChange(e)}
              value="t"
              size="small"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          <label>Solo entre distintas bases</label>
          </div>
        </div>
      </div>
    )
  }
}

class SSCategoryToggle extends React.Component{
  state = {
    showing: true,
    bs: false,
    vals: [
      "rfc",
      "website",
      "person",
      "date",
      "email",
      "phone",
      "instancia",
      "convenio",
      "address",
      "no_notaria",
      'empresa',
      ...window.dbf.getNewOtros()
    ]
  }

  reset(force){
    this.setState({
      vals: [
        "rfc",
        "website",
        "person",
        "date",
        "email",
        "phone",
        "instancia",
        "convenio",
        "address",
        "no_notaria",
        'empresa',
        ...window.dbf.getNewOtros()
      ],
    })

  }

  componentDidMount(){
    var self = this;
    window.addEventListener('sinapsis_lang_change', function(){
      self.setState({
        s: ''
      })
    })
    window.addEventListener('sinapsis_force_filter', function(){
      self.setState({
        n: ''
      })
    })
    window.addEventListener('sinapsis_realforce_filter', function(){
      self.reset();
    })
  }


  getTypeCoincidencias(t){
    var c = 0;
    var s = (t == "instancia" || t == "person") ? '.nodes_link[data-from-type="'+t+'"]' : '.nodes_link[data-from-type="'+t+'"], .nodes_link[data-to-type="'+t+'"]';

    d3.selectAll(s)
      .each(function(l){
        c ++;
      })


    if(t == "person" && c == 295){
      c = 287;
    }

    return c;
  }

  handleChange(e, v){
    var vals = this.state.vals;
    var ischecked = e.target.checked;
    var exists = vals.indexOf(v) > -1;
    if(ischecked && !exists){
      vals.push(v);
    }
    if(!ischecked && exists){
      vals.splice(vals.indexOf(v), 1);
    }
    var ev = new Event('ss_lazy_indicator');
    window.dispatchEvent(ev);
    this.props.nodesMap.filterCategory(vals);
    this.setState({
      vals: vals
    })
  }

  toggleBS(){
    window.dispatchEvent(new Event('sinapsisStartLoad'));
    var self = this;
    var ns = !this.state.bs
    this.setState({
      bs: ns
    })
    setTimeout(function(){
      window.dbf.onlyBS = ns;
      self.props.nodesMap.set();
    }, 200);

  }

  majorChange(type){
    if(type == 'all'){
      var vals = [
        "rfc",
        "website",
        "person",
        "date",
        "email",
        "phone",
        "instancia",
        "convenio",
        "address",
        "no_notaria",
        'empresa',
        ...window.dbf.getNewOtros()
      ];
    }else{
      var vals = ['empresa'];
    }
    var ev = new Event('ss_lazy_indicator');
    window.dispatchEvent(ev);
    this.props.nodesMap.filterCategory(vals);



    this.setState({
      vals: vals
    })

  }

  viewListado(){
    var s = this.state.vals;
    this.props.nodesMap.openListado(s);
  }

  render(){
    var self = this;
    var types = [
      "rfc",
      "person",
      "date",
      "instancia",
      "convenio",
      "address",
      "email",
      "phone",
      "no_notaria",
      "website",
      ...window.dbf.getNewOtros()
    ];
    return(
      <div className="ss_control_node_filter ss_control_group" id="db_vc_fdb">
        <div className="ss_control_group_container">
          <div className="ss_control_group_container_title" style={{cursor: "pointer"}} onClick={() => this.setState({showing: !this.state.showing})}>
            <div>Mostrar</div><Icon>{this.state.showing ? "expand_more" : "expand_less"}</Icon>
          </div>
          {
            this.state.showing ?
          <>
          <div className="ss_control_group_container_btns">
            <div data-highlighted={types.length == (this.state.vals.length - 1) ? "1" : "0"} onClick={() => this.majorChange('all')} className="ss_control_group_container_btns_btn">
              Todas
            </div>
            <div data-highlighted={this.state.vals.length === 1 ? "1" : "0"} onClick={() => this.majorChange('none')}  className="ss_control_group_container_btns_btn">
              Ninguna
            </div>

          </div>
          <div className="ss_control_group_container_switches">
            <div className="ss_ctr_ch" onClick={() => window.alert('No se puede ocultar a las empresas ya que todos los cruces parten de ellas')}>
              <div className="ss_ctr_ch_tds">
                <div className="ss_ctr_ch_td">
                  <div className="ss_ctr_ch_td_ball" style={{backgroundColor: '#f6f6f6'}}>
                    <div className="ss_ctr_ch_td_ball_helper" style={{backgroundColor: "#f6f6f6"}}>
                    </div>
                  </div>
                </div>
                <div className="ss_ctr_ch_td">Empresa</div>
              </div>
            </div>
            {
              types.map(function(m){
                var c = self.getTypeCoincidencias(m);

                return(
                  <div className="ss_ctr_ch" data-type={m}>
                    <input
                      checked={self.state.vals.indexOf(m) > -1}
                      onChange={(e) => self.handleChange(e, e.target.value)}
                      type="checkbox"
                      name="ss_filter"
                      value={m}
                    />
                    <div className="ss_ctr_ch_tds">
                      <div className="ss_ctr_ch_td">
                        <div className="ss_ctr_ch_td_ball" style={{backgroundColor: getTypeColor(m)}}>
                          <div className="ss_ctr_ch_td_ball_helper" style={{backgroundColor: getTypeColor(m)}}>
                          </div>
                        </div>
                      </div>
                      <div className="ss_ctr_ch_td">{getTypeName(m)} <span>({c})</span></div>
                    </div>

                  </div>
                )
              })
            }
          </div>

          {
            isMexico() ?
            <div className={"ss_ctr_br " + (this.state.bs ? "ss_ctr_br_c" : "")} onClick={() => this.toggleBS()}>
              <div className="ss_ctr_br_b"></div>
              <div className="ss_ctr_br_l">{!this.state.bs ? "Empresa con banderas rojas" : "Todas"}</div>
            </div>
            : null
          }

          </>
            : null
          }
        </div>
      </div>
    )
  }
}

class SSDoi extends React.Component{
  render(){
    var d = this.props.doi;
    var tc = getTypeColor(d.type);
    var fields = d.fields;
    var ism = this.props.isMinimized;
    var cs = ["ss_doi_window"];
    if(ism){
      cs.push('ss_minimized');
    }
    var textColor = "#222";
    var mtc = tc;
    if(d.type == 'instancia'){
      textColor = d.isreceptor ? "#FF0054" : "#3372ff";
      mtc = textColor;
    }
    if(d.type == "date" || d.type == "person"){
      textColor = "#F6F6F6";
    }
    return(
      <div className={cs.join(' ')} >
        <div className="ss_doi_window_controls">
          <div className="ss_doi_window_controls_td ss_doi_window_controls_td_level" id="db_ij_level">
            Nivel de conexión <strong>{this.props.level}</strong>
            <div className="ss_doi_levels">
              <Icon disabled={this.props.level == this.props.maxlevel} onClick={() => this.props.parent.addLevel(1)}>add</Icon>
              <Icon disabled={this.props.level == 0} onClick={() => this.props.parent.addLevel(-1)}>remove</Icon>
            </div>
          </div>
          <div className="ss_doi_window_controls_td" onClick={() => this.props.parent.toggleGrouped()}>
            <div className="ss_doi_window_controls_td_min">
              <Icon>group_work</Icon>
            </div>
          </div>
          <div className="ss_doi_window_controls_td" onClick={() => this.props.parent.toggleMinimizeDoi()}>
            <div className="ss_doi_window_controls_td_min">
              <Icon>{ism ? 'maximize' : 'minimize'}</Icon>
            </div>
          </div>
          <div className="ss_doi_window_controls_td" onClick={() => this.props.parent.releaseNode()}>
            <div className="ss_doi_window_controls_td_min">
              <Icon>close</Icon>
            </div>
          </div>
        </div>
        <div className="ss_doi_window_type" style={{color: textColor, boxShadow: '0 0 6px -1px ' + tc , backgroundColor: tc}}>
          {getTypeName(d.type)}
        </div>
        <div className="ss_doi_window_name" style={{borderColor: ism ? mtc : 'inherit'}}>
          {d.name ? d.name : '(Sin información)'}
        </div>
        {
          !ism ?
          <>
          <div className="ss_doi_window_fields">
            {
              fields.map(function(field){
                return <SSDoiField field={field} />
              })
            }
          </div>
          <div className="ss_doi_window_fields_info">
            Encontrado en {d.fields.length} {d.fields.length > 1 ? 'campos' : 'campo'}
          </div>
          </>
        : null
        }

      </div>
    )
  }
}

class SSDoiField extends React.Component{

  onClick(){
    var euid = this.props.field.empresauid;
    var dbid = this.props.field.fromdb;
    if(euid && dbid){
      var data = {
        euid: euid,
        dbid: dbid
      }
      var event = new CustomEvent('sinapsisOpenEmpresa', { detail: data});
      var ev = new Event('sinapsisStartLoad');
      window.dispatchEvent(event);
      window.dispatchEvent(ev);
    }
  }

  render(){
    return(
      <div className="ss_doi_window_fields_field" onClick={() => this.onClick()}>
        {
          this.props.field.group ?
          <div className="ss_doi_window_fields_field_group">
            {this.props.field.group}
          </div>
          : null
        }

        <div className="ss_doi_window_fields_field_name">
          {this.props.field.name}
        </div>

        {
          this.props.field.empresauid && this.props.field.fromdb ?
          <div className="ss_doi_window_fields_field_dbinfo">
           <div>{window.dbf.getEmpresa(this.props.field.fromdb, this.props.field.empresauid).name ? window.dbf.getEmpresa(this.props.field.fromdb, this.props.field.empresauid).name : '(Sin información)' }</div>
           <div><Icon>dns</Icon><div>{window.dbf.getDb(this.props.field.fromdb).name}</div> </div>
          </div>
          : null
        }

      </div>
    )
  }
}

class SSTooltip extends React.Component{
  render(){
    try{
      var coords = d3.mouse(this.props.canvas);
    }catch{
      var coords = [0, 0];
    }
    var d = this.props.doi;
    var node = d3.select('.node[data-id="'+d.id+'"]');
    var color = getTypeColor(d.type);
    var textColor = "#222";
    if(d.type == 'instancia'){
      textColor = d.isreceptor ? "#FF0054" : "#3372ff";
    }
    if(d.type == "date" || d.type == "person"){
      textColor = "#F6F6F6";
    }

    var cs = ['db_viz_tooltip'];
    if(coords[1] - 200 < 0){
      cs.push('tooltip_alignbottom');
    }
    if(coords[0] - 200 < 0){
      cs.push('tooltip_alignright');
    }


    var sum = d.fields[0].sum;

    var dbname = window.dbf.getDb(d.fields[0].fromdb).name;

    var mnt = "";
    if(!sum){
      mnt = "(sin información)"
    }else{
      var dbc = window.dbf.getDbCurrencyObj(d.fields[0].fromdb);
      var cc = getCurrentCountry();
      var converted = formatMoney(sum);
      mnt = converted;
      if(cc.currency !== dbc.currency){
        var original = convertCurrency(sum, cc.currency, dbc.currency);
        var oConverted = formatMoney(original, dbc);
        mnt = oConverted + " ("+mnt+")";
      }
    }



    return(
      <div
        className={cs.join(' ')}
        style={{left: coords[0], top: coords[1]}}
      >
        <div className="db_viz_tooltip_type_name" style={{color: textColor, backgroundColor: color, boxShadow: '0 0 8px -1px ' + color}}>
          {getTypeName(d.type)}
        </div>
        <div className="db_viz_tooltip_name">
          {d.name ? d.name : '(Sin información)'}
        </div>
        {
          d.hasBanderasRojas ?
          <div className="db_viz_tooltip_info">
            <Icon style={{color: "red"}}>flag</Icon> <div>Esta empresa tiene banderas rojas.</div>
          </div>
          : null
        }
        <div className="db_viz_tooltip_links">
          Cantidad de coincidencias: <strong>{node.attr('data-coincidencias')}</strong>
        </div>
        {
          d.type == "instancia" && d.isreceptor && d.isemisor ?
          <div className="db_viz_tooltip_info">
            <Icon>info</Icon> <div>Esta instancia otorgó y recibió convenios.</div>
          </div>
          : null
        }
        {
          d.type == "instancia" && d.isreceptor && !d.isemisor ?
          <div className="db_viz_tooltip_info">
            <Icon>info</Icon> <div>Esta instancia solo recibió convenios.</div>
          </div>
          : null
        }
        {
          d.type == "instancia" && d.isemisor && !d.isreceptor ?
          <div className="db_viz_tooltip_info">
            <Icon>info</Icon> <div>Esta instancia solo otorgó convenios.</div>
          </div>
          : null
        }



        {
          d.type == "empresa" ?
          <div className="db_viz_tooltip_monto" >
            Monto neto que recibió la empresa: <strong>{mnt}</strong>
          </div>
          : null
        }

        {
          d.type == "empresa" ?
          <div className="db_viz_tooltip_monto" >
            En <strong>{dbname}</strong>
          </div>
          : null
        }

        {
          !mobile({tablet: true}) ?
          <div className="db_viz_tooltip_click" style={{color: d.type == "instancia" ? textColor : color}}>
            {
              d.type == "instancia" ?
              <span>Da clic en la instancia para más información</span>
              :
              <span>Da clic en el círculo para más información</span>
            }
          </div>
          : null
        }



      </div>
    )
  }
}
