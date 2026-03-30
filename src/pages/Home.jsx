import { Box } from "@mui/material";
import Hero from "../components/Hero";
import React from "react";
import EventCards from "../components/EventCards";

const Home = () => {
  return (
    <>
      <Box>
        <Hero />
        <EventCards />
      </Box>
    </>
  );
};

export default Home;
