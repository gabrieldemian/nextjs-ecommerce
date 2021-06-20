import s from './Button.module.css'
import { motion, cn } from '~/libraries'

export default function Button({
  children,
  variant = 'contained',
  className,
  size = 'md',
  disabled = false,
  ...other
}) {
  return (
    <motion.button
      disabled={disabled}
      whileTap={{ boxShadow: 'none' }}
      className={cn(s.button, s[variant], s[size], className)}
      {...other}
    >
      {children}
    </motion.button>
  )
}
