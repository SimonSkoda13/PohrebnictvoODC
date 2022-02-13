/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import { Box, Link, Icon } from "@chakra-ui/core"

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          header1
          header2
          contacts
          invoiceAdress
          importantLinks
          author
        }
      }
    }
  `)
  console.log("🚀 ~ file: layout.tsx ~ line 36 ~ data", data)
  return (
    <>
      <Header
        header1={data.site.siteMetadata.header1}
        header2={data.site.siteMetadata.header2}
      />
      {children}
      <Footer {...data.site.siteMetadata} />
    </>
  )
}

export default Layout
