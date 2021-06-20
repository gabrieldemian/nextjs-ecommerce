import Image from 'next/image'

export default function Loading({ overlay = false }) {
  return (
    <>
      {overlay ? (
        ''
      ) : (
        <div className="w-full flex justify-center items-center h-full">
          <div
            className="md:mt-20 flex justify-center items-center"
            style={{
              animation: 'rotate 2s linear infinite',
              width: 52,
              height: 50,
            }}
          >
            <Image
              priority={100}
              src="/ouroboros.svg"
              width={52}
              height={50}
              style={{ animation: 'rotate 1.25s linear infinite' }}
            />
          </div>
        </div>
      )}
    </>
  )
}
