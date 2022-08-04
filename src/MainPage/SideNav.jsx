import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { Link } from "react-scroll";

const SideNav = () => {
  return (
    <>
      <div
        className="icons"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "5px 0",
        }}
      >
        <section className="side-nav-logo"></section>
        <Link to="header" smooth={true} offset={0} duration={500}>
          <IconButton sx={{ color: "#bdbdbd" }}>
            <HomeIcon fontSize="large" />
          </IconButton>
        </Link>

        <Link to="search" smooth={true} offset={0} duration={500}>
          <IconButton sx={{ color: "#bdbdbd", mt: "1rem" }}>
            <SearchIcon fontSize="large" />
          </IconButton>
        </Link>
      </div>
    </>
  );
};

export default SideNav;
