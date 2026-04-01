import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import card_1 from "../assets/images/card-1.jpg";
import card_2 from "../assets/images/card-2.jpg";
import card_3 from "../assets/images/card-3.jpg";
import card_4 from "../assets/images/card-4.jpg";
import card_5 from "../assets/images/card-5.jpg";
import card_6 from "../assets/images/card-6.jpg";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const eventData = [
  {
    id: 1,
    image: card_2,
    title: "AI & Future Tech Summit 2026",
    category: "Tech",
    bgColor: "#3b82f6",
    date: "Apr 12, 2026",
    location: "San Francisco, CA",
    price: "$149",
    description:
      "Explore the next generation of artificial intelligence and robotics with industry leaders.",
  },
  {
    id: 2,
    image: card_3,
    title: "Sunset Music Festival",
    category: "Music",
    bgColor: "#f97316",
    date: "May 3, 2026",
    location: "Austin, TX",
    price: "$89",
    description:
      "Experience an evening of live performances from top global artists under the open sky.",
  },
  {
    id: 3,
    image: card_5,
    title: "NBA Playoffs — Game 5",
    category: "Sports",
    bgColor: "#1e3a8a",
    date: "Apr 28, 2026",
    location: "Los Angeles, CA",
    price: "$210",
    description:
      "Witness the intense energy of professional basketball as top teams compete for the title.",
  },
  {
    id: 4,
    image: card_1,
    title: "Contemporary Art Exhibition",
    category: "Art",
    bgColor: "#ef4444",
    date: "Mar 30, 2026",
    location: "New York, NY",
    price: "$35",
    description:
      "Discover thought-provoking masterpieces from modern artists across the globe. ",
  },
  {
    id: 5,
    image: card_4,
    title: "Street Food World Tour",
    category: "Food",
    bgColor: "#10b981",
    date: "Jun 7, 2026",
    location: "Chicago, IL",
    price: "$25",
    description:
      "Taste authentic flavors from five different continents in one massive outdoor market.",
  },
  {
    id: 6,
    image: card_6,
    title: "E-Sports Championship 2026",
    category: "Gaming",
    bgColor: "#8b5cf6",
    date: "May 20, 2026",
    location: "Las Vegas, NV",
    price: "$120",
    description:
      "Join the ultimate battle of top-tier gamers in a high-stakes tournament.",
  },
];

const EventCards = () => {
  return (
    <>
      <Container sx={{ my: 8, px: 2 }} maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            letterSpacing: "0.7px",
            fontSize: {
              xs: "2.5rem",
              sm: "3rem",
              md: "3.5rem",
            },
            textAlign: "center",
            py: 2,
            background: "linear-gradient(45deg, #111827, #3b82f6)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Trending Events
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: "center", alignItems: "center", py: 8 }}
        >
          {eventData.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                sx={{
                  maxWidth: 340,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  boxShadow: 3,
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-7px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Chip
                  label={item.category}
                  sx={{
                    zIndex: 1,
                    position: "absolute",
                    bgcolor: item.bgColor,
                    color: "#F5F5F5",
                    borderRadius: 2,
                    px: 1.5,
                    py: 0.5,
                    top: 16,
                    left: 16,
                    fontWeight: 700,
                  }}
                />

                <CardMedia
                  component="img"
                  sx={{
                    height: 240,
                    width: "100%",
                    objectFit: "cover",
                    overflow: "hidden",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                  image={item.image}
                  alt={item.title}
                />
                <CardContent
                  sx={{ flexGrow: 1, px: 2.5, py: 2, overflow: "hidden" }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.2rem",
                      cursor: "pointer",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#6b7280",
                      my: 1,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          pt: "5px",
                        }}
                      >
                        <DateRangeIcon sx={{ color: "primary.main" }} />
                        <Typography size="small" sx={{ color: "#6b7280" }}>
                          {item.date}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          pt: "5px",
                        }}
                      >
                        <LocationOnIcon sx={{ color: "primary.main" }} />
                        <Typography size="small" sx={{ color: "#6b7280" }}>
                          {item.location}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.6rem",
                        px: 2,
                        color: "primary.main",
                      }}
                      size="small"
                    >
                      {item.price}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                    gap: 1,
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderRadius: 3,
                      p: "10px 18px",
                      color: "primary.main",
                      borderColor: "primary.main",
                      width: "100%",
                      transition: "all 0.4s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                        backgroundColor: "primary.main",
                        color: "#fff",
                      },
                    }}
                  >
                    Details
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    sx={{
                      borderRadius: 3,
                      p: "10px 18px",
                      width: "100%",
                      backgroundColor: "primary.main",
                      transition: "all 0.4s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    Book Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default EventCards;
