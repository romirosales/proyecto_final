import {Comentarios,Enviar } from "../components/Props"

import '../css/contacto.css'

const mostrarValor=valor=>{
    console.log(valor)
}

const Contacto =(props) => {
    return (
        <>
            <div className="mapa">
                <h2>Ubicación</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.874671156093!2d-58.43866960022627!3d-34.59863169999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2e1493a6a3%3A0x1862a7c0b8163e5d!2sUTN.BA!5e0!3m2!1ses!2sar!4v1699877572818!5m2!1ses!2sar" style={{ width: 300, height: 250, border: 0, loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}
                ></iframe>
            </div>
            <div className='formulario'>
                <h3>Contactate con Nosotros</h3>
                <p> Telefono de contacto: 011365897</p>
                <Comentarios cambiarValor={mostrarValor} />
                <Enviar EventoClick={mostrarValor} />

            </div>
    


               


            


        </>
    )
}
export default Contacto;