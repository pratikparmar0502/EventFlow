import { Box } from "@mui/material";
import React from "react";
import heroImg from "../assets/images/hero_img.jpg";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "80vh",
        }}
      >
        <Box sx={{ color: "white" }}></Box>
      </Box>
    </>
  );
};

export default Hero;
