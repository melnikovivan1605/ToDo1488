// let a = +prompt();
// let b = +prompt();
// let summa = 0;
// for (let i = a; i < b; i++) {
//   summa += i;
// }
// alert(summa)
// for (let i = 0; i < 15; i++) {
//   if (i == 4 || i == 7) {
//     continue;
//   }
//   if (i == 10) {
//     break;
//   }
//   alert(i);
// }
// let arr = ["apple", 5];
// for (let i = 0; arr.length; i++) {
//   alert(arr[i]);
// }
// const titleEls = document.querySelectorAll(".title");
// console.log(titleEls);

// for (let i = 0; i < titleEls.length; i++) {
//   titleEls[i].addEventListener("click", function () {
//     titleEls[i].computedStyleMap.color = "blue";
//   });
// }
// const titleEls = document.querySelector(".cont");
// console.log(titleEls);
// console.log(titleEls.children[0]);
// console.log(titleEls.children[1]);
// const menuEl = document.querySelector(".menu");
// const menuEls = document.querySelectorAll("li");
// console.log(menuEl, menuEls);
// const contEl = document.querySelector(".container");
// const h1El = document.querySelector(".container > h1");
// const btnEl = document.querySelector(".addProduct");
// const divEl = document.querySelector(".products");
// console.log(contEl);
// console.log(inpEl);
// console.log(h1El);
// console.log(btnEl);
// console.log(divEl);
// const parrentClass = divEl.closest(".cont");
// console.log(parrentClass);

// С
// О
// Б
// Ы
// Т
// И
// Я
// btnEl.addEventListener("click", function () {
//   const ProductNameEl = document.querySelector(".productName");
//   const productDescEl = document.querySelector(".productDesc");
//   const productEl = document.createElement("div");
//   productEl.classList.add("product");
//   const productElH3 = document.createElement("h3");
//   productElH3.classList.add(product);
//   const productElP = document.createElement("p");
//   productElP.textContent = productDescEl.value;
//   const productElBtn = document.createElement("button");
//   productEl.classList.add("buy__sneaker");
// });
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const addBtnEl = document.querySelector(".plus__task");

addBtnEl.addEventListener("click", function () {
  const taskName = prompt("Введите название задачи");
  const task = {
    taskName: taskName,
    isDone: false,
  };
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks(tasks);
});
function renderTasks(tasks) {
  const tasksEl = document.querySelector(".tasks");
  tasksEl.replaceChildren();

  tasks.forEach((task, i) => {
    const taskEl = document.createElement("div");
    taskEl.classList.add("task");

    const checkboxEl = document.createElement("input");
    checkboxEl.classList.add("task__checkbox");
    checkboxEl.type = "checkbox";
    if (task.isDone == true) {
      checkboxEl.checked = true;
      taskEl.classList.add("done");
    }
    checkboxEl.addEventListener("click", () => {
      if (checkboxEl.checked == true) {
        h3El.classList.add("done");
        task.isDone = true;
        console.log(tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      } else {
        h3El.classList.remove("done");
        task.isDone = false;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log(tasks);
      }
    });

    const h3El = document.createElement("h3");
    h3El.textContent = task.taskName;
    h3El.classList.add("task__name");

    const delBtnEl = document.createElement("img");
    delBtnEl.src = "./recycle-bin.png";
    delBtnEl.classList.add("task__del");
    delBtnEl.addEventListener("click", function (event) {
      const delTaskEl = event.target.closest(".task");
      tasks.splice(i, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));

      delTaskEl.remove();
    });
    taskEl.append(checkboxEl);
    taskEl.append(h3El);
    taskEl.append(delBtnEl);

    tasksEl.append(taskEl);
  });
}

const searchTaskEl = document.querySelector(".searchTask");
searchTaskEl.addEventListener("input", () => {
  const searchValue = searchTaskEl.value.toLowerCase();
  const searchedTasks = tasks.filter((task) =>
    task.taskName.toLowerCase().startsWith(searchValue),
  );
  renderTasks(searchedTasks);
});
const sortTasksEl = document.querySelector(".sortTask");

sortTasksEl.addEventListener("change", () => {
  const completedTasks = tasks.filter((task) => task.isDone == true);
  const notCompletedTasks = tasks.filter((task) => task.isDone == false);
  if (sortTasksEl.value == "Completed") {
    renderTasks(completedTasks);
  } else if (sortTasksEl.value == "notCompleted") {
    renderTasks(notCompletedTasks);
  } else {
    renderTasks(tasks);
    sortTasksEl.value == "ALL";
  }
});
renderTasks(tasks);
