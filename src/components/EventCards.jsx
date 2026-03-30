import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import card_1 from "../assets/images/card-1.jpg";
import card_2 from "../assets/images/card-2.jpg";
import card_3 from "../assets/images/card-3.jpg";
import card_4 from "../assets/images/card-4.jpg";
import card_5 from "../assets/images/card-5.jpg";
import card_6 from "../assets/images/card-6.jpg";

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
        <Typography>Trending Events</Typography>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: "center", alignItems: "center" }}
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
                }}
              >
                <Chip
                  label={item.category}
                  bgcolor={item.bgColor}
                  sx={{
                    position: "absolute",
                    bgcolor: "#F5F5F5",
                    borderRadius: 2,
                    p: "5px 5px",
                    top: 16,
                    left: 16,
                    fontWeight: 700,
                  }}
                />

                <CardMedia
                  sx={{ height: 240, width: 340, objectFit: "cover" }}
                  image={item.image}
                  title={item.title}
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.description}
                  </Typography>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold" }}
                      size="small"
                      color="primary"
                    >
                      {item.price}
                    </Typography>
                    <Typography size="small">{item.location}</Typography>
                    <Typography size="small">{item.date}</Typography>
                  </Box>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <Divider sx={{ my: 1 }} />

                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderRadius: 5,
                      ml: 1,
                      p: "7px 18px",
                    }}
                  >
                    Details
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    sx={{
                      borderRadius: 5,
                      ml: 1,
                      p: "7px 18px",
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
