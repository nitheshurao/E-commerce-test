
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';

import { useEffect, useState } from 'react';
// import axios from 'axios';
import data from './components/api/data.json'
import ProductList from './components/ProductList';
import Login from './components/Login';
import Form from './components/Form';


function App() {
  const [product, setProduct] = useState([]);

  // const GetProducts = async () => {
  //   const resposne = await axios.get("https://fakestoreapi.com/products")
  //   console.log(resposne)
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   setProduct(resposne.data);

  // }


  useEffect(() => {
    // GetProducts()
    setProduct({ data }.data)
    // console.log(product)


  });


  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Header /> */}

      <Router>
        <Header />
        <Switch>

          <Route exact
            path="/"
            component={Home}




          />

          <Route
            path="/product"
            exact
            render={(props) => (
              <ProductList
                {...props}
                product={product} />
            )}
          />
          <Route path='/Login'
            exact render={
              () => (
                <Login />
              )

            } />
          <Route path='/form'
            exact render={
              () => (
                <Form />
              )

            } />

          <Route path="/productDetails" component={ProductDetails} />


          <Route path="/product/:productId"
            component={ProductDetails} />



        </Switch>
      </Router>

    </div >
  );
}

export default App;
