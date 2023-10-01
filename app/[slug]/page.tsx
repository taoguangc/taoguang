export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { allPages } from 'contentlayer/generated'
import { Mdx } from '@/components/mdx-components'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params: { slug } }: PageProps): Promise<Metadata | undefined> {
  const page = allPages.find((page) => page._raw.flattenedPath === slug)

  if (!page) {
    return {}
  }

  const { title, description } = page

  return {
    title,
    description,
  }
}

export async function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page._raw.flattenedPath,
  }))
}

export default async function PagePage({ params: { slug } }: PageProps) {
  const page = allPages.find((page) => page._raw.flattenedPath === slug)
  if (!page) notFound()

  return (
    <article className="prose mx-auto py-6">
      <h1>{page.title}</h1>
      {page.description && <p className="text-xl">{page.description}</p>}
      <hr />
      <Mdx code={page.body.code} />
    </article>
  )
}
