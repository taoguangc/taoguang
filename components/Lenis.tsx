'use client'
import { ReactLenis } from '@studio-freight/react-lenis'

export default function Lenis({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1 }}>
      {children}
    </ReactLenis>
  )
}
