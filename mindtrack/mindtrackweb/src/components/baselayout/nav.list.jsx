import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  LightbulbOutlined as Lightbulb,
  AccessAlarmOutlined as Reminder,
  PlaylistAddCheckOutlined as PlaylistAddCheck,
  LocalOfferOutlined as LocalOffer,
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavList = () => {
  const navList = [
    { id: 1, name: "Notas", icon: <Lightbulb />, route: "/" },
    { id: 2, name: "Lembretes", icon: <Reminder />, route: "/" },
    {
      id: 3,
      name: "Listas de Tarefas",
      icon: <PlaylistAddCheck />,
      route: "/",
    },
    { id: 4, name: "Etiquetas", icon: <LocalOffer />, route: "/" },
    { id: 6, name: "Lixeira", icon: <Delete />, route: "/delete" },
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

export default NavList;
