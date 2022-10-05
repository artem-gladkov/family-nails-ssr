import type {NextPage} from 'next'
import {Preview} from "../widgets/preview";
import {AboutUs} from "../widgets/aboutUs";
import {PageLayout} from "@shared/ui";

const AboutUsPage: NextPage = () => {
  return (
    <PageLayout pageTitle='О нас'>
      <Preview previewTitle={<>Ногтевая студия <br/> Family Nail&apos;s</>}/>
      <AboutUs/>
    </PageLayout>
  )
}

export default AboutUsPage
