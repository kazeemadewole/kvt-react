import { LoginConstants } from "../Constants/LoginConstants";

const initialState = {
  show: false,
  showSignUp: false,
  loading: false,
  authenticated: false,
  user: [],
  error: "",
  message: "",
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginConstants.SET_SHOW:
      state = {
        ...state,
        show: true,
      };
      break;
    case LoginConstants.CLOSE_SHOW:
      state = {
        ...state,
        show: false,
      };
      break;
    case LoginConstants.SET_SHOW_SIGNUP:
      state = {
        ...state,
        showSignUp: true,
      };
      break;
    case LoginConstants.CLOSE_SHOW_SIGNUP:
      state = {
        ...state,
        showSignUp: false,
      };
      break;
    case LoginConstants.LOGIN_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case LoginConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        loading: false,
        authenticated: true,
        user: action.payload,
        show: false,
      };
      break;
    case LoginConstants.LOGIN_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;
    case LoginConstants.LOGOUT_REQUEST:
      state = initialState;
      break;
    case LoginConstants.SIGNUP_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case LoginConstants.SIGNUP_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: "",
        message: action.payload,
      };
      break;

    case LoginConstants.SIGNUP_FAILURE:
      state = {
        ...state,
        loading: false,
        message: "",
        error: action.payload,
      };
      break;
    case LoginConstants.CLEAR_ERROR:
      state = {
        ...state,
        error: "",
      };
      break;
    case LoginConstants.CLEAR_MESSAGE:
      state = {
        ...state,
        message: "",
      };
      break;
    default:
      state = initialState;
  }
  return state;
};

export default LoginReducer;
