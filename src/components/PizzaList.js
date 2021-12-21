import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizza, onClickEdit }) {
  const pizzaList = pizza.map((piz) => <Pizza key={piz.id} piz={piz} onClickEdit={onClickEdit} />);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>{pizzaList}</tbody>
    </table>
  );
}

export default PizzaList;
