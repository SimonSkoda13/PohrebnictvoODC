import { BoxProps, Flex } from '@chakra-ui/react';
import React from 'react';
import {
  ServicesWithImageBannerItem,
  ServicesWithImageBannerItemProps,
} from './Components/ServicesWithImageBannerItem';

export interface ServicesWithImageBannerProps extends BoxProps {
  items: ServicesWithImageBannerItemProps[];
}

export const ServicesWithImageBanner = (
  props: ServicesWithImageBannerProps,
) => {
  const { items, ...restOfProps } = props;
  return (
    <Flex flexDir="column">
      {items.map((item) => {
        return <ServicesWithImageBannerItem {...item} />;
      })}
    </Flex>
  );
};
