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
        spacing={{ base: 1 }}
        color="white"
      >
        <Heading fontSize="md">{title}</Heading>
        {description && (
          <Box mb={{ base: -0.5, md: -1.5 }} fontSize="small">
            {description}
          </Box>
        )}
      </Stack>
    </Box>
  )
}
