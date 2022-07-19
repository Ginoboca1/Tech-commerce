import React from 'react'
import { Typography, Button, Card, CardContent, CardMedia, CardActions } from '@material-ui/core';

import './cartItem.css';


const CartItem = ({ item, handleUpdateQuantity, handleRemoveItem }) => {
  return (
    <Card>
        <CardMedia className = "media" image = {item.image.url} alt = {item.name} />

        <CardContent className = "card-content">
          <Typography variant = "h5">{item.name}</Typography>
          <Typography variant = "h6">{item.line_total.formatted_with_symbol}</Typography>

          <CardActions className = "card-actions">
            <div className = "buttons">

                <Button type = "button" size = "medium" onClick = { () => handleUpdateQuantity(item.id, item.quantity + 1)}>+</Button>
                 <Typography>{item.quantity}</Typography>
                <Button type = "button" size= "medium" onClick = { () => handleUpdateQuantity(item.id, item.quantity - 1)}>-</Button>

            </div>
            <Button type = "button" variant = "outlined" color = "secondary" onClick = {() => handleRemoveItem(item.id)}>Remove</Button>
          </CardActions>

        </CardContent>
    </Card>
  )
}

export default CartItem