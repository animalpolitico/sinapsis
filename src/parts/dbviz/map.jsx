import React from 'react';
import ReactMapboxGl, { Layer, Feature, Marker, Popup, ZoomControl } from 'react-mapbox-gl';
import { mapboxKeys } from '../../vars/mapboxconfig';
import { getCoords } from '../../vars/countriesDict';
import Icon from '@material-ui/core/Icon';
import * as d3 from "d3";

var slugify = require('slugify');

const Map = ReactMapboxGl({
  accessToken: mapboxKeys.access
});

export default class SSMap extends React.Component{
  state = {
    defaultZoom: getCoords(),
    markers: [],
    all: [],
    selected: [0,0],
    onlyCoincidencias: true,
    zoom: 5,
    st: false,
    czoom: 5,
    active: ['df', 'ds'],
  }
  componentDidMount(){
    var self = this;
    this.set();
    window.addEventListener('sinapsis_lang_change', function(){
      self.set(true);
    })
    window.addEventListener('ss_reload_map', function(){
      self.set();
    })
    window.addEventListener('sinapsisDrawerToggle', function(){
      if(self.map){
        window.dispatchEvent(new Event('resize'));
      }
    })
  }

  set(preventFlying){
    if(preventFlying){
      var country_coords = getCoords();
      this.setState({
        defaultZoom: country_coords
      })
    }
    /** Obtiene los campos con direcciones **/
    var f = window.dbf.getLatLngAddress();
    this.setState({
      markers: f
    })

  }

  onME(e, d){
    this.setState({
      tooltipCoords: {
        left: e.clientX,
        top: e.clientY
      },
      doi: d,
      showTooltip: true
    })

  }

  setZoom(lnglat, zoom){
    zoom = zoom ? zoom : 5;
    this.setState({
      defaultZoom: lnglat,
      zoom: zoom
    })
  }

  toggleType(type){
    var c = this.state.active;
    var i = c.indexOf(type);
    if(i == -1){
      c.push(type);
    }else{
      c.splice(i, 1);
    }
    this.setState({
      active: c
    })
  }

