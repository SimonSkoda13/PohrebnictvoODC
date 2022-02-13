import { Box, BoxProps, Flex } from "@chakra-ui/core"
import React from "react"
import { Container } from "../../Shared/Container/Container"
import { SectionHeading } from "../../Shared/SectionHeading/SectionHeading"
import { WhyUsItem, WhyUsItemProps } from "./Components/WhyUsItem"

export interface WhyUsProps extends BoxProps {
  title: string
  description: string
  items: WhyUsItemProps[]
}

export const WhyUs = (props: WhyUsProps) => {
  const { title, description, items, ...restOfProps } = props
  return (
    <Container py={10}>
      <SectionHeading title={title} description={description} isCentered />
      <Flex
        flexDir={{ md: "row", base: "column" }}
        alignItems={{ md: "normal", base: "center" }}
        justifyContent={"center"}
      >
        {items.map(item => {
          return <WhyUsItem {...item} />
        })}
      </Flex>
    </Container>
  )
}
