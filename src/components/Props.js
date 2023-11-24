

const Ubicacion = props =>{

    const {elementos}= props;
    return(
    <ul>
    {elementos.map(elemento => <li key={elemento}>{elemento}</li>)}
    </ul>
    )
}

const Noticias =({titulo,subtitulo,cuerpo})=>{
    return(
        <div className="caja">
            <h2>{titulo}</h2>
            <h4>{subtitulo}</h4>
            <p>{cuerpo}</p>


        </div>
    )
}
const Comentarios = (props) => {

    
    return <label>Dejanos tu comentario: <input type="text" onChange={(e)=>props.cambiarValor(e.target.value)}/></label>
}
const Enviar=(props)=>{
    
    const handleClick=e=>{
        
        if(props.EventoClick){
            props.EventoClick('enviar')
        }
    }
    return (
        <p><button onClick={handleClick}> enviar </button></p>
    )
}

export {
    
    Ubicacion,
    Noticias, 
    Comentarios, 
    Enviar,
}