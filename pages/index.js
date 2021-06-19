// import { dynamic } from '~/libraries'
import dynamic from 'next/dynamic'
import commerce from '@/lib/commerce'
import { Header, ProductCard } from '~/components'
const Marquee = dynamic(() => import('../components/Marquee'), { loading: <p>Loading...</p> })

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
