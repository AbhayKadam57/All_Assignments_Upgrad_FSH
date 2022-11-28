const AllEmployee = document.querySelector(".employee-box");

const employeeBox = document.querySelectorAll(".employee");

const shortList = document.querySelector(".shortList");

const { top, left } = AllEmployee.getBoundingClientRect();

console.log(AllEmployee.getBoundingClientRect());

const createPanel = (x, y, name) => {
  const createPnl = document.createElement("div");

  createPnl.setAttribute("class", "info-panel");

  createPnl.innerText = name;

  createPnl.style.left = `${x}px`;

  createPnl.style.top = `${y}px`;

  return createPnl;
};

const removePanel = () => document.querySelector(".info-panel")?.remove();

AllEmployee.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  removePanel();

  if (e.target.getAttribute("class") === "employee") {
    console.log(e.clientX, e.clientY);

    let name = e.target.getAttribute("data-name");

    const infoPanel = createPanel(e.clientX - left, e.clientY - top, name);

    AllEmployee.append(infoPanel);
  }
});

AllEmployee.addEventListener("click", removePanel);

// drag and drop

console.log(employeeBox);

employeeBox.forEach((box) => {
  box.addEventListener("dragstart", (e) => {
    removePanel();

    const empId = e.target.getAttribute("data-id");

    e.dataTransfer.setData("text/plain", empId);
  });
});

shortList.addEventListener("dragenter", (e) => {
  e.preventDefault();

  e.currentTarget.style.border = "2px dashed black";
});

shortList.addEventListener("dragleave", (e) => {
  e.preventDefault();

  e.currentTarget.style.border = "2px solid green";
});

shortList.addEventListener("drop", (e) => {
  e.preventDefault;

  const empId = e.dataTransfer.getData("text/plain");

  console.log(empId);

  e.currentTarget.append(document.querySelector(`div[data-id='${empId}']`));

  e.currentTarget.style.border = "2px solid green";
});

shortList.addEventListener("dragover", (e) => {
  e.preventDefault();
});

//

AllEmployee.addEventListener("dragenter", (e) => {
  e.preventDefault();

  e.currentTarget.style.border = "2px dashed black";
});

AllEmployee.addEventListener("dragleave", (e) => {
  e.preventDefault();

  e.currentTarget.style.border = "2px solid green";
});

AllEmployee.addEventListener("drop", (e) => {
  e.preventDefault;

  const empId = e.dataTransfer.getData("text/plain");

  console.log(empId);

  e.currentTarget.append(document.querySelector(`div[data-id='${empId}']`));

  e.currentTarget.style.border = "2px solid green";
});

AllEmployee.addEventListener("dragover", (e) => {
  e.preventDefault();
});
