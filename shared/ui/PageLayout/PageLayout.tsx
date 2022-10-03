import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './PageLayout.module.scss'
import Head from "next/head";
import {Header} from "../../../widgets/header";
import {Footer} from "../../../widgets/footer";

export interface PageLayoutProps extends HTMLProps<any> {
  pageName?: string
}


export const PageLayout: FC<PageLayoutProps> = ({pageName, children, ...otherProps}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>

        <title>{pageName ? `Family Nails | ${pageName}` : 'Family Nails — Студия маникюра и педикюра'}</title>
        <meta property="description" content="Студия маникюра и педикюра &quot;Family Nails&quot; в Орле"/>
        <meta property="og:title" content="Делаем качественный маникюр и педикюр — Студия «Family Nails»"/>
        <meta property="og:description" content="Студия маникюра и педикюра &quot;Family Nails&quot; в Орле"/>
        <meta property="og:url" content="https://family-nails.ru/"/>
        <meta property="og:site_name" content="Family Nails"/>
      </Head>

      <Header/>
      {children}
      <Footer/>
    </>
  )
}
