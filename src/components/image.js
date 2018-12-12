import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = ({ className, alt }) => (
  <StaticQuery
    // https://github.com/gatsbyjs/gatsby/issues/9047
    // It probably can be useful for that case!
    //! PathPrefix is required ofr github-page deployement
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "home.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        site {
          pathPrefix
        }
      }
    `}
    render={data => (
      <Img
        fluid={`${data.site.pathPrefix}${
          data.placeholderImage.childImageSharp.fluid
        }`}
        className={className}
        alt={alt}
      />
    )}
  />
)
export default Image
