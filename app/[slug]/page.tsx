export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { Mdx } from '@/components/mdx-components'

interface PostProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params: { slug } }: PostProps): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) {
    return {}
  }

  const { title, description } = post

  return {
    title,
    description,
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export default async function PostPage({ params: { slug } }: PostProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  if (!post) notFound()

  return (
    <article className="prose mx-auto py-6">
      <h1>{post.title}</h1>
      {post.description && <p className="text-xl">{post.description}</p>}
      <hr />
      <Mdx code={post.body.code} />
    </article>
  )
}
