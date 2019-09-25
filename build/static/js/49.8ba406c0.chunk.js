(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{272:function(e,t,a){"use strict";t.a={BEGONIA_API_URL:"http://192.168.1.174:7001/",REGULATION_API_URL:"http://192.168.1.174:7002/",NEO4J_URL:"bolt://192.168.1.174"}},536:function(e,t,a){"use strict";a.r(t);var n=a(85),l=a(86),r=a(88),i=a(87),c=a(89),o=a(90),s=a(0),d=a.n(s),u=a(248),p=a(249),h=a(251),m=a(253),g=a(252),b=a(280),E=a(313),f=a(264),A=a(266),x=a(265),v=a(250),k=a(281),C=a(262),N=a(467),y=a(272),S={automaticRearrangeAfterDropNode:!1,collapsible:!1,directed:!0,focusAnimationDuration:.75,focusZoom:1,height:1400,highlightDegree:1,highlightOpacity:1,linkHighlightBehavior:!0,maxZoom:8,minZoom:.1,nodeHighlightBehavior:!0,panAndZoom:!1,staticGraph:!1,width:1400,d3:{alphaTarget:.05,gravity:-100,linkLength:100,linkStrength:1},node:{color:"#00ACAB",fontColor:"black",fontSize:10,fontWeight:"normal",highlightColor:"#F9F871",highlightFontSize:8,highlightFontWeight:"normal",highlightStrokeColor:"black",highlightStrokeWidth:"SAME",labelProperty:"nombre",mouseCursor:"pointer",opacity:1,renderLabel:!0,size:300,strokeColor:"#906DB1",strokeWidth:1.5,svg:"",symbolType:"circle"},link:{color:"#E6F4F1",fontColor:"black",fontSize:8,fontWeight:"normal",highlightColor:"black",highlightFontSize:12,highlightFontWeight:"normal",labelProperty:"type",mouseCursor:"pointer",opacity:1,renderLabel:!0,semanticStrokeWidth:!1,strokeWidth:1.5}},I=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={config:S,data:{nodes:[{id:777777777777777,nombre:"Init Graph"}],links:[]}},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.idArticle),fetch(y.a.REGULATION_API_URL+"graph").then(function(e){return e.json()}).then(function(t){console.log("Data del REST: ",t),e.setState({data:t})})}},{key:"render",value:function(){var e=this,t=function(t){var a=t;e.props.sendClickedNodeId(a)},a=this.props.idArticle;return null!=a&&fetch(y.a.REGULATION_API_URL+"graph/"+a).then(function(e){return e.json()}).then(function(t){e.setState({data:t})}),d.a.createElement(N.Graph,{id:"graph-container",config:this.state.config,data:this.state.data,onClickNode:function(e){t(e)}})}}]),t}(s.Component),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).loading=function(){return d.a.createElement("div",{className:"animated fadeIn pt-1 text-center"}," Loading... ")},a.toggle=a.toggle.bind(Object(o.a)(Object(o.a)(a))),a.toggleFade=a.toggleFade.bind(Object(o.a)(Object(o.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(o.a)(Object(o.a)(a))),a.handleInputChange=a.handleInputChange.bind(Object(o.a)(Object(o.a)(a))),a.state={collapse:!0,regulation:"Circular \xdanica de Bancos",articleValue:"",articleName:"",articleDescription:"",articleContent:"",title:"",chapter:"",section:"",apart:"",subApart:"",clickedNodeIdFromGraph:null,idSearchedArticle:null},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState(function(e){return{fadeIn:!e}})}},{key:"handleInputChange",value:function(e){this.setState({articleValue:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;console.log("Click en Buscar"),e.preventDefault(),console.log(this.state.articleValue);var a=this.state.articleValue;fetch(y.a.REGULATION_API_URL+"articles/"+a).then(function(e){return e.json()}).then(function(e){null!=e.article&&(console.log("Dato del articulo: ",e.article),"null"==e.article.nombre&&(e.article.nombre=""),"null"==e.article.descripcion&&(e.article.descripcion=""),"null"==e.article.contenido&&(e.article.contenido=""),"null"==e.article.titulo&&(e.article.titulo=""),"null"==e.article.capitulo&&(e.article.capitulo=""),"null"==e.article.seccion&&(e.article.seccion=""),"null"==e.article.apartado&&(e.article.apartado=""),"null"==e.article.subApartado&&(e.article.subApartado=""),t.setState({articleName:e.article.nombre,articleDescription:e.article.descripcion,articleContent:e.article.contenido,title:e.article.titulo,chapter:e.article.capitulo,section:e.article.seccion,apart:e.article.apartado,subApart:e.article.subApartado,idSearchedArticle:e.article.id}))})}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"animated fadeIn"},d.a.createElement(u.a,{className:"mt-2"},d.a.createElement(p.a,{md:9,xl:9,lg:9,id:"graph-container"},d.a.createElement(I,{sendClickedNodeId:function(t){e.setState({clickedNodeIdFromGraph:t}),console.log("Buscar informaci\xf3n por id(nodo) = ",e.state.clickedNodeIdFromGraph),fetch(y.a.REGULATION_API_URL+"graph/nodes/"+e.state.clickedNodeIdFromGraph).then(function(e){return e.json()}).then(function(t){"null"==t.nombre&&(t.nombre=""),"null"==t.descripcion&&(t.descripcion=""),"null"==t.contenido&&(t.contenido=""),"null"==t.titulo&&(t.titulo=""),"null"==t.capitulo&&(t.capitulo=""),"null"==t.seccion&&(t.seccion=""),"null"==t.apartado&&(t.apartado=""),"null"==t.subApartado&&(t.subApartado=""),e.setState({articleName:t.nombre,articleDescription:t.descripcion,articleContent:t.contenido,title:t.titulo,chapter:t.capitulo,section:t.seccion,apart:t.apartado,subApart:t.subApartado})})},idArticle:this.state.idSearchedArticle})),d.a.createElement(p.a,{md:3,xl:3,lg:3},d.a.createElement("div",{className:"border-top border-left border-right pt-1"},d.a.createElement("center",null,d.a.createElement("h5",null,this.state.regulation))),d.a.createElement(h.a,null,d.a.createElement(m.a,null,d.a.createElement("i",{className:"cui-info"}),"B\xfasqueda de Informaci\xf3n"),d.a.createElement(g.a,null,d.a.createElement(b.a,{onSubmit:this.handleSubmit},d.a.createElement(E.a,{row:!0},d.a.createElement(p.a,{md:12,xl:12,lg:12},d.a.createElement(f.a,null,d.a.createElement(A.a,{type:"text",id:"articulo",name:"input-articulo",placeholder:"Art\xedculo",value:this.state.articleValue,onChange:this.handleInputChange}),d.a.createElement(x.a,{addonType:"append"},d.a.createElement(v.a,{type:"submit",color:"primary"},d.a.createElement("i",{className:"fa fa-search"})," Buscar")))))),d.a.createElement(E.a,{row:!0},d.a.createElement(p.a,{xs:"12",md:"12"},d.a.createElement(A.a,{type:"textarea",name:"textarea-input",id:"textoNombre",rows:"1",placeholder:"Nombre del Art\xedculo",value:this.state.articleName}))),d.a.createElement(E.a,{row:!0},d.a.createElement(p.a,{xs:"12",md:"12"},d.a.createElement(A.a,{type:"textarea",name:"textarea-input",id:"textoDescripcion",rows:"1",placeholder:"Descripci\xf3n del Art\xedculo",value:this.state.articleDescription}))),d.a.createElement(E.a,{row:!0},d.a.createElement(p.a,{xs:"12",md:"12"},d.a.createElement(A.a,{type:"textarea",name:"textarea-input",id:"textoContenido",rows:"9",placeholder:"Contenido del Art\xedculo",value:this.state.articleContent}))),d.a.createElement(h.a,{className:"border-primary"},d.a.createElement(m.a,null,d.a.createElement("div",{className:"card-header-actions"},d.a.createElement("a",{className:"card-header-action btn btn-minimize","data-toggle":"collapse","data-target":"#collapseContext",onClick:this.toggle,"aria-expanded":"true"},d.a.createElement("i",{className:"icon-arrow-up"})))),d.a.createElement(k.a,{isOpen:this.state.collapse,id:"collapseContext"},d.a.createElement(g.a,null,d.a.createElement(E.a,{row:!0},d.a.createElement(p.a,{xs:"12",md:"12"},d.a.createElement(A.a,{type:"text",name:"text-input",id:"textoTitulo",placeholder:"T\xedtulo de pertenencia",value:this.state.title}))),d.a.createElement(E.a,{row:!0},d.a.createElement(p.a,{xs:"12",md:"12"},d.a.createElement(A.a,{type:"text",name:"text-input",id:"textoCapitulo",placeholder:"Cap\xedtulo de pertenencia",value:this.state.chapter}))),d.a.createElement(E.a,{row:!0},d.a.createElement(p.a,{xs:"12",md:"12"},d.a.createElement(A.a,{type:"text",name:"text-input",id:"textoSeccion",placeholder:"Secci\xf3n de pertenencia",value:this.state.section}))),d.a.createElement(E.a,{row:!0},d.a.createElement(p.a,{xs:"12",md:"12"},d.a.createElement(A.a,{type:"text",name:"text-input",id:"textoApartado",placeholder:"Apartado de pertenencia",value:this.state.apart}))),d.a.createElement(E.a,{row:!0},d.a.createElement(p.a,{xs:"12",md:"12"},d.a.createElement(A.a,{type:"text",name:"text-input",id:"textoSubApartado",placeholder:"Sub Apartado de pertenencia",value:this.state.subApart}))))))),d.a.createElement(C.a,null,d.a.createElement(v.a,{type:"reset",color:"danger"},d.a.createElement("i",{className:"fa fa-ban"})," Limpiar"))))))}}]),t}(s.Component);t.default=O}}]);
//# sourceMappingURL=49.8ba406c0.chunk.js.map