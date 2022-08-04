import React, { useEffect, useState } from "react";
import Logo from "../Images/coronavirus-5107715_640.png";
import InfoBox from "./InfoBox";
import "./Home.css";
import axios from "axios";
import Lists from "./List";
import {TextField } from "@mui/material";
import MapStats from "./MapStats";
import SideNav from "./SideNav";

const Home = () => {
  const [stateInfo, setStateInfo] = useState([]);
  const [totalCase, setTotalCase] = useState([]);
  const [stateCaseCopy, setStateCaseCopy] = useState([]);
  const [districtInfo, setDistrictInfo] = useState([]);
  const [districtInfoCopy, setDistrictInfoCopy] = useState([]);
  const [selectedStateCode, setSelectedStateCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    apiData();
    districtApi();
  }, []);
  const apiData = () => {
    axios
      .get("https://data.covid19india.org/data.json")
      .then((allData) => {
        setStateInfo(allData.data.statewise.slice(1));
        setStateCaseCopy(allData.data.statewise.slice(1));
        setTotalCase(allData.data.statewise.slice(0, 1));
      })
      .catch((error) => {
        setError(error.messsage);
      });
  };
  const districtApi = () => {
    axios
      .get("https://data.covid19india.org/v4/min/data.min.json")
      .then((response) => {
        setDistrictInfo(response.data);
        setDistrictInfoCopy(response.data);
      })
      .catch((err) => {
        setError(err.messsage);
      });
  };

  const handleSort = (condition, ascend) => {
    var data = [];
    if (ascend) {
      data = stateInfo.sort((a, b) => a[condition] - b[condition]);
    } else {
      data = stateInfo.sort((a, b) => b[condition] - a[condition]);
    }
    setStateInfo(() => [...data]);
  };

  const handleSearch = (searchInput) => {
    if (searchInput !== "") {
      const searchArr = stateCaseCopy.filter((item) => {
        return item.state
          .toLowerCase()
          .includes(searchInput.trim().toLowerCase());
      });

      setStateInfo([...searchArr]);
    }
  };

  // const handleInnerSort = (param, asc) => {
  //   const data = Object.entries(districtInfo);

  //   console.log(data);
  //   var sortedData = [];
  //   if (asc) {
  //     sortedData = data?.sort((a, b) => a[1].total[param] - b[1].total[param]);
  //   } else {
  //     sortedData = data?.sort((a, b) => b[1].total[param] - a[1].total[param]);
  //   }
  //   setDistrictInfo(() => [...sortedData]);
  // };
  return (
    <>
      <div className="main-wrapper">
        {error && <div>{error}</div>}
        <div className="left-side">
          <SideNav />
        </div>
        <div className="right-side">
          <div className="header-wrap" id="header">
            <div className="header" style={{ marginTop: "1rem" }}>
              <img src={Logo} alt="Covid Logo" />
              <span className="head-text">COVID-19 | India</span>
            </div>
            {/* <section style={{padding:"2rem",paddingRight:"7rem"}}>
              <Alert variant="filled" severity="warning">
                This Data is Deprecated as of 13-Aug 2021
              </Alert>
            </section> */}
            <section className="info-stats">
              <InfoBox
                title={"Total Confirmed"}
                cases={totalCase[0]?.deltaconfirmed}
                total={totalCase[0]?.confirmed}
                className="confirmed"
                count={"confirm-count"}
              />
              <InfoBox
                title={"Active"}
                cases={totalCase[0]?.active}
                total={totalCase[0]?.active}
                className="active"
                count={"active-count"}
              />
              <InfoBox
                title={"Recovered"}
                cases={totalCase[0]?.deltarecovered}
                total={totalCase[0]?.recovered}
                className="recovered"
                count={"recover-count"}
              />
              <InfoBox
                title={"Deaths"}
                cases={totalCase[0]?.deltadeaths}
                total={totalCase[0]?.deaths}
                className="deaths"
                count={"death-count"}
              />
            </section>
          </div>
          <div className="map">
            <MapStats stateInfo={stateInfo} />
          </div>
          <div className="search-table" id="search-table">
            <div
              className="search"
              style={{
                width: "60%",
                marginLeft: "20%",
              }}
            >
              <TextField
              sx={{bgcolor:"white",borderRadius:"5px"}}
                autoComplete="off"
                id="search"
                label="Search Stats By State"
                fullWidth
                variant="filled"
                onChange={(event) => {
                  handleSearch(event.target.value);
                }}
              />
            </div>
            <div className="table-wrap">
              <Lists
                stateInfo={stateInfo}
                districtInfo={districtInfo}
                handleSort={handleSort}
                selectedStateCode={selectedStateCode}
                setSelectedStateCode={setSelectedStateCode}
                // handleInnerSort={handleInnerSort}
              />
            </div>
          </div>
          <section className="footer">
            <h3>COVID 19 | India Tracker Created By Md Afzaal Khan</h3>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
