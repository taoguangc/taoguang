export const runtime = 'edge'

import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { Mdx } from '@/components/mdx-components'

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPageFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/')
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata | undefined> {
  const post = await getPageFromParams(params)

  if (!post) {
    return {}
  }

  const { title, description } = post

  return {
    title,
    description,
  }
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath.split('/'),
  }))
}

export default async function PostPage({ params }: PostProps) {
  // const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  const post = await getPageFromParams(params)
  if (!post) notFound()

  return (
    <article className="prose mx-auto py-6">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && <p className="mt-0 text-xl text-slate-700">{post.description}</p>}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  )
}
