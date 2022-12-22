import {type DocumentActionProps, type SanityDocument} from 'sanity'
// type DocumentActionDescription

export type ShopifyDocument = SanityDocument & {
  store: {
    id: number
    productId: number
    isDeleted: boolean
  }
}

export interface ShopifyDocumentActionProps extends DocumentActionProps {
  published: ShopifyDocument
  draft: ShopifyDocument
}
