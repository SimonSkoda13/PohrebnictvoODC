import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export type HeadAdnDiscProps = {
  title: string;
  description: string;
};

export const HeadAdnDisc = (props: HeadAdnDiscProps) => {
  const { title, description } = props;
  return (
    <Flex flexDirection="column" pb={8}>
      <Heading color="primary" pb={2} fontSize="xl">
        {title}
      </Heading>
      <Text color="black">{description}</Text>
    </Flex>
  );
};
