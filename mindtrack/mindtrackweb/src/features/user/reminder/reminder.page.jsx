import { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import SwipeDrawer from "../../../components/baselayout/swipe.drawer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const theme = createTheme();

function ReminderPage() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState("");
  const { userId } = useParams();

  useEffect(() => {
    fetchReminders();
  }, []);

  const fetchReminders = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/reminder/user/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        const filteredReminders = data.filter(
          (reminder) => reminder.status === "Criada"
        );
        setReminders(filteredReminders);
      } else {
        console.error("Erro ao buscar os Lembretes:", response.status);
      }
    } catch (error) {
      console.error("Erro ao buscar os Lembretes:", error);
    }
  };

  const handleAddReminder = async () => {
    try {
      const currentDate = new Date();
      const reminderData = {
        content: newReminder,
        date: currentDate.toISOString(),
        userId: userId,
        status: "Criada",
      };

      const response = await fetch("http://localhost:8080/api/reminder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reminderData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setReminders([...reminders, data]);
        setNewReminder("");
        toast.success("Lembrete inserido com sucesso!", {
          position: "bottom-right",
        });
      } else {
        toast.error(
          "Ocorreu um erro ao criar seus Lembretes, tente novamente!",
          {
            position: "bottom-right",
          }
        );
      }
    } catch (error) {
      toast.error(
        "Ocorreu um erro ao criar seus Lembretes, tente novamente!" + error,
        {
          position: "bottom-right",
        }
      );
    }
  };

  async function handleDeleteReminder(reminderId) {
    try {
      const newStatus = "Lixeira";

      const response = await fetch(
        `http://localhost:8080/api/reminder/status/${reminderId}?status=${newStatus}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success("Lembrete movido para lixeira com sucesso!", {
          position: "bottom-right",
        });
        window.location.reload();
      } else {
        toast.error(
          "Ocorreu um erro ao mover seu Lembrete para a lixeira, tente novamente!",
          {
            position: "bottom-right",
          }
        );
      }
    } catch (error) {
      toast.error(
        "Ocorreu um erro ao mover seu Lembrete para a lixeira, tente novamente!" +
          error,
        {
          position: "bottom-right",
        }
      );
    }
  }

  async function handleEditReminder(reminderId, newContent) {
    try {
      const response = await fetch(
        `http://localhost:8080/api/reminder/content/${reminderId}?content=${newContent}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success("Lembrete editado com sucesso!", {
          position: "bottom-right",
        });
        window.location.reload();
      } else {
        toast.error("Ocorreu um erro ao editar o Lembrete, tente novamente!", {
          position: "bottom-right",
        });
      }
    } catch (error) {
      toast.error(
        "Ocorreu um erro ao editar o Lembrete, tente novamente!" + error,
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
            Lembretes
          </Typography>
        </Box>
        <Box sx={{ width: "100%", maxWidth: 400, mb: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            label="Adicionar um Lembrete..."
            value={newReminder}
            onChange={(e) => setNewReminder(e.target.value)}
          />
        </Box>
        <Button variant="contained" onClick={handleAddReminder}>
          Adicionar
        </Button>
        <Box sx={{ mt: 3, width: "100%", maxWidth: 400 }}>
          {reminders.map((reminder) => (
            <Box
              key={reminder.id}
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
              <Typography>{reminder.content}</Typography>
              <Box>
                <Button onClick={() => handleDeleteReminder(reminder.id)}>
                  <FiTrash2 />
                </Button>
                <Button
                  onClick={() =>
                    handleEditReminder(reminder.id, prompt("Novo conteúdo:"))
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

export default ReminderPage;
