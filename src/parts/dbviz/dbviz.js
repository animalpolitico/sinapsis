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

    var simulation = d3.forceSimulation()
                       .force("link", d3.forceLink().id(function(d){
                         console.log('d', d);
                          return d.id;
                        }))
                       .force('charge', d3.forceManyBody(40))
                       .force('collide', d3.forceCollide(40))
                       .force('center', d3.forceCenter(width / 2, height / 2))
                       .force("y", d3.forceY())
                       .force("x", d3.forceX());

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
    /* Links */
    data.links.forEach(function(d){
      var line = self.nodesContainer.append('line')
      line.attr("x1", d.source.x)
          .attr("y1", d.source.y)
          .attr("x2", d.target.x)
          .attr('y2', d.target.y)
          .attr("stroke-width", 1)
          .attr('stroke', 'rgba(255,255,255,0.5)')
    })

    data.nodes.forEach(function(d){
      var c = self.nodesContainer.append('circle');
          c.attr('r', function(){
            var t = d.type;
            switch(t){
              case "empresa":
               return 20;
              break;
              default:
               return 8;
              break;
            }
          })
           .attr('cx', d.x)
           .attr('cy', d.y)
           .attr('fill', function(){
             var t = d.type;
             switch(t){
               case "empresa":
                return "beige";
               break;
               case "website":
                return 'hotpink';
               break;
               case "rfc":
                return 'yellow';
               break;
               case "convenio":
                return 'white';
               break;
               case "person":
                return "green";
               break;
               case "instancia":
                return "purple";
               break;
               default:
                return 'blue';
               break;
             }
           })
    })


  }

  render(){
    return(
      <div className="db_viz_nodes" ref={(ref) => this.container = ref}>
        <svg id="db_viz_nodes_canvas"></svg>
      </div>
    )
  }
}
