import {AssetSource, defineConfig, isDev} from 'sanity'

import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas/index'
import { structure } from './desk/index'

import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { imageHotspotArrayPlugin } from 'sanity-plugin-hotspot-array'
import { media, mediaAssetSource } from 'sanity-plugin-media'
import { customDocumentActions } from './plugins/customDocumentActions/index'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'fastlane-studio',
  title: 'Fastlane [Hydrogen]',
  dataset: 'production',
  projectId: 'kvnrtea7',
  basePath: '/studio',

  plugins: [
    deskTool({structure}),
    colorInput(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    file: {
      assetSources: (previousAssetSources: AssetSource[]) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
    image: {
      assetSources: (previousAssetSources: AssetSource[]) => {
        return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
      },
    },
  },
})
