import {MasterProps} from "../ui";
import master_1 from 'public/images/team/team_1.jpg'
import master_2 from 'public/images/team/team_2.jpg'
import master_3 from 'public/images/team/team_3.jpg'
import master_4 from 'public/images/team/team_4.jpg'
import master_5 from 'public/images/team/team_5.jpg'
import master_6 from 'public/images/team/team_6.jpg'
import master_7 from 'public/images/team/team_7.jpg'

export const MASTERS_LIST: MasterProps[] = [{
  key: '1',
  name: 'Мастер Татьяна',
  description: 'Маникюр, педикюр, наращивание',
  photo: {src: master_1, alt: 'Мастер по маникюру, педикюру и наращиванию Татьяна'}
},{
  key: '2',
  name: 'Мастер Александра',
  description: 'Маникюр, педикюр, наращивание',
  photo: {src: master_2, alt: 'Мастер по маникюру, педикюру и наращиванию Александра'}
},{
  key: '3',
  name: 'Мастер Юлия',
  description: 'Маникюр и педикюр',
  photo: {src: master_3, alt: 'Мастер по маникюру и педикюру Юлия'}
},{
  key: '4',
  name: 'Мастер Эльвира',
  description: 'Маникюр, педикюр, наращивание',
  photo: {src: master_4, alt: 'Мастер по маникюру, педикюру и наращиванию Эльвира'}
},{
  key: '5',
  name: 'Мастер Маргарита',
  description: 'Маникюр',
  photo: {src: master_5, alt: 'Мастер по маникюру Маргарита'}
},{
  key: '6',
  name: 'Мастер Надежда',
  description: 'Маникюр',
  photo: {src: master_6, alt: 'Мастер по маникюру Надежда'}
},{
  key: '7',
  name: 'Мастер Диана',
  description: 'Маникюр',
  photo: {src: master_7, alt: 'Мастер по маникюру Диана'}
},]
