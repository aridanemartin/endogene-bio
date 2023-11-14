import { createClient, groq } from 'next-sanity'
import schemas from '../schemas'

// import { Project } from '@/types/Project'

// import { Page } from '@/types/Page'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  apiVersion: '2023-03-09',
  schema: { types: schemas },
  useCdn: false,
}

export const sanityClient = createClient(config)

export async function getPosts() {
  return sanityClient.fetch(groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      description,
      author,
      timeToRead,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
    }`)
}

export async function getPost(slug: string) {
  console.log('===getPost===', slug)
  return sanityClient.fetch(
    groq`*[_type == "post" && slug.current == '${slug}'][0]{
      _id,
      _createdAt,
      title,
      description,
      author,
      body,
      timeToRead,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
    }`,
  )
}

// export async function getProject(slug: string): Promise<Project> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "project" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       name,
//       "slug": slug.current,
//       "image": image.asset->url,
//       url,
//       content
//     }`,
//     { slug },
//   )
// }

// export async function getPages(): Promise<Page[]> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "page"]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current
//     }`,
//   )
// }

// export async function getPage(slug: string): Promise<Page> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "page" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current,
//       content
//     }`,
//     { slug },
//   )
// }
