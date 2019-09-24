import React from 'react';
import * as d3 from "d3";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Tooltip from 'tooltip.js';
import Paper from '@material-ui/core/Paper';
import formatMoney from 'format-money';
var slugify = require('slugify');
export default class DbViz extends React.Component{
  state = {
    showSearch: true
  }
  constructor(props){
    super(props);
    this.nodesRef = React.createRef();
  }

  render(){
    return(
      <div className="db_viz">
        <Nodes ref={(ref) => this.nodes = ref}/>
        <Search nodesMap={this.nodes}/>
      </div>
    )
  }
}

class Search extends React.Component{
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
          if(add){
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
    return(
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
            <SearchResults nodeMap={this.props.nodesMap} results={this.state.results} v={this.state.v} onSelect={(v) => this.handleResultSelect(v)}/>
            : null
          }
        </div>
      </div>
    )
  }
}

class SearchResults extends React.Component{

  isolateNode(id, n){
    console.log('id', id);
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
          {r.map(function(result){
            return(
              <div className="ss_search_result" onClick={(e) => self.isolateNode(result.id, result.name)}>
                <div className="ss_search_result_container">
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
    loading: false,
    isPerfectZoom: true,
    coincidencias: 0
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
      setTimeout(function(){
        self.resize();
      }, 300);
    })
  }

  resize(){
    var container = this.container;
    const width = container.offsetWidth,
          height = container.offsetHeight;
    this.canvas.attr('width', width)
               .attr('height', height);
    this.setInitialZoom();
  }


  set(){
    d3.selectAll('#db_viz_nodes_canvas *').remove();
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


    var simulation = d3.forceSimulation()
                       .force("charge", d3.forceManyBody(10))
                       .force("link",
                          d3.forceLink()
                            .id(function(d){
                              return d.id;
                            })
                        )
                       .force('collide', d3.forceCollide(700).strength(0.6).iterations(2))
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
                   .attr('stroke-width', 8)
                   .attr('class', 'nodes_link')
                   .attr('data-from', l => l.source.id)
                   .attr('data-to', l => l.target.id)
                   .attr('stroke', 'rgba(90, 67, 231, 1)');
    this.links = links;

    this.setState({
      coincidencias: data.links.length
    })


    var nodesLabels = self.nodesContainer
                          .selectAll('.nodes_label')
                          .data(labelsData)
                          .enter(labelsData)
                          .append('g')
                          .attr('class', 'nodes_label node')
                          .attr('data-id', d => d.id)
                          .call(this.drag())
                          .on('mouseenter', function(d){
                            // self.isolateNode(d.id);
                          })
                          .on('click', function(d){
                            d.isclicked = true;
                            self.isolateNode(d.id)
                          })
                          .on('mouseleave', function(d){
                            self.nodesContainer.selectAll('.viz_tooltip').remove();
                            // self.nodesContainer.selectAll('.nodes_link').attr('stroke', 'rgba(90, 67, 231, 0.79)');
                            // self.nodesContainer.selectAll('.node').attr('opacity', 1)
                          })

    nodesLabels.append('rect')
               .attr('fill', '#222')
               .attr('width', 2000)
               .attr('height', 260)
               .attr('x', -1000)
               .attr('y', -210)

    nodesLabels.append('text')
               .text((d) => d.name.toUpperCase())
               .attr('fill', 'white')
               .attr('font-size', 240)
               .attr('text-anchor', 'middle')

    var nodesCircles = self.nodesContainer
                      .selectAll('circle')
                      .data(circlesData)
                      .enter()
                      .append('circle')
                      .attr('class', 'node')
                      .attr('data-name', (d) => d.name)
                      .attr('data-id', d => d.id)
                      .attr('id', (d, i) => 'node_'+i)
                      .attr('stroke', '#0a0a0a')
                      .attr('stroke-width', '4px')
                      .attr('r', function(d){
                        var t = d.type;
                        if(t == "empresa"){
                          var s = d.sum ? d.sum : 0;
                          var r = s / empresaMinMax.max;
                          var n = (400 * r) + 55;
                          if(isNaN(n)){
                            n = 55;
                          }
                          return n;
                        }
                        return 50;
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
                          case "contrato":
                            return "rgb(247, 107, 47)"
                          break;
                          case "address":
                            return "rgb(227, 104, 218)";
                          break;
                          default:
                            return "#888888";
                          break;
                        }
                      })
                      .call(this.drag())
                      .on('mouseover', function(d, e){
                        self.setState({
                          doi: d,
                          displayTooltip: true
                        })
                        // self.isolateNode(d.id);
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

    this.nodesLabels = nodesLabels;
    this.nodesCircles = nodesCircles;

    this.setInitialZoom();

    d3.selectAll('.node')
      .on('dblclick', function(d){
        d3.event.stopPropagation();
        d3.select(this).remove();
      })




    setTimeout(function(){
      self.setState({
        loading: false
      })
    }, 5000);
  }

  isolateNode(id){
    this.releaseNode();

    var self = this;

    this.nodesContainer
       .selectAll('.nodes_link:not([data-from="'+id+'"]):not([data-to="'+id+'"])')
       .attr('stroke', 'rgba(90, 67, 231, 0.1)');

    var ls = this.nodesData.links.filter(function(l){
      return l.target.id == id || l.source.id == id;
    });

    var nds_ids = [];

    ls.map(function(ld){
      nds_ids.push(ld.source.id)
      nds_ids.push(ld.target.id)
    });

    nds_ids.push(id);


    this.nodesContainer
        .selectAll('.node')
        .attr('opacity', 0.05)
        .style('pointer-events', 'none')

    nds_ids.map(function(id){
      self.nodesContainer
          .selectAll('.node[data-id="'+id+'"]')
          .style('pointer-events', 'all')
          .attr('opacity', 1)
    })

    this.setState({
      isolatingNode: true
    })
  }

  releaseNode(){
    this.nodesContainer.selectAll('.nodes_link').attr('stroke', 'rgba(90, 67, 231, 0.79)');
    this.nodesContainer.selectAll('.node').attr('opacity', 1);
    this.nodesContainer.selectAll('.node').style('pointer-events', 'all');
    this.setState({
      isolatingNode: false
    })
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
        <div id="db_viz_nodes_controls">
          <Fab size="small" color="primary" onClick={() => this.set()}>
            <Icon>autorenew</Icon>
          </Fab>
          <Fab size="small" color="primary" disabled={this.state.isPerfectZoom} onClick={() => this.setInitialZoom()}>
            <Icon>center_focus_strong</Icon>
          </Fab>
          <Fab
            size="small"
            color="primary"
            disabled={!this.state.isolatingNode}
            onClick={() => this.releaseNode()}
          >
            <Icon>scatter_plot</Icon>
          </Fab>
        </div>
        <div className="db_viz_info">
          <div className="db_viz_info_coincidencias">
            <strong>{this.state.coincidencias}</strong> coincidencia{this.state.coincidencias === 1 ? '' : 's'}
          </div>
        </div>

        <svg id="db_viz_nodes_canvas" ref={(ref) => this.canvasSvg = ref}></svg>
          {
            this.state.displayTooltip ?
            <SSTooltip doi={this.state.doi} canvas={this.canvasSvg} />
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


    return(
      <div
        className="db_viz_tooltip"
        style={{left: coords[0], top: coords[1]}}
      >
        <div className="db_viz_tooltip_name">
          {d.name}
        </div>

        {
          d.type == "empresa" ?
          <div className="db_viz_tooltip_monto">
            Monto neto que recibió la empresa: {formatMoney(d.fields[0].sum)}
          </div>
          : null
        }


      </div>
    )
  }
}
