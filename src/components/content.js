import React from 'react'
import PropTypes from 'prop-types'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { withMDXScope } from 'gatsby-mdx/context'

import Image from './image'

const Content = ({ content, className, scope }) => {
  return (
    <div>
      <MDXRenderer className={className} scope={{ Image }}>
        {content}
      </MDXRenderer>
    </div>
  )
}

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
  scope: PropTypes.object,
}

export default withMDXScope(Content)
