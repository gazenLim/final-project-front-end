import { connect } from 'react-redux'
import React, { Component } from 'react'
import { AllProduct } from '../action/AllProduct'
import Product from './Product'

export class ProductFetch extends Component {


  

    

    componentDidMount(){
        this.props.AllProduct()
    }

      render() {
        
        console.log(this.props.product)
        const products = this.props.product.map((productItem, i)=>
         <Product key={i} productItem={productItem} /> 
          )
        return (
            <div>
                {products}
            </div>
        )
    }
}


const mapStateToProps = state =>{
    console.log(state)
    return {product: state.products}
}


export default connect(mapStateToProps,{AllProduct})(ProductFetch)
