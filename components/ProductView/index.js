import s from './ProductView.module.css'
import parse from 'html-react-parser'
import { useForm } from 'react-hook-form'
import { useCart } from '@/contexts/cart-context'
import { Button, Swatch, ProductSlider } from '~/components'
import { Image, cn, NextSeo } from '~/libraries'

export default function ProductView({ product, variants }) {
  const { register, handleSubmit } = useForm()
  const { addCart } = useCart()

  const variantKeys = Object.keys(variants)

  const onSubmit = async () => {
    await addCart(product.id, 1)
  }

  return (
    <>
      <NextSeo
        title={product.name}
        description={product.description}
        openGraph={{
          type: 'website',
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.media.url,
              width: 800,
              height: 600,
              alt: product.name,
            },
          ],
        }}
      />

      <div className={cn(s.root)}>
        <div className={cn(s.productDisplay)}>
          <div className={s.divTopLeft}>
            <span className={`${s.bg} font-bold`}>{product.name}</span> <br />
            <span className={`${s.bg} inline-block`}>
              {product.price.formatted_with_symbol}
            </span>
          </div>

          <div className={s.sliderContainer}>
            <ProductSlider key={product.id}>
              {product.assets.map((image, i) => (
                <div key={image.url} className={s.imageContainer}>
                  <Image
                    className="object-cover"
                    src={image.url}
                    alt={image.name || 'Product Image'}
                    width={1050}
                    height={1050}
                    priority={i === 0}
                    quality="85"
                  />
                </div>
              ))}
            </ProductSlider>
          </div>
        </div>

        <div className={s.sidebar}>
          <form
            className="w-full p-3 md:w-2/3 md:p-0"
            onSubmit={handleSubmit(onSubmit)}
          >
            {variantKeys.map((variant) => (
              <>
                <h1 className="font-bold text-xl">
                  {variant === 'sizes' ? 'Tamanho' : 'Cor'}
                </h1>
                {variants[variant].map((v, i) => (
                  <Swatch
                    defaultChecked={i === 0}
                    register={register}
                    value={v.name}
                    name={variant}
                    id={v.id}
                    key={i}
                  />
                ))}
              </>
            ))}

            {parse(product.description)}

            <Button className="mt-5" type="submit">
              Adicionar ao carrinho
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
