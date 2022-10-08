import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './PageLayout.module.scss'
import Head from "next/head";
import {Header} from "../../../widgets/header";
import {Footer} from "../../../widgets/footer";

export interface PageLayoutProps extends HTMLProps<any> {
  pageTitle: string
  description: string
}


export const PageLayout: FC<PageLayoutProps> = ({className, pageTitle,description,  children, ...otherProps}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Head>

      <Header/>
      <div className={classNames(styles.pageWrapper, className)}>
        {children}
      </div>
      <Footer/>
    </>
  )
}
