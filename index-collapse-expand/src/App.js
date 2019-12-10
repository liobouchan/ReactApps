import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

class App  extends Component{
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { title: 'Secretaría de Hacienda y Crédito Público', children: [{ title: 'CNVB', children:[{title: 'CUB'}, {title: 'Fintech '}] }] },
        { title: 'Secretaría de Finanzas', children: [{ title: 'Proximamente'}] },
        { title: 'Secretaría de Economía', children: [{ title: 'Proximamente'}] },
        { title: 'BANXICO', children: [{ title: 'Circular 13/2017'} , { title: 'Circular 14/2017'}] }
      ],
    };
  }

  render() {
    return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          canDrag={false}
        />
      </div>
    );
  }
}export default App;
