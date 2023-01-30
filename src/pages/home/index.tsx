import Head from 'next/head'
import { Heading, Text } from '@design-system-course/react'
import previewImage from '@/assets/images/app-preview.png'

import { Container, Hero, Preview } from './styles'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <Head>
        <title>Ignite Call Home</title>
      </Head>
      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Agendamento descomplicado
          </Heading>
          <Text as="p" size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
        </Hero>
        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Calendar preview"
          />
        </Preview>
      </Container>
    </>
  )
}

export default Home
