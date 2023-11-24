import { Link } from "react-router-dom";

const Nav =props=>{
    return (
        <nav>
            <ul>
                <li><Link  to="/">Home</Link></li>
                <li><Link to="/Nosotros">Nosotros</Link></li>
                <li><Link to="/Servicios">Servicios</Link></li>
                <li><Link to="/Galeria">Galeria</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;