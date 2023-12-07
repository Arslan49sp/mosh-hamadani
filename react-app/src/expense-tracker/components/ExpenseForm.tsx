import React from "react";

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description">Description</label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount">Au</label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category">Category</label>
        <select id="category" className="form-select"></select>
      </div>
    </form>
  );
};

export default ExpenseForm;
