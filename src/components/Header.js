import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function Header() {
  const navigation = ["Home", "About", "Contact", "Products"];
  return (
    <header>
      <nav>
        <ul>
          {navigation.map((li, index) => {
            return (
              <li key={index}>
                <Link className="navLink" to={`${li === "Home" ? "/" : li}`}>
                  {li}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Cart />
    </header>
  );
}
