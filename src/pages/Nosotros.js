import staff from '../data/Staff.json'
import '../css/nosotros.css'

const Nosotros =(props)=> {
    return (
        <>
        <div className="titulo">
        <h2> Nuestro Staff</h2>
        </div>

        <div className='integrantes'>
           
        <img className="item"src="images/nosotros1.jpg" alt="imagen 01"/>
        
        <img className="item"src="images/nosotros2.jpg" alt="imagen 01"/>
        <img className="item"src="images/nosotros3.jpg" alt="imagen 01"/>
        <img className="item"src="images/nosotros4.jpg" alt="imagen 01"/>
        <img className="item"src="images/nosotros5.jpg" alt="imagen 01"/>
        </div>

        <div className="array">
        <ul>
            {staff.map(integrante=>(
                <li>Nombre: {integrante.nombre } apellido: {integrante.apellido} Rol: {integrante.rol}</li>
            ))}
        </ul>
        </div>


        </>
    )
}
export default Nosotros;