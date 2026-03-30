import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import EventAvailableTwoToneIcon from "@mui/icons-material/EventAvailableTwoTone";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
    { name: "About Us", path: "/about" },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        sx={{ background: "background.default" }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <EventAvailableTwoToneIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                fontSize: "2rem",
                color: "primary.main",
                filter: "drop-shadow(0px 0px 4px rgba(59, 130, 246, 0.5))",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                fontSize: "1.7rem",
                letterSpacing: ".1rem",
                textDecoration: "none",
                background: "linear-gradient(45deg, #111827, #3b82f6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              EventFlow
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {navItems.map((page) => (
                  <MenuItem
                    key={page.name}
                    component={Link}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                    sx={{ width: "150px" }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontWeight: 600,
                        my: 0.5,
                        fontSize: "16px",
                      }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
                <Divider></Divider>
                <Stack
                  spacing={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px 15px",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "capitalize",
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontSize: "16px",
                    }}
                  >
                    {" "}
                    Log In
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontSize: "16px",
                    }}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </Menu>
            </Box>
            <EventAvailableTwoToneIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                fontSize: "1.5rem",
                color: "var(--primary-color)",
                filter: "drop-shadow(0px 0px 4px rgba(59, 130, 246, 0.5))",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontSize: "1.5rem",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
                background: "linear-gradient(45deg, #111827, #3b82f6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                width: "fit-content",
              }}
            >
              EventFlow
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {navItems.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    padding: "7px 14px",
                    textTransform: "capitalize",
                    // position: "relative",
                    // "&::after": {
                    //   content: '""',
                    //   position: "absolute",
                    //   width: 0,
                    //   height: "2px",
                    //   bottom: "2px",
                    //   left: "50%",
                    //   transform: "translateX(-50%)",
                    //   backgroundColor: "#3b82f6", // Underline ka color
                    //   transition: "0.3s ease-in-out",
                    // },
                    ":hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                      transition: "width 0.4s ease-in-out",
                    },
                    // "&:hover::after": {
                    //   width: "70%", // Hover karne par underline 70% tak phail jayegi
                    // },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <Stack
              spacing={2}
              direction="row"
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Log In
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Sign Up
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
