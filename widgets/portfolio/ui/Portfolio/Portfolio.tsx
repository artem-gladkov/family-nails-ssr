import {FC, HTMLProps, useCallback, useEffect, useRef, useState} from 'react'
import classNames from 'classnames'
import Image, {StaticImageData} from "next/image";

import {Navigation, Pagination, Lazy, Zoom, Autoplay} from 'swiper';

import Slider from "react-slick";
import "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import styles from './Portfolio.module.scss'
import {Container, Section, Title} from '@shared/ui';
import {MANICURE_PORTFOLIO_LIST} from 'public/images/portfolio/manicure';
import Viewer from 'viewerjs';

import "viewerjs/src/index.css"


export interface PortfolioProps extends HTMLProps<HTMLBaseElement> {
  items?: StaticImageData[]
}


export const Portfolio: FC<PortfolioProps> = ({
                                                className,
                                                items = MANICURE_PORTFOLIO_LIST,
                                                children,
                                                ...otherProps
                                              }) => {
  const imagesContainerRef = useRef(null)

  useEffect(() => {
    if(imagesContainerRef.current) {
      const viewer = new Viewer(imagesContainerRef.current, {
        movable: false,
        toolbar: true,
        zoomable: false
      });

    }
  }, [])

  return (
    <Section className={classNames(styles.portfolio, className)} {...otherProps}>
      <Container>
        <Title type={'green'}>Портфолио</Title>
        <div ref={imagesContainerRef} className={styles.body}>
          {items.map(item => {
            return (
              <div className={styles.photo} key={item.src}>
                <Image className={styles.img} src={item} placeholder='blur'/>
              </div>
            )
          })}
        </div>
      </Container>

    </Section>
  )
}

