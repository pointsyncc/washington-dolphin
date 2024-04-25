import { webpackBundler } from '@payloadcms/bundler-webpack'; // bundler-import
import { mongooseAdapter } from '@payloadcms/db-mongodb'; // database-adapter-import
import nestedDocs from '@payloadcms/plugin-nested-docs';
import redirects from '@payloadcms/plugin-redirects';
import seo from '@payloadcms/plugin-seo';
import type { GenerateTitle } from '@payloadcms/plugin-seo/types';
import { slateEditor } from '@payloadcms/richtext-slate'; // editor-import
import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import { Logo } from './components/Logo/Logo'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';
import FormBuilder from '@payloadcms/plugin-form-builder';
import Categories from './collections/Categories';
import { Media } from './collections/Media';
import { Pages } from './collections/Pages';
import { Posts } from './collections/Posts';
import { Products } from './collections/Products';
import Users from './collections/Users';
import BeforeDashboard from './components/BeforeDashboard';
import { seed } from './endpoints/seed';
import { Footer } from './globals/Footer';
import { Header } from './globals/Header';
import { Topbar } from './globals/Topbar';
import JobListings from './collections/Jobs';


const generateTitle: GenerateTitle = () => {
  return 'Pekarna Mario'
}

const adapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    region: process.env.S3_REGION,
    // ... Other S3 configuration
    endpoint: process.env.S3_ENDPOINT,
  },
  bucket: process.env.S3_BUCKET,
})

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(), // bundler-config
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
/*       beforeDashboard: [BeforeDashboard], */
      graphics: {
        Logo,
      },
    },
    webpack: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          dotenv: path.resolve(__dirname, './dotenv.js'),
          [path.resolve(__dirname, './endpoints/seed')]: path.resolve(
            __dirname,
            './emptyModuleMock.js',
          ),
        },
      },
    }),
  },
  editor: slateEditor({}), // editor-config
  // database-adapter-config-start
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  // database-adapter-config-end
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Pages, Posts, Media, Categories, Users, Products, JobListings],
  globals: [Header, Footer, Topbar],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  endpoints: [
    // The seed endpoint is used to populate the database with some example data
    // You should delete this endpoint before deploying your site to production
    {
      path: '/seed',
      method: 'get',
      handler: seed,
    },
  ],
  plugins: [
    redirects({
      collections: ['pages', 'posts'],
    }),
    nestedDocs({
      collections: ['categories'],
    }),
    seo({
      collections: ['pages', 'posts', 'job-listings'],
      generateTitle,
      uploadsCollection: 'media',
    }),
    FormBuilder({
      // ...
      fields: {
        text: true,
        textarea: true,
        select: true,
        email: true,
        state: true,
        country: true,
        checkbox: true,
        number: true,
        message: true,
        payment: false,
      },
      redirectRelationships: ['pages'],
    }),
    cloudStorage({
      collections: {
        media: {
          adapter: adapter, // see docs for the adapter you want to use
          prefix: 'web-media',
        },
      },
    }),
  ],
})
