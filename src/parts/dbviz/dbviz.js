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
  state = {
    loading: false
  }
  componentDidMount(){
    var self = this;
    self.set();
    window.addEventListener('sinapsisModified', function(){
      if(!self.state.loading){
        d3.selectAll('#db_viz_nodes_canvas *').remove();
        self.set();
      }
    })
  }

  set(){
    this.setState({
      loading: true
    })
    var self = this;
    var container = this.container;
    var nodesData = window.dbf.getMatches();
    this.nodesData = nodesData;
    const width = container.offsetWidth,
          height = container.offsetHeight;
    var canvas = d3.select("#db_viz_nodes_canvas")
                   .attr('width', width)
                   .attr('height', height);

    canvas.call(d3.zoom()
            .extent([[0, 0], [width, height]])
            .scaleExtent([-3, 8])
            .on("zoom", function(z){
              var d = d3.event.transform;
              canvas.select('.nodes_container').attr('transform', d);
            })
          );

    var simulation = d3.forceSimulation()
                       .force("link",
                          d3.forceLink()
                            .id(function(d){
                              return d.id;
                            })
                        )
                       .force('charge', d3.forceManyBody(-20))
                       .force('collide', d3.forceCollide(function(d){
                         if(d.type == 'empresa'){
                           return 50;
                         }
                         return 10;
                       }))
                       .force('center', d3.forceCenter(width / 2, height / 2))
                       .force("y", d3.forceY())
                       .force("x", d3.forceX());

   this.simulation = simulation;
   this.nodesContainer = canvas.append('g').attr('class', 'nodes_container');
   simulation.nodes(nodesData.nodes)
             .on('tick', this.drawNodes)
   simulation.force('link')
             .links(nodesData.links);
    setTimeout(function(){
      self.setState({
        loading: false
      })
    }, 5000);
  }

  drawNodes = e => {
    var self = this;
    var data = this.nodesData;
    /* Nodos */
    this.nodesContainer.selectAll('*').remove();

    var links = self.nodesContainer
                   .selectAll('line')
                   .data(data.links)
                   .enter()
                   .append('line')
                   .attr('x1', (d) => d.source.x)
                   .attr('y1', (d) => d.source.y)
                   .attr('x2', (d) => d.target.x)
                   .attr('y2', (d) => d.target.y)
                   .attr('stroke-width', 1)
                   .attr('stroke', 'rgba(0,0,0,0.5)')

    var nodes = self.nodesContainer
                    .selectAll('circle')
                    .data(data.nodes)
                    .enter()
                    .append('circle')
                    .attr('r', function(d){
                      var t = d.type;
                      if(t == "empresa"){
                        return 30;
                      }
                      return 10;
                    })
                    .attr('data-type', (d) => d.type)
                    .attr('fill', function(d){
                      var t = d.type;
                      switch(t){
                        case "empresa":
                          return "black";
                        break;
                        case "rfc":
                          return "blue";
                        break;
                        case "website":
                          return "orange";
                        break;
                        case "person":
                          return "hotpink";
                        break;
                        case "email":
                          return "yellow";
                        break;
                        case "convenio":
                          return "green";
                        break;
                        case "instancia":
                          return "rgb(20, 151, 215)";
                        break;
                        default:
                          return "#888888";
                        break;
                      }
                    })
                    .attr('cx', (d) => d.x)
                    .attr('cy', (d) => d.y)
                    .call(this.drag())
  }

  drag(){
    var simulation = this.simulation;

    function dragstarted(d) {
       if (!d3.event.active) simulation.alphaTarget(0.3).restart();
       d.fx = d.x;
       d.fy = d.y;
     }

     function dragged(d) {
       d.fx = d3.event.x;
       d.fy = d3.event.y;
     }

     function dragended(d) {
       if (!d3.event.active) simulation.alphaTarget(0);
       d.fx = d3.event.x;
       d.fy = d3.event.y;
     }

   return  d3.drag()
             .on("start", dragstarted)
             .on("drag", dragged)
             .on("end", dragended);
  }

  render(){
    return(
      <div className="db_viz_nodes" ref={(ref) => this.container = ref}>
        <svg id="db_viz_nodes_canvas"></svg>
      </div>
    )
  }
}
