import Header from '@components/Header/Header'
import Layout from '@components/Layout/Layout'
import banner from '@assets/pictures/legal.webp'
import '@styles/TermsOfUse.css'

export default function termsOfUse() {
  return (
    <div className="legal">
      <Header title="Terms of Use" image={banner} />
      <Layout maxWidth="1450px">
        <div className="legalText">
          <h2 className="legalTextTitle">Terms of Use</h2>
          <h2>Introduction and definitions</h2>
          <p>
            The website www.endogene.bio (hereinafter referred to “the Website”)
            is owned and operated by endogene (hereinafter referred to as
            “Endogene.bio”) registered with the RCS under number 953 195 583,
            whose head office is located at 4 Rue Pierre Fontaine, 91058
            Évry-Courcouronnes Cedex, France. To contact us, email:
            Info@endogene.bio. The use of this Website and services on this
            Website are subject to the following terms of use (hereinafter
            “Terms"). These Terms shall govern the use of all pages on this
            Website and any services provided by or on this Website
            ("Services"). The host of the Website is the company Vercel.
            Endogene.bio reserves the right to change, modify, add or remove
            portions of these Terms, at any time. It is your sole responsibility
            to check these Terms periodically for changes.By using this Website,
            you indicate that you have read and understand these Terms and agree
            to abide by them at all times. If you have any objection to any of
            these Terms, you must not use this Website.The content of the pages
            of this Website is for your general information and use only.
          </p>
          <h2>Applicable law & jurisdiction</h2>
          <p>
            This Website is subject to French law. Any claim or dispute shall be
            submitted to the exclusive jurisdiction of the competent Courts in
            Paris, France.
          </p>
          <h2>Content of this website</h2>
          <p>
            Endogene.bio will use its best efforts to ensure that the
            information on this Website is accurate. However, Endogene.bio
            disclaims any direct or indirect liability related to or caused by
            any errors or omissions in the content of this Website, as well as
            the use of this Website. This Website is for personal,
            non-commercial use only.
          </p>
          <h2>Link to other websites</h2>
          <p>
            Our Website contains links to third party websites (other
            Endogene.bio sites, social networks, third-party sites) that we do
            not own or control and that are not covered by this Terms. These
            links are established at a time when Endogene.bio deemed it
            appropriate, given the content and services they provided.These
            websites may collect data about you, use cookies, embed third party
            tracking tools, track your interactions with these embedded contents
            if you have an account logged on their website.Endogene.bio cannot
            be held responsible for the content, policies, or practices of any
            third party website linked to the Website.
          </p>
          <h2>Intellectual property right</h2>
          <p>
            All content published and made available on our Website, such as
            images, logos, copyrights, trademarks, registered or not, videos,
            texts, , and anything that contributes to the composition of our
            Website, are intellectual work within the meaning of the
            Intellectual Property Code and are therefore protected. They are
            Endogene.bio’s sole and exclusive property. You agree that
            Endogene.bio owns all right, title and interest in them and that you
            will not use them for any unlawful or infringing purpose. You agree
            not to modify, reproduce, represent, broadcast or rebroadcast,
            adapt, full or partial translate, or distribute in whole or in part
            any content of the Website, in any way, including electronically or
            via registration of any new trademarks, trade names, service marks
            or Uniform Resource Locators (URLs), for any use other than private,
            without express written permission from Endogene.bio.Unauthorised
            use of this Website may give rise to a claim for damages and/or be a
            criminal offence.
          </p>
          <h2>Restrictions</h2>
          <p>
            Without written permission of Endogene.bio, you are expressly
            restricted from all of the following: 1. Publishing any Website
            material in any media 2. Selling, sublicensing and/or
            commercializing any Website material 3. Publicly performing and/or
            showing any Website material4. Using this Website for illegal spam
            activities, including gathering email addresses and personal
            information from others or sending any mass commercial emails5.
            Using this Website in any way that is, or may be, damaging to this
            Website6. Using this Website in any way that impacts users to this
            Website7. Using this Website contrary to applicable laws and
            regulations or in a way that causes, or may cause, harm to the
            Website or to any person or business entity8. Engaging in any data
            mining, data harvesting, data extraction or any other similar
            activity in relation to this Website, or while using this Website
          </p>
          <h2>Limitation of liability</h2>
          <p>
            In no event shall Endogene.bio, nor any of its officers, directors
            and employees, be liable for any direct or indirect damages arising
            out of in any way connected with your use of this Website,
            especially for an unauthorized use of any information or content of
            the Website.
          </p>
        </div>
      </Layout>
    </div>
  )
}
