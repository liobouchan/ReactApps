import React , {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Widget, addResponseMessage } from 'react-chat-widget';
import './estilo.css'

const App = () => {

  useEffect( () => { 
    addResponseMessage("Bienvenido a nuestro asistente virtual, puedes hacer las preguntas que quieras trataremos de responderte inmediatamente.")
  }, [] );


  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // IMAGINAMOS QUE YA SE HIZO LA LLAMADA AL BACK
    const response = "Esto es una simulación de respuesta"
    addResponseMessage(response);
  }

  return (
    <div className="App">
      <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Widget 
          handleNewUserMessage={handleNewUserMessage}
          title="Asistente Virtual de AllGood"
          subtitle="Bot de Ventas"
          profileAvatar={logo}
          senderPlaceHolder	= "Escribe una pregunta"
        />
      </body>
    </div>
  );
}

export default App;
