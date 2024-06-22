import React from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Flex,
  Text,
  Link,
  Button,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const [isSmallerThan800] = useMediaQuery("(max-width:800px)");

  const { toggleColorMode } = useColorMode()
  const color = useColorModeValue('black', 'white')

  return (
    <>
      <Box className="selectDisable pad">
        <Flex
          justifyContent="space-between"
          paddingBlock={1}
          border="1px solid"
          borderColor={color}
          alignItems="center"
          className="navbar"
          boxShadow="0px 0px 10px rgba(255, 255, 255, 0.6)"
          background="linear-gradient(90deg, rgba(251, 251, 251, 0.1) 0%, rgba(251, 251, 251, 0.1) 100%);"
          backdropFilter={"blur(30px)"}
          marginInline={"auto"}
          position="fixed"
          w="100%"
          zIndex={10}
        >
          <Text fontWeight="800" fontSize="2rem" color={color} p={3} pl={6}>
            APPLE TECH LONDON
          </Text>
          <Box
            display={isSmallerThan800 ? "none" : "flex"}
            justifyContent="space-around"
            width="100%"
            maxW="500px"
            alignItems={"center"}
          >
            <Link
              fontSize="s"
              fontWeight="600"
              color={color}
              p={4}
              href="/"
            >
              home
            </Link>
            <Link
              fontSize="s"
              fontWeight="600"
              color={color}
              p={4}
              href="/"
            >
              about
            </Link>
            <Link
              fontSize="s"
              fontWeight="600"
              color={color}
              p={4}
              href="/contact"
            >
              contact
            </Link>
            <Button size='sm' onClick={toggleColorMode}>
              Toggle Mode
            </Button>

          </Box>

          <Box mr={10} display={isSmallerThan800 ? "flex" : "none"} alignItems="center">
            <Button size='sm' onClick={toggleColorMode}>
              {color === 'white' ? 'dark' : 'light'}
            </Button>
            <Menu>
              <MenuButton
                as={IconButton}
                color={color}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="none"
                width={"2rem"}
              />
              <MenuList color={color}>
                <MenuItem>
                  <Link fontSize="s" width="100%" fontWeight="600" href="/">
                    home
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link fontSize="s" width="100%" fontWeight="600" href="/about">
                    about
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link fontSize="s" fontWeight="600" href="/contact" width="100%">
                    contact
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
