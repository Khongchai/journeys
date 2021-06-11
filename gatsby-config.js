module.exports = {
  pathPrefix: "/journeys",
  siteMetadata: {
    title: "Journeys",
    description: "Khongchai's 2021 Graduate Recital",
    author: "Khongchai",
    url: "khongchai.github.io",
    image: "/tchaikovsky-for-helmet.jpg",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `montserrat`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dynamicPagesInfo`,
        path: `${__dirname}/src/markdown/dynamicPagesInfo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdownForTimeline`,
        path: `${__dirname}/src/markdown/markdownForTimeline`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
      },
    },
    `gatsby-plugin-layout`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
