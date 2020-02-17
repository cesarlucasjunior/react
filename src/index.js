import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'
import ComponenteA, {ComponenteB as B} from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElementos'
import CriadorFamilia from './componentes/CriadorFamilia'

const elemento = document.getElementById('root')
ReactDOM.render(
    
    <div>

        <PrimeiroComponente valorEmReais={3+3} nomeUsuario="César Lucas Júnior"></PrimeiroComponente>
        
        <ComponenteA nomeUsuarioCadastrado="Alfa Beta Teste"></ComponenteA>
        <B idadeUsuarioCadastrado={26}></B>
        <MultiElementos />
        <CriadorFamilia/>

    </div>
    
    
    
    
    
    , elemento)