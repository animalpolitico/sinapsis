import React from 'react';
import ReactMapboxGl, { Layer, Feature, Marker, Popup } from 'react-mapbox-gl';
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
    zoom: 5
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


  render(){
    var self = this;
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

      {
        this.state.showTooltip ?
        <div
          className="ss_map_tooltip"
          style={{left: this.state.tooltipCoords.left, top: this.state.tooltipCoords.top}}
        >

        </div>
        : null
      }

      <Map
        ref={(map) => this.map = map}
        style={mapboxKeys.style}
        center={this.state.defaultZoom}
        zoom={[this.state.zoom]}
      >
      {
        this.state.markers.map(function(d){
          return <SSMarker onlyCoincidencias={self.state.onlyCoincidencias} parent={self} d={d} onME={(e, _data) => self.onME(e, _data)} onML={() => self.setState({showTooltip: false})}/>
        })
      }
      </Map>
      </div>
    )
  }
}

class SSMarker extends React.Component{
  state = {
    showTooltip: false
  }

  handleClick(e){
    var self = this;
    var d = this.props.d;

    d3.selectAll('.ss_marker_active')
      .classed('ss_marker_active', false);
    e.target.classList.add('ss_marker_active');


    var data = {
      euid: d.empresauid,
      dbid: d.fromdb
    }
    var event = new CustomEvent('sinapsisOpenEmpresa', { detail: data});
    window.dispatchEvent(event);

    setTimeout(function(){
      self.props.parent.setZoom([d.latlng.lng, d.latlng.lat], 12);
    }, 100)

  }

  render(){
    var d = this.props.d;
    var ename = window.dbf.getEmpresa(d.fromdb, d.empresauid).name
    var euid = d.empresauid;
    var show = false;

    d3.selectAll('.node[data-id="'+euid+'"]')
      .filter(d => show = d.coincidencias > 0);

    var cs = ['ss_map_marker'];
    if(!show){
      cs.push('ss_map_marker_no');
    }

    show = (this.props.onlyCoincidencias && show) || !this.props.onlyCoincidencias

    if(!show){
      return null;
    }

    return(
      <>
      {
        this.state.showTooltip ?
        <Popup
          coordinates={[d.latlng.lng, d.latlng.lat]}
        >
        <div className="ss_map_tooltip">
          <div className="ss_map_tooltip_type">
            {d.name}
          </div>
          <div className="ss_map_tooltip_ename">
            {ename}
          </div>
          <div className="ss_map_tooltip_name">
            {d.value}
          </div>


        </div>
      </Popup>
      : null
      }

      <Marker
        onClick={(e) => this.handleClick(e)}
        onMouseEnter={(e) => this.setState({ showTooltip: true})}
        onMouseLeave={(e) => this.setState({ showTooltip: false})}
        coordinates={[d.latlng.lng, d.latlng.lat]}
      >
        <div
          className={cs.join(' ')}

        >

        </div>
      </Marker>
      </>
    )
  }
}
