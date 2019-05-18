import React, {
  Component
} from 'react';
import { Graph } from 'react-d3-graph';
var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "123"));

// graph payload (with minimalist structure)
// const data = {
//   "nodes": [
//     {
//       "id": 2710,
//       "nombre": "Artículo 225"
//     },
//     {
//       "id": 1211,
//       "nombre": "Artículo 2 Bis 117 n"
//     },
//     {
//       "id": 0,
//       "nombre": "Anexo 1"
//     },
//     {
//       "id": 1202,
//       "nombre": "Artículo 2 Bis 117 j"
//     },
//     {
//       "id": 409,
//       "nombre": "Artículo 2 Bis 5"
//     },
//     {
//       "id": 1210,
//       "nombre": "De la constitución del porcentaje adicional del Suplemento de Conservación de"
//     },
//     {
//       "id": 579,
//       "nombre": "Artículo 2 Bis 36"
//     },
//     {
//       "id": 640,
//       "nombre": "Artículo 2 Bis 37"
//     },
//     {
//       "id": 562,
//       "nombre": "Artículo 2 Bis 22"
//     },
//     {
//       "id": 599,
//       "nombre": "Cobertura de riesgo de crédito"
//     },
//     {
//       "id": 928,
//       "nombre": "Artículo 2 Bis 90"
//     },
//     {
//       "id": 496,
//       "nombre": "Artículo 2 Bis 17"
//     }
//   ],
//   "links": [
//     {
//       "id": 4800,
//       "source": 2710,
//       "type": "REFIERE",
//       "target": 1211
//     },
//     {
//       "id": 4398,
//       "source": 1211,
//       "type": "REFIERE",
//       "target": 0
//     },
//     {
//       "id": 4390,
//       "source": 1202,
//       "type": "REFIERE",
//       "target": 1211
//     },
//     {
//       "id": 3988,
//       "source": 409,
//       "type": "REFIERE",
//       "target": 1211
//     },
//     {
//       "id": 1330,
//       "source": 1210,
//       "type": "TIENE",
//       "target": 1211
//     },
//     {
//       "id": 4085,
//       "source": 579,
//       "type": "REFIERE",
//       "target": 640
//     },
//     {
//       "id": 4088,
//       "source": 640,
//       "type": "REFIERE",
//       "target": 0
//     },
//     {
//       "id": 4084,
//       "source": 579,
//       "type": "REFIERE",
//       "target": 640
//     },
//     {
//       "id": 4053,
//       "source": 562,
//       "type": "REFIERE",
//       "target": 640
//     },
//     {
//       "id": 4052,
//       "source": 562,
//       "type": "REFIERE",
//       "target": 640
//     },
//     {
//       "id": 633,
//       "source": 599,
//       "type": "TIENE",
//       "target": 640
//     },
//     {
//       "id": 4227,
//       "source": 928,
//       "type": "REFIERE",
//       "target": 496
//     },
//     {
//       "id": 4046,
//       "source": 496,
//       "type": "REFIERE",
//       "target": 0
//     }
//   ]
// }

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  "automaticRearrangeAfterDropNode": false,
  "collapsible": false,
  "directed": true,
  "focusAnimationDuration": 0.75,
  "focusZoom": 1,
  "height": 1400,
  "highlightDegree": 1,
  "highlightOpacity": 1,
  "linkHighlightBehavior": true,
  "maxZoom": 8,
  "minZoom": 0.1,
  "nodeHighlightBehavior": true,
  "panAndZoom": false,
  "staticGraph": false,
  "width": 1400,
  "d3": {
    "alphaTarget": 0.05,
    "gravity": -100,
    "linkLength": 100,
    "linkStrength": 1
  },
  "node": {
    "color": "#00ACAB",
    "fontColor": "black",
    "fontSize": 10,
    "fontWeight": "normal",
    "highlightColor": "#F9F871",
    "highlightFontSize": 8,
    "highlightFontWeight": "normal",
    "highlightStrokeColor": "black",
    "highlightStrokeWidth": "SAME",
    "labelProperty": "nombre",
    "mouseCursor": "pointer",
    "opacity": 1,
    "renderLabel": true,
    "size": 300,
    "strokeColor": "#906DB1",
    "strokeWidth": 1.5,
    "svg": "",
    "symbolType": "circle"
  },
  "link": {
    "color": "#E6F4F1",
    "fontColor": "black",
    "fontSize": 8,
    "fontWeight": "normal",
    "highlightColor": "black",
    "highlightFontSize": 12,
    "highlightFontWeight": "normal",
    "labelProperty": "type",
    "mouseCursor": "pointer",
    "opacity": 1,
    "renderLabel": true,
    "semanticStrokeWidth": false,
    "strokeWidth": 1.5
  }
};

class Grapho extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      config : myConfig,
      data :{
          "nodes": [{
                  "id": 777777777777777,
                  "nombre": "Init Graph"
                }],
          "links": []
      }
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/articles/graph")
      .then(response => response.json())
      .then(data => {
        console.log("Data del REST: " , data);
        this.setState({data:data})
      })
  }

  render() {
    const onMouseOverNode = function(node) {
      console.log("Este es el nodo ID" , node);
      
    };
    return (
      <Graph
      id="graph-container" // id is mandatory, if no id is defined rd3g will throw an error
      config={this.state.config}
      data={this.state.data}
      onMouseOverNode={onMouseOverNode}
      />
      )
    }
  }
  export default Grapho;