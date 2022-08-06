import React, { useState } from "react";
import { Table } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import TableBody from "@mui/material/TableBody";
import Collapse from "@mui/material/Collapse";
import emailjs from "emailjs-com"

const Lists = ({
  stateInfo,
  districtInfo,
  handleSort,
  selectedStateCode,
  setSelectedStateCode,
}) => {
  const myStyle = {
    color: "#f1f2f6",
  };
  const [open, setOpen] = useState(-1);
  // const [selectedStateCode, setSelectedStateCode] = useState("");
  const mailShare = (item,index) =>{
    const dataShare = {
      id:index,
      state:item.state,
      confirmed:item.confirmed,
      active:item.active,
      recovered:item.recovered,
      death:item.deaths
    }
    emailjs.send("service_htbylml","template_l9f1liq",dataShare,"NUVEexlOABH7loZf4")
    .then((response)=>{
      console.log("Success!",response.status,response.text);
    }).catch((error)=>{
      console.log("Error!!!",error);
    })
  }

  return (
    <>
      <div className="list">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={myStyle} align="left">
                  State/UT
                </TableCell>
                <TableCell style={myStyle} align="center">
                  <span className="arrows">
                    Confirmed
                    <IconButton
                      style={myStyle}
                      onClick={() => handleSort("confirmed", true)}
                    >
                      <ArrowUpwardIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      style={myStyle}
                      onClick={() => handleSort("confirmed")}
                    >
                      <ArrowDownwardIcon fontSize={"small"} />
                    </IconButton>
                  </span>
                </TableCell>
                <TableCell style={myStyle} align="center">
                  <span className="arrows">
                    Active
                    <IconButton
                      style={myStyle}
                      onClick={() => handleSort("active", true)}
                    >
                      <ArrowUpwardIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      style={myStyle}
                      onClick={() => handleSort("active")}
                    >
                      <ArrowDownwardIcon fontSize={"small"} />
                    </IconButton>
                  </span>
                </TableCell>
                <TableCell style={myStyle} align="center">
                  <span className="arrows">
                    Recovered
                    <IconButton
                      style={myStyle}
                      onClick={() => handleSort("recovered", true)}
                    >
                      <ArrowUpwardIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      style={myStyle}
                      onClick={() => handleSort("recovered")}
                    >
                      <ArrowDownwardIcon fontSize={"small"} />
                    </IconButton>
                  </span>
                </TableCell>
                <TableCell style={myStyle} align="center">
                  <span className="arrows">
                    Deaths
                    <IconButton
                      style={myStyle}
                      onClick={() => handleSort("deaths", true)}
                    >
                      <ArrowUpwardIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      style={myStyle}
                      onClick={() => handleSort("deaths")}
                    >
                      <ArrowDownwardIcon fontSize={"small"} />
                    </IconButton>
                  </span>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            {stateInfo?.map((item, index) => {
              return (
                <>
                  <TableBody key={index}>
                    <TableRow>
                      <TableCell style={myStyle} align="left">
                        {
                          <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => {
                              setOpen(index === open ? -1 : index);
                              setSelectedStateCode(item.statecode);
                            }}
                          >
                            {open === index ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )}
                          </IconButton>
                        }
                        {item.state}  
                      </TableCell>
                      <TableCell style={myStyle} align="center">
                        {item.confirmed}
                      </TableCell>
                      <TableCell style={myStyle} align="center">
                        {item.active}
                      </TableCell>
                      <TableCell style={myStyle} align="center">
                        {item.recovered}
                      </TableCell>
                      <TableCell style={myStyle} align="center">
                        {item.deaths}
                      </TableCell>
                      <TableCell style={myStyle} align="center">
                        <IconButton style={myStyle} onClick={()=> mailShare(item,index)}>
                          <ShareIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{
                          paddingBottom: 0,
                          paddingTop: 0,
                          borderBottom: "none",
                        }}
                      >
                        <Collapse in={index === open}>
                          <Table size="small">
                            <TableHead>
                              <TableRow>
                                <TableCell style={myStyle} align="center">
                                  Districts
                                </TableCell>
                                <TableCell style={myStyle} align="center">
                                  <span className="arrows">
                                    Vaccinate(Dose-1)
                                    <IconButton style={myStyle}>
                                      <ArrowUpwardIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton style={myStyle}>
                                      <ArrowDownwardIcon fontSize={"small"} />
                                    </IconButton>
                                  </span>
                                </TableCell>

                                <TableCell style={myStyle} align="center">
                                  <span className="arrows">
                                    Vaccinated(Dose-2)
                                    <IconButton style={myStyle}>
                                      <ArrowUpwardIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton style={myStyle}>
                                      <ArrowDownwardIcon fontSize={"small"} />
                                    </IconButton>
                                  </span>
                                </TableCell>
                              </TableRow>
                            </TableHead>

                            {selectedStateCode &&
                              districtInfo &&
                              Object.keys(
                                districtInfo[selectedStateCode]?.districts
                              ).map((ele, ind) => (
                                <TableRow key={ind}>
                                  <TableCell style={myStyle} align="center">
                                    {ele}
                                  </TableCell>
                                  <TableCell style={myStyle} align="center">
                                    {
                                      districtInfo[selectedStateCode]
                                        ?.districts[ele]?.delta7?.vaccinated1
                                    }
                                  </TableCell>
                                  <TableCell style={myStyle} align="center">
                                    {
                                      districtInfo[selectedStateCode]
                                        ?.districts[ele]?.delta7?.vaccinated2
                                    }
                                  </TableCell>
                                </TableRow>
                              ))}
                          </Table>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </>
              );
            })}
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Lists;
