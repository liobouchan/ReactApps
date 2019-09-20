import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
  Col,
  Form, 
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      collapseCard: true,
      regulations: [],
      regulation:[],
      regulationAlias: null,
      regulationName : "",
      articleValue : "",
      articleName : "",
      articleDescription : "",
      articleContent: "",
      title: "",
      chapter: "",
      section: "",
      apart: "",
      subApart: "",
      clickedNodeIdFromGraph: null,
      idSearchedArticle: null,
      data: {
        "nodes": [
          { data: { id: 'NodoInicial', name: 'Selecciona una regulación' }}
        ],
        "edges": [
        ]
      }
    }
  }
  render (){
    const colStyle = {
      'backgroundColor':'#f5f3f3'
    };
    const colStyle1 = {
      'backgroundColor':'#fff700'
    };

    const colStyle2 = {
      'backgroundColor':'#00eeff'
    };
  return (
    <div>
      <Row>
        <Col style={colStyle}>
          IDENTIFICANDO LA ROW PRINCIPAL
          <Row>
            <Col md={9} xl={9} lg={9} style={colStyle1}>
            <div className="border-top border-left border-right pt-1 mt-3"><center><h5>{this.state.regulationName}</h5></center></div>
            <Card>
              <CardHeader>
                <i className="cui-info"></i>
                Búsqueda de Información
                <div className="card-header-actions">
                  <a className="card-header-action btn btn-minimize" data-toggle="collapse" data-target="#collapseCard" onClick={this.toggleAllCard} aria-expanded="true"><i className="icon-arrow-up"></i></a>
                </div>
              </CardHeader>
              <Collapse isOpen={this.state.collapseCard} id="collapseCard">
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                      <Col md={12} xl={12} lg={12}>
                        <InputGroup>
                          <Input type="text" id="articulo" name="input-articulo" placeholder="Artículo" value={this.state.articleValue} onChange={this.handleInputChange}/>
                            <InputGroupAddon addonType="append">
                              <Button type="submit" color="primary"><i className="fa fa-search"></i> Buscar</Button>
                            </InputGroupAddon>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                  </Form>
                  {/* Nombre */}
                  <FormGroup row>
                    {/* <Col md="3">
                      <Label htmlFor="textarea-input">Nombre :</Label>
                    </Col> */}
                    <Col xs="12" md="12">
                      <Input readOnly type="textarea" name="textarea-nameArticle" id="textoNombre" rows="1" placeholder="Nombre del Artículo" value={this.state.articleName}/>
                    </Col>
                  </FormGroup>
                  {/* Contenido */}
                  <FormGroup row>
                    {/* <Col md="3">
                      <Label htmlFor="textarea-input">Contenido :</Label>
                    </Col> */}
                    <Col xs="12" md="12">
                      <Input readOnly type="textarea" name="textarea-content" id="textoContenido" rows="9" placeholder="Contenido del Artículo" value={this.state.articleContent}/>
                    </Col>
                  </FormGroup>
                  {/* Card De Pertenencia */}
                  <Card className="border-primary">
                    <CardHeader>
                    <div className="card-header-actions">
                      <a className="card-header-action btn btn-minimize" data-toggle="collapse" data-target="#collapseContext" onClick={this.toggle} aria-expanded="true"><i className="icon-arrow-up"></i></a>
                    </div>
                    </CardHeader>
                    <Collapse isOpen={this.state.collapse} id="collapseContext">
                      <CardBody>
                        {/* Titulo */}
                        <FormGroup row>
                          {/* <Col md="3">
                            <Label htmlFor="text-input">Título :</Label>
                          </Col> */}
                          <Col xs="12" md="12">
                            <Input readOnly type="text" name="text-TitleContext" id="textoTitulo" placeholder="Título" value={this.state.title}/>
                          </Col>
                        </FormGroup>
                        {/* Capítulo */}
                        <FormGroup row>
                          {/* <Col md="3">
                            <Label htmlFor="text-input">Capítulo :</Label>
                          </Col> */}
                          <Col xs="12" md="12">
                            <Input readOnly type="text" name="text-ChapterContext" id="textoCapitulo" placeholder="Capítulo" value={this.state.chapter}/>
                          </Col>
                        </FormGroup>
                        {/* Sección */}
                        <FormGroup row>
                          {/* <Col md="3">
                            <Label htmlFor="text-input">Sección :</Label>
                          </Col> */}
                          <Col xs="12" md="12">
                            <Input readOnly type="text" name="text-SectionContext" id="textoSeccion" placeholder="Sección" value={this.state.section}/>
                          </Col>
                        </FormGroup>
                        {/* Apartado */}
                        <FormGroup row>
                          {/* <Col md="3">
                            <Label htmlFor="text-input">Apartado :</Label>
                          </Col> */}
                          <Col xs="12" md="12">
                            <Input readOnly type="text" name="text-ApartContext" id="textoApartado" placeholder="Apartado" value={this.state.apart}/>
                          </Col>
                        </FormGroup>
                        {/* subApartado */}
                        <FormGroup row>
                          {/* <Col md="3">
                            <Label htmlFor="text-input">Sub Apartado :</Label>
                          </Col> */}
                          <Col xs="12" md="12">
                            <Input readOnly type="text" name="text-SubApartContext" id="textoSubApartado" placeholder="Sub Apartado" value={this.state.subApart}/>
                          </Col>
                        </FormGroup>
                      </CardBody>
                    </Collapse>
                  </Card>
                </CardBody>
                <CardFooter>
                  <Button type="reset" color="danger"><i className="fa fa-ban"></i> Limpiar</Button>
                </CardFooter>
              </Collapse>
            </Card>
            </Col>
            <Col md={1} xl={1} lg={1}>
              VACIO COL.1
            </Col>
            <Col md={1} xl={1} lg={1} style={colStyle2}>
              Algo Diferente
            </Col>
            <Col md={1} xl={1} lg={1}>
              VACIO 2 Col. 1
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
                        }
}

export default App;
