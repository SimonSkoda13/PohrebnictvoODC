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
      <Flex
        width="100%"
        height={30}
        bgColor="primary"
        justifyContent={'center'}
        alignContent="center"
        color="white"
        display={{ md: 'flex', base: 'none' }}
      >
        <Icon as={BsTelephone} size="30px" pt={1} />
        {header1}
      </Flex>
      <Flex
        width="100%"
        height={30}
        justifyContent={{ md: 'center', base: 'space-between' }}
        alignItems="center"
        p={6}
        rounded="md"
        boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      >
        <Box w={150}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </Box>
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
                      <Box
                        fontSize="md"
                        fontWeight="bold"
                        px={10}
                        color="#226867"
                      >
                        {item}
                      </Box>
                    </Link>
                  </MenuItem>
                ) : (
                  <MenuItem>
                    <Link to={item.toLocaleLowerCase().replace(/\s/g, '')}>
                      <Box fontSize="md" px={10}>
                        {item}
                      </Box>
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
                <Box fontSize="md" fontWeight="bold" px={3} color="#226867">
                  {item}
                </Box>
              </Link>
            ) : (
              <Link to={item.toLocaleLowerCase().replace(/\s/g, '')}>
                <Box fontSize="md" px={3}>
                  {item}
                </Box>
              </Link>
            );
          })
        )}
      </Flex>
    </Box>
  );
};
export default Header;
