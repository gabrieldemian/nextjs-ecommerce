import Button from '@/components/Button'
import Link from 'next/link'
import { useEffect } from 'react'
import Reward from 'react-rewards'

export default function thanks() {
  let reward

  useEffect(() => {
    reward.rewardMe()
  }, [reward])

  return (
    <div
      className="container flex justify-center items-center"
      style={{ minHeight: '85vh' }}
    >
      <div className="mt-10 bg-secondary p-10 text-center w-full md:w-1/3 rounded-lg relative">
        <Reward
          type="confetti"
          ref={(ref) => {
            reward = ref
          }}
        ></Reward>
        <h1 className="text-4xl md:text-5xl mb-5">🎉✨🥳✨🎉</h1>
        <h1 className="font-bold text-3xl mb-5 text-primary">
          Obrigado por comprar com a gente!
        </h1>
        <p className="text-xl text-primary mb-5">
          Esperamos que goste dos produtos
        </p>
        <p className="text-xl text-primary">
          Agora é só aguardar a transportadora entregar os pedidos na sua casa, ou comprar mais um pouco
        </p>
        <Button className="mt-5">
          <Link href="/search">
            <a>Quero comprar mais!</a>
          </Link>
        </Button>
      </div>
    </div>
  )
}
