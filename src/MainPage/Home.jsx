import React, { useEffect, useState } from "react";
import Logo from "../Images/coronavirus-5107715_640.png";
import InfoBox from "./InfoBox";
import "./Home.css";
import axios from "axios";
import Lists from "./List";

const Home = () => {
  const [stateInfo, setStateInfo] = useState([]);
  const [stateCopy, setStateCopy] = useState([]);
  const [totalCase, setTotalCase] = useState([]);
  const [districtInfo, setDistrictInfo] = useState([]);
  const [districtInfoCopy, setDistrictInfoCopy] = useState([]);

  useEffect(() => {
    apiData();
    districtApi();
  }, []);
  const apiData = () => {
    axios
      .get("https://data.covid19india.org/data.json")
      .then((allData) => {
        setStateInfo(allData.data.statewise.slice(1));
        setStateCopy(allData.data);
        setTotalCase(allData.data.statewise.slice(0, 1));
      })
      .catch((error) => {
        alert("No data Found", error);
      });
  };
  const districtApi = () => {
    axios
      .get("https://data.covid19india.org/v4/min/data.min.json")
      .then((response) => {
        setDistrictInfo(response.data);
        setDistrictInfoCopy(response.data);

        // setStateInfo((prevState)=>[...prevState,response.data])
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

  console.log(stateInfo);
  return (
    <>
      <div className="main-wrapper">
        <div className="header-wrap">
          <div className="header" style={{ marginTop: "1rem" }}>
            <img src={Logo} alt="Covid Logo" />
            <span className="head-text">COVID-19 | India</span>
          </div>
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
        <div className="table-wrap">
          <Lists
            stateInfo={stateInfo}
            districtInfo={districtInfo}
            handleSort={handleSort}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
