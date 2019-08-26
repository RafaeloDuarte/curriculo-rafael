import React , { Component } from 'react'
import Goal from './Goal'
import CorpXP from './ProfessionalXP/CorporativeXP'
import ProfessionalXP from './ProfessionalXP/PersonalXP'
import AcademicFormation from './AcademicFormation'
import './index.css'

export default class CVBody extends Component{

  render(){
    return(
      <div>
        <Goal/>
        <ProfessionalXP/>
        <CorpXP/>
      </div>
    );
  }
}