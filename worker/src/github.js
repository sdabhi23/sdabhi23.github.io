const GITHUB_API = 'https://api.github.com'

async function fetchJson(url, pat) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'portfolio-api',
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${pat}`,
    },
  })
  if (!res.ok) return null
  return res.json()
}

async function fetchAvatarDataUri(avatarUrl) {
  try {
    const sep = avatarUrl.includes('?') ? '&' : '?'
    const res = await fetch(`${avatarUrl}${sep}s=88`, { headers: { 'User-Agent': 'portfolio-api' } })
    if (!res.ok) return null

    const contentType = res.headers.get('content-type') || ''
    if (!contentType.startsWith('image/png') && !contentType.startsWith('image/jpeg')) return null

    const bytes = new Uint8Array(await res.arrayBuffer())
    let binary = ''
    for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i])
    return `data:${contentType};base64,${btoa(binary)}`
  } catch {
    return null
  }
}

// Fetches repo metadata + languages from GitHub's REST API; null on 404.
export async function fetchRepoData(owner, repo, env) {
  const ownerPath = encodeURIComponent(owner)
  const repoPath = encodeURIComponent(repo)
  const pat = await env.GITHUB_PAT.get()

  const [repoData, languages] = await Promise.all([
    fetchJson(`${GITHUB_API}/repos/${ownerPath}/${repoPath}`, pat),
    fetchJson(`${GITHUB_API}/repos/${ownerPath}/${repoPath}/languages`, pat),
  ])

  if (!repoData || repoData.message) return null

  const avatarDataUri = await fetchAvatarDataUri(repoData.owner.avatar_url)

  return {
    ownerLogin: repoData.owner.login,
    repoName: repoData.name,
    description: repoData.description,
    topics: repoData.topics || [],
    licenseSpdxId: repoData.license && repoData.license.spdx_id !== 'NOASSERTION' ? repoData.license.spdx_id : null,
    starCount: repoData.stargazers_count,
    forkCount: repoData.forks_count,
    isFork: repoData.fork,
    isArchived: repoData.archived,
    isPrivate: repoData.private,
    pushedAt: repoData.pushed_at,
    avatarDataUri,
    languages,
  }
}
