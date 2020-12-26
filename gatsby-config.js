
module.exports = {
  pathPrefix: "/journeys",
  siteMetadata:
  {
    title: "Journeys",
    description: "Khongchai's 2021 Graduate Recital",
    author: "Khongchai",
  },
  plugins: 
  [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: 
      {
        name: `dynamicPagesInfo`,
        path: `${__dirname}/src/dynamicPagesInfo`,
      }
    },
    `gatsby-plugin-sharp`, 
    `gatsby-plugin-layout`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options:
      {
        extensions: [`.mdx`,`.md`],
        gatsbyRemarkPlugins:
        [
          {
            resolve: `gatsby-remark-images`
          },
        ],
      },
    },
  ],
}
