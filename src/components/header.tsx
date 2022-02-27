import React, { useState } from 'react';
import {
  Box,
  Flex,
  useDisclosure,
  BoxProps,
  useBreakpointValue,
  Menu,
  Button,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { BsTelephone } from 'react-icons/bs';
import Img from 'gatsby-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { HamburgerIcon } from '@chakra-ui/icons';

export interface HeaderProps extends BoxProps {
  header1: Array<string>;
  header2: Array<string>;
}

const Header = (props: HeaderProps) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-row.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const isMobile = useBreakpointValue({ md: false, base: true });
  const { header1, header2, ...restOfProps } = props;
  return (
    <Box>
      {!isMobile && (
        <Flex
          width="100%"
          bgColor="primary"
          justifyContent={'center'}
          alignContent="center"
          textAlign="center"
          color="white"
          flexDir={{ md: 'row', base: 'column' }}
          p={1}
          px={3}
        >
          <Flex alignItems="center" justifyContent="center">
            <Icon as={BsTelephone} w={5} h={5} my={1} mr={1} />
            <Box p={1}>{header1[0]}</Box>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <Box p={1}>{header1[1]}</Box>
          </Flex>
        </Flex>
      )}
      <Flex
        width="100%"
        height={30}
        justifyContent={{ md: 'center', base: 'space-between' }}
        alignItems="center"
        p={6}
        rounded="md"
        boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      >
        <Link to="/">
          <Box w={150}>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </Box>
        </Link>
        {isMobile ? (
          <Menu>
            <MenuButton
              as={Button}
              background="primary"
              leftIcon={<HamburgerIcon color="white" />}
              color="white"
            >
              Menu
            </MenuButton>
            <MenuList>
              {header2.map((item, index) => {
                return index == 0 ? (
                  <MenuItem>
                    <Link to="/">
                      <Box fontSize="md" fontWeight="bold" color="#226867">
                        {item}
                      </Box>
                    </Link>
                  </MenuItem>
                ) : (
                  <MenuItem>
                    <Link
                      to={'/' + item.toLocaleLowerCase().replace(/\s/g, '')}
                    >
                      <Box fontSize="md">{item}</Box>
                    </Link>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        ) : (
          header2.map((item, index) => {
            return index == 0 ? (
              <Link to="/">
                <Box
                  fontSize="md"
                  fontWeight="bold"
                  px={3}
                  pl={14}
                  color="#226867"
                >
                  {item}
                </Box>
              </Link>
            ) : (
              <Link to={'/' + item.toLocaleLowerCase().replace(/\s/g, '')}>
                <Box fontSize="md" px={3}>
                  {item}
                </Box>
              </Link>
            );
          })
        )}
      </Flex>
      {isMobile && (
        <Flex
          width="100%"
          bgColor="primary"
          justifyContent={'center'}
          alignContent="center"
          textAlign="center"
          color="white"
          flexDir={{ md: 'row', base: 'column' }}
          p={1}
          px={3}
        >
          <Flex alignItems="center" justifyContent="center">
            <Icon as={BsTelephone} w={5} h={5} my={1} mr={1} />
            <Box p={1}>{header1[0]}</Box>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <Box p={1}>{header1[1]}</Box>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};
export default Header;
