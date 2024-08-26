import { createClient, groq } from 'next-sanity'
import schemas from '../schemas'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  apiVersion: '2023-03-09',
  schema: { types: schemas },
  useCdn: false,
}

export const sanityClient = createClient(config)

export async function getPosts(lng: string) {
  return sanityClient.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      publishedAt,
      "title": title.${lng},
      "description": description.${lng},
      timeToRead,
      "body": body_${lng},
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
    } | order(publishedAt desc)`,
    undefined,
    { cache: 'no-store' },
  )
}

export async function getPost(slug: string, lng: string) {
  return sanityClient.fetch(
    groq`*[_type == "post" && slug.current == '${slug}'][0]{
      _id,
      _createdAt,
       "title": title.${lng},
      "description": description.${lng},
      "body": body_${lng},
      timeToRead,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
    }`,
    undefined,
    { cache: 'no-store' },
  )
}

export async function getTeamMembers() {
  return sanityClient.fetch(
    groq`*[_type == "team"]{
      _id,
      name,
      position,
      bio,
      email,
      linkedin,
      "profileImage": profileImage.asset->url,
      priority,
      isFemale,
      isScientist
    }`,
    undefined,
    { cache: 'no-store' },
  )
}

export async function getPositions() {
  return sanityClient.fetch(
    groq`*[_type == "positions"]{
      _id,
      positionName,
      positionLocation,
      positionType,
      positionDescription,
      linkToApply
    }`,
    undefined,
    { cache: 'no-store' },
  )
}
