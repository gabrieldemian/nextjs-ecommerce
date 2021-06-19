import s from './Button.module.css'
import { motion, cn } from '~/libraries'

export default function Button({
  children,
  variant = 'contained',
  className,
  ...other
}) {
  return (
    <motion.button
      whileTap={{ borderBottom: 0 }}
      className={cn(s.button, s[variant], className)}
      {...other}
    >
      {children}
    </motion.button>
  )
}
