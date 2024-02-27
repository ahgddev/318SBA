function makeUpdateForm(pizzaData, toppingData) {
  let updateForm = document.createElement("form");
  Object.assign(updateForm, {
    method: "POST",
    action:
      "http://localhost:3000/pizzas/" +
      pizzaData.pizza_id +
      "?_method=patch&id=" +
      pizzaData.pizza_id,
  });
  updateForm.setAttribute("id", "updateForm");
  let helperInput = document.createElement("input");
  Object.assign(helperInput, {
    type: "hidden",
    name: "_method",
    value: "patch",
  });
  updateForm.append(helperInput);
  let updateTitle = document.createElement("h1");
  updateTitle.innerHTML = `Update ${pizzaData.name}`;
  let updateName = document.createElement("input");
  Object.assign(updateName, {
    type: "text",
    placeholder: pizzaData.name,
    name: "name",
    required: true,
  });
  let toppingSelect = document.createElement("div");
  let selectOptions = toppingData;
  for (optionItem of selectOptions) {
    let option = document.createElement("input");
    option.type = "checkbox";
    option.name = optionItem.name;
    option.id = optionItem.name;
    let label = document.createElement("label");
    label.htmlFor = "id";
    label.appendChild(document.createTextNode(optionItem.name));
    toppingSelect.appendChild(label);
    toppingSelect.appendChild(option);
  }
  let updateWholePrice = document.createElement("input");
  updateWholePrice.type = "number";
  Object.assign(updateWholePrice, {
    placeholder: pizzaData.whole_price,
    name: "whole_price",
    required: true,
  });
  let updateSlicePrice = document.createElement("input");
  updateSlicePrice.type = "number";
  Object.assign(updateSlicePrice, {
    placeholder: pizzaData.slice_price,
    name: "slice_price",
    required: true,
  });
  let submitButton = document.createElement("button");
  Object.assign(submitButton, {
    name: "pizza_id",
    value: pizzaData.pizza_id,
    onclick: "this.form.submit()",
    textContent: "Submit",
  });
  let cancelButton = document.createElement("button");
  Object.assign(cancelButton, {
    textContent: "Cancel",
  });
  cancelButton.onclick = () => {
    updateForm.remove();
  };
  updateForm.append(
    updateTitle,
    updateName,
    toppingSelect,
    updateWholePrice,
    updateSlicePrice,
    submitButton,
    cancelButton
  );
  document.getElementsByTagName("main")[0].append(updateForm);
}

function makeNewPizzaForm() {
  let newToppingForm = document.createElement("form");
  Object.assign(newToppingForm, {
    method: "POST",
    action: "http://localhost:3000/toppings/",
  });
  newToppingForm.setAttribute("id", "newToppingForm");
  let newTitle = document.createElement("h1");
  newTitle.innerHTML = "Make a new Topping";
  let newName = document.createElement("input");
  Object.assign(newName, {
    type: "text",
    placeholder: "Topping name",
    name: "name",
    required: true,
  });
  let newSelect = document.createElement("select");
  Object.assign(newSelect, {
    placeholder: "Type",
    name: "type",
    required: true,
  });
  let selectOptions = ["vegetable", "meat"];
  for (optionItem of selectOptions) {
    var option = document.createElement("option");
    option.value = optionItem;
    option.text = optionItem;
    newSelect.appendChild(option);
  }
  let newServingSize = document.createElement("input");
  Object.assign(newServingSize, {
    placeholder: "Serving Size",
    name: "serving_size",
    required: true,
  });
  let newPrice = document.createElement("input");
  newPrice.type = "number";
  Object.assign(newPrice, {
    placeholder: "Price per serving",
    name: "price_per_serving",
    required: true,
  });
  let submitButton = document.createElement("button");
  Object.assign(submitButton, {
    type: "submit",
    textContent: "Submit",
  });
  let cancelButton = document.createElement("button");
  Object.assign(cancelButton, {
    textContent: "Cancel",
  });
  cancelButton.onclick = () => {
    newToppingForm.remove();
  };
  newToppingForm.append(
    newTitle,
    newName,
    newSelect,
    newServingSize,
    newPrice,
    submitButton,
    cancelButton
  );
  document.getElementsByTagName("main")[0].append(newToppingForm);
}
