import React from "react";
import {
  Box,
  useColorMode,
  useColorModeValue,
  IconButton,
  Text,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { Link as RouterLink, NavLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const background = useColorModeValue("#f7f7f2", "#17251f");
  const foreground = useColorModeValue("#17251f", "#f7f7f2");
  const border = useColorModeValue("#d8dfda", "#34463e");
  const linkColor = useColorModeValue("#3b4c45", "#d2ded7");

  return (
    <Box
      as="header"
      position="relative"
      zIndex={2}
      borderBottom="1px solid"
      borderColor={border}
      bg={background}
      color={foreground}
    >
      <Flex
        maxW="1280px"
        minH={{ base: "68px", md: "80px" }}
        mx="auto"
        px={{ base: 5, md: 10 }}
        align="center"
        justify="space-between"
        gap={5}
      >
        <RouterLink to="/" aria-label="Compass home">
          <Text fontFamily="Georgia, serif" fontSize="2xl" fontWeight="bold" color={foreground}>
            Compass<span style={{ color: "#4e8b73" }}>.</span>
          </Text>
        </RouterLink>
        <Flex as="nav" aria-label="Main navigation" align="center" gap={{ base: 4, md: 8 }}>
          <Link as={NavLink} to="/posts" color={linkColor} fontWeight="semibold" _hover={{ color: "#246b59" }}>
            Stories
          </Link>
          <Link as={NavLink} to="/editor" color={linkColor} fontWeight="semibold" _hover={{ color: "#246b59" }}>
            Write
          </Link>
          <Button
            as={RouterLink}
            to="/register"
            size="sm"
            colorScheme="teal"
            display={{ base: "none", sm: "inline-flex" }}
          >
            Join Compass
          </Button>
        </Flex>
        <Flex align="center" gap={2}>
          <Link
            display={{ base: "none", md: "inline-flex" }}
            href="https://github.com/Holajuwon/compass-api"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compass API on GitHub"
            color={linkColor}
          >
            <Box as={FaGithub} boxSize={5} />
          </Link>
        <IconButton
          onClick={toggleColorMode}
          variant="ghost"
          colorScheme="teal"
          aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
          title={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
          fontSize="18px"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
