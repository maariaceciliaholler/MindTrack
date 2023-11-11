import { useState, useEffect } from 'react';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';

function NotePage() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await fetch(`/api/user/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                const data = await response.json();
                setNotes(data);
            } else {
                console.error('Erro ao buscar as notas:', response.status);
            }
        } catch (error) {
            console.error('Erro ao buscar as notas:', error);
        }
    };

    const handleAddNote = async () => {
        try {
            const response = await fetch('/api/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: newNote }),
            });

            if (response.ok) {
                const data = await response.json();
                setNotes([...notes, data]);
                setNewNote('');
            } else {
                console.error('Erro ao adicionar a nota:', response.status);
            }
        } catch (error) {
            console.error('Erro ao adicionar a nota:', error);
        }
    };

    const handleDeleteNote = async (id) => {
        try {
            const response = await fetch(`/api/notes/${id}`, {
                method: 'DELETE',
            }); // Substitua '/api/notes' pela URL real do seu backend.

            if (response.ok) {
                const updatedNotes = notes.filter((note) => note.id !== id);
                setNotes(updatedNotes);
            } else {
                console.error('Erro ao excluir a nota:', response.status);
            }
        } catch (error) {
            console.error('Erro ao excluir a nota:', error);
        }
    };

    return (
        <div className="NotePage">
            <h1>Notas</h1>
            <div className="note-container">
                <input
                    type="text"
                    placeholder="Adicionar uma nota..."
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                />
                <button onClick={handleAddNote}>Adicionar</button>
            </div>
            <div className="notes">
                {notes.map((note) => (
                    <div className="note" key={note.id}>
                        <p>{note.text}</p>
                        <div className="note-actions">
                            <button onClick={() => handleDeleteNote(note.id)}>
                                <FiTrash2 />
                            </button>
                            <button>
                                <FiEdit3 />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NotePage;
