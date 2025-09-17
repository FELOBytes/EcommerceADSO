import { FC } from "react"
import { Slide } from 'react-slideshow-image'

import 'react-slideshow-image/dist/styles.css';
import styles from './ProductSlideshow.module.css';

// El componente ProductSlidesShow recibe una lista de URLs de imágenes de productos como propiedad.
// Utiliza la biblioteca react-slideshow-image para crear un carrusel de imágenes.
// Cada imagen se muestra en una diapositiva (<div>).
// Se aplican estilos locales definidos en el archivo ProductSlideshow.module.css.
// Puedes personalizar la duración, el efecto de transición y otros aspectos del carrusel según tus necesidades.

interface Props {
  images: string[]
}

export const ProductSlidesShow: FC<Props> = ({ images }) => {
  return (
    <Slide
      easing="ease"
      duration={7000}
      indicators
    >
      {
        images.map(image => {
          const url = `/products/${image}`
          return (
            <div className={styles['each-slide']} key={image}>
              <div style={{
                backgroundImage: `url(${url})`,
                backgroundSize: 'cover'
              }}>
              </div>
            </div>
          )
        })
      }
    </Slide>
  )
}
