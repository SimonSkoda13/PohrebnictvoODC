import { Text } from '@chakra-ui/react';
import { Box, BoxProps, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

export interface FooterProps extends BoxProps {
  header1: Array<string>;
  invoiceAdress: Array<string>;
  importantLinks: Array<string>;
  contacts: Array<string>;
}

const Footer = (props: FooterProps) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-column.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const { contacts, header1, invoiceAdress, importantLinks, ...restOfProps } =
    props;
  return (
    <Flex
      flexDir={{ md: 'row', base: 'column' }}
      alignItems={{ md: 'normal', base: 'center' }}
      justifyContent={'center'}
      bgColor="#1A4645"
      color="white"
      mt={130}
    >
      <Box h={0}>
        <Flex
          position="relative"
          top={-95}
          background="white"
          flexDir="column"
          justifyContent="center"
          textAlign="center"
          color="#1A4645"
          p={3}
          mx={{ md: 4, base: 0 }}
          maxWidth={200}
          boxShadow=" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
        >
          <Box pb={5}>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </Box>
          <Text pb={2}>{header1[0]}</Text>
          <Text pb={3}>{header1[1]}</Text>
        </Flex>
      </Box>
      <Box py={5} mx={{ md: 4, base: 0 }} maxWidth={200}>
        <Heading as="h4" size="sxs" pb={2}>
          Kontakty
        </Heading>
        <Box>
          {contacts.map((item) => {
            return <Box>{item}</Box>;
          })}
        </Box>
      </Box>
      <Box py={5} mx={{ md: 4, base: 0 }} maxWidth={200}>
        <Heading as="h4" size="sxs" pb={2}>
          Fakturačná adresa
        </Heading>
        <Box>
          {invoiceAdress.map((item) => {
            return <Box>{item}</Box>;
          })}
        </Box>
      </Box>
      <Box py={5} mx={{ md: 4, base: 0 }} maxWidth={200}>
        <Heading as="h4" size="sxs" pb={2}>
          Dôležité linky
        </Heading>
        <ul>
          {contacts.map((item) => {
            return (
              <Box>
                <li>{item}</li>
              </Box>
            );
          })}
        </ul>
      </Box>
    </Flex>
  );
};
export default Footer;
