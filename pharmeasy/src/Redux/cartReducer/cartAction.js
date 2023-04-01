import axios from "axios"
import { ADD_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQ } from "./cartActionTypes"

export const postCartProduct = (data) => (dispatch) => {

    dispatch({ type: PRODUCT_REQ })
   return axios
        .post('https://upset-dove-zipper.cyclic.app/massageOil', data)
        .then(() => {
            dispatch({ type: ADD_PRODUCT_SUCCESS })
        })
        .catch((err) => {
            console.log('error while posting', err)
            dispatch({ type: PRODUCT_FAILURE })
        })
}
