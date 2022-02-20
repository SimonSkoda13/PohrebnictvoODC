import { Box, BoxProps, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { HeadAdnDisc } from '../HeadAndDisc/HeadAdnDisc';
import { SectionHeading } from '../SectionHeading/SectionHeading';

export interface HeadDiscAndContentProps extends BoxProps {
  description: string;
  title: string;
  items: string[];
  text: string;
  isSectionHeading?: boolean;
}

export const HeadDiscAndContent = (props: HeadDiscAndContentProps) => {
  const { description, title, items, text, isSectionHeading, ...restOfProps } =
    props;
  return (
    <Box {...restOfProps}>
      {isSectionHeading ? (
        <SectionHeading {...{ description, title }} />
      ) : (
        <HeadAdnDisc
          {...{ description, title }}
          {...(restOfProps.color == 'white' && { colorMode: 'white' })}
        />
      )}
      <UnorderedList>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </UnorderedList>
      <Box mt={8} mb={10}>
        {text}
      </Box>
    </Box>
  );
};
