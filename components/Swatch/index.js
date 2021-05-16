import s from './Swatch.module.css'
import cn from 'classnames'

export default function Swatch({
  id,
  name,
  defaultChecked,
  register,
  value,
  className,
}) {
  return (
    <div className={`inline-block ${className ? className : ''} my-4`}>
      <input
        defaultChecked={defaultChecked}
        {...register(name)}
        type="radio"
        name={name}
        value={value}
        className={`${s.input} hidden`}
        id={id}
      />
      <label htmlFor={id} className="flex items-center cursor-pointer text-xl">
        <span className={cn(s.span, [s[value]])}>
          {name === 'sizes' ? value.toUpperCase() : ''}
        </span>
      </label>
    </div>
  )
}
