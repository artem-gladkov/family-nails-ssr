import {PriceListGroupProps} from "@widgets/priceList";

export const PRICE_LIST: PriceListGroupProps[] = [{
  key: '2',
  title: 'Маникюр',
  items: [{
    key: '1',
    name: 'Комбинированный маникюр (обработка без покрытия)',
    price: '700 ₽'
  }, {
    key: '2',
    name: 'Обработка + покрытие гель-лак в один тон. Снятие в подарок',
    price: '1300 ₽'
  }, {
    key: '3',
    name: 'Укрепление гелем/акриловой пудрой',
    price: 'бесплатно'
  }, {
    key: '4',
    name: 'Укрепление полигелем',
    price: '200 ₽'
  }, {
    key: '5',
    name: 'Снятие (без последующего покрытия)',
    price: '300 ₽'
  }, {
    key: '6',
    name: 'Восстановление архитектуры',
    price: '500 ₽'
  },]
}, {
  key: '3',
  title: 'Педикюр',
  items: [{
    key: '1',
    name: 'Полная обработка (без покрытия)',
    price: '1100 ₽'
  }, {
    key: '2',
    name: 'Обработка + покрытие гель-лак (без пяток)',
    price: '1300 ₽'
  }, {
    key: '3',
    name: 'Полная обработка + покрытие гель-лак',
    price: '1600 ₽'
  }, {
    key: '4',
    name: 'Ремонт (восстановление угла / трещина)',
    price: '100 ₽'
  },]
}, {
  key: '4',
  title: 'Комплекс в 4 руки',
  items: [{
    key: '1',
    name: 'Маникюр + педикюр ( обработка без покрытия )',
    price: '1800 ₽'
  }, {
    key: '2',
    name: 'Маникюр с покрытие гель-лак + педикюр с покрытием гель-лак (без пяток)',
    price: '2600 ₽'
  }, {
    key: '3',
    name: 'Маникюр с покрытие гель-лак + педикюр с покрытием гель-лак и обработкой стопы',
    price: '2900 ₽'
  },]
}, {
  key: '5',
  title: 'Наращивание',
  items: [{
    key: '1',
    name: 'Длина от 1 до 3-ки',
    price: '1600 ₽'
  }, {
    key: '2',
    name: 'Длина от 3 до 5-ки',
    price: '1800 ₽'
  }, {
    key: '3',
    name: 'Внимание, свыше 5-ки не наращиваем',
    price: ''
  },]
}, {
  key: '6',
  priceColumnName: '1 ноготь/все ногти',
  title: 'Дизайны',
  items: [{
    key: '1',
    name: 'Стемпинг/наклейки/расстяжка',
    price: '50 ₽/300 ₽'
  }, {
    key: '2',
    name: 'Градиент/акварель/текстуры',
    price: '50 ₽/500 ₽'
  }, {
    key: '3',
    name: 'Ручная роспись',
    price: '100-300 ₽/ 1000-2500 ₽'
  },]
},]
