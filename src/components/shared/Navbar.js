"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { IconButton, Stack } from "@mui/material";
//icons
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Header from "./Header";
const navItems = [
  {
    route: "Home",
    path: "/",
  },
  {
    route: "Category",
    path: "/categories/news",
  },
  {
    route: "News",
    path: "/news",
  },
  {
    route: "About",
    path: "/about",
  },
  {
    route: "Contact",
    path: "/about",
  },
];

function Navbar() {
  return (
    <>
    <Header/>
      <AppBar position="static" className="bg-black">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image width={100} height={100} src={logo} alt="logo" />
            <Box className="w-full mx-auto text-center">
              {navItems.map((item,idx) => (
                <Link href={item.path} key={idx}>
                  <Button className="text-white">{item.route}</Button>
                </Link>
              ))}
            </Box>

            <Box>
              <Stack
                direction="row"
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
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
