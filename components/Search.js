import { useRouter, useEffect, useMemo } from '~/libraries'
import { Input } from '~/components'

export default function Search() {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/search')
  }, [])

  return useMemo(() => (
    <Input
      noShadow
      icon="search"
      className="font-bold"
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
  ))
}
