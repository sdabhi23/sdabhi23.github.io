const COLORS = {
  bg: '#ffffff',
  textPrimary: '#18140f',
  textSecondary: '#6b6259',
  textBody: '#4a453e',
  textFaint: '#9b948a',
  bgTinted: '#e7dfd2',
}

const FONT_SIZES = {
  title: 50,
  description: 45,
  avatarInitials: 38,
  stats: 45,
  pill: 25
}

const FALLBACK_LANGUAGE_COLOR = '#d8d2c5'

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatCount(n) {
  if (n < 1000) return String(n)
  if (n < 10000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
  if (n < 1000000) return Math.round(n / 1000) + 'k'
  return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'm'
}

function relativeTime(dateStr) {
  const sec = Math.max(0, Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000))
  const units = [
    ['y', 31536000],
    ['mo', 2592000],
    ['w', 604800],
    ['d', 86400],
    ['h', 3600],
    ['m', 60],
  ]
  for (const [label, secs] of units) {
    const value = Math.floor(sec / secs)
    if (value >= 1) return `last updated ${value}${label} ago`
  }
  return 'updated just now'
}

// Collapses everything past the top `max - 1` languages into a single "Other" bucket.
function topLanguages(languages, max = 3) {
  const entries = Object.entries(languages || {}).filter(([, bytes]) => bytes > 0)
  if (entries.length === 0) return []
  const total = entries.reduce((sum, [, bytes]) => sum + bytes, 0)
  entries.sort((a, b) => b[1] - a[1])

  if (entries.length <= max) {
    return entries.map(([name, bytes]) => ({ name, pct: (bytes / total) * 100 }))
  }
  const top = entries.slice(0, max - 1)
  const restBytes = entries.slice(max - 1).reduce((sum, [, bytes]) => sum + bytes, 0)
  return [
    ...top.map(([name, bytes]) => ({ name, pct: (bytes / total) * 100 })),
    { name: 'Other', pct: (restBytes / total) * 100 },
  ]
}

function pill(label) {
  return `<div style="display:flex;font-size:${FONT_SIZES.pill}px;border:2px solid ${COLORS.textFaint};padding:3px 15px;border-radius:30px;flex-shrink:0;">${escapeHtml(label)}</div>`
}

function dot(color, size = '15px') {
  return `<div style="display:flex;width:${size};height:${size};border-radius:50%;background:${color};flex-shrink:0;"></div>`
}

function starIcon(size) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" />
    </svg> 
  `
}

function forkIcon(size) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />
      <path d="M12 12l0 4" />
    </svg>
  `
}

// Self-contained HTML string, inline styles only (satori's CSS is a flexbox-only
// subset). Previews directly in a browser — see open-graph/preview.js.
export function buildCardHtml(data, languageColors = {}) {
  const {
    ownerLogin,
    repoName,
    description,
    topics = [],
    licenseSpdxId,
    starCount,
    forkCount,
    isFork,
    isArchived,
    isPrivate,
    pushedAt,
    avatarDataUri,
  } = data

  const initials = ownerLogin.slice(0, 2).toUpperCase()

  const avatar =
    avatarDataUri
      ? `<img src="${avatarDataUri}" style="display:flex;width:80px;height:80px;border-radius:10%;" />`
      : `<div style="display:flex;width:80px;height:80px;border-radius:10%;background:${COLORS.bgTinted};color:${COLORS.textFaint};align-items:center;justify-content:center;font-weight:500;font-size:${FONT_SIZES.avatarInitials}px;">${escapeHtml(initials)}</div>`

  const descriptionHtml = description
    ? `<div style="display:flex;font-family:'IBM Plex Sans';font-size:${FONT_SIZES.description}px;line-height:1.55;max-width:92%;line-clamp:2;">${description}</div>`
    : ''

  const shownTopics = topics
  const pillsRowHtml = shownTopics.length
    ? `<div style="display:flex;gap:16px;flex-wrap:wrap;">${shownTopics.map(pill).join('')}</div>`
    : ''

  const langs = topLanguages(data.languages, 3)
  const languageBlockHtml = langs.length
    ? `<div style="display:flex;flex-direction:column-reverse;gap:32px;">
        <div style="display:flex;width:100%;height:20px;overflow:hidden;">
          ${langs.map((l) => `<div style="display:flex;width:${l.pct}%;height:100%;background:${languageColors[l.name] || FALLBACK_LANGUAGE_COLOR};"></div>`).join('')}
        </div>
      </div>`
    : ''

  return `
  <div style="display:flex;flex-direction:column;width:1200px;height:630px;background:${COLORS.bg};font-family:'IBM Plex Mono';color:${COLORS.textBody};">
    <div style="display:flex;flex-direction:column;justify-content:space-between;width:100%;flex:1;padding:50px;">
      <div style="display:flex;align-items:center;gap:14px;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:6px;font-size:${FONT_SIZES.title}px;white-space:nowrap;">
          <span style="display:flex;color:${COLORS.textSecondary};">${escapeHtml(ownerLogin)}/</span>
          <span style="display:flex;color:${COLORS.textPrimary};font-weight:600;">${escapeHtml(repoName)}</span>
        </div>
        ${avatar}
      </div>

      ${descriptionHtml}

      ${pillsRowHtml}

      <div style="display:flex;align-items:center;justify-content:space-between;font-size:${FONT_SIZES.stats}px;">
        <div style="display:flex;gap:22px;align-items:center;">
          <div style="display:flex;align-items:center;gap:6px;">${starIcon(FONT_SIZES.stats)}<span style="display:flex;">${formatCount(starCount)}</span></div>
          <div style="display:flex;align-items:center;gap:6px;">${forkIcon(FONT_SIZES.stats)}<span style="display:flex;">${formatCount(forkCount)}</span></div>
        </div>
        <div style="display:flex;color:${COLORS.textFaint};">${relativeTime(pushedAt)}</div>
      </div>
    </div>
    ${languageBlockHtml}
  </div>`
}