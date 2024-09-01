import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt, faTrain, faBuilding, faShieldAlt, faUtensils, faSuitcase, faBriefcaseMedical, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
        padding: "10px 20px",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ isSidebar }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        width: isCollapsed ? "80px" : "250px", // Adjust width based on collapse state
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        background: colors.primary[400],
        overflowY: "auto",
        transition: "width 0.3s", // Smooth transition for collapsing
        zIndex: 100,
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Dashboard
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px" textAlign="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/user.png`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                XYZ
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                Chief Railway Minister
              </Typography>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Stats"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Departments
            </Typography>
            <Item
              title="Ticketing Issues"
              to="/departments/ticketing-issues"
              icon={<FontAwesomeIcon icon={faTicketAlt} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Train Services"
              to="/departments/train-services"
              icon={<FontAwesomeIcon icon={faTrain} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Station Facilities"
              to="/departments/station-facilities"
              icon={<FontAwesomeIcon icon={faBuilding} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Security"
              to="/departments/security"
              icon={<FontAwesomeIcon icon={faShieldAlt} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Catering Services"
              to="/departments/catering-services"
              icon={<FontAwesomeIcon icon={faUtensils} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Luggage & Lost Property"
              to="/departments/luggage-and-lost-property"
              icon={<FontAwesomeIcon icon={faSuitcase} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Medical Assistance"
              to="/departments/medical-assistance"
              icon={<FontAwesomeIcon icon={faBriefcaseMedical} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Miscellaneous"
              to="/departments/miscellaneous"
              icon={<FontAwesomeIcon icon={faEllipsisH} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Page"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
