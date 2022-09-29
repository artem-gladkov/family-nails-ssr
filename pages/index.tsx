import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Header} from "../features/header";
import {Footer} from "../features/footer";
import classNames from "classnames";
import {Button, Container} from "@shared/ui";
import {Preview} from "../features/preview/ui/Preview";
import {Offer} from "../features/offer";

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
              href="../app/images/favicons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32"
              href="../app/images/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16"
              href="../app/images/favicons/favicon-16x16.png"/>
        <link rel="mask-icon" href="../app/images/favicons/safari-pinned-tab.svg"
              color="#5bbad5"/>
        <title>Family Nails — Студия маникюра и педикюра</title>
        {/*<link href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"*/}
        {/*      rel="stylesheet"/>*/}
      </Head>

      <Header/>
      <Preview />
      <Offer />

      {/*
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
                                                         src="../app/images/lacquers.e8f5b3db.png" alt="LUXIO"/></div>
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
                                                         src="../app/images/massage.19c08bf4.png" alt="Массаж"/></div>
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
                                                         src="../app/images/palette.8266bd42.png" alt="Маникюр"/></div>
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
                                                         src="../app/images/nails_design.bf221640.png" alt="Маникюр"/>
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
                                                        src="../app/images/parking.06b1e578.png"
                                                        alt="Свободная парковка"/>
              </div>
              <div className="benefit__item-description"><h3 className="benefit__item-title">Свободная парковка</h3>
                <p className="benefit__item-text">Рядом со студией находится большая и свободная парковка вдоль
                  дороги</p></div>
            </div>
            <div className="benefit__item">
              <div className="benefit__item-photo"><img className="benefit__item-photo-img"
                                                        src="../app/images/map.e2b17c8f.png"
                                                        alt="Удобное расположение"/>
              </div>
              <div className="benefit__item-description"><h3 className="benefit__item-title">Удобное расположение</h3>
                <p className="benefit__item-text">Студия находится в центре города. В 1 минуте от остановки “Сквер
                  Гуртьева”</p></div>
            </div>
            <div className="benefit__item">
              <div className="benefit__item-photo"><img className="benefit__item-photo-img"
                                                        src="../app/images/cup.8e463cf0.png" alt="Высокий сервис"/>
              </div>
              <div className="benefit__item-description"><h3 className="benefit__item-title">Высокий сервис</h3>
                <p className="benefit__item-text">Чай, кофе, конфеты и хороший фильм во время процедуры сделают ее для
                  вас совсем незаметной</p></div>
            </div>
            <div className="benefit__item">
              <div className="benefit__item-photo"><img className="benefit__item-photo-img"
                                                        src="../app/images/clock.fa2115c3.png"
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
              <div className="portfolio__img"><img src="../app/images/portfolio_1.98531cc6.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="../app/images/portfolio_2.cbcc76ca.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="../app/images/portfolio_3.01209da4.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="../app/images/portfolio_4.7cbde995.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="../app/images/portfolio_6.f400cafb.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="../app/images/portfolio_7.cdae2a56.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="../app/images/portfolio_10.f67cd9a6.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="../app/images/portfolio_11.d02b8323.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="../app/images/portfolio_12.5063f8f3.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="../app/images/portfolio_15.47426d29.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="../app/images/portfolio_16.6bdd1fcc.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="../app/images/portfolio_17.8ef1a172.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="../app/images/portfolio_18.7cbfa62d.jpg" alt="Маникюр"/></div>
            </div>
            <div className="swiper-slide">
              <div className="portfolio__img"><img src="../app/images/portfolio_19.cb979ee2.jpg" alt="Маникюр"/></div>
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
                                                            src="../app/images/logo.778ad473.svg"/>
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
              <div className="master__photo"><img src="../app/images/team_1.838e5d89.png"/></div>
              <h4 className="master__name">Мастер Татьяна</h4>
              <div className="master__description">Маникюр, педикюр, наращивание</div>
            </div>
            <div className="master team__master">
              <div className="master__photo"><img src="../app/images/team_2.cc95fc60.png"/></div>
              <h4 className="master__name">Мастер Александра</h4>
              <div className="master__description">Маникюр, педикюр, наращивание</div>
            </div>
            <div className="master team__master">
              <div className="master__photo"><img src="../app/images/team_3.500a9620.png"/></div>
              <h4 className="master__name">Мастер Юлия</h4>
              <div className="master__description">Маникюр и педикюр</div>
            </div>
            <div className="master team__master">
              <div className="master__photo"><img src="../app/images/team_4.55c7c0a2.png"/></div>
              <h4 className="master__name">Мастер Эльвира</h4>
              <div className="master__description">Маникюр, педикюр, наращивание</div>
            </div>
            <div className="master team__master">
              <div className="master__photo"><img src="../app/images/team_5.d7ec2719.png"/></div>
              <h4 className="master__name">Мастер Маргарита</h4>
              <div className="master__description">Маникюр</div>
            </div>
            <div className="master team__master">
              <div className="master__photo"><img src="../app/images/team_6.75cbd10b.png"/></div>
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
      */
      }
      <Footer/>
      {/*<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>*/
      }
      {/*<script src="assets/js/runtime.1d80ba09.bundle.js"></script>*/
      }
      {/*<script src="assets/js/home.d9594e1d.bundle.js"></script>*/
      }
    </>
  )
}

export default Home
