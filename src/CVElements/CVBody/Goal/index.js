import React, { Component } from 'react'

const goals = ['Oportunidade de atuar com desenvolvimento front-end.']
const goalLi = goals.map((goal) => <li>{goal}</li>);

export default class Goal extends Component{
    render(){
        return(
            <div>
                <ul>
                    Objetivo:
                    {goalLi}
                </ul>
            </div>
        );
    }
}