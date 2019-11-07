import React from "react";
import * as d3 from "d3";
import Icon from '@material-ui/core/Icon';
import formatMoney from '../../funcs/formatMoney';
import CountTo from 'react-count-to';
import { _t, isMexico } from '../../vars/countriesDict';
var Chart = require('chart.js');
var onDrawerToggle = new Event('sinapsisDrawerToggle');
export default class Analytics extends React.Component{
  state = {
    activeDbs: [],
    rand: 0,
    rand2: 0
  }
  componentDidMount(){
    var self = this;
    this.set();
    window.addEventListener('sinapsisDrawerToggle', function(){
      self.setState({
        rand: Math.random() * 100000,
        rand2: Math.random() * 100000
      })
    })
  }

  componentDidUpdate(pp, ps){
    if(pp.r !== this.props.r){
      this.set();
    }

  }


  set(){
    var kis = Object.keys(window.dbf.getDbs());
    var odbs = window.dbf.omitDbs;

    var k = [];
    kis.map(dbid => odbs.indexOf(dbid) == -1 ? k.push(dbid) : null);

    console.log('K', kis, k);

    this.setState({
      activeDbs: k,
      omitDbs: odbs
    })
    window.dispatchEvent(new Event('sinapsisEndLoad'));
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

  toggleDb(dbid){
    var self = this;
    var adbs = this.state.activeDbs;
    var io = adbs.indexOf(dbid);
    if(io > -1){
      adbs.splice(io, 1);
    }else{
      adbs.push(dbid);
    }
    this.setState({
      activeDbs: adbs,
      rand: Math.random() * 100000
    })
    if(this.top){
      setTimeout(function(){
        self.top.graph();
      }, 150)
    }
  }

  setAll(dba){
    var self = this;
    this.setState({
      activeDbs: dba
    })
    if(this.top){
      setTimeout(function(){
        self.top.graph();
      }, 150)
    }
  }

  getActiveDbs(){
    var adbs = this.state.activeDbs;
    var o = [];
    var odbs = window.dbf.omitDbs;
    adbs.map(function(dbid){
      o.push(window.dbf.getDb(dbid));
    })
    return o;
  }

  getInstancias(){
    var o = [];

    var dbs = this.state.activeDbs;

    d3.selectAll('.nodes_label')
      .filter(function(d){
        return d.type == "instancia"
      })
      .each(function(d){
        var show = false;
        d.fields.map(function(_f){
          if(dbs.indexOf(_f.fromdb) > -1){
            show = true;
          }
        })
        if(show){
          var i = {
            c: d.coincidencias,
            label: d.name
          }
          o.push(i);
        }

      })
    if(o.length){
      o.sort(function(a, b){
        var as = a.c;
        var bs = b.c;
        return as < bs ? 1 : -1;
      })
    }


    return o;

  }

  render(){

    console.log('rerendering')
    var dbs = this.getActiveDbs();
    var analytics = window.dbf.buildAnalytics(this.state.activeDbs);
    var analyticsBR = window.dbf.buildAnalyticsBr(this.state.activeDbs);
    var top10m = window.dbf.getTopMontos(this.state.activeDbs, 100);
    var top10a = this.getInstancias();


    return(
      <div className="ss_analytics">
        <div className="ss_analytics_close" onClick={() => this.props.onClose()}><Icon>close</Icon></div>
          <div className="ss_analytics_container_fixed">

        <div className="ss_analytics_container_title">
            Resumen del proyecto<br /><strong>{window.dbf.obj.info.name}</strong>
          </div>
          <AnalyticsControl active={this.state.activeDbs} setAll={(dba) => this.setAll(dba)} toggleDb={(dbid) => this.toggleDb(dbid)}/>
          </div>
      <div className="ss_analytics_container">
          <AnalyticsInfo parent={this} active={dbs}/>
          <AnalyticsMontos parent={this} active={this.state.activeDbs}/>
          {
            top10m.length > 1 ?
            <AnalyticsTop10 rand={this.state.rand} m={top10m} ref={(ref) => this.top = ref} parent={this} active={this.state.activeDbs}/>
            : null
          }
          {
            top10a.length > 1 ?
            <AnalyticsTopInstancias rand={this.state.rand2} m={top10a} ref={(ref) => this.top = ref} parent={this} active={this.state.activeDbs}/>
            : null
          }
          {
            isMexico() ?
            <AnalyticsPie isBr={true} invert={false} rand={this.state.rand} title="Banderas rojas" parent={this} analytics={analyticsBR} active={this.state.activeDbs}/>
            : null
          }
          <AnalyticsPie isBr={false} invert={true} title="Información del llenado" rand={this.state.rand} ref={(ref) => this.pies = ref} parent={this} analytics={analytics} active={this.state.activeDbs}/>
          <div style={{width: '100%', height: '3rem'}}></div>
        </div>
      </div>
    )
  }
}

class AnalyticsTopInstancias extends React.Component{
  state = {
    showingAll: false
  }
  componentDidMount(){
    this.graph();
  }

