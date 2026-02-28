import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',      // Had l-9a3ida kat-طبق 3la ga3 l-moteurs de recherche
      allow: '/',          // Khellihom i-skanniw s-site kamel
      disallow: [
        '/api/',           // Mat-khellihomch i-dkhalo l les routes dyal API
        '/private/',       // Ila 3ndek chi dossier fih hwayj khassin
        '/admin/',         // Ila 3ndek dashboard d l-admin
      ],
    },
    sitemap: 'https://zelijmarocain.com/sitemap.xml', // Darori t-zidha hna
  }
}