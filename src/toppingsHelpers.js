function showAddToppingForm() {}

function makeUpdateForm(data) {
  let updateForm = document.createElement("form");
  Object.assign(updateForm, {
    method: "POST",
    action:
      "http://localhost:3000/toppings/" +
      data.topping_id +
      "?_method=patch&id=" +
      data.topping_id,
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
  updateTitle.innerHTML = `Update ${data.name}`;
  let updateName = document.createElement("input");
  Object.assign(updateName, {
    type: "text",
    placeholder: data.name,
    name: "name",
  });
  let updateSelect = document.createElement("select");
  Object.assign(updateSelect, {
    placeholder: "Type",
    name: "type",
  });
  let selectOptions = ["vegetable", "meat"];
  for (optionItem of selectOptions) {
    var option = document.createElement("option");
    option.value = optionItem;
    option.text = optionItem;
    updateSelect.appendChild(option);
  }
  let updateServingSize = document.createElement("input");
  Object.assign(updateServingSize, {
    placeholder: "Serving Size",
    name: "serving_size",
  });
  let updatePrice = document.createElement("input");
  updatePrice.type = "number";
  Object.assign(updatePrice, {
    placeholder: data.price_per_serving,
    name: "price_per_serving",
  });
  let submitButton = document.createElement("button");
  Object.assign(submitButton, {
    name: "id",
    value: data.topping_id,
    onclick: "this.form.submit()",
    textContent: "Submit",
  });
  updateForm.append(
    updateTitle,
    updateName,
    updateSelect,
    updateServingSize,
    updatePrice,
    submitButton
  );
  document.getElementsByTagName("main")[0].append(updateForm);
}

function makeNewToppingForm() {
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
  });
  let newSelect = document.createElement("select");
  Object.assign(newSelect, {
    placeholder: "Type",
    name: "type",
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
  });
  let newPrice = document.createElement("input");
  newPrice.type = "number";
  Object.assign(newPrice, {
    placeholder: "Price per serving",
    name: "price_per_serving",
  });
  let submitButton = document.createElement("button");
  Object.assign(submitButton, {
    type: "submit",
    textContent: "Submit",
  });

  newToppingForm.append(
    newTitle,
    newName,
    newSelect,
    newServingSize,
    newPrice,
    submitButton
  );
  document.getElementsByTagName("main")[0].append(newToppingForm);
}

function slideIn(form) {
  form.classList.add("side_slide_in");
  form.style.left = "0px";
}
