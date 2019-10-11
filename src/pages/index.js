import React from 'react'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from "react-router-dom";
import * as d3 from "d3";

export default class Index extends React.Component{
  render(){
    return(
      <div id="ss_sinapsis_home">
        <Landing />
      </div>
    )
  }
}

class Landing extends React.Component{
  render(){
    return (
      <div className="ss_h_s" id="ss_h_landing">
        <div className="ss_h_s_c">
          <APLogo />

        </div>
      </div>
    )
  }
}

class APLogo extends React.Component{

  componentDidMount(){
    this.createSvg();
  }

  createSvg(){
    var c = this.container;
    var w = c.offsetWidth;
    var h = c.offsetHeight;
    var svg = this.svg;

    var canvas = d3.select('#ap_logo_svg')
                   .attr('width', w)
                   .attr('height', h);
    var s = 10;
    var r = w / 2;
    var arc = d3.arc()
    .innerRadius(18)
    .outerRadius(24)
    .startAngle(0.2)
    .endAngle(1)

    canvas.append('path')
          .attr('d', arc)
          .attr('fill', 'orange')

  }


  render(){
    return(
      <div id="ap_logo" ref={(ref) => this.container = ref}>
        <a href="https://animalpolitico.com" target="_blank">
          <div id="ap_logo_container">
            <img src={require('../static/apmono.svg')} id="ap_logo_img"></img>
            <svg id="ap_logo_svg" ref={(ref) => this.svg = ref}></svg>
          </div>
        </a>
      </div>
    )


  }
}
