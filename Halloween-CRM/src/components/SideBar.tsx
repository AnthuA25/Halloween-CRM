import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TaskIcon from "@mui/icons-material/Task";
import {
  List,
  ListItemText,
  Drawer,
  Toolbar,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

const Sidebar: React.FC = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0}}>
      <Toolbar
        sx={{
          backgroundColor: "#49545D",
        }}
      />
      <List
        sx={{
          width: 240,
          height: "100%",
          backgroundColor: "#49545D",
          color: "white",
        }}
      >
        <ListItemButton
          component="a"
          href="/panel"
          sx={{ "&:hover": { backgroundColor: "#467E91" },marginBottom: "10px"}}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Panel" />
        </ListItemButton>

        <ListItemButton
          component="a"
          href="/colaboradores"
          sx={{ "&:hover": { backgroundColor: "#467E91" } ,marginBottom: "10px"}}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText primary="Colaboradores" />
        </ListItemButton>
        <ListItemButton
          component="a"
          href="/participantes"
          sx={{ "&:hover": { backgroundColor: "#467E91" },marginBottom: "10px" }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <ConfirmationNumberIcon />
          </ListItemIcon>
          <ListItemText primary="Participantes" />
        </ListItemButton>
        <ListItemButton
          component="a"
          href="/oportunidades"
          sx={{ "&:hover": { backgroundColor: "#467E91" } ,marginBottom: "10px"}}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Oportunidades" />
        </ListItemButton>
        <ListItemButton
          component="a"
          href="/tareas"
          sx={{ "&:hover": { backgroundColor: "#467E91" } ,marginBottom: "10px"}}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <TaskIcon />
          </ListItemIcon>
          <ListItemText primary="Tareas" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
