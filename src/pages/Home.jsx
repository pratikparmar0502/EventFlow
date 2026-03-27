import { Box, Chip, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import heroImg from "../assets/images/hero_img.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";

const Home = () => {
  const chipEvents = [
    "All",
    "Tech",
    "Music",
    "Sports",
    "Food",
    "Gaming",
    "Networking",
  ];
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
            Find and book the best experience near you - concerts, conferneces,
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
              <InputBase placeholder="Search here..." sx={{ flex: 1, ml: 2 }} />
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
            {chipEvents.map((item) => (
              <Chip
                label={item}
                variant="outlined"
                sx={{
                  backgroundColor: "background.default",
                  fontSize: "1rem",
                  fontWeight: "600",
                  padding: "18px 10px",
                  borderRadius: "50px",
                  flexShrink: 0,
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              ></Chip>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Home;
