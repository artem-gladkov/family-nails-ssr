import {BenefitProps} from "../ui";
import { Icon } from "@shared/ui";

export const BENEFITS_LIST: BenefitProps[] = [{
  key: '1',
  icon: <Icon type='IconParking' />,
  title: 'Свободная парковка',
  description: 'Рядом со студией находится большая и свободная парковка вдоль дороги'
}, {
  key: '2',
  icon: <Icon type='IconMap'/>,
  title: 'Удобное расположение',
  description: 'Студия находится в центре города. В 1 минуте от остановки "Сквер Гуртьева"'
}, {
  key: '3',
  icon: <Icon type='IconCup'/>,
  title: 'Высокий сервис',
  description: 'Чай, кофе, конфеты и хороший фильм во время процедуры сделают ее для вас совсем незаметной'
}, {
  key: '4',
  icon: <Icon type='IconService'/>,
  title: 'Онлайн запись 24/7',
  description: 'Благодаря онлайн записи вы можете записаться даже ночью '
}]
