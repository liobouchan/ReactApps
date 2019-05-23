import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="body">
      <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <a className="navbar-brand" href="#">AllGood</a>
          <a className="btn btn-primary" href="indexLogin.html">Entrar</a>
        </div>
      </nav>

      {/* <!-- Masthead --> */}
      <header className="masthead text-white text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="mb-5">Regulación y cumplimiento a tú alcance.</h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input type="email" className="form-control form-control-lg" placeholder="Escribe tú E-mail..."/>
                  </div>
                  <div className="col-12 col-md-3">
                    <button type="submit" className="btn btn-block btn-lg btn-primary">Suscribirme</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Icons Grid --> */}
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-screen-desktop m-auto text-primary"></i>
                </div>
                <h3>Lectura y analísis</h3>
                <p className="lead mb-0">Permite leer de forma fácil cualquier regulación y dejar más tiempo al usuario experto para el anális de esta.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-layers m-auto text-primary"></i>
                </div>
                <h3>Modular</h3>
                <p className="lead mb-0">Listo para integrarse a tu sistema de GRC o no, según tus necesidades.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-check m-auto text-primary"></i>
                </div>
                <h3>Fácil de usar</h3>
                <p className="lead mb-0">AllGood ayuda al experto a leer solo la información que necesita, genera sugerencias de controles automáticos, y una rápida identificación de obligaciones. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    

      {/* <!-- Image Showcases --> */}
      <section className ="showcase">
        <div className ="container-fluid p-0">
          <div className ="row">
            <div className ="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url('img/bg-showcase-2.jpg')"}}></div>
            <div className ="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Lectura de Regulaciones</h2>
              <p className ="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className ="row">
            <div className ="col-lg-6 text-white showcase-img" style={{backgroundImage: "url('img/bg-showcase-2.jpg')"}}></div>
            <div className ="col-lg-6 my-auto showcase-text">
              <h2>Interpretación de Regulaciones</h2>
              <p className ="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className ="row">
            <div className ="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url('img/bg-showcase-3.jpg')"}}></div>
            <div className ="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Bibliotecas de Controles</h2>
              <p className ="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className ="row">
            <div className ="col-lg-6 text-white showcase-img" style={{backgroundImage: "url('img/bg-showcase-4.jpg')"}}></div>
            <div className ="col-lg-6 my-auto showcase-text">
              <h2>Conexión con Sistemas de GRC</h2>
              <p className ="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials --> */}
      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">Testimonios de nuestros clientes...</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="img/testimonials-1.jpg" alt=""/>
                <h5>Bruce Wayne</h5>
                <p className="font-weight-light mb-0">"Gracias a AllGood las industrias Wayne están en cumplimiento con la regulación empresarial de multimillonarios en ciudad Gótica."</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="img/testimonials-2.jpg" alt=""/>
                <h5>Tony Stark</h5>
                <p className="font-weight-light mb-0">"AllGood es un excelente producto me sirve para leer de una forma muy fácil la regulación bancaria y gracias a esto tengo más tiempo para usar mi traje de Iron Man"</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg" alt=""/>
                <h5>Norman Osborn</h5>
                <p className="font-weight-light mb-0">"Osborn Corp es lo más importante para mi y gracias a AllGood estoy en cumplimiento en mi área de experimientos Bio-Genéticos"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Call to Action --> */}
      <section className="call-to-action text-white text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h2 className="mb-4">Olvida los papeles ¡Registrate Ahora!</h2>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input type="email" className="form-control form-control-lg" placeholder="Deja tú correo, te contactaremos..."/>
                  </div>
                  <div className="col-12 col-md-3">
                    <button type="submit" className="btn btn-block btn-lg btn-primary">Contáctame</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <a href="#">About</a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="#">Contact</a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="#">Terms of Use</a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <p className="text-muted small mb-4 mb-lg-0">&copy; Rhisco 2019. All Rights Reserved.</p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
              <ul className="list-inline mb-0">
                <li className="list-inline-item mr-3">
                  <a href="#">
                    <i className="fab fa-facebook fa-2x fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a href="#">
                    <i className="fab fa-twitter-square fa-2x fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-instagram fa-2x fa-fw"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