  graph(){
    if(this.chart){
      this.chart.destroy();
    }
    this.setState({
      showingAll: false
    })
    var id = "canvas_top10a";
    // document.getElementById(id).height = null;
    var self = this;
    var m = this.props.m.slice(0, 10);
    var ctx = document.getElementById(id).getContext('2d');
    var labels = [];
    var data = [];
    m.map(function(_m){
      labels.push(_m.label);
      data.push(_m.c);
    })

    document.getElementById(id).height = labels.length * 20 + 10;



    var chart = new window.Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Coincidencias',
          data: data,
          backgroundColor: "#0072ff",
          borderWidth: 0
        }]
      },
      options: {
        aspectRatio: 1,
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function(ti,d){
              return 'Coincidencias: '+ ti.xLabel;
            },
            title: function(ti,d){
              return d.labels[ti[0].index]
            }
          },
          custom: function(tooltip) {
            if (!tooltip) return;
            tooltip.displayColors = false;
          },
        },
        scales: {
          xAxes: [{
            ticks: {
              callback: function(label){
                return label
              }
            }

          }],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: '#f6f6f6',
                fontSize: 9,
                callback: function(label){
                  return label
                }
              }
            }
          ]
        }
      }
    })
    window.dispatchEvent(new Event('sinapsisEndLoad'));

    this.chart = chart;
  }

  graphH(){
    this.chart.destroy();
    var id = "canvas_top10a";
    // document.getElementById(id).height = null;
    var self = this;
    var m = this.props.m.slice(0, 200);
    var ctx = document.getElementById(id).getContext('2d');
    var labels = [];
    var data = [];
    m.map(function(_m){
      labels.push(_m.label);
      data.push(_m.c);
    })

    document.getElementById(id).height = labels.length * 10 + 5;

    var chart = new window.Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Coincidencias',
          data: data,
          backgroundColor: "#0072ff",
          borderWidth: 0
        }]
      },
      options: {
        aspectRatio: 1,
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function(ti,d){
              return 'Coincidencias: '+ ti.xLabel;
            },
            title: function(ti,d){
              return d.labels[ti[0].index]
            }
          },
          custom: function(tooltip) {
            if (!tooltip) return;
            tooltip.displayColors = false;
          },
        },
        scales: {
          xAxes: [{
            ticks: {
              callback: function(label){
                return label
              }
            }

          }],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: '#f6f6f6',
                fontSize: 9,
                callback: function(label){
                  return label
                }
              }
            }
          ]
        }
      }
    })
    window.dispatchEvent(new Event('sinapsisEndLoad'));

    this.chart = chart;
  }

  showAll(){
    this.setState({
      showingAll: true
    })
    window.dispatchEvent(new Event('sinapsisStartLoad'));
    this.graphH();

  }

  toggleAll(){
    var s = !this.state.showingAll;
    if(!s){
      this.graph();
    }else{
      this.showAll();
    }
    this.setState({
      showingAll: s
    })

  }

  render(){
    var cs = ["ss_analytics_montos"];
    if(this.state.showingAll){
      cs.push('ss_an_big');
    }
    return(
      <div className={cs.join(' ')}>
        <div className="ss_analytics_montos_title">{this.state.showingAll ? 'Instancias por coincidencia' : "Las 10 instancias con más coincidencias"} <span onClick={() => this.showAll()}>Ver todas</span></div>
        <div className="ssa_top10_canvas">
          <canvas id="canvas_top10a"></canvas>
        </div>
      </div>
    )
  }
}

