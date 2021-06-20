import Image from 'next/image'

export default function CardPayment({ number, expires, owner, cvv }) {
  return (
    <div className="bg-accent rounded-3xl p-5 h-56 shadow-lg mb-16">
      <div className="flex flex-row h-full">
        <div className="flex flex-col justify-between h-full w-2/3">
          <div className="w-full">
            <Image priority width={40} height={40} src="/cardchip2.png" />
          </div>

          <span className="text-xl w-full text-white">
            {number ? number : '**** **** **** ****'}
          </span>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="font-light text-xs text-white">Validade</p>
              <span className="text-md w- text-white">
                {expires ? expires : 'MM/YYYY'}
              </span>
            </div>

            <div className="flex flex-col">
              <p className="font-light text-xs text-white">CVV</p>
              <span className="text-md w-full text-white">{cvv ? cvv : '???'}</span>
            </div>
          </div>

          <div>
            <p className="font-light text-xs text-white">Titular</p>
            <span className="text-xl w-full text-white">
              {owner ? owner : '******* *******'}
            </span>
          </div>
        </div>

        <div className="w-1/3 flex align-top justify-end">
          <Image priority src="/mastercard.svg" width={50} height={50} layout="fixed" />
        </div>
      </div>
    </div>
  )
}
