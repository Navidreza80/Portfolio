/* eslint-disable */

export async function getRepos() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Authorization: `token ${token}`,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch repos");
  }

  const repos = await res.json();

  return repos.map((repo: any) => ({
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    topics: repo.topics || [],
    watchers: repo.watchers_count,
    updatedAt: repo.updated_at, // ISO date string
    language: repo.language || "N/A",
  }));
}

export async function getRepoDetail(repoName: string) {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  // Fetch repo info
  const repoRes = await fetch(
    `https://api.github.com/repos/${username}/${repoName}`,
    {
      headers: { Authorization: `token ${token}` },
    }
  );
  if (!repoRes.ok) throw new Error("Failed to fetch repo info");
  const repo = await repoRes.json();

  // Fetch README
  const readmeRes = await fetch(
    `https://api.github.com/repos/${username}/${repoName}/readme`,
    {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3.raw", // get raw markdown
      },
    }
  );
  const readme = readmeRes.ok ? await readmeRes.text() : "No README available.";

  // Return info
  return {
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    homepage: repo.homepage || null,
    topics: repo.topics || [],
    readme,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    watchers: repo.watchers_count,
    updatedAt: repo.updated_at, // ISO date string
    language: repo.language || "N/A",
  };
}
