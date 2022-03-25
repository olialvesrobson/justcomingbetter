const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type){
        case 'LOGIN_ERROR':
                console.log('LOGIN failed');    
        return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('LOGINN successful');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
                console.log('SIGNOUT success');
                return state;
        case 'SIGNUP_SUCCESS':
            console.log('SIGNUP successful');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
                console.log('SIGNUP ERROR');
                return {
                    ...state,
                    authError: action.err.message
                }
        default:
            return state;
    }
}

export default authReducer