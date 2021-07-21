
import "../css/form.css"
import React, { Component } from 'react'
import { addProduct } from '../action/AllProduct'
import { connect } from 'react-redux';
 class ProductForm extends Component {
    
        state={
            name:'',
            description:'',
            amount: '',
            image:'',
            category:''
        
    }

handleOnChange=(e)=>{
 this.setState({
    [e.target.name]: e.target.value
})
}

handleOnSubmit =(e)=>{
    e.preventDefault()
    this.props.addProduct(this.state)
        this.props.history.push('/products')
    
}




    render() {
        return (
            <div >
            <form onSubmit={this.handleOnSubmit}>
            <div className="row mb-3">
  <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Product Name:</label>
  <div className="col-sm-10">
    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" name="name" onChange={this.handleOnChange} required  />
  </div>
</div>



<div className="row mb-3">
  <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Description:</label>
  <div className="col-sm-10">
    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" name="description" onChange={this.handleOnChange} required />
  </div>
</div>



<div className="row mb-3">
  <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Image:</label>
  <div className="col-sm-10">
    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" name="image" onChange={this.handleOnChange} required  />
  </div>
</div>



<div className="row mb-3">
  <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Amount</label>
  <div className="col-sm-10">
    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" name="amount" onChange={this.handleOnChange} required  />
  </div>
</div>

<div className="row mb-3">
  <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Category:</label>
  <div className="col-sm-10">
    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" name="category" onChange={this.handleOnChange} required  />
  </div>
</div>
                 
               
             
            
              
                <div class="d-grid gap-2 col-6 mx-auto">
                <button type="submit" className="btn btn-primary">Submit</button>

                </div>
                 </form>
                 </div>
        )
    }
}




export default connect(null,{addProduct})(ProductForm)