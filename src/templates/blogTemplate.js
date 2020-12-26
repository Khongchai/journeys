import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const DynamicBlog = ({data, pageContext}) =>
{
    const { blogID } = pageContext;
    return(
    <>
        <h1>This page belongs to blog of ID {blogID}</h1>
        <div>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </div>
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