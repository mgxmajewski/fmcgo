module.exports = {
    siteMetadata: {
        siteUrl: `https://fmcgo.pl`
    },
    plugins: [
        "gatsby-plugin-image",
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "UA-233454609-1",
            },
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-preload-fonts",
        "gatsby-plugin-polyfill-io",
        "gatsby-plugin-advanced-sitemap",
        {
            resolve: 'gatsby-plugin-static-folders',
            options: {
                folders: [
                    'src/og-image',
                ]
            }
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [require(`autoprefixer`)],
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                include: /assets/ // See below to configure properly
            }
        }
    ]
};