import '@fontsource/poppins'
import '../styles/globals.css'
import 'nprogress/nprogress.css'
import CartProvider from '@/contexts/cart-context'
import {
  motion,
  useEffect,
  NProgress,
  useRouter,
  ThemeProvider,
  DefaultSeo,
} from '~/libraries'
import { Footer, Nav } from '~/components'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    document.body.classList?.remove('loading')
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [router.events])

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <DefaultSeo
        title="D-commerce"
        description="A sua melhor loja virtual"
        openGraph={{
          type: 'website',
          locale: 'pt-BR',
          url: 'https://d-commerce.vercel.app/',
          site_name: 'D-commerce',
          images: [
            {
              url: '/vercel.jpg',
              width: 289,
              height: 383,
              alt: 'D-commerce logo',
            },
          ],
        }}
      />
      <CartProvider>
        <Nav />
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              transition: { duration: 0.6 },
            },
            pageAnimate: {
              opacity: 1,
              transition: { duration: 0.6 },
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
        <Footer />
      </CartProvider>
    </ThemeProvider>
  )
}

export default MyApp
