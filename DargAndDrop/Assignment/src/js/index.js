const AllEmployee = document.querySelector(".AllEmployee");

const employee = document.querySelectorAll(".employee");

const SelectedEmployee = document.querySelector(".SelectedEmployee");

const { top, left } = AllEmployee.getBoundingClientRect();

const CreatedPanel = (x, y, name) => {
  const Panel = document.createElement("div");

  Panel.setAttribute("class", "info-panel");

  Panel.innerText = name;

  Panel.style.left = `${x}px`;

  Panel.style.top = `${y}px`;

  return Panel;
};

const removePanel = () => {
  return document.querySelector(".info-panel")?.remove();
};

AllEmployee.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const name = e.target.getAttribute("data-name");

  removePanel();

  if (e.target.getAttribute("class") === "employee") {
    let Panel = CreatedPanel(e.clientX - left, e.clientY - top, name);

    AllEmployee.append(Panel);
  }
});

AllEmployee.addEventListener("click", (e) => {
  removePanel();
});

employee.forEach((each) => {
  each.addEventListener("dragstart", (e) => {
    const empID = e.target.getAttribute("data-id");

    e.dataTransfer.setData("text/plain", empID);

    e.dataTransfer.setData("text/plain", empID);
  });
});

SelectedEmployee.addEventListener("dragenter", (e) => {
  e.preventDefault();

  e.currentTarget.style.border = "5px dashed green";
});

SelectedEmployee.addEventListener("dragleave", (e) => {
  e.preventDefault();

  e.currentTarget.style.border = "2px solid";
});

SelectedEmployee.addEventListener("drop", (e) => {
  const empID = e.dataTransfer.getData("text/plain");

  e.currentTarget.append(document.querySelector(`div[data-id='${empID}']`));

  SelectedEmployee.style.border = "2px solid green";
});

SelectedEmployee.addEventListener("dragover", (e) => {
  e.preventDefault();
});

AllEmployee.addEventListener("dragenter", (e) => {
  e.preventDefault();

  e.currentTarget.style.border = "5px dashed green";
});

AllEmployee.addEventListener("dragleave", (e) => {
  e.preventDefault();

  e.currentTarget.style.border = "2px solid";
});

AllEmployee.addEventListener("drop", (e) => {
  const empID = e.dataTransfer.getData("text/plain");

  e.currentTarget.append(document.querySelector(`div[data-id='${empID}']`));
});

AllEmployee.addEventListener("dragover", (e) => {
  e.preventDefault();
});
