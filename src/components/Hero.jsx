import { Box, Chip, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import heroImg from "../assets/images/hero_img.jpg";
import SearchIcon from "@mui/icons-material/Search";

const Hero = () => {
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
          color: "#F5F5F5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ zIndex: 1, fontFamily: "var(--primary-font)" }}>
          <Box
            sx={{
              fontFamily: "var(--primary-font)",
              fontSize: { xs: "2.7rem", sm: "3rem", md: "4rem", lg: "4.5rem" },
              textAlign: "center",
              padding: "10px 15px",
              fontWeight: "700",
            }}
          >
            Discover Unforgettable Events
          </Box>
          <Box
            sx={{
              fontFamily: "var(--primary-font)",
              color: "#D2D2D2",
              textAlign: "center",
              fontWeight: "400",
              padding: "5px 15px",
              //   width: { xs: "100%", md: "800px" },
              fontSize: { xs: "1.1rem", md: "1.2rem" },
            }}
          >
            Find and book the best experience near you - concerts, conferneces,
            games and more.
          </Box>
          {/* <Box> */}
          {/* <SearchIcon></SearchIcon> */}
          {/* <TextField
            {...params}
            label="Search input"
            slotProps={{
              input: {
                ...params.InputProps,
                type: "search",
              },
            }}
          /> */}
          {/* </Box> */}
          {/* <Stack spacing={2} direction="row" justifyContent={"center"}>
            {chipEvents.map((item) => (
              <Chip
                label={item}
                variant="outlined"
                sx={{
                  backgroundColor: "#F5F5F5",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  padding: "18px 10px",
                  borderRadius: "50px",
                  fontFamily: "var(--primary-font)",
                }}
              ></Chip>
            ))}
          </Stack> */}
        </Box>
      </Box>
    </>
  );
};

export default Hero;
