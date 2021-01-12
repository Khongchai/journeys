import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Content, SideContentBar, Footer, DynamicPagesContainer} from "../components";
import SEO from "../components/Seo";

const DynamicBlog = ({data}) =>
{
    return(
        <DynamicPagesContainer id="dynamic-page-container">
        <SEO 
            title={data.mdx.frontmatter.title}
        />
            <Content>
            <div>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
            </div>
            </Content>
            <SideContentBar/>
            <Footer/>
        </DynamicPagesContainer>
    
    );           
}

export default DynamicBlog;

export const pageQuery = graphql`
    query BlogQuery ($blogID: String!)
    {
        mdx(id: {eq: $blogID})
        {
            body
            frontmatter
            {
                title
                slug
            }
        }
    }
`;