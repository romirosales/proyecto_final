
import {Noticias} from "../components/Props"
import '../css/servicios.css'



const Servicios = (props) => {

    return (
        <>
        <div className="cajaMayor">
        <div>
            

            <Noticias titulo="Tranporte X" subtitulo="Nuestro Transporte llega a todo el mundo" cuerpo="Nuestra empresa fue formada con la idea de poder cubrir las necesidades existentes en el mercado en el área de transporte. Nuestros servicios incluyen cargas exclusivas y consolidadas, permitiendo con esto último rebajar sus costos.

            Atendemos a lo largo de todo el país, donde trasladamos carga general y delicada. Ya no piense más con quien realizar su transporte.

            Con nosotros podrá comprobar que trasladar su carga es más económico, rápido y sencillo de lo que usted se imaginaba."/>


        </div>

        <div className="imgServicios">
        <img src="images/img05.jpg" alt="imagen 01"/>
        </div>
        </div>
        </>
    )

}
export default Servicios;