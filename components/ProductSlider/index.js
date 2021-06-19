import 'keen-slider/keen-slider.min.css'
import s from './ProductSlider.module.css'
import { useKeenSlider } from 'keen-slider/react'
import { Svg } from '~/components'
import { Image, cn } from '~/libraries'

export default function index({ children }) {
  const [sliderRef, slider] = useKeenSlider()

  return (
    <div
      className={`keen-slider transition-opacity duration-150 ${s.root}`}
      ref={sliderRef}
    >
      <Svg
        icon="arrowLeft"
        className={cn(s.leftControl, s.control)}
        onClick={(e) => e.stopPropagation() || slider.prev()}
      />
      <Svg
        icon="arrowRight"
        className={cn(s.rightControl, s.control)}
        onClick={(e) => e.stopPropagation() || slider.next()}
      />

      {children.map((child, i) => (
        <div key={i} className={'keen-slider__slide number-slide' + i}>
          <Image {...child.props.children.props} />
        </div>
      ))}
    </div>
  )
}
