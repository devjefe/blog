module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {
        mdx: true,
        basePath: `/notes`,
      },
    },
    // with gatsby-plugin-theme-ui, the last theme in the config
    // will override the theme-ui context from other themes
    { resolve: `gatsby-theme-blog` },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-148454554-1",
      },
    },
  ],
  siteMetadata: {
    title: `Jeff Cameron`,
    author: `Jeff Cameron`,
    description: `Front End Development...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/devjefe`,
      },
      {
        name: `github`,
        url: `https://github.com/jcameronjeff`,
      },
    ],
  },
}
