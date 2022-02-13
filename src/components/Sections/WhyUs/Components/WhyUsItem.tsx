import { Box, BoxProps, Flex } from "@chakra-ui/core"
import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { ChakraProvider, Heading } from "@chakra-ui/react"

export interface WhyUsItemProps extends BoxProps {
  title: string
  description: string
  imgData: any
}

export const WhyUsItem = (props: WhyUsItemProps) => {
  const { title, description, imgData, ...restOfProps } = props
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      textAlign="center"
      maxW={190}
      mx={{ md: 30, base: 0 }}
      my={{ md: 0, base: 30 }}
    >
      <Box borderRadius="full" w="100px" h="100px">
        <Img
          fluid={imgData.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </Box>
      <Heading color="#226867" fontSize="md">
        {title}
      </Heading>
      <Box fontSize="small">{description}</Box>
    </Flex>
  )
}
