import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box as="footer" bg="ink" color="whiteAlpha.800">
      <Flex maxW="1440px" mx="auto" px={{ base: 5, md: 10, xl: 14 }} py={7} justify="space-between" align={{ base: "flex-start", md: "center" }} gap={5} direction={{ base: "column", md: "row" }}>
        <Box>
          <Link as={RouterLink} to="/" color="white" fontFamily="heading" fontSize="xl" _hover={{ color: "signal", textDecoration: "none" }}>Compass Journal</Link>
          <Text mt={1} fontSize="xs" color="whiteAlpha.600">A little more perspective, every day.</Text>
        </Box>
        <Flex align="center" gap={6} fontSize="sm">
          <Link as={RouterLink} to="/posts" _hover={{ color: "signal" }}>Stories</Link>
          <Link as={RouterLink} to="/editor" _hover={{ color: "signal" }}>Write</Link>
          <Link as={RouterLink} to="/register" _hover={{ color: "signal" }}>Join</Link>
        </Flex>
        <Text fontSize="xs" color="whiteAlpha.600">&copy; {new Date().getFullYear()} Compass</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
