//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//importacion de componentes
import {CompCrearUsuario} from './Componentes/CrearUsuario.jsx'
import {CompShowUsers} from './Componentes/MostrarUsuarios.jsx'
import {NavbarEventos} from './Componentes/NavBar.jsx'
import {Logo} from './Componentes/Logo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import CompMostrarEventos from './Componentes/MostrarEventos';
import CompCrearEvento from './Componentes/CrearEvento';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        
      </header>
      <BrowserRouter>
              <Routes>
              <Route path='/' element= {<NavbarEventos />} >
                   <Route path='/usuarios' element= {<CompShowUsers />}/>
                   <Route path='/create' element= {<CompCrearUsuario />}/>
                   <Route path='/crearevento' element= {<CompCrearEvento />}/>
                   <Route path='/mostrareventos' element= {<CompMostrarEventos />}/>
              </Route>

              </Routes>
      </BrowserRouter>          

    </div>
  );
}

//Se exporta
export default App;
