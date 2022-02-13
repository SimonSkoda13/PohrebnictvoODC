import React, { useState } from "react"
import { Box, Flex, useDisclosure, BoxProps } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/core"
import { BsTelephone } from "react-icons/bs"
import Img from "gatsby-image"
import { graphql, Link, useStaticQuery } from "gatsby"

export interface HeaderProps extends BoxProps {
  header1: Array<string>
  header2: Array<string>
}

const Header = (props: HeaderProps) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-row.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState(1)
  const handleToggle = () => (isOpen ? onClose() : onOpen())
  const { header1, header2, ...restOfProps } = props
  return size == 1 ? (
    <Box>
      <Flex
        width="100%"
        height={30}
        bgColor="#1A4645"
        justifyContent={"center"}
        alignContent="center"
        color="white"
      >
        <Icon as={BsTelephone} size="30px" pt={1} />
        {header1}
      </Flex>
      <Flex
        width="100%"
        height={30}
        justifyContent={"center"}
        alignItems="center"
        p="6"
        rounded="md"
        boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      >
        <Box w={150}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </Box>
        {header2.map((item, index) => {
          return index == 0 ? (
            <Link to="/">
              <Box fontSize="md" fontWeight="bold" px={2} color="#226867">
                {item}
              </Box>
            </Link>
          ) : (
            <Link to={item.toLocaleLowerCase().replace(/\s/g, "")}>
              <Box fontSize="md" px={2}>
                {item}
              </Box>
            </Link>
          )
        })}
      </Flex>
    </Box>
  ) : (
    <Flex
      width="100%"
      height={60}
      justifyContent={"center"}
      alignItems="center"
      p="6"
      rounded="md"
      boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    >
      <Box w={150}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </Box>
      {header2.map((item, index) => {
        return index == 0 ? (
          <Link to="/">
            <Box
              fontSize="md"
              fontWeight="bold"
              px={10}
              color="#226867"
              pl={20}
            >
              {item}
            </Box>
          </Link>
        ) : (
          <Link to={item.toLocaleLowerCase().replace(/\s/g, "")}>
            <Box fontSize="md" px={10}>
              {item}
            </Box>
          </Link>
        )
      })}
    </Flex>
  )
}
export default Header
