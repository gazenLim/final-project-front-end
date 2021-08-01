import { combineReducers } from "redux";
import { addProduct, fetchProducts, selectProduct } from './productReducer';




const rootReducer = combineReducers({
    products: fetchProducts,
    addProduct:addProduct,
    selectProduct:selectProduct,
   
})


export default rootReducer