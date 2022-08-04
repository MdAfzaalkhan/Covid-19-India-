import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import SideLogo from "../Images/coronavirus-5107715_640.png"

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
        }}
      >
        <section className="side-nav-logo">
            
        </section>  
        <IconButton sx={{color:"#bdbdbd"}}>
          <HomeIcon fontSize="large" />
        </IconButton>
        <IconButton sx={{color:"#bdbdbd",mt:"1rem"}}>
          <SearchIcon fontSize="large"  />
        </IconButton>
      </div>
    </>
  );
};

export default SideNav;
