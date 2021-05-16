import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-center transition text-sm">
      <p className="p-5 font-bold text-primary">
        Feito com ♥ por{' '}
        <Link href="https://gabrielcribeiro.com">
          <a
            className="transition hover:text-accent"
            target="_blank"
            href="https://gabrielcribeiro.com"
          >
            Gabriel Costa
          </a>
        </Link>
        .
      </p>
    </footer>
  )
}
