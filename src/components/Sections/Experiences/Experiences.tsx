import { Container } from '@/components/Shared/Container/Container';
import {
  HeadAdnDisc,
  HeadAdnDiscProps,
} from '@/components/Shared/HeadAndDisc/HeadAdnDisc';
import { SectionHeading } from '@/components/Shared/SectionHeading/SectionHeading';
import { Flex } from '@chakra-ui/react';
import React from 'react';

export type ExperiencesProps = {
  items: HeadAdnDiscProps[];
  title: string;
  description: string;
};

export const Experiences = (props: ExperiencesProps) => {
  const { title, description, items } = props;
  return (
    <Container>
      <Flex flexDir="column" alignItems="center">
        <SectionHeading {...{ title, description }} isCentered />
        {items.map((item) => {
          return <HeadAdnDisc {...item} maxW={500} py={8} isCentered />;
        })}
      </Flex>
    </Container>
  );
};
