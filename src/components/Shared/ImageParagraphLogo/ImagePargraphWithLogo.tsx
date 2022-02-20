import { BoxProps, Box, SimpleGrid, Flex, GridItem } from '@chakra-ui/react';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import React from 'react';
import { SectionHeading } from '../SectionHeading/SectionHeading';

interface ImageParagraphLogoProps extends BoxProps {
  title: string;
  image?: any;
  children: React.ReactNode[] | React.ReactNode;
  logo: any;
}
export const ImageParagraphLogo = (props: ImageParagraphLogoProps) => {
  const { image, children, logo, title, ...restOfProps } = props;

  return (
    <Box py={10} {...restOfProps}>
      <style>{`
      .bg-100{
          width: 100%;
          min-height: 500px;
      }
    `}</style>
      <SectionHeading title={title} />
      <SimpleGrid
        columns={{ md: 2, base: 1 }}
        alignItems={'center'}
        gap={{ base: 4, md: 10 }}
      >
        <GridItem py={8}>{children}</GridItem>
        {image && (
          <Flex height="100%" w="100%">
            <BackgroundImage
              fluid={image.childImageSharp.fluid}
              className="bg-100"
            >
              <Box
                background="white"
                w={200}
                position="absolute"
                bottom={0}
                boxShadow="md"
              >
                <Img fluid={logo.childImageSharp.fluid} />
              </Box>
            </BackgroundImage>
          </Flex>
        )}
      </SimpleGrid>
    </Box>
  );
};
