import React, { Component } from 'react'
import CVHeader from '../CVHeader'
import CVFooter from '../CVFooter'
import CVBody from '../CVBody';

class CV extends Component{

    render(){
        return(
            <div>
                <CVHeader/>
                <CVBody/>
                <CVFooter/>
            </div>
        );
    }

}

export default CV;