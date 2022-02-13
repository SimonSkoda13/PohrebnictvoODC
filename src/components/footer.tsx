import { Text } from "@chakra-ui/core"
import { Box, BoxProps, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

export interface FooterProps extends BoxProps {
  header1: Array<string>
  invoiceAdress: Array<string>
  importantLinks: Array<string>
  contacts: Array<string>
}

const Footer = (props: FooterProps) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-column.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const {
    contacts,
    header1,
    invoiceAdress,
    importantLinks,
    ...restOfProps
  } = props
  console.log("🚀 ~ file: footer.tsx ~ line 33 ~ Footer ~ props", props)
  return (
    <SimpleGrid
      columns={6}
      spacing={20}
      position="absolute"
      bottom={0}
      w="100%"
      bgColor="#1A4645"
      color="white"
    >
      <Box></Box>
      <Flex
        position="relative"
        w="100%"
        h={{ md: 130, base: "auto" }}
        background="white"
        p={20}
        flexDir="column"
        overflow="visible"
        justifyContent="center"
        textAlign="center"
        color="#1A4645"
        boxShadow=" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
      >
        <Box w="100%" pb={10}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </Box>
        <Text fontSize="md" py={2}>
          {header1[0]}
        </Text>
        <Text fontSize="small">{header1[1]}</Text>
      </Flex>
      <Flex flexDir="column" p={20}>
        <Heading as="h4" size="md" pb={10}>
          Kontakty
        </Heading>
        <Box>
          {contacts.map(item => {
            return <Box fontSize="small">{item}</Box>
          })}
        </Box>
      </Flex>
      <Box p={20}>
        <Heading as="h4" size="md" pb={10}>
          Fakturačná adresa
        </Heading>
        <Box>
          {invoiceAdress.map(item => {
            return <Box fontSize="small">{item}</Box>
          })}
        </Box>
      </Box>
      <Box p={20}>
        <Heading as="h4" size="md" pb={10}>
          Dôležité linky
        </Heading>
        <ul>
          {contacts.map(item => {
            return (
              <Box fontSize="small">
                <li>{item}</li>
              </Box>
            )
          })}
        </ul>
      </Box>
    </SimpleGrid>
  )
}
export default Footer
