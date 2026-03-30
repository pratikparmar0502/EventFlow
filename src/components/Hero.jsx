import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import heroImg from "../assets/images/hero_img.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PublicIcon from "@mui/icons-material/Public";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AppsIcon from "@mui/icons-material/Apps";
import PaletteIcon from "@mui/icons-material/Palette";
import { useState } from "react";

const categoryChips = [
  {
    label: "All",
    icon: <AppsIcon />,
    bgColor: "rgba(255, 255, 255, 0.4)",
    color: "white",
  },
  {
    label: "Tech",
    icon: <GridViewIcon />,
    bgColor: "#3b82f6",
    color: "white",
  },
  {
    label: "Music",
    icon: <MusicNoteIcon />,
    bgColor: "#f97316",
    color: "white",
  },
  {
    label: "Sports",
    icon: <PublicIcon />,
    bgColor: "#1e3a8a",
    color: "white",
  },
  {
    label: "Food",
    icon: <RestaurantIcon />,
    bgColor: "#10b981",
    color: "white",
  },
  {
    label: "Art",
    icon: <PaletteIcon />,
    bgColor: "#ef4444",
    color: "white",
  },
  {
    label: "Gaming",
    icon: <SportsEsportsIcon />,
    bgColor: "#8b5cf6",
    color: "white",
  },
];

const Hero = () => {
  const [toggleChip, setToggleChip] = useState("All");

  return (
    <>
      <Box
        sx={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "80vh",
          position: "relative",
          color: "background.default",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.7rem", sm: "3rem", md: "4rem", lg: "4.5rem" },
              textAlign: "center",
              padding: "10px 15px",
              fontWeight: "700",
            }}
          >
            Discover Unforgettable Events
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#D2D2D2",
              textAlign: "center",
              fontWeight: "400",
              padding: "5px 15px",
              width: { xs: "80%", md: "800px" },
              m: "0px auto",
              p: "0px 15px",
              fontSize: { xs: "1.1rem", md: "1.2rem" },
            }}
          >
            Find and book the best experience near you - concerts, conferences,
            games and more.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: "0px 15px",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "50px",
                padding: "10px 20px",
                width: { xs: "90%", md: "650px" },
                margin: "20px auto",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(8px)",
                boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
              }}
            >
              <SearchIcon sx={{ color: "primary.main" }} />
              <InputBase
                placeholder="Search here..."
                sx={{ flex: 1, ml: 2, fontWeight: 600, fontSize: "1.2rem" }}
              />
            </Paper>
          </Box>

          <Stack
            spacing={2}
            direction="row"
            justifyContent={"center"}
            sx={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              paddingY: 1,
              paddingX: 2,
              width: "100%",
              maxWidth: "100vw",
              justifyContent: { xs: "flex-start", md: "center" },
              "&::-webkit-scrollbar": { display: "none" },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {categoryChips.map((item) => (
              <Chip
                onClick={() => setToggleChip(item.label)}
                key={item.label}
                label={item.label}
                icon={item.icon}
                variant="outlined"
                sx={{
                  backgroundColor:
                    toggleChip === item.label
                      ? `${item.bgColor} !important`
                      : "rgba(255, 255, 255, 0.1)",
                  color: "#F5F5F5",
                  fontSize: "1rem",
                  fontWeight: "600",
                  padding: "20px 10px",
                  borderRadius: "12px",
                  flexShrink: 0,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  backdropFilter: "blur(4px)",
                  "&:hover": {
                    backgroundColor: ` ${item.bgColor} !important`,
                    transform: "scale(1.05)",
                    opacity: 1,
                  },
                  "& .MuiChip-icon": {
                    color: "inherit",
                  },
                  userSelect: "none",
                }}
              ></Chip>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
