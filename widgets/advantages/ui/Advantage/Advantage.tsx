import {FC} from "react";
import styles from "./Advantage.module.scss";
import {default as Image, StaticImageData} from "next/image";
import {Container} from "@shared/ui";

export interface AdvantageProps {
  key: string
  photo: { src: StaticImageData, alt: string },
  title: string,
  description: string
}

export const Advantage: FC<AdvantageProps> = ({key, photo, title, description}) => {
  return (
    <div key={key} className={styles.advantage}>
      <Container className={styles.container}>
        <AdvantageArrow/>
        <div className={styles.photo}>
          <Image src={photo.src} alt={photo.alt} placeholder='blur'/>
        </div>
        <div className={styles.description}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>
            {description}
          </p>
        </div>
      </Container>
    </div>
  )
}

const AdvantageArrow = () => {
  return (
    <svg className={styles.arrow} width="164" height="219" viewBox="0 0 164 219"
         xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path
        d="M131.5 116.5V10C131.5 4.47715 127.023 0 121.5 0H42.5C36.9772 0 32.5 4.47715 32.5 10V116.5C32.5 122.023 28.0229 126.5 22.5 126.5H10.1421C1.23309 126.5 -3.22857 137.271 3.07108 143.571L74.9289 215.429C78.8342 219.334 85.1658 219.334 89.0711 215.429L160.929 143.571C167.229 137.271 162.767 126.5 153.858 126.5H141.5C135.977 126.5 131.5 122.023 131.5 116.5Z"/>
    </svg>
  )
}

const AdvantageBg = () => {
  return (
    <svg className={styles.bg} width="915" height="354" viewBox="0 0 915 354" fill="none"
         xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path
        d="M96.457 8.69546C219.761 8.69539 356.972 27.1797 518.313 8.69544C679.655 -9.7888 915.5 8.69546 915.5 8.69546V340.4C915.5 340.4 685.083 318.419 518.313 340.4C446.752 349.831 443.317 358.844 350.557 349.622C257.798 340.399 220.61 340.4 96.457 340.4C-31.4856 340.4 -31.4856 8.69553 96.457 8.69546Z"/>
    </svg>
  )
}
