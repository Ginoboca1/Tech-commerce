import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { House } from '@material-ui/icons';

import Logo from "../../assets/commerce.png";

import useStyles from "./style";

import { Link, useLocation } from "react-router-dom";

const Navbar = ({ home, shop, contacto, totalItems }) => {
  
  const location = useLocation();
  const classes = useStyles();
  

  return (
    <div>
     
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <Typography
            component={Link}
            to="/e-commerce"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={Logo}
              alt="commerce.js"
              height="25px"
              className={classes.image}
            />{" "}
            TechStore
          </Typography>

      
          <div className={classes.grow} />

          {location.pathname === "/e-commerce" && (
            <div className={classes.button}>
              <IconButton component={Link} to="/cart">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}

          {location.pathname === '/cart' && (
            <div className={classes.button}>
              <IconButton component={Link} to="/e-commerce">
                  <House />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
