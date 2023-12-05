import { useState } from "react";
import "./App.css";
import Alert from "./assets/components/Alert/Alert";
import Button from "./assets/components/Button/Button";
import ListGroup from "./assets/components/ListGroup/ListGroup";
import LikeButton from "./assets/components/LikeButton/LikeButton";
import Navbar from "./assets/components/NavBar/Navbar";
import Cart from "./assets/components/Cart/Cart";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [products, setProducts] = useState([
    "Lahore",
    "Karanchi",
    "Peshawar",
    "Queta",
    "Pindi",
  ]);
  const items = ["Lahore", "Karanchi", "Peshawar", "Queta", "Pindi"];
  const handleClick = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <ListGroup
        items={items}
        heading="Cities of Pakistan"
        onSelectItem={handleClick}
      />
      {alertVisibility && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          showing the alert
        </Alert>
      )}
      <Button
        btnType="success"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My button
      </Button>
      <LikeButton
        onClick={() => {
          console.log("Clicked");
        }}
      />

      <Navbar itemsCount={products.length} />
      <Cart
        items={products}
        onClear={() => {
          setProducts([]);
        }}
      />
    </>
  );
}

export default App;
