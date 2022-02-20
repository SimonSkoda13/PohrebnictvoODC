import { BoxProps, Box, SimpleGrid, Flex, GridItem } from '@chakra-ui/react';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { SectionHeading } from '../SectionHeading/SectionHeading';

interface ImageParagraphProps extends BoxProps {
  image?: any;
  isImageOnTheLeft?: boolean;
  children: React.ReactNode[] | React.ReactNode;
  title: string;
  description: string;
}
export const ImageParagraph = (props: ImageParagraphProps) => {
  const {
    image,
    title,
    description,
    isImageOnTheLeft,
    children,
    ...restOfProps
  } = props;

  return (
    <Box py={10} {...restOfProps}>
      <style>{`
      .bg-100{
          width: 100%;
      }
    `}</style>
      <SimpleGrid
        columns={{ md: image ? 2 : 1, base: 1 }}
        alignItems={'center'}
        gap={{ base: 4, md: 10 }}
      >
        {image && (
          <Flex height="100%" w="100%">
            <BackgroundImage
              fluid={image.childImageSharp.fluid}
              className="bg-100"
            >
              <Flex
                justifyContent={{ md: 'right', base: 'center' }}
                py={8}
                px={6}
              >
                <SectionHeading
                  title={title}
                  description={description}
                  colorMode="white"
                  w={300}
                />
              </Flex>
            </BackgroundImage>
          </Flex>
        )}
        <GridItem gridRowStart={isImageOnTheLeft ? 0 : 1} py={8}>
          {children}
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
