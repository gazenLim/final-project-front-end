const initialState ={
    products:[],
    
}

export const fetchProducts =(state =initialState,action)=>{
    
    switch(action.type){
        case "FETCH_PRODUCTS":
            return{ products: action.payload}
        // case "ADD_PRODUCT":
        //     return{...state, products:[...state.products, action.payload]}
            case "REMOVE_ITEM":
                        const newItems = state.products.filter( products => products.id !== action.payload)
               return {...state, products: newItems}
              

               
        



                // case "SELECT_ITEM":
                    
                    
        //             return {...state, product: action.payload}        
              
                   default:
                return state
    }
}



export const addProduct =(state=initialState, action)=>{
    switch(action.payload){
    case "ADD_PRODUCT":
         return{...state, products:[...state.products, action.payload]}
            default:
                return state
}}




export const selectProduct =(state=[],action)=>{
    switch(action.type){
        case "SELECT_ITEM":
            return{...state, ...action.payload}
        case "REMOVE_PRODUCT":
            return{}
            default:
                return state

    }
}


