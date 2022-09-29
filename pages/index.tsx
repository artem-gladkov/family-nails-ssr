import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Header} from "../features/header/ui/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <meta property="description" content="Студия маникюра и педикюра &quot;Family Nails&quot; в Орле"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta property="og:locale" content="ru_RU"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Делаем качественный маникюр и педикюр — Студия «Family Nails»"/>
        <meta property="og:description"
              content="Студия маникюра и педикюра &quot;Family Nails&quot; в Орле"/>
        <meta property="og:url" content="https://family-nails.ru/"/>
        <meta property="og:site_name" content="Family Nails"/>
        <meta name="yandex-verification" content="d0513e8f012f5db8"/>
        <meta name="google-site-verification"
              content="mVZ-aF0dGRCqS7zMeNgQp9OooluT6RqaNJwe4wWW9VI"/>
        <link rel="apple-touch-icon" sizes="180x180"
              href="assets/images/apple-touch-icon.c8818ca8.png"/>
        <link rel="icon" type="image/png" sizes="32x32"
              href="assets/images/favicon-32x32.97c9e664.png"/>
        <link rel="icon" type="image/png" sizes="16x16"
              href="assets/images/favicon-16x16.c133fc31.png"/>
        <link rel="mask-icon" href="assets/images/safari-pinned-tab.c611344d.svg"
              color="#5bbad5"/>
        <title>Family Nails — Студия маникюра и педикюра</title>
        <link href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
              rel="stylesheet"/>
      </Head>

      <Header/>
      {/*
      <section className="preview">
        <div className="preview__bg">
          <div className="preview__bg-gradient"/>
        </div>
        <div className="container preview__container">
          <div className="preview-offer">
            <div className="preview-offer__bg">
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
            <div className="preview-offer__wrapper"><h1 className="preview-offer__title">Акция <br/> “Первый визит”</h1>
              <h4
                className="preview-offer__subtitle">Снятие + Комбинированный маникюр + Укрепление + Выравнивание + Цвет
                в один тон = 990 ₽</h4><a className="button button_primary" target="_blank"
                                          href="https://n445954.yclients.com">Записаться онлайн</a></div>
          </div>
        </div>
      </section>
      <section className="offer">
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
        <div className="offer__body">
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
              <div className="offer__item-photo"><img className="offer__item-photo-img"
                                                      src="assets/images/offer_manicure.acc15e5d.jpg" alt="Маникюр"/>
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
              <div className="offer__item-photo"><img className="offer__item-photo-img"
                                                      src="assets/images/offer_pedicure.611a5786.jpg" alt="Педикюр"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="advantages">
        <div className="container advantages__container">
          <div className="title title_primary-1 offer__title">
            <svg className='title__bg' width="720" height="100" viewBox="0 0 720 100" fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 preserveAspectRatio="none">
              <path
                d="M98.8826 4.98828C365.724 -9.66551 375.172 12.6316 704.869 12.6315C751.778 12.6315 678.89 99.9999 631.981 100C394.069 100 324.947 100 13.6497 100C-33.2597 100 52.0574 7.55972 98.8826 4.98828Z"
                fill="#9FAB7C"/>
            </svg>
            <h2 className="title__text">Преимущества</h2></div>
        </div>
        <div className="advantages__items">
          <div className="advantages__item">
            <svg className='advantages__item-arrow' width="164" height="219" viewBox="0 0 164 219"
                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path
                d="M131.5 116.5V10C131.5 4.47715 127.023 0 121.5 0H42.5C36.9772 0 32.5 4.47715 32.5 10V116.5C32.5 122.023 28.0229 126.5 22.5 126.5H10.1421C1.23309 126.5 -3.22857 137.271 3.07108 143.571L74.9289 215.429C78.8342 219.334 85.1658 219.334 89.0711 215.429L160.929 143.571C167.229 137.271 162.767 126.5 153.858 126.5H141.5C135.977 126.5 131.5 122.023 131.5 116.5Z"/>
            </svg>
            <svg className='advantages__item-bg' width="915" height="354" viewBox="0 0 915 354" fill="none"
                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path
                d="M96.457 8.69546C219.761 8.69539 356.972 27.1797 518.313 8.69544C679.655 -9.7888 915.5 8.69546 915.5 8.69546V340.4C915.5 340.4 685.083 318.419 518.313 340.4C446.752 349.831 443.317 358.844 350.557 349.622C257.798 340.399 220.61 340.4 96.457 340.4C-31.4856 340.4 -31.4856 8.69553 96.457 8.69546Z"/>
            </svg>
            <div className="advantages__item-photo"><img className="advantages__item-photo-img"
                                                         src="assets/images/lacquers.e8f5b3db.png" alt="LUXIO"/></div>
            <div className="advantages__item-description"><h3 className="advantages__item-title">Современные
              материалы</h3>
              <p className="advantages__item-text"></p>Современные материалы не вредящие ногтевой пластине.
              LUXIO один из самых премиальных брендов в нашем направлении
            </div>
          </div>
          <div className="advantages__item">
            <svg className='advantages__item-arrow' width="164" height="219" viewBox="0 0 164 219"
                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path
                d="M131.5 116.5V10C131.5 4.47715 127.023 0 121.5 0H42.5C36.9772 0 32.5 4.47715 32.5 10V116.5C32.5 122.023 28.0229 126.5 22.5 126.5H10.1421C1.23309 126.5 -3.22857 137.271 3.07108 143.571L74.9289 215.429C78.8342 219.334 85.1658 219.334 89.0711 215.429L160.929 143.571C167.229 137.271 162.767 126.5 153.858 126.5H141.5C135.977 126.5 131.5 122.023 131.5 116.5Z"/>
            </svg>
            <svg className='advantages__item-bg' width="915" height="354" viewBox="0 0 915 354" fill="none"
                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path
                d="M96.457 8.69546C219.761 8.69539 356.972 27.1797 518.313 8.69544C679.655 -9.7888 915.5 8.69546 915.5 8.69546V340.4C915.5 340.4 685.083 318.419 518.313 340.4C446.752 349.831 443.317 358.844 350.557 349.622C257.798 340.399 220.61 340.4 96.457 340.4C-31.4856 340.4 -31.4856 8.69553 96.457 8.69546Z"/>
            </svg>
            <div className="advantages__item-photo"><img className="advantages__item-photo-img"
                                                         src="assets/images/massage.19c08bf4.png" alt="Массаж"/></div>
            <div className="advantages__item-description"><h3 className="advantages__item-title">Массаж после
              маникюра</h3>
              <p className="advantages__item-text">Нежный массаж рук с увлажнающим и омолаживающим кремом после
                маникюра</p></div>
          </div>
          <div className="advantages__item">
            <svg className='advantages__item-arrow' width="164" height="219" viewBox="0 0 164 219"
                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path
                d="M131.5 116.5V10C131.5 4.47715 127.023 0 121.5 0H42.5C36.9772 0 32.5 4.47715 32.5 10V116.5C32.5 122.023 28.0229 126.5 22.5 126.5H10.1421C1.23309 126.5 -3.22857 137.271 3.07108 143.571L74.9289 215.429C78.8342 219.334 85.1658 219.334 89.0711 215.429L160.929 143.571C167.229 137.271 162.767 126.5 153.858 126.5H141.5C135.977 126.5 131.5 122.023 131.5 116.5Z"/>
            </svg>
            <svg className='advantages__item-bg' width="915" height="354" viewBox="0 0 915 354" fill="none"
                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path
                d="M96.457 8.69546C219.761 8.69539 356.972 27.1797 518.313 8.69544C679.655 -9.7888 915.5 8.69546 915.5 8.69546V340.4C915.5 340.4 685.083 318.419 518.313 340.4C446.752 349.831 443.317 358.844 350.557 349.622C257.798 340.399 220.61 340.4 96.457 340.4C-31.4856 340.4 -31.4856 8.69553 96.457 8.69546Z"/>
            </svg>
            <div className="advantages__item-photo"><img className="advantages__item-photo-img"
                                                         src="assets/images/palette.8266bd42.png" alt="Маникюр"/></div>
            <div className="advantages__item-description"><h3 className="advantages__item-title">Большая палитра
              цветов</h3>
              <p className="advantages__item-text">Палитра состоит более чем из 300 оттенков и постоянно пополняется</p>
            </div>
          </div>
          <div className="advantages__item">
            <svg className='advantages__item-bg' width="915" height="354" viewBox="0 0 915 354" fill="none"
                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path
                d="M96.457 8.69546C219.761 8.69539 356.972 27.1797 518.313 8.69544C679.655 -9.7888 915.5 8.69546 915.5 8.69546V340.4C915.5 340.4 685.083 318.419 518.313 340.4C446.752 349.831 443.317 358.844 350.557 349.622C257.798 340.399 220.61 340.4 96.457 340.4C-31.4856 340.4 -31.4856 8.69553 96.457 8.69546Z"/>
            </svg>
            <div className="advantages__item-photo"><img className="advantages__item-photo-img"
                                                         src="assets/images/nails_design.bf221640.png" alt="Маникюр"/>
            </div>
            <div className="advantages__item-description"><h3 className="advantages__item-title">Уникальные дизайны</h3>
              <p className="advantages__item-text">Слайдеры, стемпинг или ручная роспись в акварельной технике и
                текстуре</p></div>
          </div>
        </div>
      </section>
      <section className="benefits">
        <div className="container benefits__container">
          <div className="title title_primary-1 benefits__title">
            <svg className='title__bg' width="720" height="100" viewBox="0 0 720 100" fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 preserveAspectRatio="none">
              <path
                d="M98.8826 4.98828C365.724 -9.66551 375.172 12.6316 704.869 12.6315C751.778 12.6315 678.89 99.9999 631.981 100C394.069 100 324.947 100 13.6497 100C-33.2597 100 52.0574 7.55972 98.8826 4.98828Z"
                fill="#9FAB7C"/>
            </svg>
            <h2 className="title__text">С нами комфортно</h2></div>
          <div className="benefits__items">
            <div className="benefit__item">
              <div className="benefit__item-photo"><img className="benefit__item-photo-img"
                                                        src="assets/images/parking.06b1e578.png"
                                                        alt="Свободная парковка"/>
              </div>
              <div className="benefit__item-description"><h3 className="benefit__item-title">Свободная парковка</h3>
                <p className="benefit__item-text">Рядом со студией находится большая и свободная парковка вдоль
                  дороги</p></div>
            </div>
            <div className="benefit__item">
              <div className="benefit__item-photo"><img className="benefit__item-photo-img"
                                                        src="assets/images/map.e2b17c8f.png"
                                                        alt="Удобное расположение"/>
              </div>
              <div className="benefit__item-description"><h3 className="benefit__item-title">Удобное расположение</h3>
                <p className="benefit__item-text">Студия находится в центре города. В 1 минуте от остановки “Сквер
                  Гуртьева”</p></div>
            </div>
            <div className="benefit__item">
              <div className="benefit__item-photo"><img className="benefit__item-photo-img"
                                                        src="assets/images/cup.8e463cf0.png" alt="Высокий сервис"/>
              </div>
              <div className="benefit__item-description"><h3 className="benefit__item-title">Высокий сервис</h3>
                <p className="benefit__item-text">Чай, кофе, конфеты и хороший фильм во время процедуры сделают ее для
                  вас совсем незаметной</p></div>
            </div>
            <div className="benefit__item">
              <div className="benefit__item-photo"><img className="benefit__item-photo-img"
                                                        src="assets/images/clock.fa2115c3.png"
                                                        alt="Онлайн запись 24/7"/>
              </div>
              <div className="benefit__item-description"><h3 className="benefit__item-title">Онлайн запись 24/7</h3>
                <p className="benefit__item-text">Благодаря онлайн записи вы можете записаться даже ночью.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="price-list">
        <div className="container price__container">
          <div className="title title_primary-1 price__title">
            <svg className='title__bg' width="720" height="100" viewBox="0 0 720 100" fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 preserveAspectRatio="none">
              <path
                d="M98.8826 4.98828C365.724 -9.66551 375.172 12.6316 704.869 12.6315C751.778 12.6315 678.89 99.9999 631.981 100C394.069 100 324.947 100 13.6497 100C-33.2597 100 52.0574 7.55972 98.8826 4.98828Z"
                fill="#9FAB7C"/>
            </svg>
            <h2 className="title__text">Приятные цены</h2></div>
          <div className="price-list__groups">
            <div className="price-list-group">
              <svg className='price-list__bg price-list__bg_1' width="1340" height="218" viewBox="0 0 1340 218"
                   fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path
                  d="M0.918149 108.318C-1.07185 65.8131 -7.01408 9.39321 77.0846 6.45002C491.769 -8.06258 628.868 6.45012 1232.56 6.45002C1361.89 6.45 1382.52 203.307 1250.05 201.364C958.923 197.095 881.596 203.12 648.615 201.364C431.475 199.728 141.264 231.37 92.8821 211.323C44.5 191.277 2.98303 152.421 0.918149 108.318Z"
                  fill="white"/>
              </svg>
              <h3 className="price-list-group__title">Акция “Первый визит”</h3>
              <div className="price-list-group__items">
                <div className="price-list-group__item"><p className="price-list-group__item-title">Маникюр: cнятие +
                  обработка + покрытие гель-лак в один тон</p><span className="price-list-group__item-price">990 ₽ вместо 1300 ₽</span>
                </div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Педикюр: снятие +
                  обработка + покрытием гель-лак + обработка стоп</p><span className="price-list-group__item-price">1300 ₽ вместо 1600 ₽</span>
                </div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Комплекс в 4 руки:
                  маникюр + педикюр</p><span className="price-list-group__item-price">2290 ₽ вместо 2900 ₽</span>
                </div>
              </div>
            </div>
            <div className="price-list-group">
              <svg className='price-list__bg price-list__bg_1' width="1340" height="218" viewBox="0 0 1340 218"
                   fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path
                  d="M0.918149 108.318C-1.07185 65.8131 -7.01408 9.39321 77.0846 6.45002C491.769 -8.06258 628.868 6.45012 1232.56 6.45002C1361.89 6.45 1382.52 203.307 1250.05 201.364C958.923 197.095 881.596 203.12 648.615 201.364C431.475 199.728 141.264 231.37 92.8821 211.323C44.5 191.277 2.98303 152.421 0.918149 108.318Z"
                  fill="white"/>
              </svg>
              <h3 className="price-list-group__title">Маникюр</h3>
              <div className="price-list-group__items">
                <div className="price-list-group__item"><p className="price-list-group__item-title">Комбинированный
                  маникюр
                  (обработка без покрытия)</p><span className="price-list-group__item-price">700 ₽</span></div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Обработка + покрытие
                  гель-лак в один тон. Снятие в подарок</p><span
                  className="price-list-group__item-price">1300 ₽</span></div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Укрепление
                  гелем/акриловой пудрой</p><span className="price-list-group__item-price">бесплатно</span></div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Укрепление
                  полигелем</p>
                  <span className="price-list-group__item-price">200 ₽</span></div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Снятие (без
                  последующего
                  покрытия)</p><span className="price-list-group__item-price">300 ₽</span></div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Восстановление
                  архитектуры</p><span className="price-list-group__item-price">300 ₽</span></div>
              </div>
            </div>
            <div className="price-list-group">
              <svg className='price-list__bg price-list__bg_2' width="1340" height="252" viewBox="0 0 1340 252"
                   fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path
                  d="M1339.08 122.588C1341.07 74.4839 1347.01 10.6308 1262.92 7.29981C848.231 -9.12481 711.132 7.29992 107.441 7.29981C-21.8906 7.29978 -42.5249 230.092 89.9517 227.894C381.077 223.062 458.404 229.881 691.385 227.894C908.525 226.042 1216.46 274.267 1247.12 239.165C1277.77 204.063 1337.02 172.503 1339.08 122.588Z"
                  fill="white"/>
              </svg>
              <h3 className="price-list-group__title">Педикюр</h3>
              <div className="price-list-group__items">
                <div className="price-list-group__item"><p className="price-list-group__item-title">Полная обработка
                  (без
                  покрытия)</p><span className="price-list-group__item-price">1100 ₽</span></div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Обработка + покрытие
                  гель-лак (без пяток)</p><span className="price-list-group__item-price">1300 ₽</span></div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Полная обработка +
                  покрытие гель-лак</p><span className="price-list-group__item-price">1600 ₽</span></div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Ремонт
                  (восстановление
                  угла / трещина)</p><span className="price-list-group__item-price">100 ₽</span></div>
              </div>
            </div>
            <div className="price-list-group">
              <svg className='price-list__bg price-list__bg_2' width="1340" height="252" viewBox="0 0 1340 252"
                   fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path
                  d="M1339.08 122.588C1341.07 74.4839 1347.01 10.6308 1262.92 7.29981C848.231 -9.12481 711.132 7.29992 107.441 7.29981C-21.8906 7.29978 -42.5249 230.092 89.9517 227.894C381.077 223.062 458.404 229.881 691.385 227.894C908.525 226.042 1216.46 274.267 1247.12 239.165C1277.77 204.063 1337.02 172.503 1339.08 122.588Z"
                  fill="white"/>
              </svg>
              <h3 className="price-list-group__title">Комплекс в 4 руки</h3>
              <div className="price-list-group__items">
                <div className="price-list-group__item"><p className="price-list-group__item-title">Маникюр + педикюр (
                  обработка без покрытия )</p><span className="price-list-group__item-price">1800 ₽</span></div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Маникюр с покрытие
                  гель-лак + педикюр с покрытием гель-лак (без пяток)</p><span
                  className="price-list-group__item-price">2600 ₽</span></div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Маникюр с покрытие
                  гель-лак + педикюр с покрытием гель-лак и обработкой стопы</p><span
                  className="price-list-group__item-price">2900 ₽</span></div>
              </div>
            </div>
            <div className="price-list-group">
              <svg className='price-list__bg price-list__bg_2' width="1340" height="252" viewBox="0 0 1340 252"
                   fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path
                  d="M1339.08 122.588C1341.07 74.4839 1347.01 10.6308 1262.92 7.29981C848.231 -9.12481 711.132 7.29992 107.441 7.29981C-21.8906 7.29978 -42.5249 230.092 89.9517 227.894C381.077 223.062 458.404 229.881 691.385 227.894C908.525 226.042 1216.46 274.267 1247.12 239.165C1277.77 204.063 1337.02 172.503 1339.08 122.588Z"
                  fill="white"/>
              </svg>
              <h3 className="price-list-group__title">Наращивание</h3>
              <div className="price-list-group__items">
                <div className="price-list-group__item"><p className="price-list-group__item-title">Длина от 1 до
                  3-ки</p>
                  <span className="price-list-group__item-price">1600 ₽</span></div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Длина от 3 до
                  5-ки</p>
                  <span className="price-list-group__item-price">1800 ₽</span></div>
                <div className="price-list-group__item price-list-group__item_without-border"><p
                  className="price-list-group__item-title">Внимание, свыше 5-ки не наращиваем</p></div>
              </div>
            </div>
            <div className="price-list-group">
              <svg className='price-list__bg price-list__bg_2' width="1340" height="252" viewBox="0 0 1340 252"
                   fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path
                  d="M1339.08 122.588C1341.07 74.4839 1347.01 10.6308 1262.92 7.29981C848.231 -9.12481 711.132 7.29992 107.441 7.29981C-21.8906 7.29978 -42.5249 230.092 89.9517 227.894C381.077 223.062 458.404 229.881 691.385 227.894C908.525 226.042 1216.46 274.267 1247.12 239.165C1277.77 204.063 1337.02 172.503 1339.08 122.588Z"
                  fill="white"/>
              </svg>
              <div className="price-list-group__header"><h3 className="price-list-group__title">Дизайны</h3><h4
                className="price-list-group__title">1 ноготь/все ногти</h4></div>
              <div className="price-list-group__items">
                <div className="price-list-group__item"><p className="price-list-group__item-title">
                  Стемпинг/наклейки/расстяжка</p><span className="price-list-group__item-price">50 ₽/300 ₽</span>
                </div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">
                  Градиент/акварель/текстуры</p><span className="price-list-group__item-price">50 ₽/500 ₽</span></div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Снятие (без
                  последующего
                  покрытия)</p><span className="price-list-group__item-price">25 ₽/200 ₽</span></div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Укрепление
                  полигелем</p>
                  <span className="price-list-group__item-price">25 ₽/250 ₽</span></div>
                <div className="price-list-group__item"><p className="price-list-group__item-title">Укрепление акриловой
                  пудрой/гелем-в подарок</p><span
                  className="price-list-group__item-price">100-300 ₽/ 1000-2500 ₽</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="container portfolio__container">
          <div className="title title_primary-2 portfolio__title">
            <svg className='title__bg' width="720" height="100" viewBox="0 0 720 100" fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 preserveAspectRatio="none">
              <path
                d="M98.8826 4.98828C365.724 -9.66551 375.172 12.6316 704.869 12.6315C751.778 12.6315 678.89 99.9999 631.981 100C394.069 100 324.947 100 13.6497 100C-33.2597 100 52.0574 7.55972 98.8826 4.98828Z"
                fill="#9FAB7C"/>
            </svg>
            <h2 className="title__text">Портфолио</h2></div>
        </div>
        <div className="portfolio__slider swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="assets/images/portfolio_1.98531cc6.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="assets/images/portfolio_2.cbcc76ca.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="assets/images/portfolio_3.01209da4.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="assets/images/portfolio_4.7cbde995.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="assets/images/portfolio_6.f400cafb.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="assets/images/portfolio_7.cdae2a56.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="assets/images/portfolio_10.f67cd9a6.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="assets/images/portfolio_11.d02b8323.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="assets/images/portfolio_12.5063f8f3.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="assets/images/portfolio_15.47426d29.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="assets/images/portfolio_16.6bdd1fcc.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="assets/images/portfolio_17.8ef1a172.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="assets/images/portfolio_18.7cbfa62d.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="assets/images/portfolio_19.cb979ee2.jpg" alt="Маникюр"/></div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </section>
      <section className="main-offer main-offer_second">
        <div className="container main-offer__container">
          <div className="main-offer__wrapper"><h2 className="main-offer__title">Акция “Первый визит - Педикюр”</h2><h4
            className="main-offer__subtitle">Профессиональный педикюр за 1300 ₽ вместо 1600 ₽</h4><a
            className="button button_primary" target="_blank" href="https://n445954.yclients.com">Записаться онлайн</a>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container about-us__container">
          <div className="title title_primary-1 portfolio__title">
            <svg className='title__bg' width="720" height="100" viewBox="0 0 720 100" fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 preserveAspectRatio="none">
              <path
                d="M98.8826 4.98828C365.724 -9.66551 375.172 12.6316 704.869 12.6315C751.778 12.6315 678.89 99.9999 631.981 100C394.069 100 324.947 100 13.6497 100C-33.2597 100 52.0574 7.55972 98.8826 4.98828Z"
                fill="#9FAB7C"/>
            </svg>
            <h2 className="title__text">О нас</h2></div>
          <div className="about-us__wrapper">
            <div className="about-us__logo">
              <div className="logo about-us__logo-img"><img className="logo__img"
                                                            src="assets/images/logo.778ad473.svg"/>
              </div>
              <span className="about-us__separator">это</span></div>
            <div className="about-us__items">
              <div className="about-us__item">
                <div className="about-us__item-number">3000+</div>
                <div className="about-us__item-description">выполненных работ</div>
              </div>
              <div className="about-us__item">
                <div className="about-us__item-number">250+</div>
                <div className="about-us__item-description">отзывов довольных клиентов</div>
              </div>
              <div className="about-us__item">
                <div className="about-us__item-number">24+</div>
                <div className="about-us__item-description">месяца успешной работы</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team">
        <div className="container team__container">
          <div className="title title_primary-2 portfolio__title">
            <svg className='title__bg' width="720" height="100" viewBox="0 0 720 100" fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 preserveAspectRatio="none">
              <path
                d="M98.8826 4.98828C365.724 -9.66551 375.172 12.6316 704.869 12.6315C751.778 12.6315 678.89 99.9999 631.981 100C394.069 100 324.947 100 13.6497 100C-33.2597 100 52.0574 7.55972 98.8826 4.98828Z"
                fill="#9FAB7C"/>
            </svg>
            <h2 className="title__text">Команда</h2></div>
          <div className="team__masters">
            <div className="master team__master">
              <div className="master__photo"><img src="assets/images/team_1.838e5d89.png"/></div>
              <h4 className="master__name">Мастер Татьяна</h4>
              <div className="master__description">Маникюр, педикюр, наращивание</div>
            </div>
            <div className="master team__master">
              <div className="master__photo"><img src="assets/images/team_2.cc95fc60.png"/></div>
              <h4 className="master__name">Мастер Александра</h4>
              <div className="master__description">Маникюр, педикюр, наращивание</div>
            </div>
            <div className="master team__master">
              <div className="master__photo"><img src="assets/images/team_3.500a9620.png"/></div>
              <h4 className="master__name">Мастер Юлия</h4>
              <div className="master__description">Маникюр и педикюр</div>
            </div>
            <div className="master team__master">
              <div className="master__photo"><img src="assets/images/team_4.55c7c0a2.png"/></div>
              <h4 className="master__name">Мастер Эльвира</h4>
              <div className="master__description">Маникюр, педикюр, наращивание</div>
            </div>
            <div className="master team__master">
              <div className="master__photo"><img src="assets/images/team_5.d7ec2719.png"/></div>
              <h4 className="master__name">Мастер Маргарита</h4>
              <div className="master__description">Маникюр</div>
            </div>
            <div className="master team__master">
              <div className="master__photo"><img src="assets/images/team_6.75cbd10b.png"/></div>
              <h4 className="master__name">Мастер Надежда</h4>
              <div className="master__description">Маникюр</div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-offer main-offer_thrid">
        <div className="main-offer__bg"></div>
        <div className="container">
          <div className="main-offer__wrapper"><h2 className="main-offer__title">В 4 руки</h2><h4
            className="main-offer__subtitle">Профессиональный маникюр + педикюр = 2 часа ( вместо 4 )</h4><a
            className="button button_primary" target="_blank" href="https://n445954.yclients.com">Записаться онлайн</a>
          </div>
        </div>
      </section>
      <section className="contacts">
        <div className="container contacts__container">
          <div className="title title_primary-2 contacts__title">
            <svg className='title__bg' width="720" height="100" viewBox="0 0 720 100" fill="none"
                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path
                d="M98.8826 4.98828C365.724 -9.66551 375.172 12.6316 704.869 12.6315C751.778 12.6315 678.89 99.9999 631.981 100C394.069 100 324.947 100 13.6497 100C-33.2597 100 52.0574 7.55972 98.8826 4.98828Z"
                fill="#9FAB7C"/>
            </svg>
            <h2 className="title__text">Контакты</h2></div>
          <div className="contacts__info">
            <div className="contacts__items">
              <div className="contacts__item contacts__address"><h4
                className="contacts__item-title contacts__address-title">Адрес</h4>
                <div className="contacts__address-text">г. Орёл, ул. Гуртьева, д. 14</div>
              </div>
              <div className="contacts__item contacts__phone"><h4
                className="contacts__item-title contacts__phone-title">Номер телефона</h4>
                <div className="contacts__phone-text">+7-(953)-476-21-21</div>
              </div>
            </div>
          </div>
        </div>
        <div className="contacts__map">
          <script type="text/javascript" charSet="utf-8" async
                  src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A295146b332980b46684b0e1deb904fb468cdcfb19699d4896afcd41fbdb5530a&amp;amp;width=100%25&amp;amp;height=100%&amp;amp;lang=ru_RU&amp;amp;scroll=true"></script>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="logo"><img className="logo__img" src="assets/images/logo.778ad473.svg"/></div>
            <p className="footer__year">2022</p>
            <div className="social"><a className="social__item social__vk" href="https://vk.com/family.nails">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.25 16.996h-2.134c-1.205 0-1.409-.687-2.401-1.679-.897-.897-1.395-.209-1.374 1.068.006.339-.161.611-.566.611-1.264 0-3.08.178-4.918-1.806-1.883-2.033-3.857-6.111-3.857-6.513 0-.237.196-.344.524-.344h2.17c.574 0 .623.284.783.649.667 1.521 2.265 4.574 2.69 2.87.244-.978.344-3.245-.703-3.44-.594-.11.452-.746 1.968-.746.377 0 .786.041 1.205.137.769.179.771.523.761 1.026-.039 1.903-.269 3.184.233 3.507.479.31 1.739-1.717 2.403-3.281.183-.433.219-.722.734-.722h2.654c1.39 0-.182 1.997-1.383 3.557-.968 1.255-.916 1.28.209 2.324.803.744 1.75 1.76 1.75 2.336.002.272-.21.446-.748.446z"/>
              </svg>
            </a><a className="social__item social__inst" href="https://instagram.com/family_nail.s">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/>
              </svg>
            </a><a className="social__item social__whatsapp"
                   href="https://wa.me/79534762121?text=Здравствуйте, я бы хотела записаться на маникюр">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"/>
              </svg>
            </a></div>
          </div>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      <script src="assets/js/runtime.1d80ba09.bundle.js"></script>
      <script src="assets/js/home.d9594e1d.bundle.js"></script>

      */}
    </>
  )
}

export default Home
