'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { title: '首页', href: '/' },
  { title: '关于', href: '/about' },
  { title: '作品', href: '/works' },
  { title: '博客', href: '/blog' },
]

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const direction: any = scrollY > lastScrollY ? 'down' : 'up'
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    window.addEventListener('scroll', updateScrollDirection) // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection) // clean up
    }
  }, [scrollDirection])

  return scrollDirection
}

export default function Header() {
  const scrollDirection = useScrollDirection()
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen((open) => !open)

  const menuVars = {
    initial: {
      x: '100%',
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'anticipate',
      },
    },
    exit: {
      x: '100%',
      transition: {
        delay: 1,
        duration: 0.5,
        ease: [0.2, 1, 0.4, 1],
      },
    },
  }
  const menuContainer = {
    initial: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    animate: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  }

  return (
    <header
      className={`sticky ${
        scrollDirection === 'down' ? '-top-24' : 'top-0'
      } duration-500border-b z-30 h-24 border-b border-black/5 bg-white shadow-[0_10px_40px_40px_rgba(0,0,0,0.025)] transition-all`}
    >
      <div className="flex h-full items-center justify-between px-8 text-lg font-medium md:px-16">
        <figure className="flex items-center">
          <a href="/" aria-label="emptyarea.com" className="text-indigo-500">
            <svg
              width="288"
              height="42"
              viewBox="0 0 288 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-48 lg:w-60"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.96191 31V12.9668H14.1367V14.7852H4.25879V21.0879H13.1318V22.8789H4.25879V29.209H14.1367V31H1.96191ZM23.1019 31V12.9668H25.5629L31.6673 25.4834L37.7718 12.9668H40.2328V31H37.9701V16.5488L32.4535 27.8623H30.9154L25.3646 16.5488V31H23.1019ZM49.7579 31V12.9668H57.3731C59.3874 12.9668 60.8708 13.5091 61.8233 14.5938C62.7758 15.6739 63.2521 17.0729 63.2521 18.791C63.2521 20.5456 62.7143 21.9333 61.6388 22.9541C60.5678 23.9704 59.1072 24.4785 57.2569 24.4785H52.0548V31H49.7579ZM52.0548 22.6807H56.8946C58.239 22.6807 59.2507 22.3321 59.9298 21.6348C60.6134 20.9329 60.9552 19.985 60.9552 18.791C60.9552 17.5241 60.6316 16.5397 59.9845 15.8379C59.3419 15.1361 58.3598 14.7852 57.0382 14.7852H52.0548V22.6807ZM76.5211 31V14.7852H70.5328V12.9668H84.8131V14.7852H78.818V31H76.5211ZM98.8128 31V24.2803L92.3734 12.9668H94.7523L99.9613 22.3184L105.17 12.9668H107.549L101.11 24.2803V31H98.8128ZM197.736 31L204.627 12.9668H209.494L216.385 31H211.682L210.055 26.9121H204.039L202.439 31H197.736ZM204.654 23.583H209.439L207.033 17.3076L204.654 23.583ZM224.281 31V12.9668H233.297C235.426 12.9668 236.993 13.5273 238 14.6484C239.007 15.7695 239.511 17.2712 239.511 19.1533C239.511 20.3701 239.203 21.4365 238.588 22.3525C237.973 23.264 237.133 23.943 236.066 24.3896C236.33 24.5947 236.54 24.8249 236.695 25.0801C236.854 25.3308 237.027 25.6794 237.214 26.126L239.347 31H234.637L232.627 26.4062C232.459 26.0143 232.243 25.7295 231.978 25.5518C231.718 25.3741 231.344 25.2852 230.857 25.2852H228.786V31H224.281ZM228.786 21.8193H232.122C232.997 21.8193 233.68 21.6006 234.172 21.1631C234.669 20.721 234.917 20.0511 234.917 19.1533C234.917 17.3441 234.049 16.4395 232.313 16.4395H228.786V21.8193ZM247.409 31V12.9668H260.705V16.4395H251.914V20.2197H259.672V23.7471H251.914V27.5273H260.705V31H247.409ZM267.904 31L274.795 12.9668H279.662L286.553 31H281.85L280.223 26.9121H274.207L272.607 31H267.904ZM274.822 23.583H279.607L277.201 17.3076L274.822 23.583Z"
                fill="black"
              />
              <mask id="empty" maskUnits="userSpaceOnUse" x="127" y="0" width="56" height="42">
                <path d="M183 0H127V42H183V0Z" fill="white" />
              </mask>
              <g mask="url(#empty)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M183 0H137.5H127V42H137.5H183L176 28H175.701C174.981 30.039 173.036 31.5 170.75 31.5H139.25C136.35 31.5 134 29.1494 134 26.25V15.75C134 12.8506 136.35 10.5 139.25 10.5H170.75C173.036 10.5 174.981 11.961 175.701 14H176L183 0Z"
                  fill="black"
                />
                <path
                  d="M168.125 15.75H141.875C140.425 15.75 139.25 16.9253 139.25 18.375V23.625C139.25 25.0747 140.425 26.25 141.875 26.25H168.125C169.575 26.25 170.75 25.0747 170.75 23.625V18.375C170.75 16.9253 169.575 15.75 168.125 15.75Z"
                  fill="black"
                />
              </g>
            </svg>
          </a>
          <figcaption className="hidden">emptyarea.com</figcaption>
        </figure>
        <nav className="ml-auto hidden items-center justify-between gap-16 md:flex">
          <Link href="/">首页</Link>
          <Link href="/works">作品</Link>
          <Link href="/about">关于</Link>
          <Link href="/blog">博客</Link>
        </nav>
        <button
          type="button"
          onClick={toggleMenu}
          className="z-50 flex items-center justify-center px-0 py-2 md:hidden md:p-4"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {open ? (
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#999"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#333"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.nav
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-30 bg-black"
          >
            <motion.ul
              variants={menuContainer}
              initial="initial"
              animate="animate"
              exit="initial"
              className="mx-auto flex flex-col items-start p-24 text-white"
            >
              {navLinks.map((link, index) => {
                return (
                  <div className="my-8 overflow-hidden" key={index}>
                    <NavItem title={link.title} href={link.href} />
                  </div>
                )
              })}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

const NavItem = ({ title, href }: { title: string; href: string }) => {
  const menuItems = {
    initial: {
      y: '300%',
      transition: {
        duration: 0.5,
        ease: 'anticipate',
      },
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'anticipate',
      },
    },
  }
  return (
    <motion.li variants={menuItems} className="text-xl">
      <Link href={href}>{title}</Link>
    </motion.li>
  )
}
