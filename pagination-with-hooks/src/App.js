import React, { useState, useCallback} from "react";
import { Row, Col,  Pagination, PaginationItem, PaginationLink } from "reactstrap";
import DinamicPagination from "./DinamicPagination";

const App = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChanged = useCallback(
    (event, page) => {
      console.log("Esto es el page:" , page)
      event.preventDefault();
      if(page > 0){
        setCurrentPage(page);
      }else{
        console.log("La pagina ya es menor que uno es imposible");
        
      }
    },
    [currentPage]
  );

  return (
    <div>
      <Row>
        Aqui van los comentarios
      </Row>
      <Row>
        <Col md="4" lg="4">
          <DinamicPagination
            totalPages={20}
            pageNeighbours={1}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
          /> 
        </Col>
        <Col md="8">
          <p> Que onda </p>
        </Col>
      </Row>
    </div>
  );
};
export default App;