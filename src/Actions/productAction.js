import { productConstants } from "../Constants/productConstants";
import axios from "../utils/axiosInstance";

export const getProduct = () => {
  return async (dispatch) => {
    dispatch({ type: productConstants.REQUEST_STARTED });
    const res = await axios.get("");

    if (res.status === 200) {
      console.log("actions", res.data);
      dispatch({ type: productConstants.GET_PRODUCT, payload: res.data.data });
    }
  };
};

export const createProduct = (data) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.CREATE_PRODUCT_REQUEST });
    try {
      const res = await axios.post("user/me/product", data);
      if (res.status === 200) {
        dispatch({
          type: productConstants.CREATE_PRODUCT_SUCCESS,
          payload: "Product Successfully Created",
        });
      } else {
        dispatch({
          type: productConstants.CREATE_PRODUCT_FAILED,
          payload: "Not Successfull",
        });
      }
    } catch (error) {
      dispatch({
        type: productConstants.CREATE_PRODUCT_FAILED,
        payload: error.message,
      });
    }
  };
};
