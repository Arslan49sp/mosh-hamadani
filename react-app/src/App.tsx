import "./App.css";
import ListGroup from "./assets/components/ListGroup";

function App() {
  const items = ["Lahore", "Karanchi", "Peshawar", "Queta", "Pindi"];
  const handleClick = (item: string) => {
    console.log(item);
  };
  return (
    <ListGroup
      items={items}
      heading="Cities of Pakistan"
      onSelectItem={handleClick}
    />
  );
}

export default App;
