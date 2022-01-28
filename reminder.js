let form = document.getElementsByTagName("form")[0];
let body = document.getElementsByTagName("body")[0];
let titleInput = document.getElementById("title");
let priorityInput = document.getElementById("priority");
let colorInput = document.getElementById("color");
let descriptionInput = document.getElementById("Description");
let button2 = document.getElementById("two");
let arrayofReminders = [];

function Reminder(title, priority, color, description) {
  this.title = title;
  this.priority = priority;
  this.color = color;
  this.description = description;
}

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  if (
    titleInput.value === "" ||
    priorityInput.value === "" ||
    descriptionInput.value === ""
  ) {
    alert("Please enter valid data");
    return;
  }
  if (priorityInput.value.length < 3) {
    alert("Priority should be three characters");
    return;
  }
  if (descriptionInput.value.length < 3) {
    alert("Description should be at least three characters");
    return;
  }
  let title = titleInput.value;
  let priority = priorityInput.value;
  let color = colorInput.value;
  let description = descriptionInput.value;
  
  let newReminder = new Reminder(title, priority, color, description);
  arrayofReminders.push(newReminder);
  titleInput.value = ""
  priorityInput.value = ""
  descriptionInput.value = ""
  console.log(arrayofReminders);
});

button2.addEventListener("click", function () {
  let tables = document.getElementsByTagName("table");
  if (tables.length != 0) {
    body.removeChild(tables[0]);
  }
  if (arrayofReminders.length === 0) {
    alert("There are no reminders");
    return;
  }
  let table = document.createElement("table");
  let header = table.createTHead();
  let row = header.insertRow(0);
  row.insertCell(0).innerHTML += "Title";
  row.insertCell(1).innerHTML += "Priority";
  row.insertCell(2).innerHTML += "Description";
  for (i = 0; i < 3; i++) {
    let cell = row.cells[i];
    cell.style.border = "1px solid black";
    let width = 100 * (i + 1);
    cell.style.width = `${width}px`;
  }
  header.appendChild(row);
  table.appendChild(header);

  let rowIndex = 0;
  for (let element of arrayofReminders) {
    let row = table.insertRow(rowIndex);
    row.insertCell(0).innerHTML += `${element.title}`;
    row.cells[0].style.color = `${element.color}`;
    row.insertCell(1).innerHTML += `${element.priority}`;
    row.insertCell(2).innerHTML += `${element.description}`;
    for (i = 0; i < 3; i++) {
      let cell = row.cells[i];
      cell.style.border = "1px solid black";
      let width = 100 * (i + 1);
      cell.style.width = `${width}px`;
    }
    table.appendChild(row);
    rowIndex++;
  }
  body.appendChild(table);

});
