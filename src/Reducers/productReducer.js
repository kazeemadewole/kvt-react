import { productConstants } from "../Constants/productConstants";

const initialState = {
  loading: false,
  product: [],
  message: '',
  error : ''
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.REQUEST_STARTED:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.GET_PRODUCT:
      state = {
        ...state,
        loading: false,
        product: action.payload,
      };
      break;
    case productConstants.PRODUCT_BY_CATEGORY:
      state = {
        ...state,
        product: action.payload,
      };
      break;
    case productConstants.CREATE_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.CREATE_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: '',
        message: action.payload
      };
      break;
    case productConstants.CREATE_PRODUCT_FAILED:
      state = {
        ...state,
        loading: false,
        message : '',
        error : action.payload
      };
      break;
    default:
  }

  return state;
};

export default productReducer;
