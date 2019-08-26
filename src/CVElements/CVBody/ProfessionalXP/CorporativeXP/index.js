import React, { Component } from 'react'

const XPs = [   
    'Desenvolvedor/Consultor Técnico no banco Bradesco pela consultoria WVS: '+
    'Desenvolvendo aplicações Web de ECM em Java(na plataforma JavaEE) com Javascript. Banco de dados utilizados: SQL Server, BD2 e Oracle. Servidores: Tomcat e WebSphere.',

    'Analista Desenvolvedor de Testes na Riachuelo pelo Grupo HDI: com scrips desenvolvidos em Java e os frameworks aplicados eram Selenium e JAXB. Atuando tanto com testes de UI(envolvendo elementos e tecnologias de front-end) como de backend(streaming e batch) e testes de requisições à APIs REST. De março de 2018 a novembro de 2018. Banco de dados: Oracle.',

    'Assistente de Automação e Desenvolvimento na Consultoria Inmetrics desde novembro de 2017 até março de 2018. Utilizando as ferramentas Selenium, Sikuli(Java), Capybara e Cucumber(Ruby). '+
    'Lá também atuei desenvolvendo aplicação front-end Javascript(Vanilla) fazendo consultas http request à APIs internas. Em paralelo com as linguagens HTML para marcação e CSS para estilo. Banco de dados: PostgreSQL.',
    'Programador Java Backend na PrimeTax Solutions entre março de 2016 a outubro de 2017. Frameworks: Hibernate, JDBC, JUnit, JAXB. Banco de dados: Oracle.'
]

const XPsLi = XPs.map((xp) => <li>{xp}</li>);

export default class CorpXP extends Component{
    render(){
        return(
            <div>
                <ul>
                    Experiência Profissional Corporativa
                    {XPsLi}
                </ul>
            </div>
        )
    }
}