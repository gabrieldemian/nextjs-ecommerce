import Button from '@/components/Button'
import { Reward, useEffect, Link } from '~/libraries'

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
      <div className="mt-10 bg-secondary p-10 text-center w-full md:w-2/3 xl:w-1/2 2xl:w-1/3 rounded-lg relative">
        <Reward
          type="confetti"
          ref={(ref) => {
            reward = ref
          }}
        ></Reward>
        <h1 className="text-4xl md:text-5xl mb-5">ðâ¨ð¥³â¨ð</h1>
        <h1 className="font-bold text-3xl mb-5 text-primary">
          Obrigado por comprar com a gente!
        </h1>
        <p className="text-xl text-primary mb-5">
          Esperamos que goste dos produtos
        </p>
        <p className="text-xl text-primary">
          Agora Ã© sÃ³ aguardar a transportadora entregar os pedidos na sua casa,
          ou comprar mais um pouco
        </p>
        <Link href="/search">
          <a>
            <Button className="mt-5">Quero comprar mais!</Button>
          </a>
        </Link>
      </div>
    </div>
  )
}
