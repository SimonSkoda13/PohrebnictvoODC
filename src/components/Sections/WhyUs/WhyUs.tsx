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
      <Flex flexDir="column" alignItems="center">
        <SectionHeading
          title={title}
          description={description}
          isCentered
          py={5}
        />
        <Flex
          flexDir={{ md: "row", base: "column" }}
          alignItems={{ md: "normal", base: "center" }}
          justifyContent={"center"}
          py={5}
        >
          {items.map(item => {
            return <WhyUsItem {...item} />
          })}
        </Flex>
      </Flex>
    </Container>
  )
}
