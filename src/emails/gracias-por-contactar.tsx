import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface graciasPorContactarProps {
  name?: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

export const GraciasPorContactarEmail = ({
  name,
}: graciasPorContactarProps) => {
  return (
    <Html>
      <Head />
      <Preview>Yelp recent login</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img
              src={`${baseUrl}/static/carolinaLogoTransparent.png`}
              width="100"
              height="100"
            />
          </Section>

          <Section style={content}>
            <Row style={image}>{null}</Row>
            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    textAlign: 'center',
                    marginBottom: '0',
                  }}
                >
                  Estimado/a <b>Pepe{name}</b>,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    textAlign: 'center',
                    margin: 0,
                    marginBottom: '2rem',
                  }}
                >
                  gracias por contactarnos
                </Heading>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  Es un placer para nosotros recibir tu solicitud de cita o
                  consulta en nuestra Clínica de Nutrición. Apreciamos tu
                  interés en cuidar de tu salud y bienestar, y estamos
                  comprometidos a brindarte el mejor servicio posible.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  Si necesitas realizar alguna modificación o tienes alguna
                  pregunta adicional, no dudes en ponerte en contacto con
                  nosotros a través de este correo electrónico o llamando a
                  nuestro número de teléfono. Agradecemos tu confianza en
                  nuestros servicios y estamos ansiosos por ayudarte en tu viaje
                  hacia una mejor salud y nutrición. Atentamente,
                </Text>
                <Text
                  style={{
                    color: 'rgb(0,0,0, 0.5)',
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  *Approximate geographic location based on IP address:
                </Text>

                <Text style={paragraph}>
                  If this was you, there's nothing else you need to do.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  If this wasn't you or if you have additional questions, please
                  see our support page.
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: '0' }}>
              <Column style={containerButton} colSpan={2}>
                <Button style={button}>Learn More</Button>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img width={620} src={`${baseUrl}/static/yelp-footer.png`} />
          </Section>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }}
          >
            © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
            U.S.A. | www.yelp.com
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default GraciasPorContactarEmail

const main = {
  backgroundColor: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const paragraph = {
  fontSize: 16,
}

const logo = {
  height: '100px',
  padding: '30px 20px',
}

const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

const button = {
  backgroundColor: '#e00707',
  padding: '12px 30px',
  borderRadius: 3,
  color: '#FFF',
  fontWeight: 'bold',
  border: '1px solid rgb(0,0,0, 0.1)',
  cursor: 'pointer',
}

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
}

const boxInfos = {
  padding: '20px 40px',
}

const containerImageFooter = {
  padding: '45px 0 0 0',
}

const image = {
  backgroundImage: `url(${baseUrl}/static/contacto.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '200px',
}
