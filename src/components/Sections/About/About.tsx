import { Container } from '@/components/Shared/Container/Container';
import {
  HeadAdnDisc,
  HeadAdnDiscProps,
} from '@/components/Shared/HeadAndDisc/HeadAdnDisc';
import {
  HeadDiscAndContent,
  HeadDiscAndContentProps,
} from '@/components/Shared/HeadDiscAndContent/HeadDiscAndContent';
import { ImageParagraphLogo } from '@/components/Shared/ImageParagraphLogo/ImagePargraphWithLogo';
import { BoxProps, Box, SimpleGrid, Flex, GridItem } from '@chakra-ui/react';
import React from 'react';

interface AboutProps extends BoxProps {
  image: any;
  logo: any;
  title: string;
  description: string;
  headDiscAndContent: HeadDiscAndContentProps;
  headAdnDisc: HeadAdnDiscProps;
}
export const About = (props: AboutProps) => {
  const {
    image,
    children,
    logo,
    headDiscAndContent,
    headAdnDisc,
    ...restOfProps
  } = props;

  return (
    <Container>
      <ImageParagraphLogo {...props}>
        <HeadDiscAndContent {...headDiscAndContent} />
        <HeadAdnDisc {...headAdnDisc} />
      </ImageParagraphLogo>
    </Container>
  );
};
