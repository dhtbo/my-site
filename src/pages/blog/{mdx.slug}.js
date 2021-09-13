import * as React from 'react'
import { graphql } from 'gatsby' 
import { MDXRenderer } from 'gatsby-plugin-mdx' 
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
import Layout from '../../components/layout'

const BlogPost = ({ data }) => { 
  const image = getImage(data.mdx.frontmatter.hero_image) 
  console.log({data})

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />

      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

// highlight-start
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "YYYY年M月D日")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPost