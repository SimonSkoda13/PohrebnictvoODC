import { BoxProps, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export interface HeadAdnDiscProps extends BoxProps {
  title: string;
  description: string;
  isCentered?: boolean;
}

export const HeadAdnDisc = (props: HeadAdnDiscProps) => {
  const { title, description, isCentered, ...restOfProps } = props;
  return (
    <Flex
      flexDirection="column"
      pb={8}
      textAlign={isCentered ? 'center' : 'left'}
      {...restOfProps}
    >
      <Heading color="primary" pb={2} fontSize="xl">
        {title}
      </Heading>
      <Text color="black" fontSize="sm">
        {description}
      </Text>
    </Flex>
  );
};
