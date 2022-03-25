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
  paperButton: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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

export default function BalanceDashboard() {
    const classes = useStyles();
    const balance = [
        {total: 250.29, debits: -25312.06, credits: 25562.35}
    ]


    return (
    <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <span>Account balance: </span>
                    <h1 className={balance[0].total < 0 ? classes.red : classes.green }>
                    <CurrencyFormat value={balance[0].total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h1></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
            <span>Total debits: </span>
                <h1 className={classes.red}>
                    <CurrencyFormat value={balance[0].debits} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h1>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
            <span>Total credits: </span>
                <h1 className={classes.green}>
                    <CurrencyFormat value={balance[0].credits} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h1>
            </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Paper className={classes.paperButton}><Button className={classes.button}><RemoveCircle className={classes.red}/>Expenses</Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><span className={classes.red}>Expenses details</span></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Paper className={classes.paperButton}><Button className={classes.button}><AddCircle className={classes.green}/>Earn</Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><span className={classes.green}>Earns details</span></Paper>
        </Grid>
        </Grid>
    </div>
    );
}
