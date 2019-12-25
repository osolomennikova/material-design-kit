import React from "react";
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from "react-vis";
import "../node_modules/react-vis/dist/style.css";
import Typography from "@material-ui/core/Typography";
import "../styles/main.scss";

const data = [
    { x: 1, y: 200 },
    { x: 2, y: 400 },
    { x: 3, y: 200 },
    { x: 31, y: 550 }
  ];

function VerticalBar() {
  return (
    <div className="scaleContainer">
      <Typography variant="h6" className="scaleTitle">
        Activity
      </Typography>
      <XYPlot
        width={300}
        height={250}
      >
        <VerticalBarSeries
          color="#2196f3"
          data={data}
          opacity={1}
          strokeStyle="solid"
        />
      </XYPlot>
    </div>
  );
}

export default VerticalBar;
