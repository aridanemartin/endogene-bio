import HeroBannerImage from '../../_assets/pictures/teamStock.jpg'
import Header from '@components/Header/Header'

const TechnologyPage = () => {
  return (
    <div>
      <Header title="Technology" image={HeroBannerImage} />
      <h2>What is endometriosis </h2>
      <ul>
        <li>
          o Endometriosis is a complex gynecological condition characterized by
          the presence of endometrial-like tissue outside the uterus, which
          induces a chronic, inflammatory response. This tissue, behaving
          similarly to the lining of the uterus, thickens, breaks down, and
          bleeds with each menstrual cycle. However, because it is located
          outside the uterus, it has no way to exit the body, leading to pain,
          inflammation, and the formation of scar tissue. Symptoms can vary but
          often include severe menstrual cramps, chronic pain in the lower back
          and pelvis, pain during or after sexual intercourse, intestinal pain,
          and infertility in some cases.
        </li>
        <li>
          o Diagnosis of endometriosis can be notably challenging and is
          frequently delayed. On average, it takes from 7 to 10 years from the
          onset of symptoms for a woman to receive a definitive diagnosis. This
          delay is due to a combination of factors, including the normalization
          of menstrual pain, the variability of symptoms, and the necessity for
          a definitive diagnosis to be made through laparoscopy—a surgical
          procedure that allows a physician to observe the pelvic organs
          directly and take tissue samples for examination. The complex nature
          of endometriosis and the broad spectrum of its manifestations
          contribute to the prolonged period many women experience before
          receiving an accurate diagnosis.
        </li>
      </ul>

      <h2>The importance of menstrual blood for diagnosis</h2>
      <ul>
        <li>
          o Menstrual blood, often regarded as waste, serves as an excellent
          diagnostic tool. It contains materials shed during menstruation, such
          as endometrial tissue, immune cells, proteins, and microorganisms. In
          fact, menstrual blood boasts over 300 unique proteins not found in
          other blood or body parts. The proportions of different cell types in
          menstrual blood differ significantly from those in other areas of the
          body, presenting novel diagnostic targets.
        </li>
        <li>
          o Using menstrual blood for diagnostics is non-invasive and does not
          require a needle. This method offers the potential to identify
          diseases, determine a patient's likely response to specific
          treatments, and predict current health status. Furthermore, it can
          forecast future risks of gynecological or reproductive disorders in
          subsequent menstrual cycles o One patient, one model.
        </li>
      </ul>

      <h2>What is epigenetics and why do we use it?</h2>

      <ul>
        <li>
          o Epigenetics explores how environmental factors and behaviors
          influence gene expression. Throughout our growth and development,
          various factors act on our genome, regulating the activation and
          deactivation of genes at specific times and locations. These
          regulatory mechanisms can be significantly affected by our environment
          and lifestyle choices, such as stress levels, or whether an individual
          smokes. Consequently, these influences may lead to changes that
          activate or deactivate genes in ways that deviate from their normal
          patterns.
        </li>
        <li>
          o Crucially, alterations in these regulatory factors can lead to
          diseases by improperly activating or deactivating genes.
        </li>
      </ul>
    </div>
  )
}

export default TechnologyPage
