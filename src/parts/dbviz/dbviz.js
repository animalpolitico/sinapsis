import React from 'react';
import * as d3 from "d3";

export default class DbViz extends React.Component{

  render(){
    return(
      <div className="db_viz">
        <Nodes />
      </div>
    )
  }
}

class Nodes extends React.Component{
  componentDidMount(){
    var self = this;
    this.set();
    window.addEventListener('sinapsisModified', function(){
      self.set();
    })
  }

  set(){
    var nodes = window.dbf.getMatches();
    var canvas = document.querySelector("#db_viz_nodes_canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width,
        height = canvas.height;

    var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; }))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));


  }

  render(){
    return(
      <div className="db_viz_nodes">
        <canvas id="db_viz_nodes_canvas"></canvas>
      </div>
    )
  }
}
