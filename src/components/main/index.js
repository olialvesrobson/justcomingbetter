import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red, green, grey, blue } from '@material-ui/core/colors';
import CurrencyFormat from 'react-currency-format';
import { Button } from '@material-ui/core';
import { AddCircle, RemoveCircle, } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperHead: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: "#C3C3C3",
    background: '../main/head.png',
  },
  red: {
      color: red[800],
  },
  green: {
      color: green[800],
  },
  blue: {
    color: blue[800],
  },
  grey: {
    color: grey[800],
  },
  button: {
      textAlign: 'center',
  }
}));

export default function Index() {
    const classes = useStyles();
    const balance = [
        {total: 250.29, debits: -25312.06, credits: 25562.35}
    ]

    console.log(balance)

    return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paperHead}>
                    <span>Account balance: </span>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                <span>Planing your future </span>
                    <h1 className={classes.blue}>
                        For a life with balance</h1>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                <span>A personal control </span>
                    <h1 className={classes.green}>
                        Your financial life in your hands.</h1>
                </Paper>
            </Grid>
        
        </Grid>
    </div>
    );
}
