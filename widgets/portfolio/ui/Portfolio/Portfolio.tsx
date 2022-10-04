import {FC, HTMLProps, useCallback, useEffect, useState} from 'react'
import classNames from 'classnames'
import Image from "next/image";

import { Navigation, Pagination, Lazy, Zoom, Autoplay} from 'swiper';

import Slider from "react-slick";
import "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import styles from './Portfolio.module.scss'
import {Container, Section, Title} from '@shared/ui';
import {PORTFOLIO_LIST} from "../../constants";

export interface PortfolioProps extends HTMLProps<HTMLBaseElement> {}


export const Portfolio: FC<PortfolioProps> = ({className, children, ...otherProps}) => {
  const [slidesToShow, setSlidesToShow] = useState(3)

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize()
  }, [])

  const onResize = useCallback(() => {
    const clientWidth = document.body.clientWidth

    if(clientWidth >= 1024) {
      setSlidesToShow(3)
      return
    }
    if (clientWidth >= 768) {
      setSlidesToShow(2)
      return
    }

    setSlidesToShow(1)
  }, [setSlidesToShow])

  return (
    <Section className={classNames(styles.portfolio, className)} {...otherProps}>
      <Container>
        <Title type={'green'}>Портфолио</Title>
      </Container>
      <Slider
        centerMode
        slidesToShow={slidesToShow}
        touchMove
        pauseOnHover
        arrows={false}

      >
        {PORTFOLIO_LIST.map(item => {
          return (
            <div className={styles.photo} key={item.src}>
              <Image className={styles.img} src={item} placeholder='blur'/>
            </div>
          )
        })}
      </Slider>
    </Section>
  )
}

