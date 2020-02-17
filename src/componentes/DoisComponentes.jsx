import React from 'react'

const ComponenteA = (props) =>
    <div>
        <h1>O nome do usuário é: {props.nomeUsuarioCadastrado}</h1>
    </div>

const ComponenteB = (props) =>
    <div>
        <h1>A idade do usuário é: {props.idadeUsuarioCadastrado}</h1>
    </div>

export default ComponenteA
export {ComponenteA, ComponenteB}