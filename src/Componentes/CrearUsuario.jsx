//importacion de librerias que se utlizan para los componentes

//libreria para conectarse al servidor de Backend
import axios from 'axios'
//libreria para cambiar el estado de las cajas de texto input
import { useState } from 'react'
//libreria para poder navegar por nuestras rutas
import { useNavigate } from 'react-router-dom'
//libreria Bootstrap para maquillar los formularios
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

//finalizacion de importacion
// definicion de la url de la direccion del servidor Backend
const URI = 'http://localhost:8000/regusuario/'

export const CompCrearUsuario = () => {
//escribir codigo para guardar informacion del usuario
//Definir variables a utilizar
const [nomuser,setUsuario] = useState('')
const [correo, setCorreo] =useState ('')
const [password,setPass] =useState('')  
const navigate = useNavigate()
//aqui se guarda la informacion en base de datos
var guardar = async (e) => {

    e.preventDefault()
    await axios.post(URI,{
                         correo: correo,
                         nomuser: nomuser,
                         password: password
                        })
    navigate('/usuarios')                       
}

return(
<div>
        //tamaño de la targeta
        <Card style={{ width: '40rem'}}>

        <Card.Body>
        <Card>
          <h3>Crear Usuario</h3>
        <Form>         
                <Form.Group className="mb-3">
                <div>
                <Form.Control
                   value= {nomuser}
                   onChange ={(e) =>setUsuario(e.target.value)}
                   type= "text"
                   placeholder='Ingrese su Nombre'
                   />
                </div> 
                <div>      
                <Form.Control 
                   value={correo} 
                   onChange ={ (e) => setCorreo(e.target.value)}
                   type="email" 
                   placeholder='Ingrese su Email'
                   />
                </div>
                <div>    
                <Form.Control
                   value={password}
                   type="password"
                   onChange={(e) => setPass(e.target.value)}
                   placeholder='Ingrese su password'
                   />
                </div>
                <Button type="submit" onclick = {guardar} variant="outline-info">Guardar</Button>
               </Form.Group>
        </Form> 
        </Card>
        </Card.Body>

    </Card>

</div>


    )
}
export default CompCrearUsuario