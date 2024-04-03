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
            The website www.nūmi.life (hereinafter referred to “the Website”) is
            owned and operated by Mumilk SAS (hereinafter referred to as “Nūmi”)
            registered with the RCS under number 953 195 583, whose head office
            is located at 4 Rue Pierre Fontaine, 91058 Évry-Courcouronnes Cedex,
            France. To contact us, email: contact@numi.life. The use of this
            Website and services on this Website are subject to the following
            terms of use (hereinafter “Terms"). These Terms shall govern the use
            of all pages on this Website and any services provided by or on this
            Website ("Services"). The host of the Website is the company
            Webflow, Inc., a Delaware corporation located at 398 11th Street,
            Floor 2, San Francisco, CA 94103.Nūmi reserves the right to change,
            modify, add or remove portions of these Terms, at any time. It is
            your sole responsibility to check these Terms periodically for
            changes.By using this Website, you indicate that you have read and
            understand these Terms and agree to abide by them at all times. If
            you have any objection to any of these Terms, you must not use this
            Website.The content of the pages of this Website is for your general
            information and use only.
          </p>
          <h2>Applicable law & jurisdiction</h2>
          <p>
            This Website is subject to French law. Any claim or dispute shall be
            submitted to the exclusive jurisdiction of the competent Courts in
            Paris, France.
          </p>
          <h2>Content of this website</h2>
          <p>
            Nūmi will use its best efforts to ensure that the information on
            this Website is accurate. However, Nūmi disclaims any direct or
            indirect liability related to or caused by any errors or omissions
            in the content of this Website, as well as the use of this Website.
            This Website is for personal, non-commercial use only.
          </p>
          <h2>Link to other websites</h2>
          <p>
            Our Website contains links to third party websites (other Nūmi
            sites, social networks, third-party sites) that we do not own or
            control and that are not covered by this Terms. These links are
            established at a time when Nūmi deemed it appropriate, given the
            content and services they provided.These websites may collect data
            about you, use cookies, embed third party tracking tools, track your
            interactions with these embedded contents if you have an account
            logged on their website.Nūmi cannot be held responsible for the
            content, policies, or practices of any third party website linked to
            the Website.
          </p>
          <h2>Intellectual property right</h2>
          <p>
            All content published and made available on our Website, such as
            images, logos, copyrights, trademarks, registered or not, videos,
            texts, , and anything that contributes to the composition of our
            Website, are intellectual work within the meaning of the
            Intellectual Property Code and are therefore protected. They are
            Nūmi’s sole and exclusive property. You agree that Nūmi owns all
            right, title and interest in them and that you will not use them for
            any unlawful or infringing purpose. You agree not to modify,
            reproduce, represent, broadcast or rebroadcast, adapt, full or
            partial translate, or distribute in whole or in part any content of
            the Website, in any way, including electronically or via
            registration of any new trademarks, trade names, service marks or
            Uniform Resource Locators (URLs), for any use other than private,
            without express written permission from Nūmi.Unauthorised use of
            this Website may give rise to a claim for damages and/or be a
            criminal offence.
          </p>
          <h2>Restrictions</h2>
          <p>
            Without written permission of Nūmi, you are expressly restricted
            from all of the following: 1. Publishing any Website material in any
            media2. Selling, sublicensing and/or commercializing any Website
            material3. Publicly performing and/or showing any Website material4.
            Using this Website for illegal spam activities, including gathering
            email addresses and personal information from others or sending any
            mass commercial emails5. Using this Website in any way that is, or
            may be, damaging to this Website6. Using this Website in any way
            that impacts users to this Website7. Using this Website contrary to
            applicable laws and regulations or in a way that causes, or may
            cause, harm to the Website or to any person or business entity8.
            Engaging in any data mining, data harvesting, data extraction or any
            other similar activity in relation to this Website, or while using
            this Website
          </p>
          <h2>Limitation of liability</h2>
          <p>
            In no event shall Nūmi, nor any of its officers, directors and
            employees, be liable for any direct or indirect damages arising out
            of in any way connected with your use of this Website, especially
            for an unauthorized use of any information or content of the
            Website.
          </p>

          {/* <ul>
            <li>Razón social: CAROLINA ALMEIDA RAMÍREZ</li>
            <li>NIF/CIF: 45761182-Z</li>
            <li>
              Dirección: C. Alonso Alvarado, 15, Oficina 4, 35003 Las Palmas de
              Gran Canaria, Las Palmas
            </li>
            <li>Correo electrónico: conutricionsaludable@gmail.com</li>
            <li>Teléfono: 665859643</li>
          </ul>
          <h2>USUARIAS Y USUARIOS:</h2>
          <p>
            El acceso y uso de este portal , atribuye la condición de USUARIA/O,
            que acepta, desde dicho acceso y uso, las Condiciones Generales de
            Uso aquí reflejadas. Las citadas Condiciones serán de aplicación
            independientemente de las Condiciones Generales de Contratación que
            en su caso resulten de obligado cumplimiento.
          </p>
          <h2>USO DEL PORTAL:</h2>
          <p>
            Proporciona el acceso a diversas informaciones sobre nuestra
            entidad, apartados de contacto, hiperenlaces a redes sociales, en
            adelante contenidos pertenecientes a CAROLINA ALMEIDA RAMÍREZ , o a
            sus licenciadores, a los que la usuaria o el usuario pueda tener
            acceso. La usuaria o el usuario asume la responsabilidad del uso del
            portal. Dicha responsabilidad se extiende al registro que fuese
            necesario para acceder a determinados servicios o contenidos, o bien
            para posibilitar la respuesta en relación con sus consultas en los
            apartados de contacto de la presente página web, etc. En dicho
            registro la usuaria o el usuario será responsable de aportar
            información veraz y lícita.
          </p>
          <h2>PROPIEDAD INTELECTUAL E INDUSTRIAL:</h2>
          <p>
            CAROLINA ALMEIDA RAMÍREZ, por sí o como cesionaria, es titular de
            todos los derechos de propiedad intelectual e industrial de su
            página web, así como de los elementos contenidos en la misma (a
            título enunciativo: imágenes, sonido, audio, vídeo, software o
            textos; marcas o logotipos, combinaciones de colores, estructura y
            diseño, selección de materiales usados, programas de ordenador
            necesarios para su funcionamiento, acceso y uso, etc.). Todos los
            derechos reservados. En virtud de lo dispuesto en los artículos 8 y
            32.2, párrafo segundo, de la Ley de Propiedad Intelectual, quedan
            expresamente prohibidas la reproducción, la distribución y la
            comunicación pública, incluida su modalidad de puesta a disposición,
            de la totalidad o parte de los contenidos de esta página web, con
            fines comerciales, en cualquier soporte y por cualquier medio
            técnico, sin la autorización de CAROLINA ALMEIDA RAMÍREZ . En ningún
            momento, salvo manifestación expresa de lo contrario, el acceso,
            navegación o utilización del sitio Web o de sus contenidos confiere
            a la usuaria o al usuario derecho alguno sobre signos distintivos en
            él incluidos. La usuaria o el usuario se compromete a respetar los
            derechos de Propiedad Intelectual e Industrial titularidad de
            CAROLINA ALMEIDA RAMÍREZ En el caso de que la usuaria o el usuario
            envíe información de cualquier tipo a JULIAN ANDRES TAMAYO SERRATO a
            través de cualquiera de los canales habilitados para ello dentro de
            nuestro portal web, la usuaria o el usuario declara, garantiza y
            acepta que tiene derecho a hacerlo con total libertad, que dicha
            información no infringe ningún derecho de propiedad intelectual,
            industrial, o cualesquiera otros derechos de terceras personas, y
            que dicha información no tiene carácter confidencial ni es
            perjudicial para terceras personas.
          </p>
          <h2>EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD:</h2>
          <p>
            CAROLINA ALMEIDA RAMÍREZ no se hace responsable, en ningún caso, de
            los daños y perjuicios de cualquier naturaleza que se pudieran
            ocasionar, a título enunciativo: errores u omisiones en los
            contenidos, falta de disponibilidad del portal o la transmisión de
            virus o programas maliciosos o lesivos en los contenidos, a pesar de
            haber adoptado todas las medidas tecnológicas necesarias para
            evitarlo. El contenido, información y consejos expresados en este
            portal web deben entenderse como simplemente orientativos. JULIAN
            ANDRES TAMAYO SERRATO no responde de ninguna forma de la efectividad
            o exactitud de los mismos, quedando exento de cualquier
            responsabilidad con los usuarios y usuarias que hagan uso de ellos.
            En este Sitio se pueden publicar contenidos y comentarios aportados
            por terceras personas. CAROLINA ALMEIDA RAMÍREZ no responde de la
            veracidad y exactitud de los mismos, quedando exenta de cualquier
            responsabilidad con los usuarios y con las usuarias que hagan uso de
            ellos. CAROLINA ALMEIDA RAMÍREZ se reserva el derecho de modificar
            el contenido del Sitio sin previo aviso y sin ningún tipo de
            limitación. Así mismo, la empresa declina cualquier responsabilidad
            por los eventuales daños y perjuicios que puedan ocasionarse por la
            falta de disponibilidad o continuidad de este sitio y de los
            servicios que se ofrecen en él. Tampoco podemos garantizar la
            ausencia de virus ni de otros elementos en la Web que puedan
            producir alteraciones en su sistema informático. JULIAN ANDRES
            TAMAYO SERRATO declina cualquier responsabilidad por los servicios e
            información que se preste en otros sitios enlazados con este, ya que
            no controla ni ejerce ningún tipo de supervisión en Sitios Webs de
            terceras personas.Aconsejamos a las usuarias y a los usuarios de los
            mismos que actúen con prudencia y que consulten las eventuales
            condiciones legales que se expongan en dichas Webs. Así mismo, los
            Usuarios/as que remitan cualquier tipo de información a se
            asegurarán de que la misma sea veraz y de que no vulnere cualquier
            derecho de terceras personas ni la legalidad vigente. Si Ud. cree
            que cualquier contenido o información de este Sitio vulnera un
            derecho legítimo o la legalidad vigente le estaríamos muy
            agradecidos que se pusiera en contacto con nosotros a través de los
            medios que considere oportunos bien a la dirección de correo
            electrónico conutricionsaludable@gmail.com o en el siguiente número
            de teléfono 665859643 para que podamos tomar las medidas oportunas.
          </p>
          <h2>MODIFICACIONES:</h2>
          <p>
            CAROLINA ALMEIDA RAMÍREZ se reserva el derecho de efectuar sin
            previo aviso las modificaciones que considere oportunas en su
            portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y
            servicios que se presten a través de la misma como la forma en la
            que estos aparezcan presentados o localizados en su portal.
          </p>
          <h2>ENLACES:</h2>
          <p>
            En el caso de que en nombre del dominio se pusieran en
            funcionamiento enlaces o hipervínculos que recayeran en otros sitios
            de Internet CAROLINA ALMEIDA RAMÍREZ no ejercerá ningún tipo de
            control sobre dichos sitios y contenidos. En ningún caso JULIAN
            ANDRES TAMAYO SERRATO asumirá responsabilidad alguna por los
            contenidos de algún enlace perteneciente a un sitio web ajeno, ni
            garantizará la disponibilidad técnica, calidad, fiabilidad,
            exactitud, amplitud, veracidad, validez y constitucionalidad de
            cualquier material o información contenida en ninguno de dichos
            hipervínculos u otros sitios de Internet. Igualmente, la inclusión
            de estas conexiones externas no implicará ningún tipo de asociación,
            fusión o participación con las entidades conectadas. La usuaria o el
            usuario reconoce y acepta que CAROLINA ALMEIDA RAMÍREZ no será
            responsable de las pérdidas o daños en que la usuaria o el usuario
            pueda incurrir a consecuencia de la disponibilidad de los
            mencionados sitios web o recursos externos, o a consecuencia de la
            credibilidad que otorgue a la exhaustividad, precisión o existencia
            de cualquier tipo de publicidad, productos u otros materiales
            ofrecidos a través de dicho sitio web u otros recursos.
          </p>
          <h2>DERECHO DE EXCLUSIÓN:</h2>
          <p>
            CAROLINA ALMEIDA RAMÍREZ se reserva el derecho a denegar o retirar
            el acceso a portal o a los servicios ofrecidos sin necesidad de
            preaviso, a instancia propia o de terceras personas, a aquellos
            usuarios y a aquellas usuarias que incumplan las presentes
            Condiciones Generales de Uso.
          </p>
          <h2>GENERALIDADES:</h2>
          <p>
            CAROLINA ALMEIDA RAMÍREZperseguirá el incumplimiento de las
            presentes condiciones, así como cualquier utilización indebida de su
            portal ejerciendo todas las acciones civiles y penales que le puedan
            corresponder en derecho.
          </p>
          <h2>LEGISLACIÓN APLICABLE Y JURISDICCIÓN:</h2>
          <p>
            La relación entre CAROLINA ALMEIDA RAMÍREZ y la usuaria o el usuario
            se regirá por la normativa española vigente. Y siempre que la
            normativa vigente al efecto establezca la posibilidad para las
            partes la sumisión a un fuero determinado cualquier controversia
            entre la persona responsable del sitio web y la usuaria o el usuario
            se someterá a los Juzgados y tribunales de la ciudad de Las Palmas
          </p>
          <h2>PLATAFORMA EUROPEA DE RESOLUCIÓN DE CONFLICTOS EN LÍNEA:</h2>
          <p>
            Le informamos que ante cualquier problema que pueda derivarse del
            servicio contratado o producto vendido, puede utilizar la plataforma
            europea de resolución de disputas online, esta es:
            https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.show&lng=ES.
          </p> */}
        </div>
      </Layout>
    </div>
  )
}
