import { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import SwipeDrawer from "../../../components/baselayout/swipe.drawer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const theme = createTheme();

function NotePage() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const { userId } = useParams();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/note/user/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        const filteredNotes = data.filter((note) => note.status === "Criada");
        setNotes(filteredNotes);
      } else {
        console.error("Erro ao buscar as notas:", response.status);
      }
    } catch (error) {
      console.error("Erro ao buscar as notas:", error);
    }
  };

  const handleAddNote = async () => {
    try {
      const currentDate = new Date();
      const noteData = {
        title: "",
        content: newNote,
        date: currentDate.toISOString(),
        userId: userId,
        status: "Criada",
      };

      const response = await fetch("http://localhost:8080/api/note", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setNotes([...notes, data]);
        setNewNote("");
        toast.success("Nota inserida com sucesso!", {
          position: "bottom-right",
        });
      } else {
        toast.error(
          "Ocorreu um erro ao criar as suas Notas, tente novamente!",
          {
            position: "bottom-right",
          }
        );
      }
    } catch (error) {
      toast.error(
        "Ocorreu um erro ao criar as suas Notas, tente novamente!" + error,
        {
          position: "bottom-right",
        }
      );
    }
  };

  async function handleDeleteNote(noteId) {
    try {
      const novoStatus = "Lixeira";

      const response = await fetch(
        `http://localhost:8080/api/note/status/${noteId}?status=${novoStatus}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success("Nota movida para lixeira com sucesso!", {
          position: "bottom-right",
        });
        window.location.reload();
      } else {
        toast.error(
          "Ocorreu um erro ao mover sua nota para a lixeira, tente novamente!",
          {
            position: "bottom-right",
          }
        );
      }
    } catch (error) {
      toast.error(
        "Ocorreu um erro ao mover sua nota para a lixeira, tente novamente!" +
          error,
        {
          position: "bottom-right",
        }
      );
    }
  }

  async function handleEditNote(noteId, newContent) {
    try {
      const response = await fetch(
        `http://localhost:8080/api/note/content/${noteId}?content=${newContent}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success("Nota editada com sucesso!", {
          position: "bottom-right",
        });
        window.location.reload();
      } else {
        toast.error("Ocorreu um erro ao editar a nota, tente novamente!", {
          position: "bottom-right",
        });
      }
    } catch (error) {
      toast.error(
        "Ocorreu um erro ao editar a nota, tente novamente!" + error,
        {
          position: "bottom-right",
        }
      );
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Notas
          </Typography>
        </Box>
        <Box sx={{ width: "100%", maxWidth: 400, mb: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            label="Adicionar uma nota..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
        </Box>
        <Button variant="contained" onClick={handleAddNote}>
          Adicionar
        </Button>
        <Box sx={{ mt: 3, width: "100%", maxWidth: 400 }}>
          {notes.map((note) => (
            <Box
              key={note.id}
              sx={{
                border: 1,
                borderColor: "grey.300",
                borderRadius: 2,
                p: 2,
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>{note.content}</Typography>
              <Box>
                <Button onClick={() => handleDeleteNote(note.id)}>
                  <FiTrash2 />
                </Button>
                <Button
                  onClick={() =>
                    handleEditNote(note.id, prompt("Novo conteúdo:"))
                  }
                >
                  <FiEdit3 />
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
        <SwipeDrawer />
      </Box>
    </ThemeProvider>
  );
}

export default NotePage;
