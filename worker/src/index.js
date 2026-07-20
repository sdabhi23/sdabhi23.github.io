import { buildCardHtml } from './card.js'
import { renderPng } from './render.js'
import { fetchRepoData } from './github.js'
import languageColors from './language-colors.json'

const TARGETS = [
  { owner: 'sdabhi23', repo: 'bsedata' },
  { owner: 'sdabhi23', repo: 'streaming-data-pipeline' },
  { owner: 'sdabhi23', repo: 'frontporch' },
]

async function syncOgImages(env) {
  for (const { owner, repo } of TARGETS) {
    const data = await fetchRepoData(owner, repo, env)
    if (!data) {
      console.error(`repo not found: ${owner}/${repo}`)
      continue
    }

    const cardHtml = buildCardHtml(data, languageColors)
    const png = await renderPng(cardHtml, { width: 1200, height: 630 })

    await env.BUCKET.put(`repo/${owner}/${repo}.png`, png, {
      httpMetadata: { cacheControl: 'public, max-age=86400' },
    })
  }
}

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(syncOgImages(env))
  },
}
