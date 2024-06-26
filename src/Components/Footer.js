import React from 'react';
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Text, Link, IconButton, useMediaQuery, ButtonGroup, VStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const [isSmallerThan900] = useMediaQuery("(max-width:900px)");
  const color = useColorModeValue('black', 'white')

  return (
    <>
      <Box position="absolute" top={isSmallerThan900 ? "2200" : "2350"} id="#contact" className="selectDisable" w="100%" py={10} borderTopWidth={1} borderTopColor={color} borderTopRadius={10}>
          <Flex ml={isSmallerThan900 ? "3rem" : "9rem"}>
            <VStack w="50%" alignItems="left">
              <Text fontWeight="800" fontSize="30">APPLE TECH LONDON</Text>
              <Link>318 Romford Rd, London E7 8BD, United Kingdom</Link>
              <Link>+44 7492 910258</Link>
              <ButtonGroup>
                <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
                <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
                <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
                <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} />
              </ButtonGroup>
            </VStack>
            <Box w="50%">
              <VStack alignItems="left">
                <Text fontWeight="700" fontSize="20">quick links</Text>
                <Link fontSize="s" fontWeight="600" href='https://apple-tech-london-dev.vercel.app/#nav'>home</Link>
                <Link fontSize="s" fontWeight="600" href='https://apple-tech-london-dev.vercel.app/#contact'>contact</Link>
                <Link fontSize="s" fontWeight="600" href='https://apple-tech-london-dev.vercel.app/#fix'>repairs</Link>
                <Link fontSize="s" fontWeight="600" href='https://apple-tech-london-dev.vercel.app/#faq'>FAQ</Link>
              </VStack>
            </Box>
          </Flex>
        </Box>
      <Box w='100%' h='10px' position="absolute" top={isSmallerThan900 ? "2450" : "2550"}
        paddingBlock="1rem"
        color={color}
        textAlign="center"
        py={8}
        className="selectDisable"
      >
        © copyright {" "}
        <Text display="inline" fontWeight="800">
          APPLE TECH LONDON
        </Text>{" "}
        · all rights reserved
      </Box>
    </>
  );
};
