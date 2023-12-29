import { useState } from "react"
import './Form.css'

function Form (){

    let [peso, setPeso] = useState()
    let [altura, setAltura] = useState()
    const imc = () => {
        const al = Math.pow(altura, 2)
        const soma = al / peso
        console.log(soma)
        parseFloat(soma)        
               
        if (soma <= 18){
            return (
                <p>Baixo peso</p>
            )
        }
        else if (soma <= 25){
            return(
            <p>peso normal</p>
            )
        }
         else if (soma >=26){
            return( <p>Sobrepeso</p>
             
            )
         }   
     
         else if (soma >= 30){
             return (
                 <p>Obesidade</p>
             )
         }
    }

    function meuEvento(e){
        e.preventDefault()
       
    }

    return (
        <div>
            <form onSubmit={meuEvento}>
                <label htmlFor="">Altura</label>
                <input type="text" onChange={evento => setAltura(parseInt(evento.target.value))}/>
                <label htmlFor="">Peso</label>
                <input type="text" onChange={evento => setPeso(parseInt(evento.target.value))}/>
                {imc()}
            </form>
        </div>

    )

}

export default Form