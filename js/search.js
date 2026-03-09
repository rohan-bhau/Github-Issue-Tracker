const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", async function () {
  const text = searchInput.value.trim();

  if (!text) return;

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`,
  );

  const data = await res.json();

  displayIssues(data.data);
});
