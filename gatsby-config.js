module.exports = {
  siteMetadata: {
    title: 'Documentation by cybersafe.vn',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Docs',
        short_name: 'Docs',
        start_url: '/docs',
        icon: 'images/logo.png',
      },
    },
  ],
};
