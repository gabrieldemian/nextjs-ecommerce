import { ProductView } from '~/components'
import commerce from '@/lib/commerce'

export default function Permalink({ product, variants }) {
  return <ProductView product={product} variants={variants} />
}

export async function getStaticProps({ params }) {
  const { permalink } = params

  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  })

  const sizes = product.variant_groups.find((v) => v.name === 'size')?.options
  const colors = product.variant_groups.find((v) => v.name === 'color')?.options

  return {
    props: {
      product,
      // adding keys dynamically, if one of the keys is false, it wont be added.
      variants: {
        ...(sizes && { sizes }),
        ...(colors && { colors }),
      },
    },
    revalidate: 200,
  }
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list()

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: 'blocking',
  }
}
