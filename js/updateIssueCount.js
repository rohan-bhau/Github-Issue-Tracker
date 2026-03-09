const updateIssueCount = (issues) =>{
    const countElement = document.getElementById("issueCount")
    countElement.innerText=issues.length
}