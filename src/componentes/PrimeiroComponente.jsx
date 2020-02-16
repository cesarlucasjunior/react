import React from 'react'

let idadeUsuario = 26;

export default (props) => 

    <div>
        <h1>Primeiro componente REACT...</h1>
        <h2>{props.valorEmReais}</h2>
        <h3>Nome usuário: {props.nomeUsuario}</h3>
        <h4>Idade usuário: {idadeUsuario}</h4>
    </div>
