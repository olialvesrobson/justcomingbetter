import React from 'react'

import {
    SwapHorizontalCircle, 
    AddCircle, 
    RemoveCircle, 
    CloudCircle,
    ExitToApp, 
    AccountCircle
} from '@material-ui/icons';

import { red, blue, green, grey } from '@material-ui/core/colors';

export const SignedIn1 =[
    {label: 'Dashboard', icon: <SwapHorizontalCircle/>, color: {blue}},
    {label: 'Add Earn', icon: <AddCircle/>, color: {green}},
    {label: 'Add Expenses', icon: <RemoveCircle/>, color: {red}},
    {label: 'Add Investment', icon: <CloudCircle/>, color: {red}}
    
    
]

export const SignedIn2 =[
        {label: 'All mail', icon: <AddCircle/>, color: {grey}}, 
        {label: 'Log out', icon: <ExitToApp/>, color: {grey}}, 
        {label: 'My account', icon: <AccountCircle/>, color: {grey}}
    ]
    
