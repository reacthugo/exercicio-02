import React, { useState } from 'react';

import UserItem from '../​UserItem';

import './styles.css';

const UsersComponent = () => {

    const [alunos, setAlunos] = useState([{ id: 1, nome: "Mundo Bita", email: "mundo.bita@email.com", idade: 14, exibir: true },
    { id: 2, nome: "Masha e o Urso", email: "mashaeurso@email.com", idade: 26, exibir: true },
    { id: 3, nome: "Dinotrem", email: "dinotrem@email.com", idade: 35, exibir: true },
    { id: 4, nome: "Meu Amigãozão", email: "meu.amigao@email.com", idade: 18, exibir: true },
    { id: 5, nome: "Backyardigans", email: "backyardigans@email.com", idade: 33, exibir: true },
    { id: 6, nome: "Charlie e Lola", email: "charlielola@email.com", idade: 40, exibir: true },
    { id: 7, nome: "Floogals", email: "floogals@email.com", idade: 50, exibir: true },
    { id: 8, nome: "Galinha Pintadinha", email: "galinha.pintadinha@email.com", idade: 16, exibir: true },
    { id: 9, nome: "Palavra Cantada", email: "hpalavra.cantada@email.com", idade: 8, exibir: true }
    ]);


    const handleDelete = (userId, event) => {
        setAlunos(alunos.filter(aluno => aluno.id !== userId));
    };

    const filtrarUsuario = (event) => {
        setAlunos(alunos.map(aluno => {
            let localilzado = aluno.nome.toLowerCase().match(event.target.value.toLowerCase());
            if (localilzado !== null && localilzado.index === 0)
                aluno.exibir = true;
            else
                aluno.exibir = false;

            return aluno;
        })
        );
    };;

    return (
        <div className="products-list">
            <input className="buscar-aluno" type="text" onChange={e => filtrarUsuario(e)} placeholder="Digite o nome do aluno" />
            {alunos.filter(aluno => aluno.exibir === true).map(aluno => (
                <UserItem key={aluno.id} aluno={aluno} onDelete={handleDelete} />
            ))}
        </div >
    );
};

export default UsersComponent;