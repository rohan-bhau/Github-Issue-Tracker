const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", async () => {

    const activeTab = document.querySelector(".tab.active");
    activeTab.classList.remove("active", "btn-primary", "text-white");

    tab.classList.add("active", "btn-primary", "text-white");

    const status = tab.dataset.status;

    const res = await fetch(
      "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    );

    const data = await res.json();

    let issues = data.data;

    if (status !== "all") {
      issues = issues.filter((issue) => issue.status === status);
    }

    displayIssues(issues);
  });
});


