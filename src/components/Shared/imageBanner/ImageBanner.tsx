import { BoxProps } from "@chakra-ui/core"
import { Box, Flex, Stack } from "@chakra-ui/react"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import { Overlay } from "../Overlay/Overlay"
import { SectionHeading } from "../SectionHeading/SectionHeading"

interface ImageBannerProps extends BoxProps {
  title: string
  description?: string
  button?: string
  imgData: any
}

export const ImageBanner = (props: ImageBannerProps) => {
  const { title, description, button, imgData, ...restOfProps } = props

  return (
    <Box w="100%">
      <BackgroundImage
        fluid={imgData.childImageSharp.fluid}
        preserveStackingContext
      >
        <Flex
          minH={150}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Stack spacing={{ base: 5, md: 8 }} alignItems={"center"}>
            <SectionHeading title={title} description={description} />
          </Stack>
        </Flex>
      </BackgroundImage>
    </Box>
  )
}
