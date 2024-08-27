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

interface ThanksForReachingOutEmailProps {
  name?: string
  translation: {
    subject: string
    message: string
  }
}

const domainUrl = 'https://www.endogene.bio'

export const ThanksForReachingOutEmail = ({
  name,
  translation,
}: ThanksForReachingOutEmailProps) => {
  const year = new Date().getFullYear()
  const getName = (name: string) => {
    if (!name) return
    const nameSplitted = name.split(' ')
    if (nameSplitted.length > 3) {
      return `${nameSplitted[0]} ${nameSplitted[1]}`
    } else {
      return nameSplitted[0]
    }
  }

  return (
    <Html>
      <Head />
      <Preview>{translation.subject}</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img
              src={`${domainUrl}/static/endogeneLogo.svg`}
              width="100"
              height="100"
            />
          </Section>
          <Section style={content}>
            <Row style={headerBackground}>{null}</Row>
            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    textAlign: 'center',
                    marginBottom: '0',
                    color: '#0e6835',
                  }}
                >
                  Estimado/a <b>{getName(name)}</b>,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    textAlign: 'center',
                    margin: 0,
                    color: '#0e6835',
                    marginBottom: '2rem',
                  }}
                ></Heading>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  {translation.message}
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: '0' }}>
              <Column style={containerButton} colSpan={2}>
                <Button style={button} href={domainUrl}>
                  Volver a la web
                </Button>
              </Column>
            </Row>
          </Section>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }}
          >
            © 2024 | endogene.bio |{`${domainUrl}`}
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default ThanksForReachingOutEmail

const main = {
  backgroundColor: '#fff',
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
  backgroundColor: '#0e6835',
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

const headerBackground = {
  backgroundImage: `url(${domainUrl}/static/labTalk.webp)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '200px',
}
