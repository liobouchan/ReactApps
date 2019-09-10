import React from 'react';
import ReactDOM from 'react-dom';
import CytoscapeComponent from 'react-cytoscapejs';

class App extends React.Component {
  constructor(props){
    super(props);
    this.cy = null;
  }

  componentDidMount() {
    this.cy.on('click' , 'node' , (evt) =>{
      console.log("EVENTO : " , evt);
      console.log("EVENTO TARGET: " , evt.target);
      console.log("EVENTO TARGET . DATA: " , evt.target._private.data);
      var node = evt.target
      console.log("buscando el nodo" , node.data());
      console.log('tapped ' + node.id());
    });
  }

  render(){

    const elements = [
       { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
       { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
       { data: { id: '3', label: 'Node 3' }, position: { x: 102, y: 0 } },
       { data: { id: '4', label: 'Node 4' }, position: { x: 108, y: 0 } },
       { data: { id: '5', label: 'Node 5' }, position: { x: 130, y: 0 } },
       { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },
       { data: { source: 'two', target: '3', label: 'Edge' } },
       { data: { source: 'two', target: '4', label: 'Edge' } },
       { data: { source: '3', target: '4', label: 'Edge from Node1' } }
    ];

    const elementos = {
      "nodes": [
        { data: { id: 'one', label: 'Node 1' }}, 
        { data: { id: 'two', label: 'Node 2' }, },
        { data: { id: '3', label: 'Node 3' }, },
        { data: { id: '4', label: 'Node 4' }, },
        { data: { id: '5', label: 'Node 5' }, },
      ],
      "edges": [
        
          { data: { id:100 , source: 'one', target: 'two', label: 'Edge from Node1 to Node2' }},
          { data: {  id:101 ,source: 'one', target: 'two', label: 'Edge from Node1 to Node2' }},
          { data: {  id:102 ,source: 'two', target: '3', label: 'Edge' }},
          { data: {  id:103,source: 'two', target: '4', label: 'Edge' }},
          { data: {  id:104 ,source: '3', target: '4', label: 'Edge from Node1' }},
          { data: {  id:105 ,source: '3', target: '4', label: 'Edge from Node' }},
          { data: {  id:106 ,source: '3', target: '4', label: 'Edge from Nod' }},
          { data: {  id:107 ,source: '3', target: '4', label: 'Edge from No' }},
          { data: {  id:108 ,source: '4', target: '3', label: 'Edge2' }},
          { data: {  id:109 ,source: '4', target: '3', label: 'Edge 1e' }}
        
    ]
  }

  const datos = {
      "nodes": [
        {
          "name": "Artículo 325 Bis 2",
          "id": 3493
        },
        {
          "name": "Artículo 325 Bis",
          "id": 3274
        },
        {
          "name": "Artículo 325 Bis 1",
          "id": 3492
        },
        {
          "name": "Artículo 122 Bis",
          "id": 3491
        },
        {
          "name": "Artículo 324",
          "id": 3247
        },
        {
          "name": "Artículo 64 Bis",
          "id": 3490
        },
        {
          "name": "Artículo 279",
          "id": 2904
        },
        {
          "name": "Artículo 279",
          "id": 2902
        },
        {
          "name": "Artículo 55 Bis",
          "id": 3489
        },
        {
          "name": "Artículo 275 Bis",
          "id": 2896
        },
        {
          "name": "Artículo 275 Bis",
          "id": 2898
        },
        {
          "name": "Artículo 250",
          "id": 3488
        },
        {
          "name": "Artículo 249",
          "id": 2773
        },
        {
          "name": "Artículo 400 Bis",
          "id": 3471
        },
        {
          "name": "Artículo 154",
          "id": 2242
        },
        {
          "name": "Artículo 127",
          "id": 3470
        },
        {
          "name": "Artículo 126",
          "id": 2168
        }
      ],
      "edges": [
        {
          "id": 7001,
          "source": 3493,
          "type": "REFERS",
          "target": 3274
        },
        {
          "id": 6999,
          "source": 3492,
          "type": "REFERS",
          "target": 3274
        },
        {
          "id": 6990,
          "source": 3491,
          "type": "REFERS",
          "target": 3247
        },
        {
          "id": 6880,
          "source": 3490,
          "type": "REFERS",
          "target": 2904
        },
        {
          "id": 6881,
          "source": 3490,
          "type": "REFERS",
          "target": 2902
        },
        {
          "id": 6878,
          "source": 3489,
          "type": "REFERS",
          "target": 2896
        },
        {
          "id": 6877,
          "source": 3489,
          "type": "REFERS",
          "target": 2898
        },
        {
          "id": 6843,
          "source": 3488,
          "type": "REFERS",
          "target": 2773
        },
        {
          "id": 6742,
          "source": 3471,
          "type": "REFERS",
          "target": 2242
        },
        {
          "id": 6730,
          "source": 3470,
          "type": "REFERS",
          "target": 2168
        }
      ]
    }
  
  const newData = {
    "nodes" : datos.nodes.map(element =>    ({
      "data" : element
    })

    ), 
    "edges" : datos.edges.map(element => ({
      "data" : element
    }))
  }

  const layout= {
    name: 'cose',//concentric
    animate: 'end',
    animationEasing: 'ease-in-out',
  }

  const style = {
    width: '1280px', 
    height: '720px' 
  }

  const stylesheet = [
    {
      selector: 'node',
      style: {
        'background-color' : '#00ACAB',
        'label': 'data(name)',
        'font-size' : '8',
        'font-weight': 'bold',
        'border-width': '1',
        'border-style' : 'dotted',
        'border-color' : '#906DB1',
        'text-valign': 'center',
        'text-halign': 'center',
        'overlay-padding': '6px',
        'text-outline-width': 1.5,
	      'text-outline-color': '#fff',
	      'text-outline-opacity': 1,
      }
    },
    {
      selector: 'edge',
      style: {
        'width': '2.5',
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': 'black',
        'line-color' : '#a6a6a6',
        'opacity': '0.5',
      }
    },
    {
      "selector": "node:selected",
      "style": {
        "border-width": "6px",
        "border-color": "#00ACAB",
        "border-opacity": "0.5",
        "background-color": "#906DB1",
      }
    }
  ]

  
    return <CytoscapeComponent 
    cy={(cy) => { this.cy = cy }}
    elements={CytoscapeComponent.normalizeElements(newData)} 
    style={style} 
    layout={layout}
    stylesheet={stylesheet}
    />;
  }
}

export default App;