import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'

export default function Search() {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/search')
  }, [])

  return useMemo(() => (
    <div className="w-full">
      <input
        type="text"
        className="w-full bg-secondary p-2 rounded-sm outline-none text-secondary"
        placeholder="Pesquisar..."
        onKeyUp={(e) => {
          e.preventDefault()
          const q = e.currentTarget.value

          if (e.key === 'Enter') {
            router.push(
              {
                pathname: `/search`,
                query: q ? { ...router.query, q } : {},
              },
              undefined,
              { shallow: true }
            )
          }
        }}
      />
    </div>
  ))
}
