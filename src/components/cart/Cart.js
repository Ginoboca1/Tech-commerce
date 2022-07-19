import React from "react";
import { Container, Grid, Typography, Button, Link } from "@material-ui/core";

import useStyles from "./style";
import CartItem from "./cartItem/CartItem";

const Cart = ({ cart, handleUpdateQuantity, handleRemoveItem, emptyCart }) => {
  const classes = useStyles();

  const CartEmpty = () => (
    <Typography variant="subtitle1" className = {classes.emptyCart}>
      {" "}
      Your Cart is empty, start adding some!
    </Typography>
  );

  const CartFull = () => (
    <div>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <CartItem
              item={item}
              handleUpdateQuantity={handleUpdateQuantity}
              handleRemoveItem={handleRemoveItem}
            />
          </Grid>
        ))}
      </Grid>

      <div className={classes.cardDetails}>
        <Typography variant="h5">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>

        <div>
          <Button
            className={classes.emptyButton}
            variant="contained"
            size="large"
            type="button"
            color="secondary"
            onClick={emptyCart}
          >
            Empty Cart
          </Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </div>
  );

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom> Your Shopping Cart</Typography>
        {!cart.line_items.length ? <CartEmpty /> : <CartFull />}
    </Container>
  );
};

export default Cart;