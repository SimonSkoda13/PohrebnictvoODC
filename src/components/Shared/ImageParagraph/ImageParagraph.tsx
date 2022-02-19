import {
  BoxProps,
  useBreakpointValue,
  Box,
  SimpleGrid,
  Flex,
  GridItem,
} from '@chakra-ui/react';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { IButton } from '../Button/Button';
import { Container } from '../Container/Container';
import { HeadAdnDisc, HeadAdnDiscProps } from '../HeadAndDisc/HeadAdnDisc';
import { SectionHeading } from '../SectionHeading/SectionHeading';

interface ImageParagraphProps extends BoxProps {
  image?: any;
  isImageOnTheLeft?: boolean;
  items: HeadAdnDiscProps[];
  button?: string;
  title: string;
  description: string;
}
export const ImageParagraph = (props: ImageParagraphProps) => {
  const {
    image,
    title,
    description,
    button,
    isImageOnTheLeft,
    items,
    ...restOfProps
  } = props;
  console.log(
    '🚀 ~ file: ImageParagraph.tsx ~ line 32 ~ ImageParagraph ~ image',
    image,
  );

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
          {items.map((item) => {
            return <HeadAdnDisc {...item} />;
          })}
          <Flex justifyContent={{ md: 'left', base: 'center' }}>
            <IButton text={button} to={''} />
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
