---
title: '在 Next.js 13 用 Framer Motion 添加页面过渡'
description: 'Sample meta description, it gets added on share cards'
date: '2023-02-28T12:00:00'
author: 'Sample Author'
authorUrl: 'https://example.com/'
---

在 components 下建立 page-transition.tsx 文件

```page-transition.tsx
'use client'

import { AnimatePresence, easeIn, easeInOut, motion } from 'framer-motion'
import { usePathname, useSearchParams } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const url = `${pathname}?${searchParams}`
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={url}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } }}
        exit={{ opacity: 0, y: 100, transition: { duration: 0.5, ease: easeInOut } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
```

然后将这个组件引入到 layout.tsx

```layout.tsx
import PageTransition from '@/components/page-transition'

...
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <PageTransition>
          <Header />
          <main>{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  )
}

```
