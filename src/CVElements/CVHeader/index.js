import React, {Component} from 'react';
    
const data =
    [
        "Contact: +55 (11) 9 ­8470-8101 cellnumber and WhatsApp",
        "E­mail: rafaeloliveiraduarte@hotmail.com",
        "Repositories: https://bitbucket.org/RafaeloDuarte e http://github.com/RafaeloDuarte",
        'Vila dos Palmares, São Paulo - SP/Brazil'
    ]

const listItems = data.map((element) =>
    <p>{element}</p>
);

const ulStyle = {
    margin: '30px 0',
    padding: '15px',
    textAlign: 'center'
};

const redFontStyle={
    color: '#cc0e00'
}

const blackColor={
    color: '#000000'
}

class CVHeader extends Component{

    render(){
        return(
            <div style={ulStyle}>
                <h2 style={redFontStyle}>Rafael Oliveira Duarte</h2>
                <ul style={blackColor}>{listItems}</ul>
            </div>
        );
    }

}

export default CVHeader