import imagem from './aa.png';
import './Novo.css';

function Novo(){
    return(
        <div>
            <h1 className="tit">Olá</h1>
        </div>
    
    )
}

export function Imagem(){
    return(
        <div>
            <img className='imagem' src={imagem}/>
        </div>
    )
}

export default Novo;

