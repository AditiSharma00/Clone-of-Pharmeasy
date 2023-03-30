import axios from "axios"
import {  GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQ } from "./prodActionTypes"


// export const postProduct = (data) => (dispatch) => {

//     dispatch({ type: PRODUCT_REQ })
//     axios
//         .post('https://upset-dove-zipper.cyclic.app/health-care', data)
//         .then(() => {
//             dispatch({ type: ADD_PRODUCT_SUCCESS })
//         })
//         .catch((err) => {
//             console.log('error while posting', err)
//             dispatch({ type: PRODUCT_FAILURE })
//         })
// }


export const getProducts = (category)=> (dispatch) => {
    dispatch({ type: PRODUCT_REQ })
    axios.get(`https://upset-dove-zipper.cyclic.app/${category}`)
        .then((res) => {
            // console.log('getProductRes', res);
            dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log('error while getting products', err)
            dispatch({ type: PRODUCT_FAILURE })
        })
}

// export const editProduct = (dataObj, id) => (dispatch) => {

//     dispatch({ type: PRODUCT_REQ })
//     return axios.patch(`http://localhost:8080/products/${id}`, dataObj)
//         .then(() => {
//             dispatch({ type: PATCH_PRODUCT_SUCCESS })

//         })
//         .catch((err) => {
//             console.log('error from editing page', err);
//             dispatch({ type: PRODUCT_FAILURE })
//         })
// }