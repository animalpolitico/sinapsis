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
    window.addEventListener('sinapsisDrawerToggle', function(){
      // d3.selectAll('#db_viz_nodes_canvas *').remove();
      // self.set();
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
    this.canvas = canvas;
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
                       .force('charge', d3.forceManyBody(0))
                       .force('collide', d3.forceCollide(100))
                       .force('center', d3.forceCenter(width / 2, height / 2))
                       .force("y", d3.forceY(0.01))
                       .force("x", d3.forceX(0.01));

   this.simulation = simulation;
   this.nodesContainer = canvas.append('g').attr('class', 'nodes_container');
   simulation.nodes(nodesData.nodes)
             .on('tick', this.drawNodes)
   simulation.force('link')
             .links(nodesData.links);

    var data = this.nodesData;
    var empresaMinMax = this.getEmpresaMinMax();
    var circlesData = [];
    var labelsData = [];

    data.nodes.map(function(d){
      var t = d.type;
      var labelTypes = ['dependencia', 'instancia', 'titular'];
      if(labelTypes.indexOf(t) > -1){
        labelsData.push(d);
      }else{
        circlesData.push(d);
      }
    })

    var links = self.nodesContainer
                   .selectAll('line')
                   .data(data.links)
                   .enter()
                   .append('line')
                   .attr('stroke-width', 5)
                   .attr('stroke', 'rgba(40, 204, 233, 0.8)');
    this.links = links;


    var nodesLabels = self.nodesContainer
                          .selectAll('.nodes_label')
                          .data(labelsData)
                          .enter(labelsData)
                          .append('g')
                          .attr('class', 'nodes_label')
                          .call(this.drag())

    nodesLabels.append('rect')
               .attr('fill', '#222')
               .attr('width', 80)
               .attr('height', 18)
               .attr('x', -40)
               .attr('y', -15)

    nodesLabels.append('text')
               .text((d) => d.name.toUpperCase())
               .attr('fill', 'white')
               .attr('text-anchor', 'middle')

    var nodesCircles = self.nodesContainer
                      .selectAll('circle')
                      .data(circlesData)
                      .enter()
                      .append('circle')
                      .attr('class', 'node')
                      .attr('data-name', (d) => d.name)
                      .attr('r', function(d){
                        var t = d.type;
                        if(t == "empresa"){
                          var s = d.sum ? d.sum : 0;
                          var r = s / empresaMinMax.max;
                          var n = (40 * r) + 15;
                          if(isNaN(n)){
                            n = 15;
                          }
                          return n;
                        }
                        return 10;
                      })
                      .attr('data-type', (d) => d.type)
                      .attr('fill', function(d){
                        var t = d.type;
                        switch(t){
                          case "empresa":
                            return "white";
                          break;
                          case "rfc":
                            return "blue";
                          break;
                          case "website":
                            return "orange";
                          break;
                          case "person":
                            return "rgb(254, 18, 53)";
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
                      .call(this.drag())
                      .on('mouseenter', function(d){
                        self.nodesContainer.selectAll('.viz_tooltip').remove();
                        var g = self.nodesContainer
                                .append('g')
                                .attr('class', 'viz_tooltip')
                                .attr("transform", "translate(" + d.x + "," + (d.y - 18) + ")");
                        g.append('rect')
                         .attr('width', 120)
                         .attr('height', 14)
                         .attr('x', -60)
                         .attr('y', -12)
                         .attr('fill', "white")

                        g.append('text')
                         .text(d.name)
                         .attr('text-anchor', 'middle')
                         .style('font-size', 12)
                      })
                      .on('mouseleave', function(d){
                        self.nodesContainer.selectAll('.viz_tooltip').remove();
                      })

    this.nodesLabels = nodesLabels;
    this.nodesCircles = nodesCircles;

    setTimeout(function(){
      self.setState({
        loading: false
      })
    }, 5000);
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
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)

    this.nodesLabels.attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
          });


  }

  drag(){
    var simulation = this.simulation;
    var self = this;
    function dragstarted(d) {
       if (!d3.event.active) simulation.alphaTarget(0.1).restart();
       d.fx = d.x;
       d.fy = d.y;
     }

     function dragged(d) {
       d.fx = d3.event.x;
       d.fy = d3.event.y;
     }

     function dragended(d) {
       if (!d3.event.active) simulation.alphaTarget(0.1).restart();
       d.fixed = true;
       simulation.stop();
     }

   return d3.drag()
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
