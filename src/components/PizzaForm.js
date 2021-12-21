import React from "react";

function PizzaForm({formData, onChangeForm, onSubmitUpdate}) {

  function handleSubmit(e) {
    e.preventDefault()

   fetch(`http://localhost:3001/pizzas/${formData.id}`, {
     method: 'PATCH',
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(formData)
   })
   .then(res => res.json())
   .then(updatedData => onSubmitUpdate(updatedData))
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            value={formData.topping}
            onChange={onChangeForm}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select
            value={formData.size}
            onChange={onChangeForm}
            className="form-control"
            name="size"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              checked={formData.vegetarian}
              onChange={onChangeForm}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              checked={!formData.vegetarian}
              onChange={onChangeForm}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
