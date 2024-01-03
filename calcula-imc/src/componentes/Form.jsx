import { useState } from "react";
import './Form.css';

function Form () {
    
    
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    
    
    const calcularImc = () =>{
        const al = Math.pow(altura, 2);
        const soma = peso / al
        console.log(soma)
        
            if (soma <= 18){
                return (
                    <p>Baixo peso</p>
                );
            }
            else if (soma <= 25){
                return(
                <p>peso normal</p>
                );
            }
            else if (soma <= 30){
                return( <p>Sobrepeso</p>
                 
                );
            }   
            else if (soma) {
                 return (
                     <p>Obesidade</p>
                 );
             }
       
    }    
             
               
        
          
            

    const stopReload = (e)=> {
        e.preventDefault
    }
    

    return (
        <div>
            <form onSubmit={stopReload}>
                <label htmlFor="altura">Altura</label>
                <input type="text" onChange={(evento) => setAltura(evento.target.value)}/>
                <label htmlFor="peso">Peso</label>
                <input type="text" onChange={(evento) => setPeso(evento.target.value)}/>
                {calcularImc()}
                <div className="container">
                <button type="button">Caucular IMC</button>
                </div>
            </form>
        </div>

    );


}  

export default Form