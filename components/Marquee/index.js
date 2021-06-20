import s from './Marquee.module.css'
import { cn, Ticker } from '~/libraries'

export default function Marquee({
  children,
  className = '',
  variant = 'transparent', //primary | secondary | transparent
}) {
  return (
    <div className={cn(s.root, s[variant], className)}>
      <Ticker offset={80}>
        {() => <div className={s.container}>{children}</div>}
      </Ticker>
    </div>
  )
}
