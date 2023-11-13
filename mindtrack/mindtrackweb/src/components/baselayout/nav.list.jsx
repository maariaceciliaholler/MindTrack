import { useEffect, useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  LightbulbOutlined as Lightbulb,
  AccessAlarmOutlined as Reminder,
  PlaylistAddCheckOutlined as PlaylistAddCheck,
  LocalOfferOutlined as LocalOffer,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const obterUserIdDaRota = (pathname) => {
  // Implemente sua lógica para extrair o userId da rota aqui
  // Este é apenas um exemplo simples, você pode precisar de uma lógica mais complexa
  const match = pathname.match(/\/user\/(\d+)/);
  return match ? match[1] : null;
};

const NavList = ({ userId, setUserId }) => {
  //CONTINUE
  // const location = useLocation();

  // useEffect(() => {
  //   console.log("Current Location:", location.pathname);
  //   const newUserId = obterUserIdDaRota(location.pathname);
  //   console.log("New UserId:", newUserId);

  //   if (newUserId == null) {
  //     console.log("Updating UserId...");
  //     setUserId(userId);
  //   }
  // }, [location.pathname, userId, setUserId]);

  const navList = [
    { id: 1, name: "Notas", icon: <Lightbulb />, route: `/note/${userId}` },
    {
      id: 2,
      name: "Lembretes",
      icon: <Reminder />,
      route: `/reminder/${userId}`,
    },
    {
      id: 3,
      name: "Listas de Tarefas",
      icon: <PlaylistAddCheck />,
      route: `/tracklist/${userId}`,
    },
    {
      id: 4,
      name: "Etiquetas",
      icon: <LocalOffer />,
      route: `/label/${userId}`,
    },
    { id: 6, name: "Lixeira", icon: <Delete />, route: `/trash/${userId}` },
  ];

  return (
    <List>
      {navList.map((list) => (
        <ListItem button key={list.id}>
          <Link
            to={`${list.route}`}
            style={{
              textDecoration: "none",
              display: "flex",
              color: "inherit",
            }}
          >
            <ListItemIcon style={{ alignItems: "center" }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state) => ({
  userId: state.user.userId,
});

export default connect(mapStateToProps)(NavList);
