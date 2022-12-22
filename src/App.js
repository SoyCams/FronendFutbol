import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//importacion de componentes
import {CompCrearUsuario} from './Componentes/CrearUsuario.jsx'
import {CompShowUsers} from './Componentes/MostrarUsuarios.jsx'
import {NavbarEventos} from './Componentes/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
              <Routes>
              <Route path='/' element= {<NavbarEventos />} >
                   <Route path='/usuarios' element= {<CompShowUsers />}/>
                   <Route path='/create' element= {<CompCrearUsuario />}/>
              </Route>

              </Routes>
      </BrowserRouter>          

    </div>
  );
}

export default App;
