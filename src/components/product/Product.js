import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Badge } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './style';


const Product = ({ product, onAddToCart, totalItems }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image = {product.image.url} alt = {product.name} />

            <CardContent>
              <div className={classes.cardContent}>
                <Typography variant = "h5" gutterBottom>{product.name}</Typography>
                <Typography dangerouslySetInnerHTML = {{__html: product.description }} variant = "body3" className="description" />
              </div>
              <Typography variant = "h6" > from {product.price.formatted_with_symbol}</Typography>
            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
               <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                 <Badge badgeContent = {totalItems} color = "secondary">
                   <AddShoppingCart />
                 </Badge>
               </IconButton>
            </CardActions>
        </Card>
  )
  
}

export default Product;
