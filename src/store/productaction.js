
import { axiosInstance } from "../axiosInstance";
export const getProducts = () => (dispatch) => {
    axiosInstance
      .get("/products")
      .then(function (response) {
          dispatch({
              type : "Set_Product",
              payload : response.data
          })
      })
      .catch(function (error) {
        console.log(error);
      });
  };