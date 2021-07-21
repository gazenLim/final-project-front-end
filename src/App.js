import React, {Component} from 'react';
import ProductFetch from './components/ProductFetch';
import ProductForm from './containers/ProductForm';
import NavBar from './navBar/navBar';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';







class  App extends Component {

 
    
   
render(){
    return (
        <Router>
       
            <NavBar />
            <Switch>
                <Route exact path ="/" component={Home}/>
                <Route exact path="/products" component={ProductFetch} />
                <Route exact path="/products/:id" component={ProductDetails}/>
                <Route path ="/form" component={ProductForm}/>

                <Redirect to ="/" />
            </Switch>


        </Router>
    )}
};

export default App;