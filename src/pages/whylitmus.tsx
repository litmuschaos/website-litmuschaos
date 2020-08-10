import React from 'react'
import { WhyLitmusHead, WhyLitmusFeatures} from '../components/containers/index'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'

const whylitmus = () => {
  return (
    <Layout>
      <SEO />
      <WhyLitmusHead /> 
      <WhyLitmusFeatures /> 
    </Layout>
  )
}

export default whylitmus