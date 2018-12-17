import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Content from '../components/content'
import Layout from '../components/layout'
import SEO from '../components/SEO'
// import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { withMDXScope } from 'gatsby-mdx/context'
import { MDXProvider, MDXTag } from '@mdx-js/tag'

//! Know Warning: React does not recognize the `metaString` prop on a DOM element.
// If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase
// `metastring` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
//! Fixed in @mdx-16, waiting for gatsby-mdx be upgraded

export const BuildindDocsTemplate = ({ title, content, helmet }) => {
  return (
    <section>
      {helmet || ''}
      <h1 className="ml-4 lg:ml-0 text-xi-blue-dark mt-8 mb-4">{title}</h1>
      <Content
        scope={{ React, MDXTag }}
        className="ml-4 lg:ml-0"
        content={content}
      />
    </section>
  )
}

BuildindDocsTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  helmet: PropTypes.object,
}

const BuildindDocs = ({ data, components }) => {
  return (
    <Layout>
      <MDXProvider
        components={{
          ...components,
        }}
      >
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
      </MDXProvider>
    </Layout>
  )
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
// MDXProvider is useless here, it should not
// MDXTag should be remove when it will be useful
// Maybe use MDX with a default layout in config file
export default withMDXScope(BuildindDocs)
