import React from 'react';

import './App.css';

const applyUpdateResult = (result) => (prevState) => ({
  obligations: [...prevState.obligations, ...result.data],
  page: result.actualPage,
  isLoading: false
});

const applySetResult = (result) => (prevState) => ({
  obligations: [...prevState.obligations, ...result.data],
  page: result.actualPage,
  isLoading: false
});

const getHackerNewsUrl = (page) =>
  `http://localhost:7002/obligations?start=${page}&size=1`;

const ChicleYPega = ({list}) => {
  return(
  <div className="list">{list.map(obligation => {
    let {nombre, descripcion, contenido, titulo, seccion, capitulo, apartado, subApartado } = obligation
    if(titulo != 'null'){titulo = titulo}else{titulo = " "};
    if(seccion != 'null'){seccion = seccion}else{seccion = " "};
    if(capitulo != 'null'){capitulo = capitulo}else{capitulo = " "};
    if(apartado != 'null'){apartado = apartado}else{apartado = " "};
    if(subApartado != 'null'){subApartado = subApartado}else{subApartado = " "};
    return(
        <div className="list-row"  action>
          <div className="list-row" className="d-flex justify-content-between">
            <h5>{descripcion}</h5>
            <h6 className="text-muted">{nombre}</h6>
          </div>
          <div className="list-row">
            <h6 className="font-weight-light">{titulo}</h6>
            <h6 className="font-weight-light">{capitulo}</h6>
            <h6 className="font-weight-light">{seccion}</h6>
            <h6 className="font-weight-light">{apartado}</h6>
            <h6 className="font-weight-light">{subApartado}</h6>
            <br></br>
            {contenido}
            <br></br>
            <br></br>
          </div>
        </div>)
    }
  )}</div>)
}

class ObligationsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obligations: [],
      page: null,
      isLoading: false
    };
  }

  componentDidMount(){
    fetch('http://localhost:7002/obligations?start=0&size=1')
    .then( results => {
      return results.json();
    }).then( data => {
      this.setState({page: data.actualPage})
      this.setState({obligations: data.data})
    })
  }

  onInitialSearch = (e) => {
    e.preventDefault();
    this.fetchStories(0);
  }

  onPaginatedSearch = (e) =>
    this.fetchObligations(this.state.page + 1);

  fetchObligations = (page) => {
    this.setState({ isLoading: true });
    fetch(getHackerNewsUrl(page))
      .then(response => response.json())
      .then(result => this.onSetResult(result, page));
  }

  onSetResult = (result, page) =>
    page === 0
      ? this.setState(applySetResult(result))
      : this.setState(applyUpdateResult(result));

  render() {
    return (
      <div className="list">
      {/* {this.renderTableData()} */}

        <List
          list={this.state.obligations}
          isLoading={this.state.isLoading}
          page={this.state.page}
          onPaginatedSearch={this.onPaginatedSearch}
        />
      </div>
    );
  }
}

const List = ({ list, page, isLoading, onPaginatedSearch }) =>(
  <div>

    <ChicleYPega list={list}/>

    <div className="interactions">
      {isLoading && <span>Loading...</span>}
    </div>

    <div className="interactions">
      {
        (page !== null && !isLoading) &&
        <button
          type="button"
          onClick={onPaginatedSearch}
        >
          More
        </button>
      }
    </div>
  </div>
)
export default ObligationsList;