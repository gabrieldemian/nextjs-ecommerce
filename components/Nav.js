import { useCart } from '@/contexts/cart-context'
import { useDimensions } from '@/hooks/use-dimensions'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'
import CartNav from '@/components/CartNav'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import Search from './Search'
import Svg from './Svg'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Nav() {

  const { resolvedTheme, setTheme } = useTheme('dark')
  const [isOpen, setOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const containerRef = useRef()
  const { height } = useDimensions(containerRef)

  const { quantity } = useCart()

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 86vw 32px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: `circle(0px at 86vw 32px)`,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const itemsMenu = [
    { href: '/', name: 'Início' },
    { href: '/search', name: 'Roupas' },
    { href: '/search?category=masculino', name: 'Masculino' },
    { href: '/search?category=feminino', name: 'Feminino' },
  ]

  return (
    <motion.nav
      className="bg-primary w-full shadow-md"
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <div className="container">
        <div className="flex flex-row justify-between py-4 align-center md:py-3 gap-10">
          <div className="flex items-center flex-1">
            <nav className="hidden space-x-4 lg:block">
              {itemsMenu.map((item, i) => (
                <Link href={item.href}>
                  <a className="text-secondary text-sm font-semibold">
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          <div className="justify-center w-full hidden lg:flex-2 lg:flex">
            <Search />
          </div>

          <div className="flex items-center justify-center flex-2 space-x-4">
            <motion.div className="full-nav" variants={sidebar}>
              <Navigation items={itemsMenu} setOpen={() => setOpen(false)} />
            </motion.div>

            <Image
              layout="fixed"
              className="cursor-pointer"
              onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
              src={`/${resolvedTheme === 'light' ? 'sun' : 'moon'}.svg`}
              width={33}
              height={33}
            />

            <div className="relative" onClick={() => setCartOpen(true)}>
              {quantity > 0 && (
                <span className="absolute text-xs -right-3 -top-3 bg-accent text-white rounded-full flex justify-center items-center p-2 cursor-pointer">
                  <p style={{ lineHeight: '0.7' }}>{quantity}</p>
                </span>
              )}
              <Svg className="cursor-pointer" icon="cart" />
            </div>

            <CartNav isOpen={cartOpen} close={() => setCartOpen(false)} />
            <MenuToggle toggle={() => setOpen(!isOpen)} isOpen={isOpen} />
          </div>
        </div>

        <div className="justify-center flex-2 w-full flex lg:hidden pb-3">
          <Search />
        </div>
      </div>
    </motion.nav>
  )
}
