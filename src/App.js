/** @format */

import "./App.css";
import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./component/ProductListing";
// import ProductComponent from "./component/ProductComponent";
import ProductDetails from "./component/ProductDetails";
import ErrorPage from "./component/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
