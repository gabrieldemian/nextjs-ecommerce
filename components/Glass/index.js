export default function Glass({ children, className }) {
  return (
    <div
      style={{
        background: 'linear-gradient(141deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
      }}
      className={`w-full h-full backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  )
}
