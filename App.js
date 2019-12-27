import React from "react";
import SideMenu from "./components/SideMenu";
import Summary from "./components/Summary";
import Grid from "@material-ui/core/Grid";
import DatePicker from './components/DatePicker';
import SalesScale from './components/SalesScale';
import VerticalBar from "./components/VerticalBar";
import HorizontalBar from "./components/HorizontalBar";
import ClientsList from "./components/ClientsList";


function App() {
  return (
    <div>
      <SideMenu />
      <main style={{ marginLeft: 260 , marginTop: 20}}>
        <Grid container justify="space-between" spacing={3}>
          <Grid item xs="8" >
            <Summary />
            <SalesScale />
            <HorizontalBar />
          </Grid>
          <Grid item xs="4">
            <DatePicker />
            <VerticalBar />
            <ClientsList />
          </Grid>  
        </Grid>
      </main>
    </div>
  );
}

export default App;
