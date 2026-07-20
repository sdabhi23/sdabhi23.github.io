import satori, { init as initSatori } from 'satori/standalone'
import yogaWasm from 'satori/yoga.wasm'
import { html } from 'satori-html'
import { Resvg } from '@cf-wasm/resvg/workerd'

import ibmPlexMonoMedium from '../fonts/IBMPlexMono-Medium.ttf'
import ibmPlexMonoSemiBold from '../fonts/IBMPlexMono-SemiBold.ttf'
import ibmPlexSansRegular from '../fonts/IBMPlexSans-Regular.ttf'
import ibmPlexSansMedium from '../fonts/IBMPlexSans-Medium.ttf'

const FONTS = [
  { name: 'IBM Plex Mono', data: ibmPlexMonoMedium, weight: 500, style: 'normal' },
  { name: 'IBM Plex Mono', data: ibmPlexMonoSemiBold, weight: 600, style: 'normal' },
  { name: 'IBM Plex Sans', data: ibmPlexSansRegular, weight: 400, style: 'normal' },
  { name: 'IBM Plex Sans', data: ibmPlexSansMedium, weight: 500, style: 'normal' },
]

let satoriInit
function ensureSatoriInit() {
  if (!satoriInit) satoriInit = initSatori(yogaWasm)
  return satoriInit
}

export async function renderSvg(cardHtml, { width = 1200, height = 630 } = {}) {
  await ensureSatoriInit()
  return satori(html(cardHtml), { width, height, fonts: FONTS })
}

export async function renderPng(cardHtml, { width = 1200, height = 630 } = {}) {
  const svg = await renderSvg(cardHtml, { width, height })
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: width } })
  return resvg.render().asPng()
}
