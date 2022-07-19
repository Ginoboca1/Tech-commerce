import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Product from "../product/Product";
import useStyles from "./style";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className = {classes.title}>
        <Typography variant = "h2" m={ 2}>Products</Typography>
      </div>
      <Grid container justify="center" spacing={4} mb ={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs = {12} md = {4} className="gridItem">
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
};

export default Products;
