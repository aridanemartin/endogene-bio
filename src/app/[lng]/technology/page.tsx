import PictureSection from '@components/PictureSection/PictureSection'
import HeroBannerImage from '../../../_assets/pictures/teamStock.jpg'
import Header from '@components/Header/Header'
import Layout from '@components/Layout/Layout'

const TechnologyPage = ({ params: { lng } }) => {
  return (
    <>
      <Header title="Technology" image={HeroBannerImage} />
      <Layout maxWidth="1100px">
        <PictureSection
          lng={lng}
          picturePosition="right"
          pictureSrc={HeroBannerImage}
          translationKey="TECHNOLOGY.endometriosis.definition"
        />
        <PictureSection
          lng={lng}
          picturePosition="left"
          pictureSrc={HeroBannerImage}
          translationKey="TECHNOLOGY.endometriosis.diagnosis"
        />
        <PictureSection
          lng={lng}
          picturePosition="right"
          pictureSrc={HeroBannerImage}
          translationKey="TECHNOLOGY.menstrual_blood_diagnosis.importance"
        />
        <PictureSection
          lng={lng}
          picturePosition="left"
          pictureSrc={HeroBannerImage}
          translationKey="TECHNOLOGY.menstrual_blood_diagnosis.method"
        />
        <PictureSection
          lng={lng}
          picturePosition="right"
          pictureSrc={HeroBannerImage}
          translationKey="TECHNOLOGY.epigenettics.definition"
        />
        <PictureSection
          lng={lng}
          picturePosition="left"
          pictureSrc={HeroBannerImage}
          translationKey="TECHNOLOGY.epigenettics.importance"
        />
      </Layout>
    </>
  )
}

export default TechnologyPage
