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
          "label": "Artículo 325 Bis 2",
          "id": 3493
        },
        {
          "label": "Artículo 325 Bis",
          "id": 3274
        },
        {
          "label": "Artículo 325 Bis 1",
          "id": 3492
        },
        {
          "label": "Artículo 122 Bis",
          "id": 3491
        },
        {
          "label": "Artículo 324",
          "id": 3247
        },
        {
          "label": "Artículo 64 Bis",
          "id": 3490
        },
        {
          "label": "Artículo 279",
          "id": 2904
        },
        {
          "label": "Artículo 279",
          "id": 2902
        },
        {
          "label": "Artículo 55 Bis",
          "id": 3489
        },
        {
          "label": "Artículo 275 Bis",
          "id": 2896
        },
        {
          "label": "Artículo 275 Bis",
          "id": 2898
        },
        {
          "label": "Artículo 250",
          "id": 3488
        },
        {
          "label": "Artículo 249",
          "id": 2773
        },
        {
          "label": "Artículo 400 Bis",
          "id": 3471
        },
        {
          "label": "Artículo 154",
          "id": 2242
        },
        {
          "label": "Artículo 127",
          "id": 3470
        },
        {
          "label": "Artículo 126",
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
    name: 'random'
  }


  
    return <CytoscapeComponent 
    cy={(cy) => { this.cy = cy }}
    elements={CytoscapeComponent.normalizeElements(newData)} 
    style={ 
      {
      width: '1280px', 
      height: '720px' 
      }
    } 
    layout={layout}
    stylesheet={[
    {
      selector: 'node',
      style: {
        'background-color' : 'green',
        'label': 'data(label)'
      }
    },
    {
      selector: 'edge',
      style: {
        width: 3,
        //'label': 'data(label)',
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': 'black' 
      }
    },
  ]}
    />;
  }
}

export default App;