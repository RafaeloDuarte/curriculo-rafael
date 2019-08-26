import React,{Component} from 'react'
import Chart from '../Chart'
import Courses from '../CVBody/Courses'
import './index.css'

export default class CVFooter extends Component{

    render(){
        return(
            <div>
                <div class='container'>
                    <Courses/>
                    <Chart/>
                </div>
                <p>Este Currículo foi desenvolvido através do framework Reactjs e seu código está hospedado no repositório: </p>
                <a href=''></a>
            </div>
        )
    }
}