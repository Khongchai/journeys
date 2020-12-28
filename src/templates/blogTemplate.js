import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Content, SideContentBar } from "../components";

const DynamicBlog = ({data}) =>
{
    return(
        <>
        <Content>
        <div>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </div>
        </Content>
        <SideContentBar/>
        </>
    
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