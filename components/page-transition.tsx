'use client'

import { AnimatePresence, easeIn, easeInOut, motion } from 'framer-motion'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const url = `${pathname}?${searchParams}`
  // useEffect(() => {
  //   const url = `${pathname}?${searchParams}`
  // }, [pathname, searchParams])
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={url}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } }}
        exit={{ opacity: 0, y: 100, transition: { duration: 0.5, ease: easeInOut } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
