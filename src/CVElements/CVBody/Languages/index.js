import React, { Component } from 'react'

const Langs = [   
    'Nível Intermediário de Inglês – Instituto de Cultura Americana.'
]

const LangsLi = Langs.map((language) => <li>{language}</li>);

export default class Languages extends Component{
    render(){
        return(
            <div>
                <ul>
                    Idiomas
                    {LangsLi}
                </ul>
            </div>
        )
    }
}