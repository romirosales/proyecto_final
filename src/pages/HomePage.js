import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import '../css/home.css'

const HomePage =(props) =>{

    const settings ={
        arrows:false,
        infinite:true,
        speed:1000,
        autoplaySpeed:2000,
        fade:true,
        autoplay:true


    };

    return (
        <>
        <div className= "fotos"> 
        <Slider {...settings}>
        <img src="images/img01.jpg" alt="imagen 01"/>
        <img src="images/img02.jpg" alt="imagen 01"/>
        <img src="images/img03.jpg" alt="imagen 01"/>
        <img src="images/img04.jpg" alt="imagen 01"/>
        <img src="images/img05.jpg" alt="imagen 01"/>
        </Slider>
        </div>
        <div class="columnas">
            <section class="Bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Nuestra empresa fue formada con la idea de poder cubrir las necesidades existentes en el mercado en el área de transporte. Nuestros servicios incluyen cargas exclusivas y consolidadas, permitiendo con esto último rebajar sus costos.

                 Atendemos a lo largo de todo el país, donde trasladamos carga general y delicada. Ya no piense más con quien realizar su transporte.

                 Con nosotros podrá comprobar que trasladar su carga es más económico, rápido y sencillo de lo que usted se imaginaba.</p>

            </section>
            <section class="testimonios">
                <h2>Testimonios</h2>
                <div class="testimonio">
                    <span class="cita">Simplemente excelente</span>
                    <span class="autor">Juan Gómez</span>


                </div>

            </section>

        </div>

       
        
        </>
    )
}
export default HomePage;