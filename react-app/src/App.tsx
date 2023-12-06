import { useState } from "react";
import "./App.css";
import Alert from "./assets/components/Alert/Alert";
import Button from "./assets/components/Button/Button";
import ListGroup from "./assets/components/ListGroup/ListGroup";
import LikeButton from "./assets/components/LikeButton/LikeButton";
import Navbar from "./assets/components/NavBar/Navbar";
import Cart from "./assets/components/Cart/Cart";
import ExpandableText from "./assets/components/ExpandableText/ExpandableText";
import Form from "./assets/components/Form/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "aaa",
      amount: 20,
      category: "Electronics",
    },
    {
      id: 2,
      description: "bbb",
      amount: 20,
      category: "Electronics",
    },
    {
      id: 3,
      description: "ccc",
      amount: 20,
      category: "Electronics",
    },
    {
      id: 4,
      description: "ddd",
      amount: 20,
      category: "Electronics",
    },
  ]);
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
      <ExpenseList
        expenses={expenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
      {/* <Form /> */}
      {/* <ListGroup
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

      <ExpandableText maxChar={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus
        dolore blanditiis, dicta maiores fugit repellendus itaque cum nostrum!
        Voluptatibus nemo, placeat quae dicta dolorum quaerat aspernatur commodi
        tempore voluptatem expedita pariatur. Perferendis provident corrupti
        dolor ratione blanditiis, ipsum expedita autem quasi voluptatibus, vitae
        debitis non soluta iure dolorem eius facere consequatur officia nesciunt
        fugit eaque esse. Praesentium illum saepe illo voluptas odit assumenda
        vero nemo hic quasi consequuntur nulla id labore ullam harum in quisquam
        minus sequi, architecto soluta quis facere dolorem? Natus alias facere
        earum tempore enim omnis in voluptatibus corporis ut libero adipisci
        aspernatur facilis, consequuntur quaerat.
      </ExpandableText> */}
    </>
  );
}

export default App;
