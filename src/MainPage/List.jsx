import React, { useState } from "react";
import { Table } from "@mui/material";
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
import "./List.css";
const Lists = ({
  stateInfo,
  districtInfo,
  handleSort,
  handleInnerSort,
  selectedStateCode,
  setSelectedStateCode,
}) => {
  const [open, setOpen] = useState(-1);
  // const [selectedStateCode, setSelectedStateCode] = useState("");

  return (
    <>
      <div className="list">
        <TableContainer>
          <Table>
            <TableHead className="head-row">
              <TableRow>
                <TableCell align="left">
                  {/* <span className="arrows">
                    <IconButton>
                      <ArrowUpwardIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                      <ArrowDownwardIcon fontSize={"small"} />
                    </IconButton>
                </span> */}
                  State/UT
                </TableCell>
                <TableCell align="center">
                  <span className="arrows">
                    Confirmed
                    <IconButton onClick={() => handleSort("confirmed", true)}>
                      <ArrowUpwardIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={() => handleSort("confirmed")}>
                      <ArrowDownwardIcon fontSize={"small"} />
                    </IconButton>
                  </span>
                </TableCell>
                <TableCell align="center">
                  <span className="arrows">
                    Active
                    <IconButton onClick={() => handleSort("active", true)}>
                      <ArrowUpwardIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={() => handleSort("active")}>
                      <ArrowDownwardIcon fontSize={"small"} />
                    </IconButton>
                  </span>
                </TableCell>
                <TableCell align="center">
                  <span className="arrows">
                    Recovered
                    <IconButton onClick={() => handleSort("recovered", true)}>
                      <ArrowUpwardIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={() => handleSort("recovered")}>
                      <ArrowDownwardIcon fontSize={"small"} />
                    </IconButton>
                  </span>
                </TableCell>
                <TableCell align="center">
                  <span className="arrows">
                    Deaths
                    <IconButton onClick={() => handleSort("deaths", true)}>
                      <ArrowUpwardIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={() => handleSort("deaths")}>
                      <ArrowDownwardIcon fontSize={"small"} />
                    </IconButton>
                  </span>
                </TableCell>
              </TableRow>
            </TableHead>
            {stateInfo?.map((item, index) => {
              return (
                <>
                  <TableBody key={index}>
                    <TableRow>
                      <TableCell align="left">
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
                      <TableCell align="center">{item.confirmed}</TableCell>
                      <TableCell align="center">{item.active}</TableCell>
                      <TableCell align="center">{item.recovered}</TableCell>
                      <TableCell align="center">{item.deaths}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Collapse in={index === open}>
                          <Table size="small">
                            <TableHead>
                              <TableRow>
                                <TableCell align="center">Districts</TableCell>
                                <TableCell align="center">
                                  <span className="arrows">
                                    Vaccinate(Dose-1)
                                    <IconButton>
                                      <ArrowUpwardIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton>
                                      <ArrowDownwardIcon fontSize={"small"} />
                                    </IconButton>
                                  </span>
                                </TableCell>

                                <TableCell align="center">
                                  <span className="arrows">
                                    Vaccinated(Dose-2)
                                    <IconButton>
                                      <ArrowUpwardIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton>
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
                                  <TableCell align="center">{ele}</TableCell>
                                  <TableCell align="center">
                                    {
                                      districtInfo[selectedStateCode]
                                        ?.districts[ele]?.delta7?.vaccinated1
                                    }
                                  </TableCell>
                                  <TableCell align="center">
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
