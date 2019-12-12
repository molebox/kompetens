module.exports = {
    siteMetadata: {
        title: 'Kompetens',
        description: 'A company search website that matches employee competence to potential employers'
      },
      plugins: [
        {
            resolve: 'gatsby-theme-seo', 
            options: {
                title: 'Kompetens',
                description: 'A company search wesbite that matches competence to potential employers',
                author: 'Rich Haines',
                siteUrl: 'https://kompetens.netlify.com',
            }
        },
        'gatsby-plugin-emotion',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-robots-txt',
        {
            resolve: 'gatsby-source-sanity',
            options: {
              projectId: 'e35olh42',
              dataset: 'kompetens',
              // a token with read permissions is required
              // if you have a private dataset
              // token: process.env.MY_SANITY_TOKEN
            }
          },
          {
            resolve: 'gatsby-plugin-prefetch-google-fonts',
            options: {
              fonts: [
                {
                  family: 'Roboto',
                  variants: ['100', '400']
                },
              ],
            },
          },
          'gatsby-transformer-sharp', 
          'gatsby-plugin-sharp'
      ]
}