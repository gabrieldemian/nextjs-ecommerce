import { motion } from 'framer-motion'
import Link from 'next/link'
import { MenuToggle } from './MenuToggle'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.35 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const itemsVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const Navigation = ({ items, setOpen }) => (
  <motion.div
    className="flex items-center justify-center flex-col w-screen h-screen"
    variants={variants}
  >
    {items.map((item, i) => (
      <Link href={item.href} key={i} passHref>
        <motion.a
          variants={itemsVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={setOpen}
          className="text-secondary cursor-pointer text-xl font-semibold mb-8 w-full text-center transition duration-200 ease-linear hover:text-accent"
        >
          {item.name}
        </motion.a>
      </Link>
    ))}
    <MenuToggle toggle={setOpen} />
  </motion.div>
)
