import React from "react";
import DatamapsIndia from "react-datamaps-india";

function MapStats(stateInfo) {
  // console.log("stateInfo;- ",stateInfo.stateInfo)

  let mapStates = {};
  stateInfo.stateInfo.forEach((ele) => {
    const validState = () => {
      switch (ele.state) {
        case "Andaman and Nicobar Islands":
          return "Andaman & Nicobar Island";
        case "Dadra and Nagar Haveli and Daman and Diu":
          return "Dadara & Nagar Haveli";
        case "State Unassigned":
          return "Daman & Diu";
        case "Jammu and Kashmir":
          return "Jammu & Kashmir";
        case "Arunachal Pradesh":
          return "Arunanchal Pradesh";
        default:
          return ele.state;
      }
    };
    mapStates[validState()] = { value: ele.confirmed };
  });
  return (
    <>
      <DatamapsIndia
        regionData={mapStates}
        hoverComponent={({ value }) => {
          return (
            <>
              <p>{value.name}</p>
              <p>{value.value}</p>
            </>
          );
        }}
        mapLayout={{
          legendTitle: "Ratio of confirmed Patients",
          noDataColor: "#f5f5f5",
          borderColor: "#8D8D8D",
          hoverBorderColor: "#8D8D8D",
          hoverColor: "green",
        }}
      />
    </>
  );
}

export default MapStats;
