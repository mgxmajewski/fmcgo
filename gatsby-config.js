module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        "gatsby-plugin-image", {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                "trackingId": "GTM-WB5FL6B"
            }
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-preload-fonts",
        "gatsby-plugin-polyfill-io",
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                excludes: [`/__generated/*`],
            },
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