import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import useStyles from "./style";
import AdressForm from '../AdressForm'
import PaymentForm from '../PaymentForm';

const steps = ['Shipping Adress', 'Payment Details'];

const Checkout = () => {
    const classes = useStyles()
    const [stepActive, setstepActive] = useState(0)

    const Form = () => stepActive === 0
      ? <AdressForm />
      : <PaymentForm />
    
    const Confirmation = () => (
      <div>
        Confirmation 
      </div>
    )

  return (
    <>
        <div className= {classes.toolbar} />
        <main className = {classes.layout}>
            <Paper className = {classes.paper}>
                <Typography variant = "h4" align = 'center'>Checkout</Typography>
                <Stepper activeStep = {stepActive} className = {classes.stepper}>
                  {steps.map((step) =>(
                    <Step key = {step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                  ))}
                </Stepper>

                {stepActive === steps.length ? <Confirmation /> : <Form /> }
            </Paper>
        </main>
    </>
  )
}

export default Checkout