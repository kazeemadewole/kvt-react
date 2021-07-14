import React, {useEffect} from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import Create_Ad from "./Pages/Create_Ad/Create_Ad";
import {useDispatch} from 'react-redux';
import { getProduct } from "./Actions/productAction";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(getProduct());
  },[])
  return (
    <>
      <BrowserRouter>
    <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sell" component={Create_Ad} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
