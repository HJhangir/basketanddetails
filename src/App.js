import React, { useState } from "react";
import Product from "./components/Product";
import Basket from "./components/Basket";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Basko from "./components/Basket/Basko";
import "./App.css";

const App = () => {
  const [basket, setBasket] = useState([]);
  const [openDetails, setOpenDetails] = useState([]);

  const products = [
    {
      id: 1,
      url: 'https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.595xw:0.668xh;0.0705xw,0.224xh&resize=768:*' ,
      name: "name 1",
      price: 19.99,
      colors: ["Red", "Blue", "Green"],
    },
    {
      id: 2,
      url: 'https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.595xw:0.668xh;0.0705xw,0.224xh&resize=768:*' ,
      name: "name 2",
      price: 29.99,
      colors: ["Yellow", "Purple", "White"],
    },
    {
      id: 3,
      url: 'https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.595xw:0.668xh;0.0705xw,0.224xh&resize=768:*' ,
      name: "name 3",
      price: 39.99,
      colors: ["Yellow", "White"],
    },
    {
      id: 4,
      url: 'https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.595xw:0.668xh;0.0705xw,0.224xh&resize=768:*' ,
      name: "name 4",
      price: 49.99,
      colors: ["Purple", "White"],
    },
  ];

  const cars = [
    {
      id: 1,
      url: 'https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.595xw:0.668xh;0.0705xw,0.224xh&resize=768:*' ,
      name: "name 1",
      price: 19.99,
      colors: ["Red", "Blue", "Green"],
    },
    {
      id: 2,
      url: 'https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.595xw:0.668xh;0.0705xw,0.224xh&resize=768:*' ,
      name: "csdcs 2",
      price: 29.99,
      colors: ["Yellow", "Purple", "White"],
    },
    {
      id: 3,
      url: 'https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.595xw:0.668xh;0.0705xw,0.224xh&resize=768:*' ,
      name: "cscsd 3",
      price: 39.99,
      colors: ["Yellow", "White"],
    },
    {
      id: 4,
      url: 'https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.595xw:0.668xh;0.0705xw,0.224xh&resize=768:*' ,
      name: "cscsd 4",
      price: 49.99,
      colors: ["Purple", "White"],
    },
  ];
  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  const showDetails = (productId) => {
    if (!openDetails.includes(productId)) {
      setOpenDetails([...openDetails, productId]);
    }
  };

  const resetDetails = (productId) => {
    setOpenDetails(openDetails.filter((id) => id !== productId));
  };

  return (
    <Router>
      <div className="App">
        <Basko />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <div className="products">
                <div className="productss">
                  {products.map((product) => (
                    <div key={product.id} className="productsss">
                      <Product
                        product={product}
                        onAddToBasket={addToBasket}
                        onShowDetails={() => showDetails(product.id)}
                      />
                      {openDetails.includes(product.id) && (
                        <ProductDetails
                          key={product.id}
                          details={product}
                          onCloseDetails={() => resetDetails(product.id)}
                        />
                      )}
                    </div>
                  ))}
                </div>
                {/* <Basket basket={basket} /> */}
              </div>
            }
          />
          <Route
            path="/cars"
            element={
              <div className="products">
                <div className="productss">
                  {cars.map((car) => (
                    <div key={car.id} className="productsss">
                      <Product
                        product={car}
                        onAddToBasket={addToBasket}
                        onShowDetails={() => showDetails(car.id)}
                      />
                      {openDetails.includes(car.id) && (
                        <ProductDetails
                          key={car.id}
                          details={car}
                          onCloseDetails={() => resetDetails(car.id)}
                        />
                      )}
                    </div>
                  ))}
                </div>
                {/* <Basket basket={basket} /> */}
              </div>
            }
          />
          <Route path="/basket" element={<Basket basket={basket} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
