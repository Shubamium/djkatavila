// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Mixes } from './collections/Mixes'
import { Playlist } from './collections/Playlist'
import { Schedules } from './collections/Schedules'
import { General } from './collections/globals/General'
import { s3Storage } from '@payloadcms/storage-s3'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Mixes,Playlist,Schedules,Users, Media],
	globals:[General],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
		s3Storage({
			bucket:'djkatavila',
			collections:{
				media:{
					disablePayloadAccessControl:true
				}
			},
			config:{
				endpoint:'https://minio-api.venmi.art',
				credentials:{
					accessKeyId: process.env.MINIO_AK ?? '',
					secretAccessKey: process.env.MINIO_SK ?? '',
				},
				region:'us-en-1',

				forcePathStyle:true,
			}
		})
  ],
})
