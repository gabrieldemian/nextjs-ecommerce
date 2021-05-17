import Image from 'next/image'

export default function CardPayment({ number, expires, owner, cvv }) {
  return (
    <div className="bg-accent rounded-3xl p-5 h-52 shadow-2xl mb-16">
      <div className="flex flex-row h-full">
        <div className="flex flex-col justify-between h-full w-2/3">
          <div className="w-full">
            <Image width={40} height={40} src="/cardchip2.png" />
          </div>

          <span className="text-xl w-full">
            {number ? number : '**** **** **** ****'}
          </span>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-white font-light text-xs">Validade</p>
              <span className="text-md w-full">
                {expires ? expires : 'MM/YYYY'}
              </span>
            </div>

            <div className="flex flex-col">
              <p className="text-white font-light text-xs">CVV</p>
              <span className="text-md w-full">{cvv ? cvv : '???'}</span>
            </div>
          </div>

          <div>
            <p className="text-white font-light text-xs">Titular</p>
            <span className="text-xl w-full">
              {owner ? owner : '******* *******'}
            </span>
          </div>
        </div>

        <div className="w-1/3 flex align-top justify-end">
          <Image src="/mastercard.svg" width={50} height={50} layout="fixed" />
        </div>
      </div>
    </div>
  )
}
