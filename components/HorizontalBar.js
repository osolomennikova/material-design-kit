import React from "react";
import { XYPlot, XAxis, YAxis, HorizontalBarSeries,  VerticalGridLines, } from "react-vis";
import "../node_modules/react-vis/dist/style.css";
import Typography from "@material-ui/core/Typography";


const data = [
  { x: 1800, y: 'NY' },
  { x: 1000, y: 'IT'},
  { x: 2200, y: 'CA' },
]

const data2 =[
    { x: 2700, y: 'NY' },
    { x: 1900, y: 'IT'},
    { x: 4200, y: 'CA' },
]

function HorizontalBar() {
  return (
    <div className="scaleContainer">
      <Typography variant="h6" className="titleScale">
        Top States
      </Typography>
      <XYPlot width={650} height={400} yType="ordinal">
        <VerticalGridLines tickValues={[0, 1000, 2000, 3000, 4000]}/>
        <XAxis hideLine tickValues={[0, 1000, 2000, 3000, 4000]}/>
        <YAxis />  
        <HorizontalBarSeries
          color="#2196f3"
          data={data}
          opacity={1}
          strokeStyle="solid"
        />
        <HorizontalBarSeries
          color="#1976d2"
          data={data2}
          opacity={1}
          strokeStyle="solid"
        />
      </XYPlot>
    </div>
  );
}

export default HorizontalBar;
