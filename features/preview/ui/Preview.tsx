import classNames from "classnames";
import {Button, Container} from "@shared/ui";

import styles from './Preview.module.scss'

export const Preview = () => {
  return (
    <section className={styles.preview}>
      <div className={styles.previewBg}>
        <div className={styles.previewBgGradient}/>
      </div>
      <Container>
        <div className={styles.previewOffer}>
          <div className={styles.previewOfferBg}>
            <svg width="932" height="536" viewBox="0 0 932 536" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_158_203)">
                <path
                  d="M87.05 402.221C125.405 452.398 156.425 480.27 216.831 498.736C285.686 519.784 328.817 489.218 400.345 480.98C547.26 464.061 663.909 521.597 774.661 423.618C868.022 341.024 952.848 234.423 890.78 126.333C841.308 40.1792 625.891 96.3807 530.126 69.8808C339.644 17.1708 115.375 -64.4068 35.5931 151.828C1.03705 245.486 26.4199 322.904 87.05 402.221Z"
                  fill="#E3D0A1"/>
              </g>
              <defs>
                <filter id="filter0_d_158_203" x="0" y="0" width="932" height="536" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
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
          </div>
          <div className={styles.previewOfferWrapper}>
            <h1 className={styles.previewOfferTitle}>Акция <br/> “Первый визит”</h1>
            <h4 className={styles.previewOfferSubtitle}>
              Снятие + Комбинированный маникюр + Укрепление + Выравнивание + Цвет в один тон = 990 ₽
            </h4>
            <Button
              href="https://n445954.yclients.com"
              target="_blank"
            >
              Записаться онлайн
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
