import { Heading } from '@chakra-ui/react';
import { Box, BoxProps, HStack, Stack } from '@chakra-ui/react';
import React from 'react';
export interface SectionHeadingProps extends BoxProps {
  title: string;
  description?: string;
  isCentered?: boolean;
  colorMode?: 'dark' | 'white';
}

export const SectionHeading = (props: SectionHeadingProps) => {
  const {
    title,
    description,
    colorMode = 'dark',
    isCentered = false,
    ...restOfProps
  } = props;
  return (
    <Box {...restOfProps} maxW={600} my={4}>
      <Stack
        alignItems={isCentered ? 'center' : 'left'}
        textAlign={isCentered ? 'center' : 'left'}
        spacing={3}
        color={colorMode === 'white' ? 'white' : 'black'}
      >
        <Heading
          fontSize="x-large"
          color={colorMode === 'white' ? 'white' : 'primary'}
        >
          {title}
        </Heading>
        <Box
          w={20}
          h={1}
          borderRadius={4}
          background={colorMode === 'white' ? 'white' : 'primary'}
        />
        {description && (
          <Box mb={{ base: -0.5, md: -1.5 }} mt={10}>
            {description}
          </Box>
        )}
      </Stack>
    </Box>
  );
};
