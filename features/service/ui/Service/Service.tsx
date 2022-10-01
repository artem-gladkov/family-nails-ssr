import {FC} from 'react'
import styles from './Service.module.scss'
import {Container} from "@shared/ui";
import offer_manicure from '/app/images/offer_manicure.jpg'
import offer_pedicure from '/app/images/offer_pedicure.jpg'
import Image from 'next/image'
import {MainServiceTransitions} from "../ServiceTransitions";
import {Title} from "../../../../shared/ui";
import classNames from "classnames";

export interface IOfferProps {
}

export const Service: FC<IOfferProps> = ({}) => {
  return (
    <section className={styles.service}>
      <MainServiceTransitions.Second className={styles.bgTransition2}/>
      <MainServiceTransitions.First className={styles.bgTransition1}/>
      <div className={styles.body}>
        <Container>
          <Title type='green' className={styles.title}>Мы предлагаем</Title>
        </Container>
        <div className={styles.serviceList}>
          <div className={classNames(styles.item, styles.itemFirst)}>
            <div className={styles.itemPhoto}>
              <Image src={offer_manicure} alt="Маникюр"/>
            </div>
            <div className={styles.itemDescription}><span className={classNames(styles.itemNumber, 'number')}>1</span>
              <h3 className={styles.itemTitle}>Маникюр</h3>
              <p className={styles.itemText}>Красивые и ухоженные руки — главное украшение любой женщины. В
                FamilyNails вам помогут выбрать косметическую процедуру под ваши личные особенности.</p></div>
          </div>
          <div className={classNames(styles.item, styles.itemSecond)}>
            <div className={styles.itemDescription}><span className={classNames(styles.itemNumber, 'number')}>2</span>
              <h3 className={styles.itemTitle}>Педикюр</h3>
              <p className={styles.itemText}>Красивые и ухоженные ноги — главное украшение любой женщины. В
                FamilyNails вам помогут выбрать косметическую процедуру под ваши личные особенности.</p></div>
            <div className={styles.itemPhoto}>
              <Image src={offer_pedicure} alt="Педикюр"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
