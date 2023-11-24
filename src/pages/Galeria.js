import '../css/galeria.css'
import { useEffect, useState } from 'react'; 


const Galeria =(props) =>{
    const [cargando, setCargando] =useState(false);
    const [personajes, setPersonajes]=useState([]);

    useEffect(()=>{
        const cargarDatos =async()=>{
            setCargando(true);
            const res= await (await fetch('https://rickandmortyapi.com/api/character')).json();
            setPersonajes(res.results);
            setCargando(false);
        }
        cargarDatos();
    },[]);
    


    return(
        <>
        <h2>Datos Api</h2>
        {cargando ? <p>cargando datos...</p> :( 
        <div className="personajes">
        {personajes.map(personaje=>(
           
            <div className="personaje" key={personaje.id}>
                <h4>{personaje.name}</h4>
                <div className="ficha">
                    <div className="foto">
                        <img src= {personaje.image} alt={personaje.name}/>

                    </div>
                    <div className="datos">
                        <h6>especie: {personaje.species === 'Human'? 'Humano' : personaje.species}</h6>
                        <h6>Vivo: {personaje.status === 'Alive'? 'si': 'no' }</h6>

                    </div>

                </div>

            </div>
           ))}

        </div>
        
        )}

        </>
    )
}
export default Galeria;