'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  totalPage: number
}

const Pagination: FC<PaginationProps> = (
  {
    hasNextPage,
    hasPrevPage,
    totalPage,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const per_items = '5'
  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? per_items


  return (
    <div className='flex gap-2'>
      <button
        className='bg-blue-500 disabled:bg-gray-200 text-white p-1'
        disabled={!hasPrevPage}
        onClick={() => { router.push(`/blog/?page=${Number(page) - 1}&per_page=${per_page}`) }}>上一页</button>
      <div>
        {page} / {Math.ceil(totalPage / Number(per_page))}
      </div>
      <button
        className='bg-blue-500 disabled:bg-gray-200 text-white p-1'
        disabled={!hasNextPage}
        onClick={() => { router.push(`/blog/?page=${Number(page) + 1}&per_page=${per_page}`) }}>下一页</button>
    </div>
  )
}

export default Pagination