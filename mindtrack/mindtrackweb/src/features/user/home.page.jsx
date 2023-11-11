import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

//components
import SwipeDrawer from "../../components/baselayout/swipe.drawer";
import NotePage from "../note/create.note.page";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();
// import Archives from "./archives/Archives";
// import DeleteNotes from "./delete/DeleteNotes";

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box style={{ display: "flex", width: "100%" }}>
        <SwipeDrawer />
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
