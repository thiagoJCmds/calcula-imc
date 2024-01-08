import { useState , useRef, useEffect } from "react";
import './Form.css';

function Form () {
    
    
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [cal, setCal] = useState();
    const clear = useRef("")
    const limpa = useRef("")
 
    
    function calcularImc () {
        const al = Math.pow(altura, 2);
        setCal(peso / al);
       
    }   
    
        const resultado = () => {

            if (cal <= 18){
                return (
                    <p id="p1">abaixo do peso</p>
                );
            }
            else if (cal <= 25){
                return(
                <p id="p2">peso normal</p>
                );
            }
            else if (cal <= 30){
                return( <p id="p3">Sobrepeso</p>
                
                );
            }   
            else if (cal){
                return (
                    <p id="p4">Obesidade</p>
                )
            }
          
        
             
        }

        const reset = ()=>{
            clear.current.value = ""
            limpa.current.value = ""
            setCal()
        }

        
            
        
        const stopReload = (e)=> {
            e.preventDefault()

        }
    
    

    return (
        <div>
            <form onSubmit={stopReload}>
            <h1>Calcule o indice de massa corporal</h1>
                <label  htmlFor="altura">Altura</label>
                <div>
                <input placeholder="exemplo 1.70" ref={clear} type="text" onChange={(evento) => setAltura(evento.target.value)}/>
                </div>
                <label htmlFor="peso">Peso</label>
                <div>
                <input placeholder="exemplo 80" ref={limpa} type="text" onChange={(evento) => setPeso(evento.target.value)}/>
                </div>
                <div className="container">
                <button className="b1" onClick={calcularImc} type="button">Caucular IMC</button>
                <button onClick={reset} type="button">Limpar</button>
                </div>
                <div>
                {resultado()}    
                </div>     
            </form>
        </div>

    );


}  

export default Form