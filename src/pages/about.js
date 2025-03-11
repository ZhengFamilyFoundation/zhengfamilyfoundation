import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About the Zheng Family Foundation">
      <p>The Zheng Family Foundation is a registered 501(c)(3) and was founded on December 24, 2023 by Alex, Alice, and Justin Zheng</p>
    </Layout>
  )
}

export const Head = () => <title>About the Zheng Family Foundation</title>

export default AboutPage