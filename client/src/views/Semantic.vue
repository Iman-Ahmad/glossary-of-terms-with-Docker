<template>
  <h1>Семантичесчкий графф</h1>

  <div class="mindmap-wrapper">
    <div id="myDiagramDiv" style="width: 100%; height: 800px"></div>

  </div>
</template>

<script>
import {onMounted} from 'vue';
import '../assets/go.js';

export default {
  name: "Semantic",
  components: {
  },
  setup() {

    function init(node, link) {

      const $ = go.GraphObject.make;

      let myDiagram =
          $(go.Diagram, "myDiagramDiv", 
              {
                initialAutoScale: go.Diagram.Uniform,
                contentAlignment: go.Spot.Center,
                layout:
                    $(go.ForceDirectedLayout,  // automatically spread nodes apart
                        { maxIterations: 300, defaultSpringLength: 30, defaultElectricalCharge: 230 })
              });

        myDiagram.nodeTemplate =
          $(go.Node, "Auto",
              { locationSpot: go.Spot.Center },
              $(go.Shape, "RoundedRectangle",
                  { fill: $(go.Brush, "Solid", { 0: "rgb(171,202,255)", }), stroke: "#ccc" }),
              $(go.TextBlock,
                  { font: "500 15px Jost, bold arial, sans-serif", margin: 4 },
                  new go.Binding("text", "text"))
          );

      myDiagram.linkTemplate =
          $(go.Link,
              $(go.Shape,
                  { stroke: "black" }),
              $(go.Shape,
                  { toArrow: "standard", stroke: null }),
              $(go.Panel, "Auto",
                  $(go.Shape,
                      {
                        fill: $(go.Brush, "Radial", { 0: "rgb(240, 240, 240, 0)", 0.3: "rgb(240, 240, 240, 0)", 1: "rgba(240, 240, 240, 0)" }),
                        stroke: null
                      }),
                  $(go.TextBlock,
                      {
                        textAlign: "center",
                        font: "14px Jost, arial, sans-serif",
                        stroke: "#242424",
                        margin: 5,
                      },
                      new go.Binding("text", "text"))
              )
          );
      myDiagram.model = new go.GraphLinksModel(node, link);
    }
    onMounted(async ()=> {
      const response = await fetch('/api/mindmap');
      const {node, link} = await response.json();
      init(node, link);
    });
  }
}
</script>

<style scoped>

</style>
