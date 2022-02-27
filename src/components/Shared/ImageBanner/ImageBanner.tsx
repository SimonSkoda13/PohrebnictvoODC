import { Box, BoxProps } from '@chakra-ui/react';
import { Flex, Stack } from '@chakra-ui/react';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { IButton } from '../Button/Button';

export interface ImageBannerProps extends BoxProps {
  title: string;
  description?: string;
  button?: string;
  imgData: any;
  isCentered?: boolean;
  link?: string;
}

export const ImageBanner = (props: ImageBannerProps) => {
  const {
    title,
    description,
    button,
    link,
    imgData,
    isCentered = false,
    ...restOfProps
  } = props;

  return (
    <Box width="100%" {...restOfProps}>
      <BackgroundImage
        fluid={imgData.childImageSharp.fluid}
        preserveStackingContext
      >
        <Flex
          minH={150}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          p={10}
          py={10}
        >
          <Stack spacing={{ base: 5, md: 8 }} alignItems={'center'}>
            <SectionHeading
              title={title}
              description={description}
              isCentered={isCentered}
              colorMode="white"
            />
            {button && <IButton to={link} text={button} />}
          </Stack>
        </Flex>
      </BackgroundImage>
    </Box>
  );
};
