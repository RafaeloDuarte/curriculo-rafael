import React, { Component } from 'react'
import AcademicFormation from '../AcademicFormation';

const XPs = [   
    'Desenvolvimento Interfaces Web com HTML5, JavaScript e JQuery – GlobalCode – 24 horas',
    'Desenvolvimento Web com Java EE 7 – GlobalCode – 20 horas',
    'Desenvolvimento da Camada de Persistência com JPA e Hibernate – GlobalCode – 20 horas',
    'Programação com linguagem Python Intermediário ­ Site Codeacademy.com ­ 13 horas'
]

const XPsLi = XPs.map((xp) => <li>{xp}</li>);

export default class Courses extends Component{
    render(){
        return(
            <div>
                <AcademicFormation/>
                <ul>
                    Cursos
                    {XPsLi}
                </ul>
            </div>
        )
    }
}