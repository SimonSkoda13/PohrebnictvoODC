import { IButton } from '@/components/Shared/Button/Button';
import { Box, BoxProps, Flex } from '@chakra-ui/react';
import React from 'react';
import { Container } from '../../Shared/Container/Container';
import { SectionHeading } from '../../Shared/SectionHeading/SectionHeading';
import { WhyUsItem, WhyUsItemProps } from './Components/WhyUsItem';

export interface WhyUsProps extends BoxProps {
  title: string;
  description: string;
  items: WhyUsItemProps[];
  button?: string;
  buttonTo?: string;
}

export const WhyUs = (props: WhyUsProps) => {
  const { title, description, items, button, buttonTo, ...restOfProps } = props;
  return (
    <Container>
      <Flex flexDir="column" alignItems="center" pb={9}>
        <SectionHeading
          title={title}
          description={description}
          isCentered
          py={5}
        />
        <Flex
          flexDir={{ md: 'row', base: 'column' }}
          alignItems={{ md: 'normal', base: 'center' }}
          justifyContent={'center'}
          py={5}
        >
          {items.map((item) => {
            return <WhyUsItem {...item} />;
          })}
        </Flex>
        <IButton text={button} to={buttonTo ? buttonTo : '/'} mt={6} />
      </Flex>
    </Container>
  );
};
