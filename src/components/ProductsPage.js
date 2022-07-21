import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../contexts/cartContext";

export default function ProductsPage() {
  const [fetchedData, setFetchedData] = useState([]);
  const { list, setList } = useContext(CartContext);

  useEffect(() => {
    fetch("https://lindagiorgadze.github.io/FakeServer/products.json")
      .then((response) => response.json())
      .then((data) => setFetchedData(data.Products));
  }, []);

  function addProduct(product) {
    const filteredList = list.filter((item) => item.id === product.id);

    if (filteredList.length === 0) {
      product.quantity = 1;
      setList([...list, product]);
    } else {
      product.quantity = product.quantity + 1;
    }
  }

  return (
    <section>
      <h3>Products</h3>
      <div className="grid">
        {fetchedData.map((item) => {
          return (
            <div key={item.id} className="ProductBox">
              <img src={item.img} alt={item.title} className="prodImage" />
              <h4>{item.title}</h4>
              <Link to={`${item.id}`}>Visit Product</Link>
              <button onClick={() => addProduct(item)}>ყიდვა</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
