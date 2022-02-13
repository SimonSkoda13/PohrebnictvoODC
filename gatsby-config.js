module.exports = {
  siteMetadata: {
    title: "ODC Pohrebná Služba",
    header1: [
      "+421 905 309 755",
      " Nonstop linka - Zavolajte nám. Sme tu pre Vás.",
    ],
    header2: ["Domov", "O nás", "Služby", "Cenník", "Kontakt"],
    contacts: ["info@odosro.sk", "+421 905 309 755", "+421 957 222 333 "],
    invoiceAdress: ["ODO s.r.o.", "Jasovská 1, 851 07 ", "Bratislava"],
    importantLinks: [
      "Zákon o pohrebníctve",
      "Pravidlá ochrany GDPR",
      "Všeobecné obchodné podmienky",
    ],
    author: `Momentum digital`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pohrebná služba`,
        short_name: `Pohrebnictvo`,
        start_url: `/`,
        icon: `src/images/Group.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
