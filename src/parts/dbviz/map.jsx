import React from 'react';
import ReactMapboxGl, { Layer, Feature, Marker, Popup, ZoomControl } from 'react-mapbox-gl';
import { mapboxKeys } from '../../vars/mapboxconfig';
import { getCoords } from '../../vars/countriesDict';
import Icon from '@material-ui/core/Icon';
import * as d3 from "d3";

const Map = ReactMapboxGl({
  accessToken: mapboxKeys.access
});

export default class SSMap extends React.Component{
  state = {
    defaultZoom: getCoords(),
    markers: [],
    onlyCoincidencias: true,
    zoom: 5,
    st: false
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

  buildMarkers(){
    var self = this;
    var oc = this.state.onlyCoincidencias;
    var o = {
      'a': [],
      'b': []
    };
    var coordsMaster = [];
    var m = this.state.markers;
    m.map(function(d){
      var ename = window.dbf.getEmpresa(d.fromdb, d.empresauid).name
      var euid = d.empresauid;
      var show = false;
      var hasc = false;
      var coords = [d.latlng.lng, d.latlng.lat];
      coordsMaster.push(coords);
      d3.selectAll('.node[data-id="'+euid+'"]')
        .filter(d => hasc = d.coincidencias > 0);
      var d = {
        coords: coords,
        name: ename,
        type: d.name,
        euid: euid,
        fromdb: d.fromdb,
        value: d.value
      }
      var marker = <Feature coordinates={coords}
                            onClick={function(e){
                              var f = e.feature;
                              var l = f.layer;

                              console.log('f', f);

                              var a = ['match', ['get', 'id'], f.properties.id, '#ec991d', "#0072ff"];

                              self.mapApi.setPaintProperty(l.id, 'circle-color', a);
                              self.openMarker(d);
                            }}
                            onMouseEnter={function(e){
                              document.getElementsByClassName('mapboxgl-canvas')[0].style.cursor = "pointer";
                              self.layers.setState({d: d, st: true})
                            }}
                            onMouseLeave={function(){
                              document.getElementsByClassName('mapboxgl-canvas')[0].style.cursor = "grab";
                              self.layers.setState({st: false});
                            }}
                          />
      if(hasc){
        o.a.push(marker);
      }else{
        o.b.push(marker);
      }
    })

    /** Promedios **/
    var pms = {};
    coordsMaster.map(function(c){
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
    return o;
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
          <div className="ss_map_controls_group_title">Mostrar direcciones</div>
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
      <Layers markers={markers} ref={(ref) => this.layers = ref} />
      </Map>
      </div>
    )
  }
}

class Layers extends React.Component{
  state = {
    st: false,
    d: {}
  }
  render(){
    var markers = this.props.markers;
    return(
      <>
      <Layer type="circle" minZoom={10}
        paint={
          {
            "circle-radius": {
              'base': 5,
              'stops': [[5, 5], [12, 10]]
            },
            "circle-color": "#0072ff",
            "circle-opacity": {
              'base': 0.3,
              'stops': [[5, 0.3], [12, 0.8]]
            },
          }
        }>
        {markers.a}
      </Layer>
      {
        !this.state.onlyCoincidencias ?
        <Layer type="circle" minZoom={10}
          paint={
            {
              "circle-radius": {
                'base': 25,
                'stops': [[5, 25], [12, 10]]
              },
              "circle-color": "#fb5d5d",
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
            "circle-color": "#0072ff",
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

      {
        this.state.st ?
        <Popup
          coordinates={this.state.d.coords}
        >
        <div className="ss_map_tooltip">
          {
            this.state.d.type !== "fpms" ?
            <>
            <div className="ss_map_tooltip_type">
              {this.state.d.type}
            </div>
            <div className="ss_map_tooltip_ename">
              {this.state.d.name}
            </div>
            </>
          : null }
          <div className="ss_map_tooltip_name">
            {
              this.state.d.type == "fpms" ?
              (this.state.d.size + ' direcciones')
              :
              this.state.d.value
            }
          </div>
        </div>
      </Popup>
      : null
      }
      </>
    )
  }
}
