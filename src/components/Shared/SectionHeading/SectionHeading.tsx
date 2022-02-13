import { Heading } from "@chakra-ui/core"
import { Box, BoxProps, HStack, Stack } from "@chakra-ui/react"
import React from "react"
export interface SectionHeadingProps extends BoxProps {
  title: string
  description?: string
  isCentered?: boolean
  colorMode?: "dark" | "white"
}

export const SectionHeading = (props: SectionHeadingProps) => {
  const {
    title,
    description,
    colorMode = "dark",
    isCentered = false,
    ...restOfProps
  } = props
  return (
    <Box {...restOfProps} maxW={600}>
      <Stack
        alignItems={isCentered ? "center" : "left"}
        textAlign={isCentered ? "center" : "left"}
        spacing={{ base: 1 }}
        color={colorMode === "white" ? "white" : "black"}
      >
        <Heading
          fontSize="x-large"
          color={colorMode === "white" ? "white" : "primary"}
        >
          {title}
        </Heading>
        <Box
          w={20}
          h={1}
          borderRadius={4}
          background={colorMode === "white" ? "white" : "primary"}
          mt={15}
        />
        {description && (
          <Box mb={{ base: -0.5, md: -1.5 }} fontSize="small" mt={10}>
            {description}
          </Box>
        )}
      </Stack>
    </Box>
  )
}
