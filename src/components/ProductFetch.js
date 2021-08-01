import { connect } from 'react-redux'
import React, { Component } from 'react'
import { AllProduct } from '../action/AllProduct'
import Product from './Product';


export class ProductFetch extends Component {




    componentDidMount(){
        this.props.AllProduct()
    }

      render() {
          console.log(this.props.products.length)
          
      const products = this.props.products.map((productItem)=><Product productItem={productItem} key={productItem.id} /> )
        return (
            <div>
               {products}
               
            </div>
        )
    }
}


const mapStateToProps = state =>{
       return {
        products: state.products.products
    }
}


export default connect(mapStateToProps,{AllProduct})(ProductFetch)
