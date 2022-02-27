import { Box, BoxProps, Flex } from '@chakra-ui/react';
import React from 'react';
import { Heading } from '@chakra-ui/react';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';

export interface ServicesItemProps extends BoxProps {
  title: string;
  description: string;
  imgData: any;
  path?: string;
}

export const ServicesItem = (props: ServicesItemProps) => {
  const {
    title,
    description,
    imgData,
    path = 'služby',
    ...restOfProps
  } = props;
  return (
    <Box my={{ base: 10 }}>
      <BackgroundImage fluid={imgData.childImageSharp.fluid}>
        <Flex justifyContent="center" textAlign="center" flexDir="column">
          <Box height="400px" maxWidth="300px">
            <Box
              mx={3}
              p={4}
              boxShadow="md"
              position="relative"
              top="80%"
              background="white"
              experimental_spaceY={2}
            >
              <Heading color="primary" fontSize="x-large">
                {title}
              </Heading>
              <Box>{description}</Box>

              <Box fontSize="xl" color="primary">
                <Link to={path}>Zistite viac</Link>
              </Box>
            </Box>
          </Box>
        </Flex>
      </BackgroundImage>
    </Box>
  );
};
