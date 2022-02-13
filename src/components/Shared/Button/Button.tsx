import { Box, BoxProps } from "@chakra-ui/react"
import React from "react"
import { Link } from "gatsby"

export interface IButtonProps extends BoxProps {
  text: string
  to: string
}
export const IButton = (props: IButtonProps) => {
  const { to, text, ...restOfProps } = props
  return (
    <Link to={to}>
      <Box
        background="primary"
        color="white"
        p={3}
        px={5}
        minW={50}
        borderRadius={3}
        fontSize="sm"
        fontWeight="600"
        {...restOfProps}
      >
        {text}
      </Box>
    </Link>
  )
}
