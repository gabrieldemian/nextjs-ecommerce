import s from './CartNav.module.css'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import { useCart } from '@/contexts/cart-context'
import { Button, Svg } from '~/components'
import { Link, Image, cn, motion, useEffect, useRef, Portal } from '~/libraries'

export default function CartNav({ isOpen, close }) {
  const ref = useRef({})
  const { cart, emptyCart, loading } = useCart()

  useEffect(() => {
    if (ref.current) {
      if (isOpen) {
        disableBodyScroll(ref.current)
      } else {
        enableBodyScroll(ref.current)
      }
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [isOpen])

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 80vw 32px)`,
      transition: {
        delay: 0,
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: `circle(0px at 80vw 32px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
  }

  return (
    <Portal>
      <div onClick={close} className={cn(s.disable, { hidden: !isOpen })} />
      <motion.aside
        ref={ref}
        variants={sidebar}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className={cn(s.aside, { [s.loading]: loading })}
      >
        <span onClick={close}>
          <Svg icon="close" className="h-5 w-5 cursor-pointer" />
        </span>

        {cart?.total_items < 1 ? (
          <div className="flex flex-col justify-center h-full">
            <Image
              alt="empty cart illustration"
              draggable={false}
              src="/empty.svg"
              width={100}
              height={100}
              layout="responsive"
              priority
            />
            <h1 className="text-center text-xl font-bold mb-2">
              Seu carrinho está vazio
            </h1>
            <p className="text-center text-lg">
              Encontre algumas peças que sejam do seu interesse.
            </p>
          </div>
        ) : (
          <>
            {cart ? (
              <div className="flex flex-col justify-between h-full">
                <div className="overflow-y-auto">
                  <h1 className="mt-8 mb-8 font-bold text-2xl">Carrinho</h1>

                  {cart.line_items.map((item, i) => (
                    <div key={i} className="flex space-x-4 py-4">
                      <div className="h-16 w-16 relative">
                        <Link href={`/product/${item.permalink}`}>
                          <a onClick={close}>
                            <Image
                              alt={item.name}
                              src={item.media.source}
                              width={150}
                              height={150}
                              unoptimized
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="flex flex-col flex-1 justify-between">
                        <Link href={`/product/${item.permalink}`}>
                          <a onClick={close}>
                            <h1 className="font-bold">{item.name}</h1>
                            <h1 className="font-bold">{item.quantity}</h1>
                          </a>
                        </Link>
                      </div>

                      <div className="flex flex-col justify-between items-end">
                        <p className="">{item.price.formatted_with_symbol}</p>
                        <Svg
                          onClick={() => emptyCart(item.id)}
                          icon="trash"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="pt-5">
                  <li className={s.li}>
                    <span>Subtotal</span>
                    <span>{cart.subtotal.formatted_with_symbol}</span>
                  </li>
                  <li className={`${s.li} ${s.total}`}>
                    <span>Total</span>
                    <span>{cart.subtotal.formatted_with_symbol}</span>
                  </li>

                  <Link href="/checkout">
                    <a onClick={close}>
                      <Button>Checkout</Button>
                    </a>
                  </Link>
                </ul>
              </div>
            ) : (
              ''
            )}
          </>
        )}
      </motion.aside>
    </Portal>
  )
}
