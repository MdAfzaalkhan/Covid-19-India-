import React from "react";
import DatamapsIndia from "react-datamaps-india";

function MapStats(stateInfo) {
console.log("stateInfo;- ",stateInfo)
  return (
    <>
      <DatamapsIndia
        regionData={{
            Maharashtra:{
                value:`58`
            },
            "Andaman and Nicobar Island":{
                value:`45`
            },
            "Andhra Pradesh":{
                value:``
            },
            "Arunanchal Pradesh":{
                value:``
            },
            "Assam":{
                value:``
            },
            "Bihar":{
                value:``
            },
            "Chattisgarh":{
                value:``
            },
            "Chandigarh":{
                value:``
            },
            "Dadara & Nagar Haveli":{
                value:``
            },
            "Daman & Diu":{
                value:``
            },
            "Karnataka":{
                value:``
            },
            "Telangana":{
                value:``
            },
            "Kerala":{
                value:``
            },
            "Punjab":{
                value:``
            }
        }}
        hoverComponent={({ value }) => {
          return (
            <>
              <p>{value.name}</p>
              <p>{value.value}</p>
            </>
          );
        }}
        mapLayout={{
        
          backgroundColor: "",
          noDataColor: "#f5f5f5",
          borderColor: "#8D8D8D",
          hoverBorderColor: "#8D8D8D",
          hoverColor: "#fd9644",
        }}
      />
    </>
  );
}

export default MapStats;
