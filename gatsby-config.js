module.exports = {
  siteMetadata: {
    siteUrl: "https://dhtbo.qhdbcm.cn",
    title: "my-site",
    description: "my gatsby stie",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
