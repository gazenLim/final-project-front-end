const initialState ={
    products:[],
    product:[]
    
}

export const rootReducer =(state =initialState,action)=>{
    
    switch(action.type){
        case "FETCH_PRODUCTS":
            return{ products: action.payload}
        case "ADD_PRODUCT":
            return{...state, products:[...state.products, action.payload]}
            case "REMOVE_ITEM":
                        const newItems = state.products.filter( products => products.id !== action.payload)
               return {...state, products: newItems}
                case "SELECT_ITEM":
                    
                    // const item = state.products.filter(item => item.id === action.payload.id)
                    
                    return {...state, product: action.payload}        
              
                   default:
                return state
    }
}