import React from "react";
import { Grid } from "@material-ui/core";
import CoffeeData from "./data";
import CoffeeCard from "./CoffeeCard";

const Content = () => {
  const coffeeCard = coffeeCardObj => {
    return (
      <Grid item xs={12} sm={4}>
        <CoffeeCard {...coffeeCardObj} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={2}>
      {CoffeeData.map(cofeeobj => coffeeCard(cofeeobj))}
    </Grid>
  );
};

export default Content;
