// const addProductEl = document.querySelector(".addProduct");
// const productsEl = document.querySelector(".products");

// addProductEl.addEventListener("click", function () {
//   const nameProductEl = document.querySelector(".nameProduct");
//   const priceProductEl = document.querySelector(".priceProduct");

//   const productEl = document.createElement("div");
//   productEl.classList.add("product");

//   const titleProductEl = document.createElement("h2");
//   titleProductEl.classList.add("titleProduct");

//   const buyProductEl = document.createElement("button");
//   buyProductEl.classList.add("buy__sneaker");
//   buyProductEl.textContent = "Добавить в корзину";

//   titleProductEl.textContent = nameProductEl.value;
//   const costProductEl = document.createElement("p");
//   costProductEl.classList.add("costProduct");

//   costProductEl.textContent = priceProductEl.value;

//   const deleteProductEl = document.createElement("span");
//   deleteProductEl.classList.add("deleteProduct");
//   deleteProductEl.textContent = "X";

//   deleteProductEl.addEventListener("click", () => {
//     deleteProductEl.closest(".product").remove();
//   });

//   const h4El = document.createElement("h2");
//   h4El.textContent = "dfdfd";

//   h4El.addEventListener("click", function () {
//     this.style.color = "blue";
//   });

//   productEl.append(titleProductEl);
//   productEl.append(costProductEl);
//   productEl.append(buyProductEl);
//   productEl.append(h4El);

//   const productsEl = document.querySelector(".products");
//   productsEl.append(productEl);
// });

// productsEl.addEventListener("click", function (event) {
//   const target = event.target;
//   console.log(target);
//   if (target.classList.contains("product")) {
//     target.style.background = "red";
//   }
// });
