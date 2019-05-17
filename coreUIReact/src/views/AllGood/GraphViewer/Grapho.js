import React, {
  Component
} from 'react';
import { Graph } from 'react-d3-graph';
var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "123"));

// graph payload (with minimalist structure)
const data = {
  "nodes": [
    {
      "id": 2710,
      "nombre": "Artículo 225"
    },
    {
      "id": 1211,
      "nombre": "Artículo 2 Bis 117 n"
    },
    {
      "id": 0,
      "nombre": "Anexo 1"
    },
    {
      "id": 1202,
      "nombre": "Artículo 2 Bis 117 j"
    },
    {
      "id": 409,
      "nombre": "Artículo 2 Bis 5"
    },
    {
      "id": 1210,
      "nombre": "De la constitución del porcentaje adicional del Suplemento de Conservación de"
    },
    {
      "id": 579,
      "nombre": "Artículo 2 Bis 36"
    },
    {
      "id": 640,
      "nombre": "Artículo 2 Bis 37"
    },
    {
      "id": 562,
      "nombre": "Artículo 2 Bis 22"
    },
    {
      "id": 599,
      "nombre": "Cobertura de riesgo de crédito"
    },
    {
      "id": 928,
      "nombre": "Artículo 2 Bis 90"
    },
    {
      "id": 496,
      "nombre": "Artículo 2 Bis 17"
    }
  ],
  "links": [
    {
      "id": 4800,
      "source": 2710,
      "type": "REFIERE",
      "target": 1211
    },
    {
      "id": 4398,
      "source": 1211,
      "type": "REFIERE",
      "target": 0
    },
    {
      "id": 4390,
      "source": 1202,
      "type": "REFIERE",
      "target": 1211
    },
    {
      "id": 3988,
      "source": 409,
      "type": "REFIERE",
      "target": 1211
    },
    {
      "id": 1330,
      "source": 1210,
      "type": "TIENE",
      "target": 1211
    },
    {
      "id": 4085,
      "source": 579,
      "type": "REFIERE",
      "target": 640
    },
    {
      "id": 4088,
      "source": 640,
      "type": "REFIERE",
      "target": 0
    },
    {
      "id": 4084,
      "source": 579,
      "type": "REFIERE",
      "target": 640
    },
    {
      "id": 4053,
      "source": 562,
      "type": "REFIERE",
      "target": 640
    },
    {
      "id": 4052,
      "source": 562,
      "type": "REFIERE",
      "target": 640
    },
    {
      "id": 633,
      "source": 599,
      "type": "TIENE",
      "target": 640
    },
    {
      "id": 4227,
      "source": 928,
      "type": "REFIERE",
      "target": 496
    },
    {
      "id": 4046,
      "source": 496,
      "type": "REFIERE",
      "target": 0
    }
  ]
}

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
  "width": 1000,
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
    // this.state = {
    //   data : this.getDataAll()
    // };
  }
  
  // getDataAll(){
  //   var data = {
  //     nodes : [],
  //     links : []
  //   }
    
  //   var session = driver.session();
  //   session
  //   .run('MATCH (a)-[r1]->(b) , (b)-[r2]->(c) WHERE NOT b.nombre="Artículo 1" OR  a.nombre="Artículo 1" OR c.nombre="Artículo 1" RETURN a,r1,b,r2,c LIMIT 5')
  //   .then(function (result) {
  //     result.records.forEach(function (record) {
  //       // Nodos A
  //       //console.log("Propiedades Nodo A:" , record.get('a'));
  //       //console.log("Propiedades Nodo A:" , record.get('a').properties);
  //       let dictionaryOfFirtstNodeProperties = record.get('a').properties
  //       dictionaryOfFirtstNodeProperties['id'] = record.get('a').identity.low
  //       //console.log("Resultado Nodo A: " , dictionaryOfFirtstNodeProperties);
  //       if(data.nodes.filter(node => (node.id === dictionaryOfFirtstNodeProperties.id)).length == 0){
  //         data.nodes.push(dictionaryOfFirtstNodeProperties)
  //       }
        
  //       // Nodos B
  //       //console.log("Propiedades Nodo B:" , record.get('b').properties);
  //       let dictionaryOfSecondtNodeProperties = record.get('b').properties
  //       dictionaryOfSecondtNodeProperties['id'] = record.get('b').identity.low
  //       //console.log("Resultado Nodo B: " , dictionaryOfSecondtNodeProperties);
  //       if(data.nodes.filter(node => (node.id === dictionaryOfSecondtNodeProperties.id)).length == 0){
  //         data.nodes.push(dictionaryOfSecondtNodeProperties)
  //       }
        
  //       // Nodos C
  //       //console.log("Propiedades Nodo C:" , record.get('c').properties);
  //       let dictionaryOfThirdNodeProperties = record.get('c').properties
  //       dictionaryOfThirdNodeProperties['id'] = record.get('c').identity.low
  //       //console.log("Resultado Nodo C: " , dictionaryOfThirdNodeProperties);
  //       if(data.nodes.filter(node => (node.id === dictionaryOfThirdNodeProperties.id)).length == 0){
  //         data.nodes.push(dictionaryOfThirdNodeProperties)
  //       }
        
  //       // Relacion r1
  //       let dictionaryOfRelationsR1 = {}
  //       dictionaryOfRelationsR1['source'] = record.get('r1').start.low
  //       dictionaryOfRelationsR1['target'] = record.get('r1').end.low
  //       dictionaryOfRelationsR1['type'] = record.get('r1').type
  //       dictionaryOfRelationsR1['id'] = record.get('r1').identity.low
  //       if(data.links.filter(link => (link.id === dictionaryOfRelationsR1.id)).length == 0){
  //         data.links.push(dictionaryOfRelationsR1)
  //       }
        
  //       // Relacion r2
  //       let dictionaryOfRelationsR2 = {}
  //       dictionaryOfRelationsR2['source'] = record.get('r2').start.low
  //       dictionaryOfRelationsR2['target'] = record.get('r2').end.low
  //       dictionaryOfRelationsR2['type'] = record.get('r2').type
  //       dictionaryOfRelationsR2['id'] = record.get('r2').identity.low
  //       if(data.links.filter(link => (link.id === dictionaryOfRelationsR2.id)).length == 0){
  //         data.links.push(dictionaryOfRelationsR2)
  //       }
  //     });
  //     session.close();
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //   console.log("DATA: " , data);
  //   return data;
  // }

  // componentWillMount(){
  //   var data = {
  //     nodes : [],
  //     links : []
  //   }
    
  //   var session = driver.session();
  //   session
  //   .run('MATCH (a)-[r1]->(b) , (b)-[r2]->(c) WHERE NOT b.nombre="Artículo 1" OR  a.nombre="Artículo 1" OR c.nombre="Artículo 1" RETURN a,r1,b,r2,c LIMIT 5')
  //   .then(function (result) {
  //     result.records.forEach(function (record) {
  //       // Nodos A
  //       //console.log("Propiedades Nodo A:" , record.get('a'));
  //       //console.log("Propiedades Nodo A:" , record.get('a').properties);
  //       let dictionaryOfFirtstNodeProperties = record.get('a').properties
  //       dictionaryOfFirtstNodeProperties['id'] = record.get('a').identity.low
  //       //console.log("Resultado Nodo A: " , dictionaryOfFirtstNodeProperties);
  //       if(data.nodes.filter(node => (node.id === dictionaryOfFirtstNodeProperties.id)).length == 0){
  //         data.nodes.push(dictionaryOfFirtstNodeProperties)
  //       }
        
  //       // Nodos B
  //       //console.log("Propiedades Nodo B:" , record.get('b').properties);
  //       let dictionaryOfSecondtNodeProperties = record.get('b').properties
  //       dictionaryOfSecondtNodeProperties['id'] = record.get('b').identity.low
  //       //console.log("Resultado Nodo B: " , dictionaryOfSecondtNodeProperties);
  //       if(data.nodes.filter(node => (node.id === dictionaryOfSecondtNodeProperties.id)).length == 0){
  //         data.nodes.push(dictionaryOfSecondtNodeProperties)
  //       }
        
  //       // Nodos C
  //       //console.log("Propiedades Nodo C:" , record.get('c').properties);
  //       let dictionaryOfThirdNodeProperties = record.get('c').properties
  //       dictionaryOfThirdNodeProperties['id'] = record.get('c').identity.low
  //       //console.log("Resultado Nodo C: " , dictionaryOfThirdNodeProperties);
  //       if(data.nodes.filter(node => (node.id === dictionaryOfThirdNodeProperties.id)).length == 0){
  //         data.nodes.push(dictionaryOfThirdNodeProperties)
  //       }
        
  //       // Relacion r1
  //       let dictionaryOfRelationsR1 = {}
  //       dictionaryOfRelationsR1['source'] = record.get('r1').start.low
  //       dictionaryOfRelationsR1['target'] = record.get('r1').end.low
  //       dictionaryOfRelationsR1['type'] = record.get('r1').type
  //       dictionaryOfRelationsR1['id'] = record.get('r1').identity.low
  //       if(data.links.filter(link => (link.id === dictionaryOfRelationsR1.id)).length == 0){
  //         data.links.push(dictionaryOfRelationsR1)
  //       }
        
  //       // Relacion r2
  //       let dictionaryOfRelationsR2 = {}
  //       dictionaryOfRelationsR2['source'] = record.get('r2').start.low
  //       dictionaryOfRelationsR2['target'] = record.get('r2').end.low
  //       dictionaryOfRelationsR2['type'] = record.get('r2').type
  //       dictionaryOfRelationsR2['id'] = record.get('r2').identity.low
  //       if(data.links.filter(link => (link.id === dictionaryOfRelationsR2.id)).length == 0){
  //         data.links.push(dictionaryOfRelationsR2)
  //       }
  //     });
  //     session.close();
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //   this.setState({data: data})
  //   console.log("DATA: " , data);
  // }

  // renderGraph(){
  //   var datos = this.getDataAll()
  //   console.log("ESTOS SON LOS DATOS: " ,datos)
  //   return(
  //     <Graph
  //     id="graph-container" // id is mandatory, if no id is defined rd3g will throw an error
  //     data={datos}
  //     config={myConfig}
  //     />
  //   )
  // }

  render() {
    // console.log("DATOS222: " , this.state.data)
    // console.log("function: " , this.getDataAll())
    // this.setState({ data: data })
    return (
      // <div>
      // {this.renderGraph()}
        
      // </div>
      <Graph
      id="graph-container" // id is mandatory, if no id is defined rd3g will throw an error
      data={data}
      config={myConfig}
      />
      )
    }
  }
  export default Grapho;