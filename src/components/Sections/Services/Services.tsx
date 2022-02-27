import { IButton } from '@/components/Shared/Button/Button';
import { Box, BoxProps, Flex, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Img from 'gatsby-image';
import { Container } from '../../Shared/Container/Container';
import { SectionHeading } from '../../Shared/SectionHeading/SectionHeading';
import { ServicesItem, ServicesItemProps } from './Components/ServicesItem';

export interface ServicesProps extends BoxProps {
  title: string;
  description: string;
  items: ServicesItemProps[];
  button?: string;
  buttonTo?: string;
  logo?: any;
}

export const Services = (props: ServicesProps) => {
  const { title, description, items, logo, button, buttonTo, ...restOfProps } =
    props;
  return (
    <Container>
      <Flex flexDir="column" alignItems="center" pb={9}>
        <SimpleGrid columns={{ md: 2, base: 1 }}>
          <SectionHeading title={title} description={description} py={5} />
          {logo && (
            <Flex
              w="100%"
              h="auto"
              display={{ md: 'grid', base: 'none' }}
              pl={16}
              alignItems="end"
            >
              <Img fluid={logo.childImageSharp.fluid} />
            </Flex>
          )}
        </SimpleGrid>
        <SimpleGrid columns={{ md: 3, base: 1 }} spacing={10} py={5} pb={10}>
          {items.map((item) => {
            return <ServicesItem {...item} />;
          })}
        </SimpleGrid>
        {button && (
          <IButton text={button} to={buttonTo ? buttonTo : '/'} mt={20} />
        )}
      </Flex>
    </Container>
  );
};
