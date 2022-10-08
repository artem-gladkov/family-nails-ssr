import {Button, Container} from "@shared/ui";
import Image, {StaticImageData} from 'next/image';

import {FC, HTMLProps, ReactElement} from "react";
import classNames from "classnames";
import previewPhoto from '/public/images/nails.webp'

import styles from './Preview.module.scss'

export interface PreviewProps extends HTMLProps<HTMLDivElement>{
  previewTitle: string | ReactElement
  description?: string | ReactElement
  photo?: StaticImageData;
  imageType?: 'half' | 'transparent'
}

export const Preview:FC<PreviewProps> = ({className, photo, description, previewTitle,  ...otherProps}) => {
  return (
    <section className={classNames(styles.preview, className)} {...otherProps}>
      <div className={styles.photo}>
        <Image src={photo || previewPhoto} quality={100} layout='fill' objectFit={'cover'} objectPosition={'right'} priority/>
      </div>
      <Container className={styles.container}>
        <div className={styles.offer}>
          <h1 className={styles.offerTitle}>{previewTitle}</h1>
          <p className={styles.offerSubtitle}>
            {description || 'Снятие + Комбинированный маникюр + Укрепление + Выравнивание + Цвет в один тон = 990 ₽'}
          </p>
          <Button href="https://n445954.yclients.com" target="_blank">
            Записаться онлайн
          </Button>
        </div>
      </Container>
    </section>
  )
}


export const OfferBg = () => {
  return (
    <svg
      className={styles.offerBg}
      width="932"
      height="536"
      viewBox="0 0 932 536"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_158_203)">
        <path
          d="M87.05 402.221C125.405 452.398 156.425 480.27 216.831 498.736C285.686 519.784 328.817 489.218 400.345 480.98C547.26 464.061 663.909 521.597 774.661 423.618C868.022 341.024 952.848 234.423 890.78 126.333C841.308 40.1792 625.891 96.3807 530.126 69.8808C339.644 17.1708 115.375 -64.4068 35.5931 151.828C1.03705 245.486 26.4199 322.904 87.05 402.221Z"
          fill="#E3D0A1"/>
      </g>
      <defs>
        <filter id="filter0_d_158_203" x="0" y="0" width="932" height="536" filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix"
                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="10"/>
          <feGaussianBlur stdDeviation="10"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_158_203"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_158_203" result="shape"/>
        </filter>
      </defs>
    </svg>
  )
}
