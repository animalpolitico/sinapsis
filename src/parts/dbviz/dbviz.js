import React from 'react';
import * as d3 from "d3";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Tooltip from 'tooltip.js';
import Paper from '@material-ui/core/Paper';
import formatMoney from 'format-money';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Switch from '@material-ui/core/Switch';
import CountTo from 'react-count-to';
import Map from './map';
import { _t } from '../../vars/countriesDict';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip as ChartTooltip,
  ScatterChart,
  CartesianGrid,
  Scatter,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ZAxis,
  ResponsiveContainer
} from 'recharts';
var slugify = require('slugify');
var startLoad = new Event('sinapsisStartLoad');
var endLoad = new Event('sinapsisEndLoad');



export default class DbViz extends React.Component{
  state = {
    showSearch: true,
    showcontrols: true,
    displayAnalytics: false,
    displayMap: false
  }
  constructor(props){
    super(props);
    this.nodesRef = React.createRef();
  }

  toggleAnalytics(){
    this.setState({
      displayAnalytics: !this.state.displayAnalytics
    })
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

  render(){
    return(
      <>
      <div className="db_viz">
        <Nodes ref={(ref) => this.nodes = ref}/>
        <div className="nodes_controls">
          <div className="nodes_controls_button" onClick={() => this.toggleControls()}>
            <Icon>{this.state.showcontrols ? 'expand_more' : 'expand_less'}</Icon><div>{this.state.showcontrols ? 'Ocultar' : 'Mostrar'} controles</div>
          </div>
          <div className="nodes_controls_container" style={{display: this.state.showcontrols ? 'block' : 'none'}}>
            <SSCategoryToggle nodesMap={this.nodes} />
            <SSNodeSize nodesMap={this.nodes}/>
            <SSDBControl nodesMap={this.nodes} />
          </div>
        </div>
        <div className="project_buttons">
          <div className="project_buttons_button" onClick={() => this.toggleAnalytics()}>
            <Icon>bar_chart</Icon>
            <div>Ver resumen</div>
          </div>
          <div className="project_buttons_button" onClick={() => this.toggleMap()}>
            <Icon>map</Icon>
            <div>Ver mapa</div>
          </div>
        </div>
          {
            this.state.displayAnalytics ?
            <Analytics onClose={() => this.toggleAnalytics()} coincidencias={this.nodes.state.coincidencias}/>
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
    hiddenDbs: []
  }
  toggleDb(dbid){
    var s = this.state.hiddenDbs;
    if(s.indexOf(dbid) == -1){
      s.push(dbid);
    }else{
      s.splice(s.indexOf(dbid), 1);
    }
    this.setState({
      hiddenDbs: s
    })
    window.dispatchEvent(startLoad);
    window.dbf.hideDbs(s);
    var ev = new Event('ss_lazy_indicator');
    window.dispatchEvent(ev);
  }

  getVisibleDbs(){
    var self = this;
    var dbs = window.dbf.getDbs();
        dbs = Object.values(dbs);
    return dbs.filter(db => self.state.hiddenDbs.indexOf(db.id) == -1);
  }

  handleMostrarEmpresas(v){
    var showall = v == "all";
    window.dispatchEvent(startLoad);
    this.props.nodesMap.toggleEmpresas(showall);
  }

  handleMostrarCoincidencias(type){
    window.dispatchEvent(startLoad);
    this.props.nodesMap.toggleOnlyAll(type);
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
      <div className="ss_control_node_filter ss_control_group">
        <div className="ss_control_group_container">
          <div className="ss_control_group_container_title">
            Bases de datos
          </div>
        </div>
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
              <select onChange={(e) => this.handleMostrarCoincidencias(e.target.value)}>
                <option value="all">Todas</option>
                <option value="onlyinall">Solo entre todas las distintas bases</option>
                <option value="twoormore">Solo entre bases distintas</option>
              </select>
            </div>
            : null
          }

          <div className="ss_control_extra">
            <label>Mostrar empresas</label>
            <select onChange={(e) => this.handleMostrarEmpresas(e.target.value)}>
              <option value="default">Solo con coincidencias</option>
              <option value="all">Todas</option>
            </select>
            {
              totalPotentialEmpresas > 900 ?
              <div className="ss_control_extra_warning">
                <Icon>warning</Icon><div>Tu proyecto tiene muchas empresas, ten cuidado al seleccionar "Todas".</div>
              </div>
              : null
            }

          </div>
        </div>
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
      o = false;
    break;
  }
  return _t(o);
}


class Analytics extends React.Component{

  sumTransferencias(){
    var i = 0;
    d3.selectAll('.node_circle')
      .each(function(n){
        if(n.type == "empresa"){
          if(n.fields.length > 0){
            var f = n.fields[0];
            var euid = f.empresauid;
            var dbuid = f.fromdb;
            var fields = window.dbf.getEmpresaFields(dbuid, euid);
            var t = window.dbf.getEmpresaTransferenciaSum(fields);
            if(t > 0){
              i += t;
            }
          }
        }
      })
    // console.log('t', i);
    return i;
  }


  buildFirstGraphs(a){
    var o = [];
    var c = a.count;
    var info = {
      "rfc": "RFC",
      "folio-mercantil": "folio mercantil",
      "direccion-fiscal": "dirección",
      "telefono": "teléfono",
      "sitio-web": "sitio web",
      "correo-electronico": "correo electrónico",
      "representante": "representante legal",
      "accionista": "accionista"
    };

    for(var key in info){
      var name = info[key];
      var data = {};
      data.name = name;
      data.key = key;
      data.chartData = [];
      data.val = a[key];

      /* Área negativa */
      var pos = {
        name: name,
        value: c - data.val
      };
      data.chartData.push(pos);

      /* Área positiva */
      var pos = {
        name: name,
        value: data.val
      };
      data.chartData.push(pos);

      data.pct = Math.round(((c - data.val) / c) * 100);
      o.push(data);
    }
    return o;
  }

  getScatterData(){
    var data = [];
    d3.selectAll('.node_circle')
      .each(function(d){
        if(d.sum){
          data.push(d);
        }
      });
    data.sort(function(a, b){
      if(a.sum < b.sum){
        return 1;
      }
      if(a.sum > b.sum){
        return -1;
      }
      return 0;
    })

    data = data.slice(0, 10);

    var o = [];

    data.map(function(d){
      var _o = {
        value: d.sum,
        index: 1,
        name: d.name
      };
      o.push(_o);
    })
    console.log('o', o);
    return o;
  }

  kFormatter(num, digits) {
      var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "k" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }

  render(){
    var self = this;
    var sumaConvenio = window.dbf.getGroupsSum("convenio", "convenio-numero-de-convenio", "convenio-monto-del-convenio");
    var sumaContrato = window.dbf.getGroupsSum("contrato", "contrato-numero-de-contrato", "contrato-monto-del-contrato");
    var sumaTransferencias = this.sumTransferencias();
    var buildAnalytics = window.dbf.buildAnalytics();
    var firstChartsGroup = this.buildFirstGraphs(buildAnalytics);
    var scatterData = this.getScatterData();


    return(
      <div className="ss_analytics">
        <div className="ss_analytics_close" onClick={() => this.props.onClose()}><Icon>close</Icon></div>
        <div className="ss_analytics_container">
          <div className="ss_analytics_container_group">
            <div className="ss_analytics_container_group_h1">
              <strong>{window.dbf.numberWithCommas(buildAnalytics.count)}</strong>
                &nbsp;empresas con <strong>{window.dbf.numberWithCommas(this.props.coincidencias)}</strong>
                &nbsp;coincidencias
            </div>
          </div>

          <div className="ss_analytics_container_group">
            <div className="ss_analytics_container_group_h1">Montos</div>
            <div className="ss_analytics_container_group_montos">
              <div className="ss_analytics_container_group_montos_group">
                <div className="ss_analytics_container_group_montos_group_m">
                  <CountTo to={sumaConvenio} speed={1000}>{value => formatMoney(value)}</CountTo>
                </div>
                <div className="ss_analytics_container_group_montos_group_l">
                  En <strong>convenios</strong>
                </div>
              </div>
              <div className="ss_analytics_container_group_montos_group">
                <div className="ss_analytics_container_group_montos_group_m">
                  <CountTo to={sumaContrato} speed={1000}>{value => formatMoney(value)}</CountTo>
                </div>
                <div className="ss_analytics_container_group_montos_group_l">
                  En <strong>contratos</strong>
                </div>
              </div>
              <div className="ss_analytics_container_group_montos_group">
                <div className="ss_analytics_container_group_montos_group_m">
                  <CountTo to={sumaTransferencias} speed={1000}>{value => formatMoney(value)}</CountTo>
                </div>
                <div className="ss_analytics_container_group_montos_group_l">
                  En <strong>transferencias</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="ss_analytics_container_group">
            <div className="ss_analytics_container_group_h1">Los 10 mayores montos</div>
            <div className="ss_analytics_container_group_scatter">

            </div>
          </div>
          <div className="ss_analytics_container_group">
            <div className="ss_analytics_container_group_h1">
                Información del llenado de las bases
            </div>
            <div className="ss_analytics_container_group_charts_group">
              {
                firstChartsGroup.map(function(data){
                  return(
                    <div className="ss_analytics_chart_binder">
                      <div className="ss_analytics_chart">
                        <PieChart width={100} height={100}>
                          <Pie dataKey="value" isAnimationActive={true} data={data.chartData} innerRadius={20} fill="#8884d8">
                            {
                              data.chartData.map((entry, index) => <Cell key={`cell-${index}`} strokeWidth={0} fill={!index ? '#025AFA' : '#333'} />)
                            }
                          </Pie>
                        </PieChart>
                      </div>
                      <div className="ss_analytics_chart_binder_info">
                        El <strong>{data.pct}%</strong> no tiene <strong>{data.name}</strong>
                       <br/>
                       <span>({buildAnalytics.count - data.val} de {buildAnalytics.count})</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
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
    return(
      <ClickAwayListener onClickAway={() => this.setState({showResults: false})}>
        <div className="db_search_nodes">
          <div className="db_search_nodes_input">
            <input
              onFocus={() => this.searchResults(this.state.v)}
              value={this.state.v}
              placeholder="Busca por término"
              type="text"
              onChange={(e) => this.searchResults(e.target.value) }
              />
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
    }

    if(w == 13){
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
        <div className="db_search_nodes_results_c_r">
          {r.map(function(result, i){
            var cs = ['ss_search_result'];
            if((i + 1) == self.state.selectedIndex){
              cs.push('ss_selected');
            }
            return(
              <div className={cs.join(' ')} onClick={(e) => self.isolateNode(result.id, result.name)}>
                <div className="ss_search_result_container">
                  <div className="ss_search_result_type" style={{color: getTypeColor(result.type)}}>
                    {getTypeName(result.type)}
                  </div>
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
    level: 0
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
      self.isolateNode(id);
    })

    window.addEventListener('keydown', function(e){
      var w = e.which;
      if(w == 27){
        self.releaseNode();
      }
      if((w == 187 || w == 189) && self.state.isolatingNode){
        self.addLevel(w == 187 ? 1 : -1);
      }
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

  async set(){
    try{
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
      this.nodesData = nodesData;
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
                   });
     this.zoom = zoom;
     canvas.call(zoom)



     simulation.nodes(nodesData.nodes)
               .on('tick', this.drawNodes)
               .on('end', function(){

               })



     simulation.force('link')
               .links(nodesData.links);


      var data = this.nodesData;
      var circlesData = [];
      var labelsData = [];

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
                     .attr('stroke-width', lSize)
                     .attr('class', 'nodes_link')
                     .attr('data-from', l => l.source.id)
                     .attr('data-to', l => l.target.id)
                     .attr('stroke', 'rgba(0, 114, 255, 0.4)')
      this.links = links;

      bgs.on('click', function(){
              self.releaseNode();
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
                            .call(this.drag())

      var rects = nodesLabels
                   .append('rect')
                   .attr('fill', function(d){
                     var c = getTypeColor(d.type);
                     if(d.type == "instancia"){
                       var counts = {r: 0, e: 0};
                       d.fields.map(function(_f){
                         var k = _f.category == "receptor" ? "r" : "e";
                         counts[k] = counts[k] + 1;
                       })
                       if(counts.r > counts.e){
                         /* Diferencia de emisor/receptor */
                         d.isreceptor = true;
                       }
                     }
                     return c;
                   })
                   .attr('stroke-width', 24)
                   .attr('stroke', d => d.type == "instancia" ? d.isreceptor ? "#FF0054" : "#3372ff" : null)

      nodesLabels.append('text')
                 .text((d) => d.name.toUpperCase())
                 .attr('fill', 'white')
                 .attr('font-size', 300)
                 .attr('text-anchor', 'middle')

      var nodesPaddingLeft = 80;
      var nodesPaddingTop = 35;

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
                        .attr('stroke', '#0a0a0a')
                        .attr('stroke-width', '4px')
                        .attr('data-type', (d) => d.type)
                        .attr('fill', function(d){
                          var t = d.type;
                          return getTypeColor(t);
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
          d.isclicked = true;
          self.isolateNode(d.id)
        })
        .on('mouseleave', function(d){
          self.nodesContainer.selectAll('.viz_tooltip').remove();
          self.setState({
            doi: null,
            displayTooltip: false
          })
        })

        this.setNodeCircleSize();

      window.dispatchEvent(endLoad);
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

    return x;

  }

  filterInitNodes(){
    var n = this.nodesData.nodes;
    var l = this.nodesData.links;



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
      d3.selectAll('.node_circle')
        .each(function(d){
          if(!d.blockShow){
            compMax = Math.max(d.coincidencias, compMax);
          }
        })
    }

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

    n.map(function(d){
      var id = d.id;
      var f = d.fields;
      f.map(function(_f){
        if(id !== _f.id && ids.indexOf(_f.empresauid) > -1){
          links.push({
            source: id,
            target: _f.empresauid
          })
        }
      })
    })

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
        isoDoi: doi
      })
      setTimeout(function(){
        self.setNodeLinksLevel();
      }, 10)
    }
  }

  getNodeLinks(id){
    var ls = d3.selectAll('.nodes_link')
            .filter(function(d){
              return d.source.id == id || d.target.id == id;
            })
    return ls;
  }

  setNodeLinksLevel(){

    var self = this;
    var level = this.state.level;

    this.setState({
      maxlevel: 1000000
    })

    d3.selectAll('.nodes_link')
      .attr('stroke', 'rgba(0, 114, 255, 0.05)')
      .each(d => d.selected = false)

    d3.selectAll('.node')
      .filter(d => d && (d.id !== this.state.isoDoi.id))
      .attr('opacity', 0.05)
      .each(d => d.level = false)

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
        .attr('stroke', 'rgba(0, 114, 255, 0.4)')
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

    if(c === this.state.firstCoincidencias){
      this.setState({
        maxlevel: level
      })
    }

    var ev = new Event('ss_lazy_indicator');
    window.dispatchEvent(ev);

  }

  releaseNode(){
    this.nodesContainer.selectAll('.nodes_link').attr('stroke', 'rgba(0, 114, 255, 0.4)');
    this.nodesContainer
        .selectAll('.node')
        .attr('opacity', d => !d.blockShow ? 1 : 0)
        .each(function(d){
          d.doi = false;
          d.level = null;
        })
    this.setState({
      isolatingNode: false,
      level: 0
    })

    this.getCoincidenciasSize();
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

  filterCategory(vals){
    if(vals.indexOf('empresa') == -1){
      vals.push('empresa');
    }

    window.dbf.categories = vals;
    this.set();

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

  render(){
    return(
      <div className="db_viz_nodes" ref={(ref) => this.container = ref}>
        <div id="db_viz_nodes_controls">
          <Fab title="Refrescar" alt="Refrescar" size="small" color="primary" onClick={() => this.set()}>
            <Icon>autorenew</Icon>
          </Fab>
          {
            !this.state.isPerfectZoom ?
            <Fab title="Centrar" alt="Centrar" size="small" color="primary" disabled={this.state.isPerfectZoom} onClick={() => this.setInitialZoom()}>
              <Icon>center_focus_strong</Icon>
            </Fab>
            : null
          }
        </div>
        <div className="db_viz_info">
          {
            this.state.isolatingNode  ?
            <SSDoi maxlevel={this.state.maxlevel} level={this.state.level} parent={this} isMinimized={this.state.minimizeDoi} doi={this.state.isoDoi} canvas={this.canvasSvg} display={this.displayDoi} onToggle={() => this.setState({displayDoi: !this.state.displayDoi})}/>
          : null
          }
          <div className="db_viz_info_coincidencias">
            <strong>{this.numberWithCommas(this.state.coincidencias)}</strong> coincidencia{this.state.coincidencias === 1 ? '' : 's'}
          </div>
        </div>

        <svg id="db_viz_nodes_canvas" ref={(ref) => this.canvasSvg = ref}></svg>
          {
            this.state.displayTooltip  ?
            <SSTooltip doi={this.state.doi} canvas={this.canvasSvg} />
            : null
          }

        <div className="db_viz_glow_indicator"></div>
      </div>
    )
  }
}

class SSNodeSize extends React.Component{
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

    var type = !nt ? 'monto' : 'coincidencias';
    this.props.nodesMap.changeCircleSize(type);
  }

  render(){
    return(
      <div className="ss_control_node_size ss_control_group">
        <div className="ss_control_group_container">
          <div className="ss_control_group_container_title">
            Tamaño de círculos
          </div>
          <div className="ss_control_group_container_switch">
            <label>Por monto recibido</label>
            <Switch
              checked={this.state.checked}
              onChange={(e) => this.handleChange(e)}
              value="t"
              size="small"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <label>Por coincidencias</label>
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
      'empresa'
    ]
  }

  componentDidMount(){
    var self = this;
    window.addEventListener('sinapsis_lang_change', function(){
      self.setState({
        s: ''
      })
    })
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
    this.props.nodesMap.filterCategory(vals);
    this.setState({
      vals: vals
    })
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
        'empresa'
      ];
    }else{
      var vals = ['empresa'];
    }

    this.props.nodesMap.filterCategory(vals);

    var ev = new Event('ss_lazy_indicator');
    window.dispatchEvent(ev);

    this.setState({
      vals: vals
    })

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
    ];
    return(
      <div className="ss_control_node_filter ss_control_group">
        <div className="ss_control_group_container">
          <div className="ss_control_group_container_title" style={{cursor: "pointer"}} onClick={() => this.setState({showing: !this.state.showing})}>
            <div>Mostrar</div><Icon>{this.state.showing ? "expand_more" : "expand_less"}</Icon>
          </div>
          {
            this.state.showing ?
          <>
          <div className="ss_control_group_container_btns">
            <div onClick={() => this.majorChange('all')} disabled={types.length == (this.state.vals.length - 1)} className="ss_control_group_container_btns_btn">
              Todos
            </div>
            <div onClick={() => this.majorChange('none')} disabled={this.state.vals.length === 1} className="ss_control_group_container_btns_btn">
              Ninguno
            </div>
          </div>
          <div className="ss_control_group_container_switches">
            {
              types.map(function(m){
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
                      <div className="ss_ctr_ch_td">{getTypeName(m)}</div>
                    </div>

                  </div>
                )
              })
            }
          </div>
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
    if(d.type == 'instancia'){
      textColor = d.isreceptor ? "#FF0054" : "#3372ff";
    }
    if(d.type == "date" || d.type == "person"){
      textColor = "#F6F6F6";
    }
    return(
      <div className={cs.join(' ')}>
        <div className="ss_doi_window_controls">
          <div className="ss_doi_window_controls_td ss_doi_window_controls_td_level">
            Nivel <strong>{this.props.level}</strong>
            <div className="ss_doi_levels">
              <Icon disabled={this.props.level == this.props.maxlevel} onClick={() => this.props.parent.addLevel(1)}>add</Icon>
              <Icon disabled={this.props.level == 0} onClick={() => this.props.parent.addLevel(-1)}>remove</Icon>
            </div>
          </div>
          <div className="ss_doi_window_controls_td" onClick={() => this.props.parent.toggleMinimizeDoi()}>
            <div className="ss_doi_window_controls_td_min">
              <Icon>{ism ? 'call_made' : 'call_received'}</Icon>
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
        <div className="ss_doi_window_name" style={{color: ism ? tc : 'inherit'}}>
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
    return(
      <div
        className="db_viz_tooltip"
        style={{left: coords[0], top: coords[1]}}
      >
        <div className="db_viz_tooltip_type_name" style={{color: textColor, backgroundColor: color, boxShadow: '0 0 8px -1px ' + color}}>
          {getTypeName(d.type)}
        </div>
        <div className="db_viz_tooltip_name">
          {d.name ? d.name : '(Sin información)'}
        </div>
        <div className="db_viz_tooltip_links">
          Cantidad de coincidencias: <strong>{node.attr('data-coincidencias')}</strong>
        </div>

        {
          d.type == "empresa" ?
          <div className="db_viz_tooltip_monto">
            Monto neto que recibió la empresa: <strong>{formatMoney(d.fields[0].sum)}</strong>
          </div>
          : null
        }

        <div className="db_viz_tooltip_click">
          Da clic en el círculo para más información
        </div>


      </div>
    )
  }
}
