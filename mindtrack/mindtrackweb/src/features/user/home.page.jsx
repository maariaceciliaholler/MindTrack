import { Box } from "@mui/material";
import SwipeDrawer from "../../components/baselayout/swipe.drawer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { useState } from "react";

const theme = createTheme();

const HomePage = () => {
  const { userId } = useParams();
  const [userState, setUserId] = useState(userId);

  return (
    <ThemeProvider theme={theme}>
      <Box style={{ display: "flex", width: "100%" }}>
        <SwipeDrawer userId={userId} setUserId={setUserId} />
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
