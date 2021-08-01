import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { selectItem,removeProduct } from '../action/AllProduct';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetails = () => {

const product = useSelector(state=>state.selectProduct)
const {name, image, amount, description} = product
console.log(product)

    const {id} =useParams()
    console.log(id)
const dispatch = useDispatch()




    useEffect(()=>{
        if( id && id !== " ")dispatch(selectItem(id))
        return()=>{
            dispatch(removeProduct())
        }
    },[id])




    return (
        <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
      
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">And</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt="hello" />
              </div>
              <div className="column rp">
              <h1>{name}</h1>
                <h3 className="ui brown block header">Price: {amount}</h3>
                <h2>Description</h2>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     )}
    </div>
    );
};
   

export default ProductDetails;