  buildMarkers(){
    var self = this;
    var oc = this.state.onlyCoincidencias;
    var o = {
      'a': [],
      'b': []
    };
    var coordsSocios = [];
    var coordsFiscal = [];
    var m = this.state.markers;

    var all = [];

    m.map(function(d){
      var ename = window.dbf.getEmpresa(d.fromdb, d.empresauid).name
      var euid = d.empresauid;
      var show = false;
      var hasc = false;
      var coords = [d.latlng.lng, d.latlng.lat];

      d3.selectAll('.node[data-id="'+euid+'"]')
        .each(d => hasc = d.coincidencias > 0);
      var d = {
        coords: coords,
        name: ename,
        nameSlug: slugify(ename.replace(/[.\s]/g, ''), {lower: true, remove: /[*+~.,()'"!:@]/g}),
        type: d.name,
        euid: euid,
        fromdb: d.fromdb,
        value: d.value,
        addressSlug: slugify(d.value.replace(/[.\s]/g, ''), {lower: true, remove: /[*+~.,()'"!:@]/g}),
      }

      all.push(d);


      var okdf = self.state.active.indexOf('df') > -1;
      var okds = self.state.active.indexOf('ds') > -1;
      var isdf = d.type == "Dirección fiscal" || d.type == "Entidad Federativa";

      if((hasc && oc) || (!oc)){
        if(isdf && okdf){
          coordsSocios.push(coords);
        }else if(!isdf && okds){
          coordsFiscal.push(coords);
        }
      }


      var isok = (isdf && okdf) || (!isdf && okds);

      var isselected = (d.coords[0] == self.state.selected[0] && d.coords[1] == self.state.selected[1]) ? "1" : "0";
      console.log('isselected', isselected);

      var marker = <Feature coordinates={coords}
                            properties={{"isdf": isdf ? "1" : "0", "d": d, "isselected": isselected}}
                            onClick={function(e){
                              var f = e.feature;
                              var l = f.layer;
                              var a = ['match', ['get', 'id'], f.properties.id, 6, 0];
                              self.mapApi.setPaintProperty(l.id, 'circle-stroke-width', a);
                              self.openMarker(d);
                            }}
                            onMouseEnter={function(e){
                              document.getElementsByClassName('mapboxgl-canvas')[0].style.cursor = "pointer";
                              var _d = self.underMouse(e);
                              self.layers.setState({d: _d, st: true})
                            }}
                            onMouseLeave={function(){
                              document.getElementsByClassName('mapboxgl-canvas')[0].style.cursor = "grab";
                              self.layers.setState({st: false});
                            }}
                          />
      if(hasc && isok){
        o.a.push(marker);
      }else if(!hasc && isok){
        o.b.push(marker);
      }
    })

    /** Promedios Fiscal **/
    var pms = {};
    coordsFiscal.map(function(c){
      var lng = c[0];
      var lat = c[1];

      lng = Math.round(lng * 10) / 10;
      lat = Math.round(lat * 10) / 10;

      var s = lng+','+lat;
      if(!pms[s]){
        pms[s] = 0;
      }
      pms[s] = pms[s] + 1;
    })



    var fpms = [];
    var tpms = [];
    var max = 0;

    var _tmp = [];
    for(var key in pms){
      _tmp.push([pms[key], key]);
    }

    _tmp = _tmp.sort(function(a, b){
      return b[0] - a[0];
    })


    _tmp.map(function(e){
      var key = e[1];
      var s = e[0];
      var coords = key.split(',');
      var cc = [];
      coords.map(function(_c){
        cc.push(parseFloat(_c));
      })

      coords = cc;

      max = Math.max(s, max)
      var marker = <Feature
                      coordinates={coords}
                      properties={{"size": pms[key]}}
                      onClick={(e) => self.setState({defaultZoom: [e.lngLat.lng, e.lngLat.lat], zoom: 10})}
                      onMouseEnter={function(e){
                        document.getElementsByClassName('mapboxgl-canvas')[0].style.cursor = "pointer";
                      }}
                      onMouseLeave={function(){
                        document.getElementsByClassName('mapboxgl-canvas')[0].style.cursor = "grab";
                      }}
                    />
      fpms.push(marker);

      var marker = <Feature
                      coordinates={coords}
                      properties={{"size": pms[key]}}
                      onMouseEnter={function(e){
                        document.getElementsByClassName('mapboxgl-canvas')[0].style.cursor = "pointer";
                      }}
                      onMouseLeave={function(){
                        document.getElementsByClassName('mapboxgl-canvas')[0].style.cursor = "grab";
                      }}
                    />
      tpms.push(marker);

    })

    o.tpms = tpms;
    o.fpms = fpms;
    o.max = max;

    var pms = {};
    coordsSocios.map(function(c){
      var lng = c[0];
      var lat = c[1];

      lng = Math.round(lng * 10) / 10;
      lat = Math.round(lat * 10) / 10;

      var s = lng+','+lat;
      if(!pms[s]){
        pms[s] = 0;
      }
      pms[s] = pms[s] + 1;
    })

    var sfpms = [];
    var stpms = [];
    var smax = 0;

    var _tmp = [];
    for(var key in pms){
      _tmp.push([pms[key], key]);
    }

    _tmp = _tmp.sort(function(a, b){
      return b[0] - a[0];
    })


    _tmp.map(function(e){
      var key = e[1];
      var s = e[0];
      var coords = key.split(',');
      var cc = [];
      coords.map(function(_c){
        cc.push(parseFloat(_c));
      })

      coords = cc;

      max = Math.max(s, max)
      var marker = <Feature
                      coordinates={coords}
                      properties={{"size": pms[key]}}
                      onClick={(e) => self.setState({defaultZoom: [e.lngLat.lng, e.lngLat.lat], zoom: 10})}
                      onMouseEnter={function(e){
                        document.getElementsByClassName('mapboxgl-canvas')[0].style.cursor = "pointer";
                      }}
                      onMouseLeave={function(){
                        document.getElementsByClassName('mapboxgl-canvas')[0].style.cursor = "grab";
                      }}
                    />
      sfpms.push(marker);

      var marker = <Feature
                      coordinates={coords}
                      properties={{"size":  pms[key]}}
                      onMouseEnter={function(e){
                        document.getElementsByClassName('mapboxgl-canvas')[0].style.cursor = "pointer";
                      }}
                      onMouseLeave={function(){
                        document.getElementsByClassName('mapboxgl-canvas')[0].style.cursor = "grab";
                      }}
                    />
      stpms.push(marker);

    })

    // this.setState({
    //   all: all
    // })
    o.all = all;
    o.stpms = stpms;
    o.sfpms = sfpms;
    o.max = max;
    return o;
  }

  underMouse(e){
    var self = this;
    var map = self.mapApi;
    var features = map.queryRenderedFeatures(e.point);
    console.log('FEATURES', features);
    var ff = features.filter(o => o.layer.id == "df" || o.layer.id.indexOf('layer-') > -1);
    return ff;
  }

  openMarker(d){
    var self = this;
    var data = {
      euid: d.euid,
      dbid: d.fromdb
    }
    window.dispatchEvent(new Event('sinapsisStartLoad'));
    var event = new CustomEvent('sinapsisOpenEmpresa', { detail: data});
    window.dispatchEvent(event);
    setTimeout(function(){
      self.setZoom(d.coords, 12);
    }, 100)
  }

  render(){
    var self = this;
    var markers = this.buildMarkers();
    return(
      <div id="ss_map">
      <div id="ss_map_controls">

        <div className="ss_map_controls_group">
          <div className="ss_map_controls_group_title">Buscar</div>
          <div className="ss_map_controls_group_content">
            <MapSearch all={markers.all} parent={this}/>
          </div>
        </div>

        <div className="ss_map_controls_group">
          <div className="ss_map_controls_group_title">Mostrar direcciones</div>
          <div className="ss_map_controls_group_content">
            <div className="ss_map_controls_group_content_leyends">
              <div className={"ss_map_controls_group_content_leyends_leyend " + (this.state.active.indexOf('df') > -1 ? 'lactive' : '' )} onClick={() => this.toggleType('df')}>
                <div className="ss_map_controls_group_content_leyends_leyend_b"><input type="checkbox" checked={this.state.active.indexOf('df') > -1} style={{marginRight: '7px', transform: 'translateY(-2px)'}} /></div>
                <div className="ss_map_controls_group_content_leyends_leyend_a" style={{backgroundColor: '#f6f6f6'}}></div>
                <div className="ss_map_controls_group_content_leyends_leyend_b">Direcciones de empresas</div>
              </div>
              <div className={"ss_map_controls_group_content_leyends_leyend " + (this.state.active.indexOf('ds') > -1 ? 'lactive' : '' )}  onClick={() => this.toggleType('ds')}>
                <div className="ss_map_controls_group_content_leyends_leyend_b"><input type="checkbox" checked={this.state.active.indexOf('ds') > -1} style={{marginRight: '7px', transform: 'translateY(-2px)'}} /></div>
                <div className="ss_map_controls_group_content_leyends_leyend_a" style={{backgroundColor: '#FF00A8'}}></div>
                <div className="ss_map_controls_group_content_leyends_leyend_b">Direcciones de personas</div>
              </div>

            </div>
          </div>
        </div>

        <div className="ss_map_controls_group">
          <div className="ss_map_controls_group_content">
            <div className="ss_map_controls_group_content_tr">
              <input checked={this.state.onlyCoincidencias} type="radio" name="ssmapcoincidencias" onChange={() => this.setState({onlyCoincidencias: true})} />
              <div>Solo de empresas con coincidencias</div>
            </div>
            <div className="ss_map_controls_group_content_tr">
              <input checked={!this.state.onlyCoincidencias} type="radio" name="ssmapcoincidencias" onChange={() => this.setState({onlyCoincidencias: false})} />
              <div>Todas</div>
            </div>
          </div>
        </div>



      </div>

      <div className="ss_map_close" onClick={() => this.props.onClose()}><Icon>close</Icon></div>

      <Map
        ref={(map) => this.map = map}
        style={mapboxKeys.style}
        center={this.state.defaultZoom}
        zoom={[this.state.zoom]}
        onStyleLoad={(m) => this.mapApi = m}
      >
      <ZoomControl position="bottom-right"/>
      <Layers markers={markers} onlyCoincidencias={this.state.onlyCoincidencias} ctive={this.state.active} ref={(ref) => this.layers = ref} />
      </Map>
      </div>
    )
  }
}

class MapSearch extends React.Component{

  state = {
    r: []
  }

  doSearch(v){

    if(v){
      var a = this.props.all;
      var s = slugify(v.replace(/[.\s]/g, ''), {lower: true, remove: /[*+~.,()'"!:@]/g});
      var o = a.filter(_o => _o.addressSlug.indexOf(s) > -1 || _o.nameSlug.indexOf(s) > -1);
    }else{
      var o = [];
    }

    this.setState({
      r: o,
      v: v
    })
  }

  fly(s){
    var coords = s.coords;
    this.props.parent.setState({
      defaultZoom: coords,
      selected: coords,
      zoom: 13
    })
    this.setState({
      v: s.name,
      r: []
    })
  }

  render(){
    var self = this;
    return(
      <div className="map_search">
        <div className="map_search_input">
          <input value={this.state.v} onChange={(e) => this.doSearch(e.target.value)} type="text" placeholder="Dirección o nombre de empresa" />
        </div>
        <div className="map_search_results">
          {
            this.state.r.map(function(s){
              return(
                <div className="map_search_results_r" onClick={() => self.fly(s)}>
                  <div className="map_search_results_r_label">{s.type}</div>
                  <div className="map_search_results_r_empresa">{s.name}</div>
                  <div className="map_search_results_r_add">{s.value}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    )

  }
}

class Layers extends React.Component{
  state = {
    st: false,
    d: {},
  }


  render(){
    var markers = this.props.markers;


    /* Marker */
    if(this.state.st){
      var rms = [];
      var ms = this.state.d;
      ms.map(function(m){
        var d = m.properties.d;
            d = JSON.parse(d);
        rms.push(d);
      })


      var dbname = false;
      if(rms.length){
        var d = rms[0];
        if(d.fromdb){
          dbname = window.dbf.getDb(d.fromdb).name;
        }
      }

      console.log('d', d);

      var enms = [];
      var ismultiple = rms.length > 1;
      rms.map(dd => enms.push(dd.name));

    }



    return(
      <>
      <Layer type="circle" minZoom={10}
        id="df"
        paint={
          {
            "circle-radius": {
              'base': 5,
              'stops': [[5, 5], [12, 10]]
            },
            "circle-stroke-width": ['match', ['get', 'isselected'], "1", 8, 0],
            "circle-color": ['match', ['get', 'isdf'], "1", '#f6f6f6', "#FF00A8"],
            "circle-stroke-color": '#0072ff',
            "circle-opacity": {
              'base': 0.3,
              'stops': [[5, 0.3], [12, 0.8]]
            },
          }
        }>
        {markers.a}
      </Layer>
      {
        !this.props.onlyCoincidencias ?
        <Layer type="circle" minZoom={10}
          paint={
            {
              "circle-radius": {
                'base': 25,
                'stops': [[5, 25], [12, 10]]
              },
              "circle-stroke-width": ['match', ['get', 'isselected'], "1", 8, 0],
              "circle-color": ['match', ['get', 'isdf'], "1", '#f6f6f6', "#FF00A8"],
              "circle-stroke-color": '#0072ff',
              "circle-opacity": {
                'base': 0.3,
                'stops': [[5, 0.3], [12, 0.8]]
              },
            }
          }>
          {markers.b}
        </Layer>
        : null
      }



      <Layer type="circle" minZoom={0}
        maxZoom={10}
        paint={
          {
            "circle-radius": ["interpolate",["linear"],["get", "size"],0,4,markers.max,40],
            "circle-color": "#FF00A8",
            "circle-opacity": 0.8
          }
        }>
        {markers.fpms}
      </Layer>

      <Layer
        type="symbol"
        minZoom={0}
        maxZoom={10}
        layout={
          {
            "text-field": ["get", "size"],
            "text-size": ["interpolate",["linear"],["get", "size"],0,9,markers.max,40]
          }
        }
        paint={
          {
            "text-color": "#f6f6f6"
          }
        }
      >
        {markers.tpms}
      </Layer>

      <Layer type="circle" minZoom={0}
        maxZoom={10}
        paint={
          {
            "circle-radius": ["interpolate",["linear"],["get", "size"],0,4,markers.max,40],
            "circle-color": "#f6f6f6",
            "circle-opacity": 0.8
          }
        }>
        {markers.sfpms}
      </Layer>

      <Layer
        type="symbol"
        minZoom={0}
        maxZoom={10}
        layout={
          {
            "text-field": ["get", "size"],
            "text-size": ["interpolate",["linear"],["get", "size"],0,9,markers.max,40]
          }
        }
        paint={
          {
            "text-color": "#0072ff"
          }
        }
      >
        {markers.stpms}
      </Layer>

      {
        this.state.st && rms.length ?
        <Popup
          coordinates={d.coords}
        >
        {
          !ismultiple ?
          <div className="ss_map_tooltip">
            {
              d.type !== "fpms" && d.type !== "Entidad Fedrerativa" ?
              <>
              <div className="ss_map_tooltip_type">
                {d.type}
              </div>

              <div className="ss_map_tooltip_ename">
                {d.name}
              </div>

              <div className="ss_map_tooltip_enam" style={{marginTop: '0.35rem', marginBottom: '0.15rem', color: '#ccc', fontSize: '0.8em'}}>
                Base de datos: {dbname}
              </div>

              </>
            : null }
            <div className="ss_map_tooltip_name">
              {
                d.type == "fpms" ?
                (d.size + ' direcciones')
                :
                d.value
              }
            </div>
          </div>
          : <div className="ss_map_tooltip">
            {
              d.type !== "fpms" && d.type !== "Entidad Federativa" ?
              <>
              <div className="ss_map_tooltip_type">
                {d.type}
              </div>
              <div className="ss_map_tooltip_ename">
                Encontrada en {rms.length} empresas
                {
                  rms.length < 10 ?
                  (<ul>
                    {enms.map(function(en){
                      return <li>{en}</li>
                    })}
                  </ul>)
                  : null
                }

              </div>
              <div className="ss_map_tooltip_ename">

              </div>
              </>
            : null }

            {
              d.type == "Entidad Federativa" ?

              <>
              <div className="ss_map_tooltip_ename">
                En la base de datos {dbname} se ingresaron {rms.length} empresas en {d.value}
              </div>
              </>

            : null

            }


            <div className="ss_map_tooltip_name">
              {
                d.type == "fpms" ?
                (d.size + ' direcciones')
                :
                d.type !== "Entidad Federativa" ? d.value : ""
              }
            </div>
          </div>
        }

      </Popup>
      : null
      }
      </>
    )
  }
}
