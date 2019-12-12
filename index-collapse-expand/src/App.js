import React, { Component } from 'react';
import SortableTree , {changeNodeAtPath , addNodeUnderParent} from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

class App  extends Component{
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { id: 0 , title: 'Secretaría de Hacienda y Crédito Público', children: [{ title: 'CNVB', children:[{title: 'CUB'}, {title: 'Fintech '}] }] },
        { id: 1 , title: 'Secretaría de Finanzas', children: [{ title: 'Proximamente'}] },
        { id: 2 , title: 'Secretaría de Economía', children: [{ title: 'Proximamente'}] },
        { id: 3 , title: 'BANXICO', children: [{ title: 'Circular 13/2017'} , { title: 'Circular 14/2017'}] }
      ],
      nextTreeData: [
        { id: 5 , title: 'Esto es lo próximo' },
        { id: 4 , title: 'Ajua si se pudo'}
      ],
      addAsFirstChild: false,
    };
  }

  render() {
    //const getNodeTitle = ({ node: { title } }) => title;
    const getNodeKey = ({ node: { id } }) => id;

    return (
      <div style={{ height: 800 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          canDrag={false}
          getNodeKey={getNodeKey}
          generateNodeProps={ ({node , path}) => {
            return{
              onClick: () => {
                console.log("On click: " , node.title)
                console.log("Complete Node: " , node)
                console.log("This is the Path: " , path)
                const newIncomingData = this.state.nextTreeData
                const parentKey = 0;
                console.log(newIncomingData) 
                if(newIncomingData){
                  console.log("------------> Este es el nodo al que diste click: " , node)
                  console.log("------------> Estos son los hijos: " , node.children)
                  console.log("------------> Esto es la nueva info: " , newIncomingData)
                  node.children.forEach((child) => {
                    console.log("---------------------> Valor del children: ", child.title)
                    newIncomingData.forEach((newData) => {
                      console.log("------------------> Valor del NewData: " , newData.title)
                    })
                  })
                                    
                  newIncomingData.forEach((newNode) => {
                  console.log("Nuevo Nodo: " , newNode)
                  console.log("parentKey: " , path)
                  console.log("Que verga haces: " , path[path.length - 1])
                  console.log("Este es el state: " , this.state.treeData)
                  this.setState(state => ({
                      treeData: addNodeUnderParent({
                        treeData: state.treeData,
                        parentKey: path[path.length - 1],
                        expandParent: false,
                        getNodeKey,
                        newNode: newNode,
                        addAsFirstChild: state.addAsFirstChild,
                      }).treeData,
                    }))
                  })
                }
              }
            }
          }
          }
        />
      </div>
    );
  }
}export default App;
