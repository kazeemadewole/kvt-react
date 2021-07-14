import axios from "../utils/axiosInstance";
import { LoginConstants } from "../Constants/LoginConstants"

export const showModal = () => {
    return (dispatch) => {
        dispatch({type:LoginConstants.SET_SHOW});
    }
}
export const closeModal = () => {
    return (dispatch) => {
        dispatch({type:LoginConstants.CLOSE_SHOW});
    }
}
export const showSignupModal = () => {
    return (dispatch) => {
        dispatch({type:LoginConstants.SET_SHOW_SIGNUP});
    }
}
export const closeSignupModal = () => {
    return (dispatch) => {
        dispatch({type:LoginConstants.CLOSE_SHOW_SIGNUP});
    }
}

export const login = (data) => {
    return async (dispatch) => {
        dispatch({type:LoginConstants.LOGIN_REQUEST});
        try{

            const res = await axios.post('login',data);
            if(res.status === 200){
                dispatch({type:LoginConstants.LOGIN_SUCCESS, payload: res.data})
                localStorage.setItem('token', res.data.token)
            }else {
                dispatch({type: LoginConstants.LOGIN_FAILURE, payload: 'Login Failed'});
            }
        }catch(error){
            dispatch({type: LoginConstants.LOGIN_FAILURE, payload: error.message});
        }
    }
}

export const signUp = (data) => {
    return async(dispatch) => {
        dispatch({type:LoginConstants.SIGNUP_REQUEST});
        try{

            const res = await axios.post('signup', data);
    
            if (res.status === 201){
                dispatch({type:LoginConstants.SIGNUP_SUCCESS, payload:res.data.status});   
            }else {
                dispatch({type: LoginConstants.SIGNUP_FAILURE, payload: 'Not Successful, try again later'})
            }
        }catch(error){
            dispatch({type: LoginConstants.SIGNUP_FAILURE, payload: error.message})
        }
    }
}
export const clearMessage = () => {
    return dispatch => {
        dispatch({type: LoginConstants.CLEAR_ERROR});
    }
}

export const logout = () => {
    return dispatch => {
        dispatch({type:LoginConstants.LOGOUT_REQUEST});
        localStorage.clear()
    }
}