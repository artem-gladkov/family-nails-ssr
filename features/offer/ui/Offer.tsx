import {FC} from 'react'
import styles from './Offer.module.scss'
import {Container} from "@shared/ui";
import offer_manicure from '/app/images/offer_manicure.jpg'
import offer_pedicure from '/app/images/offer_pedicure.jpg'
import Image from 'next/image'

export interface IOfferProps {}

export const Offer: FC<IOfferProps> = ({}) => {
  return (
    <section className={styles.offer}>
      <svg className="bg-transition-2" width="1600" height="785" viewBox="0 0 1600 785" fill="none"
           xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M-0.00256348 6.10352e-05L1600 6.10352e-05L1599.99 707.908C1380.14 810.372 1068.61 781.479 833.453 776.721C387.779 767.704 133.325 753.884 -0.00257199 714L-0.00256348 6.10352e-05Z"
          fill="#9FAB7C"/>
      </svg>
      <svg className="bg-transition-1" width="1600" height="939" viewBox="0 0 1600 939" fill="none"
           xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M1185 129.972C993.013 117.616 692.786 41.3871 456 14.9939C282.136 -4.3857 107.702 -4.41737 0 14.9939V939C74.3805 887.052 192.475 834.881 420.499 826.017C597.611 819.133 772.042 777.234 903.499 774.745C1050.53 771.96 1226 780.96 1343 750.403C1457 724.837 1506.5 666.064 1600 625.15L1599.01 129.972C1411.17 129.972 1376.99 142.328 1185 129.972Z"
          fill="white"/>
      </svg>
      <div className={styles.body}>
        <Container>
          <div className="container offer__container">
            <div className="title title_primary-2 offer__title">
              <svg className='title__bg' width="720" height="100" viewBox="0 0 720 100" fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                   preserveAspectRatio="none">
                <path
                  d="M98.8826 4.98828C365.724 -9.66551 375.172 12.6316 704.869 12.6315C751.778 12.6315 678.89 99.9999 631.981 100C394.069 100 324.947 100 13.6497 100C-33.2597 100 52.0574 7.55972 98.8826 4.98828Z"
                  fill="#9FAB7C"/>
              </svg>
              <h2 className="title__text">Мы предлагаем</h2></div>
          </div>
          <div className="offer__items">
            <div className="offer__item offer__item_first">
              <div className="offer__item-photo">
                <Image className="offer__item-photo-img" src={offer_manicure} alt="Маникюр"/>
              </div>
              <div className="offer__item-description"><span className="number offer__item-number">1</span>
                <h3 className="offer__item-title">Маникюр</h3>
                <p className="offer__item-text">Красивые и ухоженные руки — главное украшение любой женщины. В
                  FamilyNails вам помогут выбрать косметическую процедуру под ваши личные особенности.</p></div>
            </div>
            <div className="offer__item offer__item_second">
              <div className="offer__item-description"><span className="number offer__item-number">2</span>
                <h3 className="offer__item-title">Педикюр</h3>
                <p className="offer__item-text">Красивые и ухоженные ноги — главное украшение любой женщины. В
                  FamilyNails вам помогут выбрать косметическую процедуру под ваши личные особенности.</p></div>
              <div className="offer__item-photo">
                <Image className="offer__item-photo-img" src={offer_pedicure} alt="Педикюр"/>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
