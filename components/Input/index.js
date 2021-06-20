import { motion, NumberFormat } from '~/libraries'
import { Svg } from '~/components'
import s from './Input.module.css'

export default function Input({
  type = 'text',
  value,
  icon,
  onChange,
  className,
  placeholder,
  error,
  noShadow = false,
  id = Math.random() + '',
  bg = 'secondary', // secondary or primary
  ...other
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className={`bg-${bg} ${s.wrapper} ${noShadow ? '' : 'shadow-lg'}`}>
        {icon && (
          <label htmlFor={id} className={s.icon}>
            <Svg className="h-5 w-5" icon={icon} />
          </label>
        )}
        {other.format ? (
          <NumberFormat
            placeholder={placeholder}
            className={`${s.input}`}
            {...other}
          />
        ) : (
          <input
            value={value}
            onChange={onChange}
            id={id}
            type={type}
            placeholder={placeholder}
            className={`${s.input}`}
            {...other}
          />
        )}
      </div>
      {error && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-sm"
        >
          {error.message}
        </motion.span>
      )}
    </div>
  )
}
