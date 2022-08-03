import { Table } from "@mui/material";
import React, { useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import "./List.css";
const Lists = ({ stateInfo, districtInfo, handleSort }) => {
  const [open, setOpen] = useState(-1);
  const [selectedStateCode, setSelectedStateCode] = useState("");

  return (
    <>
      <div className="list">
        <TableContainer>
          <Table>
            <TableHead className="head-row">
              <TableRow>
                <TableCell align="left">
                  <span className="arrows">
                    <IconButton>
                      <ArrowUpwardIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                      <ArrowDownwardIcon fontSize={"small"} />
                    </IconButton>
                    State/UT
                  </span>
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
                  <TableRow key={index}>
                    <TableCell align="left" key={index}>
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
                              <TableCell>
                                <span className="arrows">
                                  <IconButton>
                                    <ArrowUpwardIcon fontSize="small" />
                                  </IconButton>
                                  <IconButton>
                                    <ArrowDownwardIcon fontSize={"small"} />
                                  </IconButton>
                                  Districts
                                </span>
                              </TableCell>
                              <TableCell>
                                <span className="arrows">
                                  Confirmed
                                  <IconButton>
                                    <ArrowUpwardIcon fontSize="small" />
                                  </IconButton>
                                  <IconButton>
                                    <ArrowDownwardIcon fontSize={"small"} />
                                  </IconButton>
                                </span>
                              </TableCell>
                              <TableCell>
                                <span className="arrows">
                                  Active
                                  <IconButton>
                                    <ArrowUpwardIcon fontSize="small" />
                                  </IconButton>
                                  <IconButton>
                                    <ArrowDownwardIcon fontSize={"small"} />
                                  </IconButton>
                                </span>
                              </TableCell>
                              <TableCell>
                                <span className="arrows">
                                  Recovered
                                  <IconButton>
                                    <ArrowUpwardIcon fontSize="small" />
                                  </IconButton>
                                  <IconButton>
                                    <ArrowDownwardIcon fontSize={"small"} />
                                  </IconButton>
                                </span>
                              </TableCell>
                              <TableCell>
                                <span className="arrows">
                                  Deaths
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
                                <TableCell align="center">123</TableCell>
                                <TableCell align="center">123</TableCell>
                                <TableCell align="center">123</TableCell>
                                <TableCell align="center">123</TableCell>
                              </TableRow>
                            ))}
                        </Table>
                      </Collapse>
                    </TableCell>
                  </TableRow>
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
