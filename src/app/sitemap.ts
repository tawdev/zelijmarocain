import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zelijmarocain.com'
  
  return [
    '',
    '/about',
    '/collections',
    '/portfolio',
    '/bespoke',
    '/craftsmanship',
    '/contact',
    '/process'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}