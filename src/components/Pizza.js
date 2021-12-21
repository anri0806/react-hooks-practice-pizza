import React from "react";

function Pizza({ piz, onClickEdit }) {

  function handleClick() {
    onClickEdit(piz)
  }

  return (
    <tr>
      <td>{piz.topping}</td>
      <td>{piz.size}</td>
      <td>{piz.vegetarian ? "Yes" : "No"}</td>
      <td>
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
