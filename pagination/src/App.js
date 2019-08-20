import styles from './App.module.css';

import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      categories:[],
      actualPage:'0',
      totalPages:'0',
      items: '0'
    }
  }

  makeHttpRequestWithPage = async pageNumber => {
    const response = await fetch(`http://localhost:7003/categories?start=${pageNumber}&size=2`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    this.setState({
      categories: data.categories,
      actualPage: data.actualPage,
      totalPages: data.totalPages,
      items: data.items
    });
  }

  componentDidMount(){
    this.makeHttpRequestWithPage(0);
  }



  render(){

    const pageNumbers = Array.from(Array(this.state.totalPages).keys());

    console.log("Total Paginas" , pageNumbers)
    console.log(this.state);

    let categories , renderPageNumbers;

    if (this.state.categories !== null) {
      categories = this.state.categories.map(category => (
        <tr key={category.id}>
          <td>{category.name}</td>
          <td>{category.color}</td>
        </tr>
      )); 
    }

    renderPageNumbers = pageNumbers.map(number => {
      let classes = this.state.actualPage === number ? styles.active : '';

      return (
        <span key={number+1} className={classes} onClick={() => this.makeHttpRequestWithPage(number)}>{number+1}</span>
      );
    });

    let hola = this.state.actualPage + 1;

    return (
      <div className={styles.app}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {categories}
          </tbody>
        </table>
        <div className={styles.pagination}>
          <span onClick={() => this.makeHttpRequestWithPage(1)}>&laquo;</span>
            {renderPageNumbers}
          <span onClick={() => this.makeHttpRequestWithPage(hola)}>&raquo;</span>
        </div>
      </div>
    );
  }
}

export default App;
