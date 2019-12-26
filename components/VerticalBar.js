import React from "react";
import { XYPlot, XAxis, VerticalBarSeries } from "react-vis";
import "../node_modules/react-vis/dist/style.css";
import Typography from "@material-ui/core/Typography";
import "../styles/main.scss";

const data = [
    { x: 'Mon', y: 400 },
    { x: 'Tue', y: 300 },
    { x: 'Wen', y: 500 },
    { x: 'Thu', y: 350 },
    { x: 'Fri', y: 500 },
    { x: 'Sat', y: 300 },
    { x: 'Sun', y: 200 }
  ];

function VerticalBar() {
  return (
    <div className="scaleContainer">
      <Typography variant="subtitle2"  align='center' className="barPadding titleScale">
        Activity
      </Typography>
      <XYPlot
        width={300}
        height={250}
        xType="ordinal"
      >
          <XAxis />
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
