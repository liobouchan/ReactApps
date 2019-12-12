import React, { Component } from 'react';
import SortableTree , {changeNodeAtPath , addNodeUnderParent} from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

class App  extends Component{
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { id: 0 , title: 'Secretaría de Hacienda y Crédito Público', children: [{ id: 6 , title: 'CNVB', children:[{ id: 7 , title: 'CUB'}, {id: 8 ,title: 'Fintech '}] }] },
        { id: 1 , title: 'Secretaría de Finanzas', children: [{ id: 9 , title: 'Proximamente'}] },
        { id: 2 , title: 'Secretaría de Economía', children: [{ id: 10 , title: 'Proximamente'}] },
        { id: 3 , title: 'BANXICO', children: [{ id: 11 , title: 'Circular 13/2017'} , { id: 12 ,title: 'Circular 14/2017'}] }
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
      <div style={{ height: '100vh' }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          canDrag={false}
          getNodeKey={getNodeKey}
          generateNodeProps={ ({node , path}) => {
            return{
              onClick: () => {
                const newIncomingData = this.state.nextTreeData
                const parentKey = 0;
                if(node.children == undefined || node.children.length <=  0){
                  if(newIncomingData){
                  newIncomingData.forEach((newNode) => {
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
          }
        />
      </div>
    );
  }
}export default App;
