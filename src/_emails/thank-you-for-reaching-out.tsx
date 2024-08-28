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

interface ThanksForReachingOutEmailProps {
  name?: string
  translation: {
    dear: string
    subject: string
    message: string
  }
}

const domainUrl = 'https://www.endogene.bio'

export const ThanksForReachingOutEmail = ({
  name,
  translation,
}: ThanksForReachingOutEmailProps) => {
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
          <Section style={containerLogo}>
            <Img
              src={`${domainUrl}/static/horizontalLogo.webp`}
              width="350"
              height="50"
            />
          </Section>
          <Section style={content}>
            <Row style={headerBackground}>{null}</Row>
            <Row style={{ ...boxInfos }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    textAlign: 'center',
                    marginBottom: '16px',
                    color: '#79c1c0',
                  }}
                >
                  {translation.dear} <b>{getName(name)}</b>,
                </Heading>
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
              fontSize: 16,
              color: 'rgb(0,0,0, 0.7)',
            }}
          >
            © 2024 | endogene.bio | {`${domainUrl}`}
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

const containerLogo = {
  display: 'flex',
  justifyContent: 'center',
  padding: '48px 0px',
  transform: 'scale(0.8)',
}

const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

const button = {
  backgroundColor: '#e25574',
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
  padding: '0 32px',
  paddingBottom: '32px',
}

const headerBackground = {
  backgroundImage: `url(${domainUrl}/static/labTalk.webp)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '200px',
}
