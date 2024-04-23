import fs from 'fs'
import path from 'path'
import type { Payload } from 'payload'
import { categories } from './categories'
import { header } from './header'
import { imageLogo } from './image-logo'
import { imageProductsPage } from './image-products'
import { Products } from './products'
import { forms } from './forms'
import { topBar } from './topbar'
import { imageContactUsPage } from './image-contact-us'
import { productsPage } from './pages/products'
import { ogImage } from './og-image'

const collections = ['categories', 'media', 'pages', 'posts', 'products', 'forms']
const globals = ['header', 'footer']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async (payload: Payload): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not

  payload.logger.info(`— Clearing media...`)

  const mediaDir = path.resolve(__dirname, '../../media')
  if (fs.existsSync(mediaDir)) {
    fs.rmdirSync(mediaDir, { recursive: true })
  }

  payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  await Promise.all([
    ...collections.map(async collection =>
      payload.delete({
        collection: collection as 'media',
        where: {},
      }),
    ), // eslint-disable-line function-paren-newline
    // ...globals.map(async global =>
    //   payload.updateGlobal({
    //     slug: global as 'header',
    //     data: {},
    //   }),
    // ), // eslint-disable-line function-paren-newline
  ])

  payload.logger.info(`— Seeding media...`)

  const [image1Doc, image2Doc, image3Doc, ogImageDoc] = await Promise.all([
    await payload.create({
      collection: 'media',
      filePath: path.resolve(__dirname, imageLogo.filename),
      data: imageLogo,
    }),

    await payload.create({
      collection: 'media',
      filePath: path.resolve(__dirname, imageProductsPage.filename),
      data: imageProductsPage,
    }),

    await payload.create({
      collection: 'media',
      filePath: path.resolve(__dirname, imageContactUsPage.filename),
      data: imageContactUsPage,
    }),

    await payload.create({
      collection: 'media',
      filePath: path.resolve(__dirname, ogImage.filename),
      data: ogImage,
    }),
  ])

  let image1ID = image1Doc.id
  let image2ID = image2Doc.id
  let image3ID = image3Doc.id
  let ogImageID = ogImageDoc.id

  if (payload.db.defaultIDType === 'text') {
    image1ID = `"${image1ID}"`
    image2ID = `"${image2ID}"`
    image3ID = `"${image3ID}"`
    ogImageID = `"${ogImageID}"`
  }

  /*   payload.logger.info(`— Seeding demo author and user...`)

  await Promise.all(
    ['demo-author@payloadcms.com', 'demo-user@payloadcms.com'].map(async email => {
      await payload.delete({
        collection: 'users',
        where: {
          email: {
            equals: email,
          },
        },
      })
    }),
  )

  let [{ id: demoAuthorID }, { id: demoUserID }] = await Promise.all([
    await payload.create({
      collection: 'users',
      data: {
        email: 'demo-author@payloadcms.com',
        name: 'Demo Author',
        password: 'password',
        roles: ['admin'],
      },
    }),
    await payload.create({
      collection: 'users',
      data: {
        email: 'demo-user@payloadcms.com',
        name: 'Demo User',
        password: 'password',
        roles: ['user'],
      },
    }),
  ]) */

  /*   payload.logger.info(`— Seeding media...`)

  const [image1Doc, image2Doc] = await Promise.all([
    await payload.create({
      collection: 'media',
      filePath: path.resolve(__dirname, 'image-1.jpg'),
      data: image1,
    }),
    await payload.create({
      collection: 'media',
      filePath: path.resolve(__dirname, 'image-2.jpg'),
      data: image2,
    }),
  ])
 */

  payload.logger.info(`— Seeding categories...`)
  let categoryID = ''
  categories.forEach(async category => {
    const _categoriesRes = await payload.create({
      collection: 'categories',
      data: category,
    })
    categoryID = _categoriesRes.id
  })

  payload.logger.info(`— Seeding products...`)
  let productID = ''
  Products.forEach(async product => {
    const _productsRes = await payload.create({
      collection: 'products',
      data: product,
    })
    productID = _productsRes.id
  })

  payload.logger.info(`— Seeding pages...`)
  /*   await payload.create({
    collection: 'pages',
    //replace FEATURED_IMAGE_ID with image1ID, PRODUCT_ID with productID, CATEGORY_ID with categoryID
    data: JSON.parse(JSON.stringify({ ...productsPage }).replace(/"\{\{FEATURED_IMAGE_ID\}\}"/g, image2ID).replace(/"\{\{PRODUCT_ID\}\}"/g, productID).replace(/"\{\{CATEGORY_ID\}\}"/g, categoryID)),
  }) */

  payload.logger.info(`— Seeding forms...`)
  forms.forEach(async form => {
    await payload.create({
      collection: 'forms',
      data: form,
    })
  })
  /*   let image1ID = image1Doc.id
  let image2ID = image2Doc.id

  if (payload.db.defaultIDType === 'text') {
    image1ID = `"${image1Doc.id}"`
    image2ID = `"${image2Doc.id}"`
    demoAuthorID = `"${demoAuthorID}"`
  } */

  payload.logger.info(`— Seeding header...`)

  await payload.updateGlobal({
    slug: 'header',
    data: JSON.parse(JSON.stringify({ ...header }).replace(/"\{\{LOGO_ID\}\}"/g, image1ID)),
  })

  payload.logger.info(`— Seeding topbar...`)

  await payload.updateGlobal({
    slug: 'topbar',
    data: topBar,
  })

  payload.logger.info('Seeded database successfully!')
}
