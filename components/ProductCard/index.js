import cn from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import s from './ProductCard.module.css'

export default function ProductCard({
  className,
  product,
  variant = 'slim',
  imgProps,
  ...props
}) {
  return (
    <Link href={`/product/${product.permalink}`} {...props}>
      <a className={cn(s.root, className)}>
        {variant === 'slim' ? (
          <div className="relative overflow-hidden box-border">
            {product.media && (
              <Image
                quality="85"
                src={product.media.source}
                alt={product.name || 'Product Image'}
                height={320}
                width={320}
                layout="fixed"
                {...imgProps}
              />
            )}
            <div className={s.divCenter}>
              <span className="bg-black text-white inline-block p-3 font-bold text-xl break-words text-center">
                {product.name}
              </span>
            </div>
          </div>
        ) : (
          <motion.div
            className="relative"
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
          >
            {product.media && (
              <div className={s.imgContainer}>
                <Image
                  className={s.img}
                  quality="85"
                  className="object-cover"
                  src={product.media.source}
                  alt={product.name || 'Product Image'}
                  height={320}
                  width={320}
                  layout="responsive"
                  {...imgProps}
                />
              </div>
            )}
            <div className={s.divTopLeft}>
              <span className={`${s.bg} font-bold`}>{product.name}</span> <br />
              <span className={`${s.bg}`}>
                {product.price.formatted_with_symbol}
              </span>
            </div>
          </motion.div>
        )}
      </a>
    </Link>
  )
}
