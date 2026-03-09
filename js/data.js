async function loadIssues() {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  displayIssues(data.data);
}

// {
//     "id": 42,
//     "title": "Add role-based access control",
//     "description": "Implement RBAC system with different permission levels for users, moderators, and admins.",
//     "status": "open",
//     "labels": [
//         "enhancement"
//     ],
//     "priority": "high",
//     "author": "rbac_rachel",
//     "assignee": "security_sam",
//     "createdAt": "2024-01-23T08:45:00Z",
//     "updatedAt": "2024-01-23T08:45:00Z"
// }

const displayIssues = (issues) => {
  // console.log(issues)
  
  //? 1. get the issues container
  const container = document.getElementById("issues-container");
  container.innerHTML = "";

  issues.forEach((issue) => {
    console.log(issue);

    //? 2. created div element

const issueCard = document.createElement("div");

issueCard.innerHTML = `
<div class="card bg-base-100 shadow-xl border-t-4 h-[100%]
${issue.status === "open" ? "border-green-500" : "border-purple-500"}">

<div class="card-body">

<div class="justify-between items-center">

<div class="flex justify-between items-center gap-2">

<img 
src="${
issue.priority === "high"
? "assets/Open-Status.png"
: issue.priority === "medium"
? "assets/Open-Status.png"
: "assets/Closed- Status .png"
}"
class="w-6 h-6"
/>

<div class="badge
${
issue.priority === "high"
? "badge-error"
: issue.priority === "medium"
? "badge-warning"
: "bg-[#EEEFF2]"
}">
${issue.priority.toUpperCase()}
</div>

</div>
</div>

<h2 class="card-title text-sm md:text-base">
${issue.title}
</h2>

<p class="text-sm text-gray-500">
${issue.description}
</p>

<div class="flex gap-2 mt-2">

<span class="badge badge-outline badge-error bg-[#FECACA] font-bold"><i class="fa-solid fa-bug"></i>BUG</span>


<span class="badge badge-outline badge-warning bg-[#FDE68A] font-bold"><img src="assets/Vector.png" alt=""> HELP WANTED</span>

</div>

<div class="divider"></div>

<p class="text-xs text-gray-500">
#${issue.id} by ${issue.author}
</p>

<p class="text-xs text-gray-400">
${issue.createdAt}
</p>

</div>
</div>
`;
const innerCard = issueCard.querySelector(".card");
innerCard.addEventListener("click", () => openIssueModal(issue));

//? 3. append the newly created div into the issue container section
container.appendChild(issueCard)

  });

  //? 4. update issue count
updateIssueCount(issues)

};

loadIssues();
