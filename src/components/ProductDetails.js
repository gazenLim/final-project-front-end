import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../action/AllProduct';


 
class ProductDetails extends Component {



componentDidMount= () =>{
    
    this.props.selectItem(this.props.product.id)
}



    render() { 
      
        return (
            <div>
              <h1> {this.props.product.name}</h1>
               <img src ={this.props.product.image} alt="image" />
            </div>
        );
    }
}

 const mapStateToProps = (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id)
    
    return {
        product: state.products.find(product =>product.id === id ),
    }
}
 
export default connect(mapStateToProps,{selectItem} ) (ProductDetails);