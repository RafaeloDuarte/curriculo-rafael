import React, { Component } from 'react'

const XPs = [   
    'Interfaces gráficas utilizando Reactjs e Angular. Ferramentas de estilo: CSS Grid e Bootstrap. Chamadas via HTTP com Axios',
    'Robôs utilizando Nodejs, fazendo uso das APIs de inteligência artificial do Watson e do Algorithmia.',
    'APIs REST com Nodejs Java com autenticação JWT. Banco de Dados: MongoDB',
    'Desenvolvimento de uma aplicação mobile com React Native - Leitor de QR Code.'
]

const XPsLi = XPs.map((xp) => <li>{xp}</li>);

export default class PersonalXP extends Component{
    render(){
        return(
            <div>
                <ul>
                    Experiência Profissional Pessoal
                    {XPsLi}
                </ul>
            </div>
        )
    }
}