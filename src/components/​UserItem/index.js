import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const UserItem = (props) => (    
    <div className="user-item">     
        <p><span>Código:</span> {props.aluno.id}</p>
        <p><span>Nome:</span> {props.aluno.nome}  <Link className="detalhe" to={`/users/${props.aluno.nome}`}> + DETALHE</Link> </p>
        <p><span>E-mail:</span> {props.aluno.email}</p>
        <p><span>Idade:</span>
            {props.aluno.idade}</p>
        
        <div className="actions">
            <button className="btnRemove" title="Remove o usuário" onClick={ event => props.onDelete(props.aluno.id, event)}>Remover</button>
        </div>
        <hr/>
    </div>
);

export default UserItem;