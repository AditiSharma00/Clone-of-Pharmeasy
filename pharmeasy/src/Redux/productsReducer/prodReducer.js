import { ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQ } from "./prodActionTypes";

const initState = {
    isLoading: false,
    isError: false,
    products: []
}

export const prodReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case PRODUCT_REQ:
            return { ...state, isLoading: true }

        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };

        case PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: payload
            }
        case PATCH_PRODUCT_SUCCESS:
            return {
                ...state, isLoading: false
            }
        default: return state
    }
}