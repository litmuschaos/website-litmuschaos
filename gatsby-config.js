const siteTitle = "LitmusChaos";
const siteDescription =
  "Chaos Engineering redefined: LitmusChaos is an open source cloud-native Chaos Engineering framework which helps orchestrate chaos on Kubernetes platforms.";
const siteAuthor = "@litmuschaos";
const siteUrl = "https://litmuschaos.io";
const siteImage = `${siteUrl}/icons/siteImage.png`;
const siteKeywords = [
  "chaos engineering",
  "Litmus Chaos",
  "litmus",
  "devOps",
  "SRE",
  "Cloud-Native",
  "CNCF",
  "mayadata",
  "openebs",
  "Kubernetes",
  "Docker",
  "containerized",
  "dataMonitoring",
  "DataStorage",
  "workload",
  "deployment",
  "ci/cd",
  "cd",
  "ci",
  "DataAgility",
  "multicloud",
];

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: siteAuthor,
    url: siteUrl,
    keywords: siteKeywords,
    image: siteImage,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-react-axe",
      options: {
        showInProduction: false,
        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options.
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: "*", allow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/images/icon.png",
        icons: [
          {
            src: "icons/icon_512x512.png",
            sizes: "512x512",
            types: "image/png",
          },
          {
            src: "icons/icon_192x192.png",
            sizes: "192x192",
            types: "image/png",
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-92076314-26",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // The IP anonymization feature in Google Analytics anonymizes the last digits of the user's IP (optional)
        anonymize: true,
        // Respect Do Not Track (optional)
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/404/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 500,
        // Defers execution of google analytics script after page load
        defer: true,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "litmuschaos.io",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "UA-92076314-26",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
};
