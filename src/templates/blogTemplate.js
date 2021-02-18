import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  Content,
  SideContentBar,
  Footer,
  DynamicPagesContainer,
  EnlargedImageArea,
} from "../components"
import SEO from "../components/Seo"

const DynamicBlog = ({ data }) => {
  const [imageSRC, setImageSRC] = useState("")
  useEffect(() => {
    let images = document.getElementsByClassName("enlargeable")
    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("click", () => {
        let imageArea = document.getElementById("image-area")
        imageArea.style.display = "grid"
        setImageSRC(images[i].src)
      })
    }
  })
  return (
    <DynamicPagesContainer id="dynamic-page-container">
      <SEO title={data.mdx.frontmatter.title} />
      <EnlargedImageArea imageSRC={imageSRC} />
      <Content>
        <div id="article-container">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </Content>
      <SideContentBar />
      <Footer />
    </DynamicPagesContainer>
  )
}

export default DynamicBlog

export const pageQuery = graphql`
  query BlogQuery($blogID: String!) {
    mdx(id: { eq: $blogID }) {
      body
      frontmatter {
        title
        slug
      }
    }
  }
`
