import React, { Component } from 'react';
import SortableTree , {changeNodeAtPath} from 'react-sortable-tree';
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
        { title: 'Esto es lo próximo' },
        { title: 'Ajua si se pudo'}
      ]
    };
  }

  render() {
    //const getNodeTitle = ({ node: { title } }) => title;
    const getNodeKey = ({ node: { id } }) => id;

    return (
      <div style={{ height: 400 }}>
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
                console.log(newIncomingData) 
                this.setState(state => ({
                  treeData: changeNodeAtPath({
                    treeData: state.treeData,
                    path,
                    getNodeKey,
                    newNode: { ...node, expanded: !node.expanded },
                  }),
                }));
              }
            }
          }
          }
        />
      </div>
    );
  }
}export default App;
