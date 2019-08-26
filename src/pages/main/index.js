import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Main = () => (
    <div className="home">
        <Link className="actions" to="/users">Listar usuários</Link>
    </div >
);

export default Main;


