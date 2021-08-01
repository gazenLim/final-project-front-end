import { connect } from 'react-redux';
import {  removeItem } from '../action/AllProduct';
import { Link } from 'react-router-dom';
import "../css/index.css"





const Product = ({productItem, removeItem}) => {
       return (
         <>
         
        <div className="container" key={productItem.id}>
        <Link to={`/product/${productItem.id}`} >
          <div className="img-container" key={productItem.id}>
            <img src= {productItem.image} alt="phone" className="rounded-pill" />
            </div>
            
            </Link>

            <div >
            <h5 key={productItem.id} > Product Name: {productItem.name}</h5>
            <h5>Product Description: {productItem.description}</h5>
            <h5>Price: $ {productItem.amount}</h5>
            <button onClick = {()=>removeItem(productItem.id)} >Remove Item</button>
            </div>
           <hr />

         </div>




         
    </>
    );
   
};





export default connect(null,{removeItem})(Product); 