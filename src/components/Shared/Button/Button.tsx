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
        background="#226867"
        color="white"
        p={7}
        px={10}
        minW={100}
        borderRadius={3}
        fontSize="15px"
        fontWeight="600"
        {...restOfProps}
      >
        {text}
      </Box>
    </Link>
  )
}
