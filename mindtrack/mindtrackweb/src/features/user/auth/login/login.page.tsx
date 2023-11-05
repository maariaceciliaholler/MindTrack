import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    const handleLogin = () => {
        // TODO: fazer login com comparação de hash de senhas
    };

    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" name="password" />
                </div>
                <button type="button" onClick={handleLogin}>
                    Entrar
                </button>
            </form>
            <p>
                Não possui conta? <Link to="/register">Cadastre-se</Link>
            </p>
        </div>
    );
}

export default LoginPage;
