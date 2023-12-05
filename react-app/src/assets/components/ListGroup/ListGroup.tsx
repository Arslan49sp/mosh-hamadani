import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedItem, setSelectedItem] = useState(-1);
  return (
    <>
      <h2>Cities in pakistan.</h2>
      {items.length === 0 && <p>Item not found.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <p
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(event) => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
          >
            {item}
          </p>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
