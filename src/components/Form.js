import { useState } from 'react';

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(`Usuário ${name} cadastrado com sucesso! Sua senha é ${password}`);
    }

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" placeholder="Nome" id="name" name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" placeholder="Senha" id="password" name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    />
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;