class AnalyticsTop10 extends React.Component{

  state = {
    showingAll: false
  }

  componentDidMount(){
    this.graph();
  }

  componentDidUpdate(op){
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

  graph(){
    if(this.chart){
      this.chart.destroy();
    }
    this.setState({
      showingAll: false
    })
    var id = "canvas_top10";
    // document.getElementById(id).height = null;
    var self = this;
    var m = this.props.m.slice(0, 10);
    var ctx = document.getElementById(id).getContext('2d');
    var labels = [];
    var data = [];
    m.map(function(_m){
      labels.push(_m.name);
      data.push(_m.sum);
    })
    var chart = new window.Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Monto recibido ($)',
          data: data,
          backgroundColor: "#0072ff",
          borderWidth: 0
        }]
      },
      options: {
        aspectRatio: 1.1,
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function(ti,d){
              return 'Monto neto recibido: '+formatMoney(ti.yLabel);
            }
          },
          custom: function(tooltip) {
            if (!tooltip) return;
            tooltip.displayColors = false;
          },
        },
        scales: {
          xAxes: [{
            barPercentage: 1,
            categoryPercentage: 0.85,
            display: false,

          }],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: '#f6f6f6',
                callback: function(label){
                  return '$' + self.kFormatter(label);
                }
              }
            }
          ]
        }
      }
    })

    this.chart = chart;
  }

  graphH(){
    this.chart.destroy();

    var self = this;
    var m = this.props.m;
    var id = "canvas_top10";
    var ctx = document.getElementById(id).getContext('2d');
    var labels = [];
    var data = [];
    m.map(function(_m){
      labels.push(_m.name);
      data.push(_m.sum);
    })

    document.getElementById(id).height = labels.length * 8 + 3;



    var chart = new window.Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Monto recibido ($)',
          data: data,
          backgroundColor: "#0072ff",
          borderWidth: 0
        }]
      },
      options: {
        aspectRatio: 1,
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function(ti,d){
              return 'Monto neto recibido: '+formatMoney(ti.xLabel);
            },
            title: function(ti,d){
              return d.labels[ti[0].index]
            }
          },
          custom: function(tooltip) {
            if (!tooltip) return;
            tooltip.displayColors = false;
          },
        },
        scales: {
          xAxes: [{
            ticks: {
              callback: function(label){
                return '$' + self.kFormatter(label);
              }
            }

          }],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: '#f6f6f6',
                fontSize: 9,
                callback: function(label){
                  return label.substr(0, 12) + '...'
                }
              }
            }
          ]
        }
      }
    })
    window.dispatchEvent(new Event('sinapsisEndLoad'));

  }

  showAll(){
    this.setState({
      showingAll: true
    })
    window.dispatchEvent(new Event('sinapsisStartLoad'));
    this.graphH();

  }

  toggleAll(){
    var s = !this.state.showingAll;
    if(!s){
      this.graph();
    }else{
      this.showAll();
    }
    this.setState({
      showingAll: s
    })

  }

  render(){
    console.log('rerendering 2');

    var cs = ["ss_analytics_montos"];
    if(this.state.showingAll){
      cs.push('ss_an_big');
    }
    return(
      <div className={cs.join(' ')}>
        <div className="ss_analytics_montos_title">{this.state.showingAll ? 'Montos por empresa' : "Los 10 mayores montos"} <span onClick={() => this.showAll()}>Ver todas</span></div>
        <div className="ssa_top10_canvas">
          <canvas id="canvas_top10"></canvas>
        </div>
      </div>
    )
  }
}

