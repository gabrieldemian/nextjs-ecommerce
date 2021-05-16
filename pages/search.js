import Loading from '@/components/Loading'
import ProductCard from '@/components/ProductCard'
import commerce from '@/lib/commerce'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function search({ initialData, categories }) {
  const router = useRouter()
  const { q, category } = router.query
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    if (!q && !category) {
      return setData(initialData)
    }

    setData()
    setLoading(true)

    console.log('category', router.query)
    console.log('q', q)
    const { data } = await commerce.products.list({
      query: q,
      category_slug: category ? [category] : [],
    })

    setData(data)
    setLoading(false)

    if (!data) {
      console.log('Não encomtramos esse produto')
    }
  }

  useEffect(() => {
    getData()

    return () => {
      setData()
      setLoading(false)
    }
  }, [q, category])

  return (
    <div className="flex flex-col md:flex-row">
      <aside className="w-full md:w-3/12 lg:w-2/12 p-3 md:p-10 flex flex-col">
        <h1 className="font-bold mb-8 text-lg">Categorias</h1>
        {categories.map(({ name, slug }, i) => (
          <Link
            key={i}
            href={{
              pathname: '/search',
              query: { ...router.query, category: slug },
            }}
          >
            <a className="mb-4 text-secondary">{name}</a>
          </Link>
        ))}
      </aside>

      <main
        className="w-full md:w-6/12 lg:w-8/12 p-3 md:p-10 flex flex-col md:flex-row flex-wrap justify-start"
        style={{ minHeight: 'calc(100vh - 124px)' }}
      >
        {loading ? <Loading /> : ''}
        {data?.map((product, i) => (
          <ProductCard
            className="w-full lg:w-6/12 xl:w-4/12 flex-wrap"
            key={i}
            product={product}
            variant="price"
            imgProps={{
              width: 320,
              height: 320,
            }}
          />
        ))}
        {!data && !loading && (q || category) && (
          <div className="w-full flex flex-col justify-center">
            <h1 className="text-center text-xl mb-4">
              Ops, não encontramos este produto
            </h1>
            <Image src="/empty.svg" width={600} height={600} />
          </div>
        )}
      </main>

      <aside className="w-full md:w-3/12 lg:w-2/12 p-3 md:p-10 flex flex-col text-primary">
        <h1 className="font-bold mb-8 text-lg">Relevância</h1>
        <Link href="/search/male">
          <a className="mb-4 text-secondary">Tendência</a>
        </Link>
        <Link href="/search/male">
          <a className="mb-4 text-secondary">Do mais caro ao mais barato</a>
        </Link>
        <Link href="/search/male">
          <a className="mb-4 text-secondary">Do mais barato ao mais caro</a>
        </Link>
      </aside>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await commerce.products.list()
  const categories = await commerce.categories.list()

  return {
    props: {
      initialData: data,
      categories: categories.data,
    },
    revalidate: 1, // In seconds
  }
}
