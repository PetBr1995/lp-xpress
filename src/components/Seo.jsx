import { useEffect } from 'react'

const SITE_URL = 'https://graficaxpress.com.br'
const DEFAULT_IMAGE = '/banner-home-xpress.png'

function ensureMeta(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function ensureLink(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function Seo({
  title,
  description,
  pathname = '/',
  image = DEFAULT_IMAGE,
  robots = 'index, follow',
  jsonLd = null,
}) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${pathname}`
    const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

    document.title = title
    document.documentElement.lang = 'pt-BR'

    ensureMeta('meta[name="description"]', { name: 'description', content: description })
    ensureMeta('meta[name="robots"]', { name: 'robots', content: robots })

    ensureMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Gráfica Xpress' })
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    ensureMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    ensureMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    ensureMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })

    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })

    ensureLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl })

    const oldScript = document.getElementById('seo-jsonld')
    if (oldScript) oldScript.remove()

    if (jsonLd) {
      const script = document.createElement('script')
      script.id = 'seo-jsonld'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [description, image, jsonLd, pathname, robots, title])

  return null
}

export default Seo
