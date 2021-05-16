import s from './Marquee.module.css'
import Ticker from 'react-ticker'
import cn from 'classnames'

export default function Marquee({
  children,
  className = '',
  variant = 'primary', //primary or secondary
}) {
  return (
    <div className={cn(s.root, s[variant], className)}>
      <Ticker offset={80}>
        {() => <div className={s.container}>{children}</div>}
      </Ticker>
    </div>
  )
}
