// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import AddProduct from './components/AddProduct';
// import Cart from './components/Cart';
// import Login from './components/Login';
// import ProductList from './components/ProductList';
import Context from './Context';
// import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {

  
  render() {
    return (
      <Context.Provider>
      <h1>Hello World</h1>
      </Context.Provider>
    )
  }
}
