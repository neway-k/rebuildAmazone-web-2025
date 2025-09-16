import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel/CarouselEffect";
import Category from "./Components/Category/Category";
import Product from "./Components/Product/Product";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Carousel />
      <Category />
      <Product />
    </div>
  );
}

export default App;
