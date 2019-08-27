import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

export default class UsersDetail extends Component{
    state={
        nomeAluno: ""
    }

    componentDidMount(){
        const {name} = this.props.match.params;
        this.setState({nomeAluno: name});
    }


    render(){
        return (
            <div>
                <h1>Aluno: {this.state.nomeAluno}</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, praesentium. Nesciunt modi similique maxime quo sequi temporibus suscipit non id earum, repellendus fugit atque tenetur accusamus beatae esse sit enim!
                </p>

                <Link to='/users'>Voltar</Link>
                
            </div>
        );
    };
}