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
        "gatsby-plugin-sitemap",
        "gatsby-plugin-preload-fonts",
        {
            resolve: "gatsby-plugin-polyfill-io",
            options: {
                features: [
                    "Array.from",
                    "Array.prototype.find",
                    "Array.prototype.filter",
                    "Array.prototype.findIndex",
                    "default",
                    "Date.prototype.toISOString",
                    "es5",
                    "es6",
                    "fetch",
                    "Object.assign",
                    "Math.trunc",
                    "Math.sign",
                    "Promise",
                    "String.prototype.repeat",
                    "Symbol",
                    "window.fetch"
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