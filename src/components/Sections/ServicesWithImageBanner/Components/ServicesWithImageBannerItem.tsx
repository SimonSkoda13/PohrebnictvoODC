import { IButton, IButtonProps } from '@/components/Shared/Button/Button';
import { HeadAdnDisc } from '@/components/Shared/HeadAndDisc/HeadAdnDisc';
import { Box, BoxProps, Flex, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { Container } from '../../../Shared/Container/Container';
import {
  ImageBanner,
  ImageBannerProps,
} from '../../../Shared/ImageBanner/ImageBanner';

export interface ServicesWithImageBannerItemProps extends BoxProps {
  imageBanner: ImageBannerProps;
  content: {
    title: string;
    description: string;
    items: string[];
    text: string;
    other: {
      title: string;
      description: string;
    };
    button: IButtonProps;
  };
}

export const ServicesWithImageBannerItem = (
  props: ServicesWithImageBannerItemProps,
) => {
  const { imageBanner, content, ...restOfProps } = props;
  return (
    <Flex flexDir="column">
      <ImageBanner {...imageBanner} isCentered />
      <Container>
        <HeadAdnDisc
          {...{ description: content.description, title: content.title }}
        />
        <UnorderedList>
          {content.items.map((item) => {
            return <li>{item}</li>;
          })}
        </UnorderedList>
        <Box mt={8} mb={10}>
          {content.text}
        </Box>
        <HeadAdnDisc {...content.other} />
        <Flex>
          <IButton {...content.button} />
        </Flex>
      </Container>
    </Flex>
  );
};
