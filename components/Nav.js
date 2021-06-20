import { useCart } from '@/contexts/cart-context'
import { useDimensions } from '@/hooks/use-dimensions'
import { Svg, Search, MenuToggle } from '~/components'
import {
  Image,
  useTheme,
  useRef,
  useState,
  Link,
  dynamic,
  motion,
} from '~/libraries'
const CartNav = dynamic(() => import('~/components/CartNav'))
const Navigation = dynamic(() => import('~/components/Navigation'))

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
      className="w-full shadow-md z-10"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <div className="bg-primary">
        <div className="container">
          <div className="flex flex-row justify-between py-4 align-center md:py-3 gap-10">
            <div className="flex items-center flex-1">
              <nav className="hidden space-x-4 lg:block">
                {itemsMenu.map((item, i) => (
                  <Link href={item.href} key={i}>
                    <a className="text-sm font-semibold">
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

              <Svg
                icon={resolvedTheme === 'light' ? 'sun' : 'moon'}
                onClick={() =>
                  setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
                }
              />

              <div className="relative" onClick={() => setCartOpen(true)}>
                {quantity > 0 && (
                  <span className="absolute text-xs -right-3 -top-3 bg-accent rounded-full flex justify-center items-center p-1.5 cursor-pointer">
                    <p className="text-white" style={{ lineHeight: '0.5rem' }}>{quantity}</p>
                  </span>
                )}
                <Svg icon="cart" />
              </div>

              <CartNav isOpen={cartOpen} close={() => setCartOpen(false)} />
              <MenuToggle toggle={() => setOpen(!isOpen)} isOpen={isOpen} />
            </div>
          </div>

          <div className="justify-center flex-2 w-full flex lg:hidden pb-3">
            <Search />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
