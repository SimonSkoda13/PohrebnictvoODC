import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
} from '@chakra-ui/layout';
import React, { ReactNode } from 'react';

export interface ContainerProps extends ChakraContainerProps {
  children?: ReactNode;
}

export const Container = (props: ContainerProps) => {
  const { children, maxW = 'container.lg', ...restOfProps } = props;
  return (
    <ChakraContainer maxW={maxW} my={10} {...restOfProps}>
      {children}
    </ChakraContainer>
  );
};
