// Team TaskBoard
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const counter = document.getElementById("counter");

let tasks = []; // each task: { text, done }

function addTask() {
  const text = input.value.trim();
  if (!text) return;
  tasks.push({ text, done: false });
  input.value = "";
  render();
  updateCounter();
}

function updateCounter() {
  const total = tasks.length;
  const done = tasks.filter((t) => t.done).length;
  counter.textContent = total === 0 ? "" : `${done} of ${total} done`;
}

function render() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      if (checkbox.checked) updateCounter();
      render();
    });

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.done) span.classList.add("done");

    const delBtn = document.createElement("button");
    delBtn.textContent = "✕";
    delBtn.className = "del";
    delBtn.addEventListener("click", () => {
      tasks.splice(index);
      render();
      updateCounter();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});