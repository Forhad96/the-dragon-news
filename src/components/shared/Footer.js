"use client";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    {
      route: "Home",
      path: "/",
    },
    {
      route: "Category",
      path: "/category",
    },
    {
      route: "News",
      path: "/news",
    },
    {
      route: "About",
      path: "/",
    },
    {
      route: "Contact",
      path: "/",
    },
  ];
  return (
    <Box className="bg-black px-0 py-10">
      <Container>
        <Box
          textAlign="center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <Facebook></Facebook>
          </IconButton>
          <IconButton>
            <Twitter></Twitter>
          </IconButton>
          <IconButton>
            <LinkedIn></LinkedIn>
          </IconButton>
          <IconButton>
            <Instagram></Instagram>
          </IconButton>
        </Box>
        <Box className="w-full mx-auto text-center">
          {navItems.map((item,idx) => (
            <Link href={item.path} key={idx}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography textAlign='center' variant="body2" color='gray'>
            @2024 The Dragon new Design PH
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;
