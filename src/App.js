import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ProductList from './componets/ProductList.jsx'
import NavBar from './componets/NavBar.jsx'
import MyCart from './componets/MyCart.jsx'
import Details from './componets/Details.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/products" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/mycart" component={MyCart} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
