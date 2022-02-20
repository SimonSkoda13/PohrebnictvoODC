import { IButton } from '@/components/Shared/Button/Button';
import React from 'react';
import {
  HeadAdnDisc,
  HeadAdnDiscProps,
} from '@/components/Shared/HeadAndDisc/HeadAdnDisc';
import { ImageParagraph } from '@/components/Shared/ImageParagraph/ImageParagraph';
import { BoxProps, Flex } from '@chakra-ui/react';
import { Container } from '@/components/Shared/Container/Container';

interface AdvanceProps extends BoxProps {
  image?: any;
  isImageOnTheLeft?: boolean;
  items: HeadAdnDiscProps[];
  button?: string;
  title: string;
  description: string;
}
export const Advance = (props: AdvanceProps) => {
  const {
    image,
    title,
    description,
    button,
    isImageOnTheLeft,
    items,
    ...restOfProps
  } = props;
  return (
    <ImageParagraph {...props}>
      <Container>
        {items.map((item) => {
          return <HeadAdnDisc {...item} />;
        })}
        <Flex justifyContent={{ md: 'left', base: 'center' }}>
          <IButton text={button} to={''} />
        </Flex>
      </Container>
    </ImageParagraph>
  );
};
