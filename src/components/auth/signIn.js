import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

import { Button, TextField, FormLabel, FormControl } from '@material-ui/core';

export class SignIn extends Component {
    state = {
        email:'',
        password:''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        const {authError, auth} = this.props
        //if (auth.uid) return <Redirect to='/' />

        return (
            <div className="container">
                <FormControl onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div >
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <TextField type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="">
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <TextField type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="">
                        <Button className="btn pink lighten-1 z-depth-0">Login</Button>
                        <div className='red-text center'>
                            { authError ? <p>{authError}</p> : null}
                            </div>
                    </div>
                </FormControl>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
} 

const mapStateToProps = (state) =>{
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
