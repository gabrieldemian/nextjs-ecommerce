import { motion, NumberFormat } from '~/libraries'

export default function Input({
  type = 'text',
  className,
  placeholder,
  error,
  w = 'full',
  ...other
}) {
  return (
    <div className={`mb-5 ${className}`}>
      {!other.format ? (
        <input
          type={type}
          placeholder={placeholder}
          className={`bg-primary text-primary p-2 outline-none rounded-lg w-full`}
          {...other}
        />
      ) : (
        <NumberFormat
          placeholder={placeholder}
          className={`bg-primary text-primary p-2 outline-none rounded-lg w-full`}
          {...other}
        />
      )}
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
