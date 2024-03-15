import FlipKart from "./Flipkart";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./SingleProduct";



function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FlipKart />} />
        <Route path="/products" element={<FlipKart />} />
        <Route path="/products/:id" element={<SingleProduct/>} />
      </Routes>
    </div>
  );
}

export default Router;
