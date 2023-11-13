import { useState, useEffect } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { Box, Button, Typography } from "@mui/material";
import SwipeDrawer from "../../../components/baselayout/swipe.drawer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";

const theme = createTheme();

function TrashPage() {
  const [content, setContent] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
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
        const filteredcontent = data.filter(
          (reminder) => reminder.status === "Lixeira"
        );
        setContent(filteredcontent);
      } else {
        console.error("Erro ao buscar os itens da Lixeira:", response.status);
      }
    } catch (error) {
      console.error("Erro ao buscar os itens da Lixeira:", error);
    }
  };

  async function handleDelete(id) {
    //TODO
  }

  async function handleEdit(id) {
    //TODO
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
            Lixeira
          </Typography>
        </Box>
        <Box sx={{ mt: 3, width: "100%", maxWidth: 400 }}>
          {content.map((reminder) => (
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
                <Button onClick={() => handleDelete(reminder.id)}>
                  <FiTrash2 />
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

export default TrashPage;
