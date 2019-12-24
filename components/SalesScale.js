import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from "react-vis";
import '../node_modules/react-vis/dist/style.css';

const data = [
  { x: 1, y: 0 },
  { x: 2, y: 600 },
  { x: 3, y: 200 },
  { x: 4, y: 700 }
];

function SalesScale() {
  return (
    <div>
      <XYPlot width={500} height={300}>
        <HorizontalGridLines />
        <LineSeries
          curve={null}
          color="#2196f3"
          data={data}
          opacity={1}
          strokeStyle="solid"
        />
        <XAxis />
        <YAxis />
      </XYPlot>
    </div>
  );
}

export default SalesScale;
