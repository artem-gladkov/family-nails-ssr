import {FC, HTMLProps} from 'react'
import classNames from 'classnames'
import Image from "next/image";

import { Navigation, Pagination, Lazy, Zoom, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/lazy';
import 'swiper/css/zoom';
import 'swiper/css/autoplay';


import styles from './Portfolio.module.scss'
import {Container, Title} from '@shared/ui';
import {PORTFOLIO_LIST} from "../../constants";

export interface PortfolioProps extends HTMLProps<HTMLDivElement> {}

export const Portfolio: FC<PortfolioProps> = ({className, children, ...otherProps}) => {
  return (
    <section className={classNames(styles.portfolio, className)} {...otherProps}>
      <Container>
        <Title type={'green'}>Портфолио</Title>
      </Container>
      <Swiper
        modules={[Navigation, Pagination, Lazy, Zoom, Autoplay]}
        navigation
        pagination={{type: "fraction", clickable: true }}
        scrollbar={{ draggable: true }}
        zoom
        loop
        autoplay
        autoHeight
        spaceBetween={35}
        slidesPerView={3}
      >
        {PORTFOLIO_LIST.map(photo => (
          <SwiperSlide key={photo.src}><Image src={photo} placeholder="blur"/></SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

