import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Menu, AccountCircle } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutModal from "../modal/logout.modal";

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 24px;
  margin-left: 25px;
  flex-grow: 1; /* Isso faz com que o Heading ocupe o espaço restante no Toolbar */
`;

const HeaderBar = ({ open, handleDrawer }) => {
  const logo = "https://cdn-icons-png.flaticon.com/512/4630/4630794.png";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogoutAndRedirect = () => {
    navigate("/login");
    handleCloseModal();
  };

  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: "20px" }}
          edge="start"
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="logo" style={{ width: 30 }} />
        <Heading>MindTrack</Heading>
        <IconButton
          color="primary"
          edge="end"
          size="large"
          onClick={handleOpenModal}
        >
          <AccountCircle />
        </IconButton>
        <LogoutModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onLogout={handleLogoutAndRedirect}
        />
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;
