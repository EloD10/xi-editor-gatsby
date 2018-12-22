import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Content from 'components/content'
import Layout from 'components/layout'
import SEO from 'components/SEO'

export const BuildindDocsTemplate = ({ title, content, helmet }) => {
  return (
    <div className="bg-white h-full pb-12">
      <section className="container mx-auto">
        {helmet || ''}
        <h1 className="ml-4 lg:ml-0 text-blue-darker mb-4">{title}</h1>
        <Content className="ml-4 lg:ml-0" content={content} />
      </section>
    </div>
  )
}

BuildindDocsTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  helmet: PropTypes.object,
}

const BuildindDocs = ({ data }) => {
  return (
    <Layout>
      <BuildindDocsTemplate
        title={data.mdx.frontmatter.title}
        content={data.mdx.code.body}
        helmet={
          <SEO
            categorieTitle="Building Documentation"
            description={data.mdx.excerpt}
          />
        }
      />
    </Layout>
  )
}

BuildindDocs.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object,
  }),
}

export const pageQuery = graphql`
  query {
    mdx(fields: { sourceName: { eq: "build-docs" } }) {
      code {
        body
      }
      excerpt(pruneLength: 300)
      frontmatter {
        title
      }
    }
  }
`

export default BuildindDocs
