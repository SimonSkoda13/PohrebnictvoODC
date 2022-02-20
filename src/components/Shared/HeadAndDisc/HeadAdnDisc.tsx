import { BoxProps, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export interface HeadAdnDiscProps extends BoxProps {
  title: string;
  description: string;
  isCentered?: boolean;
  colorMode?: 'black' | 'white';
}

export const HeadAdnDisc = (props: HeadAdnDiscProps) => {
  const { title, description, colorMode, isCentered, ...restOfProps } = props;
  return (
    <Flex
      flexDirection="column"
      pb={8}
      textAlign={isCentered ? 'center' : 'left'}
      {...restOfProps}
    >
      <Heading
        color={colorMode == 'white' ? 'white' : 'primary'}
        pb={2}
        fontSize="xl"
      >
        {title}
      </Heading>
      <Text color={colorMode == 'white' ? 'white' : 'black'} fontSize="sm">
        {description}
      </Text>
    </Flex>
  );
};
