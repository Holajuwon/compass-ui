import React from "react";
import {
  Box,
  useColorMode,
  IconButton,
  Badge,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      borderBottom="1px solid blue.500"
      borderColor="blue.300"
      shadow="md"
      paddingTop="30px"
      paddingBottom="30px"
      paddingLeft={{ md: "50px", sm: "40px", xs: "20px" }}
      paddingRight={{ md: "50px", sm: "40px", xs: "20px" }}
    >
      <Box
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ md: "row", sm: "row", xs: "row" }}
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Holajuwon/compass-api"
        >
          <Box size={20}  as={FaGithub} />
        </Link>
        <Flex
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <RouterLink to="/posts">
            <Text fontSize="3xl" fontWeight="bold" textDecor="none">
              Compass
            </Text>
          </RouterLink>
          <Badge variant="subtle" colorScheme="pink" ml={1}>
            BETA
          </Badge>
        </Flex>
        <IconButton
          onClick={toggleColorMode}
          variant="ghost"
          colorScheme="teal"
          aria-label="Call Sage"
          fontSize="20px"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
