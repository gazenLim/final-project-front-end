
import { ActionType } from './action-type';



export const AllProduct = () =>{
           return(dispatch)=>{
       return fetch('http://127.0.0.1:3000/products')
        .then(resp=>resp.json())
        .then(products=>{
            console.log(products)
            dispatch({type:ActionType.FETCH_PRODUCTS, payload: products})
        })
    }

}
export const addProduct = (product) =>{
    return(dispatch)=>{
        fetch('http://127.0.0.1:3000/products',{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(product)
            
        })
        .then(resp=>resp.json())
        .then(data=>dispatch({type:ActionType.ADD_PRODUCT, payload:product}))
    }

}

export const removeItem = id =>{
    return(dispatch) =>{
        console.log(id)
 fetch(`http://127.0.0.1:3000/products/${id}`,{
    method:'DELETE',
    headers:{'Content-Type':'application/json'}
} )  
.then(resp=>resp.json()) 
.then(product=>{dispatch({type:ActionType.REMOVE_ITEM, payload: product.id})})
 }
}


export const selectItem = (id) =>{
    return(dispatch)=>{
     fetch(`http://127.0.0.1:3000/products/${id}`)
        .then(resp => resp.json())
        .then(item =>{dispatch({type:ActionType.SELECT_ITEM, payload:item})})
        ///
    }
    
}

export const removeProduct =(product)=>{
    return{
    type: ActionType.REMOVE_PRODUCT}
}

//////////////////------------------------------



