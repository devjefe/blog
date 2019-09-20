module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {
        basePath: `content/notes`,
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        contentPath: `content/posts`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
  ],
  // Customize your site metadata:
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
