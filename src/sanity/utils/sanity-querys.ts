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

export async function getPosts(lng: string) {
  return sanityClient.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      "title": title.${lng},
      "description": description.${lng},
      author,
      timeToRead,
      "body": body_${lng},
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
    }`,
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
      author,
      "body": body_${lng},
      timeToRead,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
    }`,
    undefined,
    { cache: 'no-store' },
  )
}

export async function getPrices(tarifa) {
  return sanityClient.fetch(
    groq`*[_type == "${tarifa}"]{
      _id,
      title,
      price,
      priceDiscount,
      description,
      order,
      "icon": icon.asset->url,
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
      "profileHoverImage": profileHoverImage.asset->url,
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
    }`,
    undefined,
    { cache: 'no-store' },
  )
}