class AnalyticsPie extends React.Component{
  buildName(n){
    var o = "";
    switch(n){
      case "rfc":
        o = "RFC";
      break;
      case "folio-mercantil":
        o = "folio mercantil";
      break;
      case "direccion-fiscal":
        o = "dirección fiscal";
      break;
      case "telefono":
        o = "teléfono";
      break;
      case "sitio-web":
        o = "sitio web";
      break;
      case "correo-electronico":
        o = "correo electrónico";
      break;
      case "representante":
        o = "representante";
      break;
      case "accionista":
        o = "accionista";
      break;

      case "SinAntReg":
        o = "sin antecedentes registrales";
      break;
      case "ASFnoLocalizada":
        o = "ASF no localizada";
      break;
      case "direccion-fiscal":
        o = "dirección fiscal";
      break;
      case "SATdefinitiva":
        o = "SAT definitiva";
      break;
      case "SATpresunta":
        o = "SAT presunta";
      break;
      case "SATfavorables":
        o = "SAT favorable";
      break;
      case "SATdesvirtuados":
        o = "SAT desvirtuada";
      break;
      case "NoInscritoRUPC":
        o = "no inscrito en RUPC";
      break;
      case "RegCompraNet":
        o = "no registrada en CompraNet";
      break;


    }
    return _t(o);
  }

  getIcon(n){
    var o = "";
    switch(n){
      case "rfc":
        o = "home_work";
      break;
      case "folio-mercantil":
        o = "receipt";
      break;
      case "direccion-fiscal":
        o = "my_location";
      break;
      case "telefono":
        o = "phone";
      break;
      case "sitio-web":
        o = "public";
      break;
      case "correo-electronico":
        o = "mail";
      break;
      case "representante":
        o = "person_outline";
      break;
      case "accionista":
        o = "person";
      break;
    }
    return _t(o);
  }

