import React from "react";
import SideMenu from "./components/SideMenu";
import Summary from "./components/Summary";
import Grid from "@material-ui/core/Grid";
import DatePicker from './components/DatePicker';

function App() {
  return (
    <div>
      <SideMenu />
      <main style={{ marginLeft: 240 }}>
        <Grid container justify="space-between" spacing={3}>
          <Grid item xs="8">
            <Summary />
          </Grid>
          <Grid item xs="4">
            <DatePicker />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default App;
