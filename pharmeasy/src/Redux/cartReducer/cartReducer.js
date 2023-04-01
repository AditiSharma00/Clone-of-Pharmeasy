import { ADD_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQ } from "./cartActionTypes";

const initState = {
    image_src: '',
    productName: '',
    salePrice: +(''),
    MRP: '',
    discountPercent: '',
    id: +('')
}
export const cartProdReducer = (state = initState, { type, payload }) => {
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
        default: return state
    }
}