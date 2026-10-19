import React from "react";
import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars, FaPenNib, FaTimes } from "react-icons/fa";
import { Link as RouterLink, NavLink } from "react-router-dom";

const NavigationLink = ({ to, children, onClick }) => (
  <Link
    as={NavLink}
    to={to}
    onClick={onClick}
    color="gray.600"
    fontSize="sm"
    fontWeight="semibold"
    className="focus-ring"
    sx={{ "&.active": { color: "#17231f" } }}
    _hover={{ color: "green.700", textDecoration: "none" }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={10}
      borderBottom="1px solid"
      borderColor="blackAlpha.100"
      bg="rgba(244, 245, 239, 0.94)"
      backdropFilter="blur(16px)"
    >
      <Flex
        maxW="1440px"
        minH={{ base: "68px", md: "82px" }}
        mx="auto"
        px={{ base: 5, md: 10, xl: 14 }}
        align="center"
        justify="space-between"
        gap={8}
      >
        <RouterLink to="/" aria-label="Compass Journal home" onClick={onClose}>
          <Flex align="center" gap={3}>
            <Flex w={9} h={9} borderRadius="full" bg="ink" color="signal" align="center" justify="center">
              <Text fontFamily="heading" fontSize="xl" lineHeight="1">c</Text>
            </Flex>
            <Box>
              <Text fontFamily="heading" fontSize="xl" fontWeight={600} lineHeight="1">Compass</Text>
              <Text mt={1} color="gray.500" fontSize="9px" fontWeight="bold" textTransform="uppercase">Journal</Text>
            </Box>
          </Flex>
        </RouterLink>
        <Flex as="nav" aria-label="Main navigation" display={{ base: "none", md: "flex" }} align="center" gap={9} ml="auto">
          <NavigationLink to="/posts">Stories</NavigationLink>
          <NavigationLink to="/posts?q=design">Perspectives</NavigationLink>
          <NavigationLink to="/editor">Write</NavigationLink>
        </Flex>
        <Flex align="center" gap={3}>
          <Button as={RouterLink} to="/register" display={{ base: "none", sm: "inline-flex" }} size="sm" bg="ink" color="white" borderRadius="full" px={5} rightIcon={<FaPenNib />} _hover={{ bg: "green.800", transform: "translateY(-1px)" }}>
            Join the journal
          </Button>
          <IconButton
            display={{ base: "inline-flex", md: "none" }}
            onClick={onToggle}
            variant="ghost"
            color="ink"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            icon={isOpen ? <FaTimes /> : <FaBars />}
          />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex id="mobile-navigation" as="nav" aria-label="Mobile navigation" display={{ base: "flex", md: "none" }} direction="column" gap={5} px={6} pb={6} pt={2} borderTop="1px solid" borderColor="blackAlpha.100">
          <NavigationLink to="/posts" onClick={onClose}>Stories</NavigationLink>
          <NavigationLink to="/posts?q=design" onClick={onClose}>Perspectives</NavigationLink>
          <NavigationLink to="/editor" onClick={onClose}>Write a story</NavigationLink>
          <Button as={RouterLink} to="/register" onClick={onClose} size="sm" bg="ink" color="white" borderRadius="full" alignSelf="flex-start" rightIcon={<FaPenNib />}>
            Join the journal
          </Button>
        </Flex>
      </Collapse>
    </Box>
  );
};

export default Navbar;
