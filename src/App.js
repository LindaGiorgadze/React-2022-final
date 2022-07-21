import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./components/ProductsPage";
import CartContext from "./contexts/cartContext";
import { useMemo, useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const memoizedList = useMemo(() => ({list, setList}), [list]);

  return (
    <CartContext.Provider
      value={memoizedList}
    >
      <div className="App">
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} /> */}
          <Route path="Products" element={<ProductsPage />} />
        </Routes>
      </div>
    </CartContext.Provider>
  );
}

export default App;
