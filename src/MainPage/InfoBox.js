import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CountUp from "react-countup";
import "./Info.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const InfoBox = ({ title, cases, total,className,count }) => {
  return (
    <>
      <div className="info-cards">
        <section className="total-cases">
          <Card className={className}>
            <CardContent>
              <Typography className="info-title" variant="h5">
                {title}
              </Typography>
              <ArrowUpwardIcon fontSize="small" />
              <CountUp
                className={count}
                start={0}
                end={cases}
                duration={1}
              />
              <Typography className="info-total">{total} Total</Typography>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
};

export default InfoBox;
