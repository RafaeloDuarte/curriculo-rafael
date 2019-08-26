import React, { Component } from 'react'

const XPs = [   
    'Tecnólogo em Gestão Ambiental - Anhanguera - 2009',
    'Tecnólogo em Analise e Desenvolvimento de Sistemas - Anhembi Morumbi - Cursando',
]

const XPsLi = XPs.map((xp) => <li>{xp}</li>);

export default class AcademicFormation extends Component{
    render(){
        return(
            <div>
                <ul>
                    Formação Acadêmica: 
                    {XPsLi}
                </ul>
            </div>
        )
    }
}