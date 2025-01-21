import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: 'okw9rbci',
  dataset: 'production',
  apiVersion: '2024-01-08',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
