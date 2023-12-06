import React from "react";

interface Props {
  onSelect: (category: string) => void;
}
const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelect(event.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Electronics">Electronics</option>
      <option value="Electrical">Electrical</option>
      <option value="Mechanical">Mechanical</option>
    </select>
  );
};

export default ExpenseFilter;
