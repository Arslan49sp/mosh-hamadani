import { useState } from "react";
import "./App.css";
import Alert from "./assets/components/Alert";
import Button from "./assets/components/Button";
import ListGroup from "./assets/components/ListGroup";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
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
          showing the alert. aho
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
    </>
  );
}

export default App;
