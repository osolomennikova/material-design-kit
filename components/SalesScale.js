import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from "react-vis";
import "../node_modules/react-vis/dist/style.css";
import Typography from "@material-ui/core/Typography";
import "../styles/main.scss";

const data = [
  { x: 1, y: 200 },
  { x: 2, y: 400 },
  { x: 3, y: 200 },
  { x: 31, y: 550 }
];

function SalesScale() {
  return (
    <div className="scaleContainer">
      <Typography variant="h6" className='scaleTitle'>Sales</Typography>
      <XYPlot
        width={650}
        height={400}
        xType="ordinal"
        yType="linear"
        dontCheckIfEmpty
      >
        <HorizontalGridLines tickValues={[0, 100, 200, 300, 400, 500, 600]} />
        <XAxis
          hideLine
          tickFormat={v => (v == 1 || v == 31 ? `${v} may` : "")}
        />
        <YAxis hideLine tickValues={[0, 100, 200, 300, 400, 500, 600]} />
        <LineSeries
          curve="curveCatmullRom"
          color="#2196f3"
          data={data}
          opacity={1}
          strokeStyle="solid"
        />
        <LineSeries
          curve="curveCatmullRom"
          color="#2196f3"
          data={[
            { x: 1, y: 0 },
            { x: 31, y: 800 }
          ]}
          opacity={0}
          strokeStyle="solid"
        />
      </XYPlot>
    </div>
  );
}

export default SalesScale;
