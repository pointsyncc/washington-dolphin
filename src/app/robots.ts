import { MetadataRoute } from 'next'
//IUmport dotenv
import dotenv from 'dotenv'
dotenv.config()

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      //disallow: '/private/',
    },
    sitemap: "https://www.pekarnamario.hr/sitemap.xml"
  }
}