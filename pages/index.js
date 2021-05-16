import commerce from '@/lib/commerce'
import Header from '@/components/Header'
import Marquee from '@/components/Marquee'
import ProductCard from '@/components/ProductCard'

export default function Home({ data }) {
  return (
    <>
      <Header />
      <Marquee>
        {data.slice(0, 3).map((product, i) => (
          <ProductCard
            key={i}
            product={product}
            imgProps={{
              width: 320,
              height: 320,
            }}
          />
        ))}
      </Marquee>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await commerce.products.list()

  return {
    props: {
      data,
    },
    revalidate: 1, // In seconds
  }
}
