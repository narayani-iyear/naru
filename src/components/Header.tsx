import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}
    >
      <Toolbar>
        <nav>
          <Link
            href="/"
            underline="none"
            sx={{ marginRight: 2, color: "black" }}
          >
            Home
          </Link>
        </nav>
        <Typography sx={{ flexGrow: 1, fontSize: "20px" }}></Typography>
        <nav>
          <Link
            href="/about"
            underline="none"
            sx={{ marginRight: 2, color: "black" }}
          >
            About
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
