import React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { ChevronLeft, RocketLaunch } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "assets/profile.png";
import { ReactComponent as HomeIcon } from "assets/SidebarIcon/home.svg";
import { ReactComponent as FileIcon } from "assets/SidebarIcon/file.svg";
import { ReactComponent as SaveIcon } from "assets/SidebarIcon/saved.svg";
import { ReactComponent as IntegrationIcon } from "assets/SidebarIcon/share.svg";
import { ReactComponent as TrashIcon } from "assets/SidebarIcon/bin.svg";
import { ReactComponent as SettingIcon } from "assets/SidebarIcon/settings.svg";
import { ReactComponent as HelpIcon } from "assets/SidebarIcon/question-circle.svg";
import { ToastContainer } from "react-toastify";
const navItems = [
  {
    text: "Home",
    icon: <HomeIcon />,
  },
  {
    text: "All Files",
    icon: <FileIcon />,
  },
  {
    text: "Saved",
    icon: <SaveIcon />,
  },
  {
    text: "Integrations",
    icon: <IntegrationIcon />,
  },
  {
    text: "Trash",
    icon: <TrashIcon />,
  },

  {
    text: "Settings",
    icon: <SettingIcon />,
  },

  {
    text: "Help and Support",
    icon: <HelpIcon />,
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    const currPath = pathname
      .substring(1)
      .replace("%20", " ")
      .replace("%20", " ");
    console.log(currPath);
    setActive(currPath);
  }, [pathname]);

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
      }}
      component="nav"
    >
      <ToastContainer />
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.main,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.primary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    TRANSCRIBIFY
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>

            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem
                    key={text}
                    sx={{
                      width: "100%",
                    }}
                    disablePadding
                  >
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        borderRadius: "0.25rem",
                        marginBottom: "1rem",
                        width: "100%", // Set the width to 80%
                        marginLeft: "2rem", // Add left margin of 10%
                        marginRight: "2rem", // Add right margin of 10%
                        "&:hover": {
                          backgroundColor: theme.palette.secondary[300],
                        },

                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.grey[800]
                            : theme.palette.grey[800],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: "35px",
                          color:
                            active === lcText
                              ? theme.palette.grey[800]
                              : theme.palette.grey[800],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <Typography
                        sx={{
                          fontWeight: "500",
                        }}
                      >
                        {text}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box position="absolute" bottom="2rem">
            <Box
              sx={{
                position: "relative",
                left: "10px",
                width: "224px",
                height: "180px",
                backgroundColor: "#E0EDFF",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
                borderRadius: "8px",
              }}
            >
              <Typography>
                <RocketLaunch
                  sx={{
                    color: "#0048AD",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Typography>
              <Typography
                sx={{
                  color: "black",
                }}
                variant="h6"
              >
                Upgrade Account
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                }}
                variant="body2"
              >
                {" "}
                Access to Unlimited Transcription
              </Typography>
              <Button
                sx={{
                  width: "192px",
                  height: "47px",
                  borderRadius: "6px",
                  backgroundColor: "#0048AD",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#0048AD",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "22.3px",
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  Upgrade
                </Typography>
              </Button>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
