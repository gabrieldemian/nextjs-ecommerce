import CardPayment from '@/components/CardPayment'
import Input from '@/components/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import s from './Checkout.module.css'
import * as yup from 'yup'
import cn from 'classnames'
import { useCart } from '@/contexts/cart-context'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Svg from '@/components/Svg'
import Button from '@/components/Button'
import { useRouter } from 'next/router'

export default function index() {

  const { cart, emptyCart, loading } = useCart();
  const router = useRouter();

  const cardRegexp =
    /^((4\d{3})|(5[1-5]\d{2})|(6011)|(34\d{1})|(37\d{1}))-?\s?\d{4}-?\s?\d{4}-?\s?\d{4}|3[4,7][\d\s-]{15}$/
  const expiresRegexp = /^((0[1-9])|(1[0-2]))\/(\d{4})$/

  const schema = yup.object().shape({
    number: yup.string().matches(cardRegexp, 'Cartão inválido'),
    expires: yup.string().matches(expiresRegexp, 'Data inválida'),
    cvv: yup.string().matches(/\d{3}/, 'CVV inválido'),
    owner: yup.string().required('Campo obrigatório'),
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data);
    router.push('/thanks');
  }

  return (
    <div className="container mt-10">
      <div className="flex flex-row flex-wrap shadow-lg rounded-xl text-white">
        <div className={cn(s.left, { [s.loading]: loading })}>
          {cart?.total_items < 1 ? (
            <div className="flex flex-col justify-center h-full">
              <Image
                draggable={false}
                src="/empty.svg"
                width={100}
                height={100}
                layout="responsive"
                priority
              />
              <h1 className="text-center text-xl font-bold mb-2">
                Seu carrinho está vazio
              </h1>
              <p className="text-center text-lg">
                Encontre algumas peças que sejam do seu interesse.
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-col justify-between h-full">
                <div className="overflow-y-auto">
                  <h1 className="font-bold mb-8 text-xl md:text-4xl">Itens</h1>
                  {cart?.line_items.map((item, i) => (
                    <motion.div
                      whileHover={{
                        boxShadow:
                          '0 0 30px 0px rgba(0, 0, 0, 0.1), 0 4px 30px -2px rgba(0, 0, 0, 0.05)',
                      }}
                      key={i}
                      className="flex space-x-4 py-4"
                    >
                      <div className="h-16 w-16 md:h-24 md:w-24">
                        <Link href={`/product/${item.permalink}`}>
                          <a>
                            <Image
                              layout="responsive"
                              src={item.media.source}
                              width={150}
                              height={150}
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="flex flex-col flex-1 justify-between">
                        <Link href={`/product/${item.permalink}`}>
                          <a className="font-bold text-sm md:text-2xl">
                            {item.name}
                          </a>
                        </Link>
                        <h1 className="font-bold text-sm md:text-2xl">
                          {item.quantity}
                        </h1>
                      </div>

                      <div className="flex flex-col justify-between items-end">
                        <p className="text-sm md:text-2xl">
                          {item.price.formatted_with_symbol}
                        </p>
                        <Svg
                          onClick={() => emptyCart(item.id)}
                          icon="trash"
                          className="h-6 w-6 cursor-pointer text-white"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <ul className="pt-5">
                  <li className="flex justify-between pb-3 text-sm md:text-2xl text-white">
                    <span>Total</span>
                    <span className="font-bold">
                      {cart?.subtotal.formatted_with_symbol}
                    </span>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>

        <div className="bg-secondary md:p-10 w-full md:w-2/4 2xl:w-1/3 rounded-xl">
          <h1 className="font-bold mt-8 p-3 text-xl md:text-4xl text-primary md:mt-0 md:p-0 md:mb-8">
            Pagamento
          </h1>

          <CardPayment
            number={watch('number')}
            expires={watch('expires')}
            owner={watch('owner')}
            cvv={watch('cvv')}
          />

          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <Input
              placeholder="Número do cartão"
              {...register('number', { min: 12 })}
              format="#### #### #### ####"
              mask="*"
              error={errors.number}
            />

            <div className="flex flex-row gap-5">
              <Input
                placeholder="Validade"
                {...register('expires')}
                className="w-1/2"
                format="##/####"
                mask={['M', 'M', 'Y', 'Y', 'Y', 'Y']}
                error={errors.expires}
              />
              <Input
                placeholder="CVV"
                {...register('cvv')}
                className="w-1/2"
                format="###"
                error={errors.cvv}
              />
            </div>

            <Input
              placeholder="Titular"
              {...register('owner', { required: true, minLength: 8 })}
              error={errors.owner}
            />

            <Button disabled={!isValid} type="submit">
              Pagar
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
