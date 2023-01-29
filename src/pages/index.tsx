import Head from 'next/head'
import { Heading } from '@design-system-course/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignite Call Home</title>
      </Head>
      <div>
        <Heading size="lg" as="h1">
          Hello world
        </Heading>
      </div>
    </>
  )
}
