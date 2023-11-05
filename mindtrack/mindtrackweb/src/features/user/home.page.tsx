import React from 'react';

function HomePage() {

    return (
        <div className="App">
            <nav>
                <ul>
                    <li><a href="/notes">Notas</a></li>
                    <li><a href="#">Lembretes</a></li>
                    <li><a href="#">Tarefas</a></li>
                    <li><a href="#">Etiquetas</a></li>
                </ul>
            </nav>
            <h1>Google Keep Clone</h1>
        </div>
    );
}

export default HomePage;
