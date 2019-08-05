import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import HelloWorld from '@components/HelloWorld'

const IndexPage = ({ data }) => (
  <Layout showHome={false}>
    <SEO
      title="MUCH DESTA FADILAH (TOPIDESTA)"
      keywords={[`developer`, `react`, `javascript`, `codeigniters`, `coffelovers`]}
    />
    <HelloWorld />
  </Layout>
)

export default IndexPage
