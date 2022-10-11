import {AdvantageProps} from "@widgets/advantages/ui/Advantage";
import lacquersPhoto from "./lacquers.jpg";
import massagePhoto from "./massage.jpg";
import palettePhoto from "./palette.jpg";

export const ADVANTAGES_LIST: AdvantageProps[] = [{
  key: '0',
  photo: {src: lacquersPhoto, alt: 'Лаки LUXIO'},
  title: 'Современные материалы',
  description: 'Современные материалы не вредящие ногтевой пластине. LUXIO один из самых премиальных брендов в нашем направлении'
}, {
  key: '1',
  photo: {src: massagePhoto, alt: 'Массаж рук после маникюра'},
  title: 'Массаж после маникюра',
  description: 'Нежный массаж рук с увлажнающим и омолаживающим кремом после маникюра'
}, {
  key: '2',
  photo: {src: palettePhoto, alt: 'Палитра лаков для ногтей'},
  title: 'Большая палитра цветов',
  description: 'Палитра состоит более чем из 300 оттенков и постоянно пополняется'
}]
