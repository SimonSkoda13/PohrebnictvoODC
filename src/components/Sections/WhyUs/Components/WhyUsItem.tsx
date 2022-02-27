import { Box, BoxProps, Flex } from '@chakra-ui/react';
import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import { ChakraProvider, Heading } from '@chakra-ui/react';

export interface WhyUsItemProps extends BoxProps {
  title: string;
  description: string;
  imgData: any;
}

export const WhyUsItem = (props: WhyUsItemProps) => {
  const { title, description, imgData, ...restOfProps } = props;
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      textAlign="center"
      maxW={300}
      mx={{ md: 30, base: 0 }}
      my={{ md: 0, base: 30 }}
    >
      <Box borderRadius="full" w={200} h={200}>
        <Img
          fluid={imgData.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </Box>
      <Heading color="primary" fontSize="x-large" pb={3}>
        {title}
      </Heading>
      <Box>{description}</Box>
    </Flex>
  );
};
