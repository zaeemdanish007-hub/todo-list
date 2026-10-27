// Variables (select items)
const inputField = document.querySelector("input");
const submitBtn = document.querySelector(".submit");
const clearAll = document.querySelector(".clearAll");
const taskList = document.querySelector("ul");

// Logic
const clearAllTasks = () => {
  taskList.innerHTML = "";
};

const addTask = () => {
  let task = inputField.value.trim();

  if (task === "") {
    return;
  }

  let newItem = document.createElement("li");

  newItem.innerHTML = `
    <p>${task}</p>
    <div>
      <button class="check">
        <i class="fa-solid fa-check" style="color: green"></i>
      </button>
      <button class="delete">
        <i class="fa-solid fa-trash" style="color: red"></i>
      </button>
    </div>
  `;

  let checkTask = newItem.querySelector(".check");

  checkTask.addEventListener("click", () => {
    const taskText = newItem.querySelector("p");
    taskText.classList.toggle("completed");
  });

  let deleteTask = newItem.querySelector(".delete");

  deleteTask.addEventListener("click", () => {
    taskList.removeChild(newItem);
  });

  taskList.appendChild(newItem);

  inputField.value = "";
};
//Event Listeners
clearAll.addEventListener("click", clearAllTasks);
submitBtn.addEventListener("click", addTask);
inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
