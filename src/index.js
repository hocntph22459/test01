import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./Libs";
import Homepage from "./Pages/Homepage";
import Productpage from "./Pages/Productpage";
import Notfoundpage from "./Pages/Notfoundpage";
import AddProduct from "./Components/AddProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));

router.on('/',()=>{
  root.render(
  <Homepage/>
)
})
router.on('/product',()=>{
  root.render(
  <Productpage/>
)
})
router.on('/add/product',()=>{
  root.render(
    <div className="container">
      <AddProduct/>
    </div>
  
)
})
router.notFound(()=>{
  root.render(
    <Notfoundpage/>
  )
})
router.resolve()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