  render(){
    var self = this;
    var analytics = this.props.analytics;
    var pan = [];
    for(var key in analytics){
      if(key !== "count" && key !== "InscritoRUPC"){
        pan.push({key: key, count: analytics[key], name: this.buildName(key), icon: this.getIcon(key)});
      }
    }
    return(
      <div className="ss_analytics_montos">
        <div className="ss_analytics_montos_title">{this.props.title}</div>
        <div className="ss_analytics_montos_row">
          {
            pan.map(function(d){
              return(
                <AnalyticsPiePie rand={self.props.rand} d={d} count={analytics.count} {...self.props} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

class AnalyticsPiePie extends React.Component{

  componentDidMount(){
    this.createChart();
    console.log('rand', this.props.rand);
  }

  componentDidUpdate(op){
    if(op.count !== this.props.count || op.d.count !== this.props.d.count || op.rand !== this.props.rand){
      this.createChart();
    }
  }

  getCanvasId(){
    var d = this.props.d;
    return "canvas_apie_"+d.key;
  }

  getRawPct(){
    var d = this.props.d;
    var pct = d.count / this.props.count;
    if(isNaN(pct)){
      pct = 0;
    }
    pct = this.props.invert ? 1 - pct : pct;
    return pct;
  }

  createChart(){
    var self = this;
    var pct = this.getRawPct();
    var d = this.props.d;
    var c = this.props.count;
    var id = this.getCanvasId();
    var ctx = document.getElementById(id).getContext('2d');
    var dta = this.props.invert ? [d.count, c - d.count] : [c - d.count, d.count];
    var color = this.props.isBr ? "rgb(237, 81, 65)" : "#0072ff";
    var lsl = this.props.invert ? ['Con '+ d.name, 'Sin '+d.name] : ['Sin '+d.name, 'Con '+ d.name];
    var chart = new window.Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: lsl,
            datasets: [{
              label: '%',
              data: dta,
              backgroundColor: ['#373737', color],
              borderWidth: 0,
            }]
          },
          options: {
            cutoutPercentage: self.props.isBr ? 60 : 80,
            legend: {
              display: false
            }
          }
        });
  }

  render(){
    var d = this.props.d;
    var pct = this.getRawPct();
    pct = Math.round(pct * 1000) / 10;
    return(
      <div className="ss_analytics_pie">
        <div className="ss_analytics_pie_chart">
          <div className="ss_analytics_pie_chart_icon">
            <Icon>{d.icon}</Icon>
          </div>
          <canvas id={this.getCanvasId()}></canvas>
        </div>
        <div className="ss_analytics_pie_info">
          <div className="ss_analytics_pie_info_a">
            {this.props.invert ? "En el" : "El"} <strong>{pct}%</strong><br/>{this.props.invert ? " no se ha llenado el " : " "}<strong>{d.name}</strong>
          </div>
          <div className="ss_analytics_pie_info_b">
            {
              this.props.invert ?
              <>
              ({this.props.count - d.count} de {this.props.count})
              </>
              :
              <>
              ({d.count} de {this.props.count})
              </>
            }
          </div>
        </div>
      </div>
    )
  }
}


class AnalyticsMontos extends React.Component{
  state ={
    s: 0
  }

  componentDidMount(){
    var self = this;
    window.addEventListener('sinapsis_lang_change', function(){
      self.setState({
        s: Math.random() * 100000
      })
    })
  }

  render(){
    var sumaConvenio = window.dbf.getGroupsSum("convenio", "convenio-numero-de-convenio", "convenio-monto-del-convenio", this.props.active);
    var sumaContrato = window.dbf.getGroupsSum("contrato", "contrato-numero-de-contrato", "contrato-monto-del-contrato", this.props.active);
    var sumaTransferencias = window.dbf.getTransferenciasSum(this.props.active, true);
    var sumaLicitaciones = window.dbf.getLicitacionesSum(this.props.active, true);
    return(
      <div className="ss_analytics_montos" id="ssam">
        <div className="ss_analytics_montos_title">Montos <span onClick={() => window.dbf.downloadMontos()}>Descargar en CSV</span></div>
        <div className="ss_analytics_montos_row">
          <AnalyticsMontosMonto value={sumaConvenio} label="convenios" />
          <AnalyticsMontosMonto value={sumaContrato} label="contratos" />
          <AnalyticsMontosMonto value={sumaTransferencias} label="transferencias" />
          <AnalyticsMontosMonto value={sumaLicitaciones} label="licitaciones" />
        </div>
      </div>
    )
  }
}

class AnalyticsMontosMonto extends React.Component{

  render(){
    return(
      <div className="ss_analytics_montos_monto">
        <div className="ss_analytics_montos_monto_m">
          <CountTo to={this.props.value} speed={1000}>{value => formatMoney(value)}</CountTo>
        </div>
        <div className="ss_analytics_montos_monto_t">
          En <strong>{this.props.label}</strong>
        </div>
      </div>
    )
  }
}


class AnalyticsInfo extends React.Component{
  buildAnalytics(){
    var adbs = this.props.active;
    var o = {};
    o.totalEmpresas = 0;
    o.totalDbs = adbs.length;

    adbs.map(function(db){
      if(db.empresas){
        o.totalEmpresas += Object.values(db.empresas).length
      }
    })
    return o;
  }


  render(){
    var a = this.buildAnalytics();
    return(
      <div className="ss_analytics_dbsinfo">
        <strong>{window.dbf.numberWithCommas(a.totalEmpresas)} empresa{a.totalEmpresas === 1 ? '' : 's'}</strong>
        &nbsp;en {this.props.parent.fnumber(a.totalDbs)} base{a.totalDbs === 1 ? '' : 's'} de datos
      </div>
    )
  }
}

class AnalyticsControl extends React.Component{
  toggleAll(){
    var dbs = Object.values(window.dbf.getDbs());
    var active = this.props.active;
    var areall = dbs.length == active.length;
    if(areall){
      var o = [];
    }else{
      var o = [];
      dbs.map(function(db){
        o.push(db.id);
      })
    }

    this.props.setAll(o);

  }
  render(){
    var self = this;
    var dbs = Object.values(window.dbf.getDbs());
    var active = this.props.active;
    console.log('Active', active);
    var areall = dbs.length == active.length;
    return(
      <div className="ss_analytics_choose ss_analytics_montos">
        <div className="ss_analytics_montos_title">Bases de datos</div>
        <div className="ss_analytics_choose_tr">
          <div className="ss_analytics_choose_td ssa_icon" onClick={() => this.toggleAll()}><Icon>{areall ? "visibility_off" : 'visibility'}</Icon></div>
          <div className="ss_analytics_choose_td ssa_btns">
            {
              dbs.map(function(db){
                var cs = ['ssa_btn'];
                var isactive = active.indexOf(db.id) > -1;
                if(!isactive){
                  cs.push('ssa_inactive');
                }
                return(
                  <div className={cs.join(' ')} onClick={() => self.props.toggleDb(db.id)}>
                    <div className="ssa_btn_icon">
                      <Icon>{isactive ? 'check_box' : 'check_box_outline_blank'}</Icon>
                    </div>
                    <div className="ssa_btn_label">
                      {db.name}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
