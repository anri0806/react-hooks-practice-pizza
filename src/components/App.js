import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizza, setPizza] = useState([]);
  const [formData, setFormData] = useState({
    topping: "",
    size: "",
    vegetarian: false,
  });

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((res) => res.json())
      .then((data) => setPizza(data));
  }, []);

  function handleFormData(e) {
    const name = e.target.name;
    let value = e.target.value;

    if (e.target.type === "radio") {
      value = e.target.value === "Vegetarian";
    }

    setFormData({ ...formData, [name]: value });
  }

  function handleEdit(editItem) {
    setFormData(editItem);
  }

  function handleSubmitUpdate(updatedData) {
    const updatedItems = pizza.map(piz => piz.id === updatedData.id ? updatedData : piz)
    setPizza(updatedItems)
  }


  return (
    <>
      <Header />
      <PizzaForm formData={formData} onChangeForm={handleFormData} onSubmitUpdate={handleSubmitUpdate} />
      <PizzaList pizza={pizza} onClickEdit={handleEdit} />
    </>
  );
}

export default App;
