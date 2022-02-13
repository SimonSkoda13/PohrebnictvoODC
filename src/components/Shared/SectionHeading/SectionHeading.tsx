import { Heading } from "@chakra-ui/core"
import { Box, BoxProps, HStack, Stack } from "@chakra-ui/react"
import React from "react"
export interface SectionHeadingProps extends BoxProps {
  title: string
  description?: string
  isCentered?: boolean
}

export const SectionHeading = (props: SectionHeadingProps) => {
  const { title, description, isCentered = false, ...restOfProps } = props
  return (
    <Box {...restOfProps} maxWidth={600}>
      <Stack
        alignItems={isCentered ? "center" : "left"}
        textAlign={isCentered ? "center" : "left"}
        spacing={{ base: 1 }}
        color="white"
      >
        <Heading fontSize="x-large">{title}</Heading>
        <Box w={60} h={2} borderRadius={4} background="white" mt={15} />
        {description && (
          <Box mb={{ base: -0.5, md: -1.5 }} fontSize="small" mt={10}>
            {description}
          </Box>
        )}
      </Stack>
    </Box>
  )
}
