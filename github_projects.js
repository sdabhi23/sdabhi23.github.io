fetch("https://portfolio-api.shreydabhi.dev/github_repos/?repos=bsedata,monaco-json-viewer,streaming-data-pipeline", {
  method: "GET",
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    const githubProjects = document.getElementById("github-projects");
    Object.values(result.data).forEach((repo) => {
      var githubLink = document.createElement("a");
      githubLink.href = repo.url;

      var githubImage = document.createElement("img");
      githubImage.src = repo.openGraphImageUrl;
      githubImage.className = "github-card-img";

      githubLink.appendChild(githubImage);
      githubProjects.appendChild(githubLink);
    });
  })
  .catch((error) => console.log("error", error));
