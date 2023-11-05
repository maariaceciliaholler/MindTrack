import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function RegisterPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    async function handleFormSubmit(data) {
        if (!data.name || !data.email || !data.password) {
            console.log('Erro: Preencha todos os campos');
        } else {
            const requestData ={
                name_user: data.name,
                email_user: data.email,
                password_user: data.password,
            }

            try {

                const formattedRequest = JSON.stringify(requestData);
                const res = await fetch(`http://localhost:8080/api/user`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: formattedRequest,
                });

                if (res.status === 201) {
                    const result = await res.json();
                    navigate('/home');
                } else {
                    console.log('Erro na requisição');
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página
        handleFormSubmit(user); // Chama a função de envio com os dados do usuário
    };

    return (
        <div className="App">
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}

export default RegisterPage;
