exports.createPages = async function({actions, graphql})
{
    const { createPage } = actions;
    const blogTemplate = require.resolve("./src/templates/blogTemplate.js");
    const {data} = await graphql
    (`
    query{
        allMdx(limit: 4) {
          edges {
            node {
              id
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `);

    data.allMdx.edges.forEach(edge => 
    {
        const slug = edge.node.frontmatter.slug;
        const blogID = edge.node.id;
        createPage
        ({
            path: slug,
            component: blogTemplate,
            context: {blogID},
        });
        
    });
}