import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Send,
} from "@mui/icons-material";
import EventAvailableTwoToneIcon from "@mui/icons-material/EventAvailableTwoTone";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  Link,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";

const Footer = () => {
  const platformLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms", path: "/terms" },
    { name: "Blog", path: "/blog" },
  ];

  const socialLinks = [
    { icon: <Instagram />, label: "Instagram" },
    { icon: <Facebook />, label: "Facebook" },
    { icon: <LinkedIn />, label: "LinkedIn" },
    { icon: <Twitter />, label: "Twitter" },
  ];

  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#111827", color: "#fff", mt: 8, pt: 8, pb: 4 }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          sx={{ justifyContent: "space-between", px: 2, mb: 4 }}
        >
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EventAvailableTwoToneIcon
                sx={{ mr: 1, fontSize: "2.5rem", color: "primary.main" }}
              />
              <Typography
                variant="h5"
                component={RouterLink}
                to="/"
                sx={{
                  textDecoration: "none",
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  background: "linear-gradient(45deg, #467cf1, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                EventFlow
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              sx={{ mt: 2, color: "#B0B0B0", maxWidth: "320px" }}
            >
              Discover unforgettable experiences near you. Stay updated with the
              latest events and tech conferences.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Platform
            </Typography>
            <Stack spacing={1.5}>
              {platformLinks.map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    textDecoration: "none",
                    color: "#B0B0B0",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Company Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Company
            </Typography>
            <Stack spacing={1.5}>
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    textDecoration: "none",
                    color: "#B0B0B0",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Newsletter & Social Section (Yeh Section Space Bharega) */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              About Us
            </Typography>

            <Box sx={{ display: "flex", gap: 1.5, mb: 3 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  aria-label={social.label}
                  sx={{
                    color: "#B0B0B0",
                    bgcolor: "#1f2937",
                    "&:hover": {
                      color: "#fff",
                      bgcolor: "primary.main",
                      transform: "translateY(-3px)",
                    },
                    transition: "0.3s",
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>

            <Typography variant="body2" sx={{ color: "#B0B0B0", mb: 2 }}>
              Get the latest updates and offers directly in your inbox.
            </Typography>

            {/* Newsletter Input Box */}
            <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter your email"
                variant="outlined"
                sx={{
                  bgcolor: "#1f2937",
                  borderRadius: "4px",
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    "& fieldset": { borderColor: "#374151" },
                    "&:hover fieldset": { borderColor: "primary.main" },
                  },
                }}
              />
              <Button variant="contained" sx={{ px: 3, fontWeight: "bold" }}>
                Join
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{ textAlign: "center", borderTop: "1px solid #1f2937", pt: 4 }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#9aa0ad", fontSize: "1rem" }}
          >
            © {new Date().getFullYear()} EventFlow. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
