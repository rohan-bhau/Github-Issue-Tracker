function openIssueModal(issue) {
  document.getElementById("modalTitle").innerText = issue.title;

  //? 1. Status badge text + color
  const status = document.getElementById("modalStatus");
  status.innerText = issue.status;
  if (issue.status.toLowerCase() === "open") {
    status.className = "badge badge-success uppercase text-sm";
  } else {
    status.className = "badge badge-purple uppercase text-sm";
  }
  document.getElementById("modalAuthor").innerText =
    "Opened by " + issue.author;

  const createdDate = new Date(issue.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = createdDate.toLocaleDateString(undefined, options);
  document.getElementById("modalDate").innerText =
    "Created on: " + formattedDate;

     //? 2. Labels
  const labelsContainer = document.getElementById("modalLabels");
labelsContainer.innerHTML = "";

issue.labels.forEach(label => {
  const span = document.createElement("span");
  span.className = "badge badge-outline badge-warning flex items-center gap-1";

  //** */ Icon element
  let icon;

  if (label.toLowerCase() === "bug") {
    icon = document.createElement("i");
    icon.className = "fa-solid fa-bug";
  } else if (label.toLowerCase() === "help wanted") {
    icon = document.createElement("img");
    icon.src = "assets/Vector.png";
    icon.alt = "Help Wanted Icon";
    icon.className = "w-4 h-4";
  }

  if (icon) span.appendChild(icon);

  //? Label text
  const textNode = document.createTextNode(" " + label.toUpperCase());
  span.appendChild(textNode);

  labelsContainer.appendChild(span);
});

  document.getElementById("modalDescription").innerText = issue.description;

  document.getElementById("modalAssignee").innerText = issue.assignee || "Unassigned";

  //? Priority badge with color
  const priority = document.getElementById("modalPriority");
  priority.innerText = issue.priority.toUpperCase();
  if (issue.priority.toLowerCase() === "high") {
    priority.className = "badge badge-error uppercase px-3 py-1";
  } else if (issue.priority.toLowerCase() === "medium") {
    priority.className = "badge badge-warning uppercase px-3 py-1";
  } else {
    priority.className = "badge badge-outline uppercase px-3 py-1";
  }

  document.getElementById("issueModal").showModal();
}

//? Close button event listener
document.getElementById("closeModalBtn").addEventListener("click", () => {
  document.getElementById("issueModal").close();
});
