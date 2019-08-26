import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Main = () => (
    <div className="home">
        <h1>Olá dev, seja muito bem vindo!</h1>
        <Link className="actions" to="/users">Listar usuários</Link>
    </div >
);

export default Main;


