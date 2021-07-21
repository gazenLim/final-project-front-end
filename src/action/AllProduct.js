export const AllProduct = () =>{
       return(dispatch)=>{
        fetch('http://127.0.0.1:3000/products')
        .then(resp=>resp.json())
        .then(products=>{
            console.log(products)
            dispatch({type:"FETCH_PRODUCTS", payload: products})
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
        .then(data=>dispatch({type:"ADD_PRODUCT", payload:product}))
    }

}

export const removeItem = itemId=> {
return(dispatch)=>{
     fetch(`http://127.0.0.1:3000/products/${itemId}`,{
        method: "DELETE",
        headers:{'Content-Type': 'application/json' }
    })
    .then(resp =>resp.json())
    .then(product =>{dispatch({type:"REMOVE_ITEM" , payload: product.id})})
}

    }

export const selectItem=(id)=>{
    
    return(dispatch)=>{
        fetch(`http://127.0.0.1:3000/products/${id}`)
        .then(resp => resp.json())
        .then(item =>{dispatch({type:"SELECT_ITEM", payload: item})})
    }
    
}

