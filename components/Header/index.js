import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import s from './Header.module.css'

export default function Header() {
  return (
    <header>
      <div className="container">
        <div
          className="flex flex-col md:flex-row md:gap-20"
          style={{ height: '95vh' }}
        >
          <motion.div
            initial={{ opacity: 0, translateX: -80 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
            className="w-full md:w-1/2 justify-center flex flex-col"
          >
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-16 text-primary mt-8">
              E-commerce
            </h1>
            <p className="text-2xl lg:text-3xl mb-8 text-primary">
              Somos uma loja virtual moderna com tudo o que você precisa.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: 80 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
            className="w-full md:w-1/2 justify-center flex"
          >
            <div className="flex flex-col justify-center h-full w-full">
              <Image
                draggable={false}
                priority
                src="/header.svg"
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className={s.root}>
            <div className={s.card}>
              <h1 className="font-bold text-2xl text-primary mb-16 w-full">
                Sessão Masculina
              </h1>
              <div className={s.imgWrapper}>
                <Image src="/man.svg" width={300} height={300} />
              </div>
            </div>

            <div className={s.divHover}>
              <Button variant="outlined">
                <Link href="/search?category=masculino">
                  <a>Acessar</a>
                </Link>
              </Button>
            </div>
          </div>

          <div className={s.root}>
            <div className={s.card}>
              <h1 className="font-bold text-2xl text-primary mb-16 w-full">
                Sessão Feminina
              </h1>
              <div className={s.imgWrapper}>
                <Image src="/woman.svg" width={300} height={300} />
              </div>
            </div>

            <div className={s.divHover}>
              <Button variant="outlined">
                <Link href="/search?category=feminino">
                  <a>Acessar</a>
                </Link>
              </Button>
            </div>
          </div>

          <div className={s.root}>
            <div className={s.card}>
              <h1 className="font-bold text-2xl text-primary mb-16 w-full">
                Acessórios
              </h1>
              <div className={s.imgWrapper}>
                <Image src="/man.svg" width={300} height={300} />
              </div>
            </div>

            <div className={s.divHover}>
              <Button variant="outlined">
                <Link href="/search?category=acessorio">
                  <a>Acessar</a>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
