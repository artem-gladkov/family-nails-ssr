import {MasterProps} from "../ui";
import master_1 from './team/team_1.png'
import master_2 from './team/team_2.png'
import master_3 from './team/team_3.png'
import master_4 from './team/team_4.png'
import master_5 from './team/team_5.png'
import master_6 from './team/team_6.png'

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
  photo: {src: master_3, alt: 'Мастер по маникюру и педикюру Татьяна'}
},{
  key: '4',
  name: 'Мастер Эльвира',
  description: 'Маникюр, педикюр, наращивание',
  photo: {src: master_4, alt: 'Мастер по маникюру, педикюру и наращиванию Эльвира'}
},{
  key: '5',
  name: 'Мастер Маргарита',
  description: 'Маникюр',
  photo: {src: master_5, alt: 'Мастер по маникюру Татьяна'}
},{
  key: '6',
  name: 'Мастер Надежда',
  description: 'Маникюр',
  photo: {src: master_6, alt: 'Мастер по маникюру Татьяна'}
},]
