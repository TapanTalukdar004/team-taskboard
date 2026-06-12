// Team TaskBoard — v1 baseline
// Shipped in v1: add a task + show the list.
// Coming via Linear issues:
//   AB-1 mark task done (checkbox)   AB-2 delete task (✕)
//   AB-3 progress counter            AB-4 save in localStorage

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

let tasks = []; // each task: { text: "…", done: false }

function addTask() {
  const text = input.value.trim();
  if (!text) return;            // ignore empty input
  tasks.push({ text, done: false });
  input.value = "";
  render();
}

function render() {
  list.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});
