import { ContactProps } from "../ui";
import {Social} from "@shared/ui";

export const CONTACTS_LIST: ContactProps[] = [{
  key: '1',
  title: 'Адрес',
  subtitle: '302028, г. Орёл, ул. Гуртьева, д. 14'
},{
  key: '2',
  title: 'Номер телефона',
  subtitle: '+7-(953)-476-21-21'
},{
  key: '3',
  title: 'Время работы',
  subtitle: 'Ежедневно с 09:00 до 21:00'
},{
  key: '4',
  title: 'Мы в социальных сетях',
  subtitle: <Social />
},]
