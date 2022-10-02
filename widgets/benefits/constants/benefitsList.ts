import {BenefitProps} from "../ui";
import parkingPhoto from './parking.png'
import clockPhoto from './clock.png'
import mapPhoto from './map.png'
import cupPhoto from './cup.png'

export const BENEFITS_LIST: BenefitProps[] = [{
  key: '1',
  icon: {src: parkingPhoto, alt: 'Иконка парковки с буквой P'},
  title: 'Свободная парковка',
  description: 'Рядом со студией находится большая и свободная парковка вдоль дороги'
}, {
  key: '2',
  icon: {src: mapPhoto, alt: 'Иконка карты'},
  title: 'Удобное расположение',
  description: 'Студия находится в центре города. В 1 минуте от остановки "Сквер Гуртьева"'
}, {
  key: '3',
  icon: {src: cupPhoto, alt: 'Иконка чашки для чая'},
  title: 'Высокий сервис',
  description: 'Чай, кофе, конфеты и хороший фильм во время процедуры сделают ее для вас совсем незаметной'
}, {
  key: '4',
  icon: {src: clockPhoto, alt: 'Иконка часов 24'},
  title: 'Онлайн запись 24/7',
  description: 'Благодаря онлайн записи вы можете записаться даже ночью '
}]
