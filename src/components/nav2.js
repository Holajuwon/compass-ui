import React from "react";
import Link from "next/link";
import {
  Box,
  Link as ChakraLink,
  Heading,
  useColorMode,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";

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
        flexDir={{ md: "row", sm: "column", xs: "column" }}
      >
        <ChakraLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/VictorLandim/rick-and-morty-wiki"
        >
          <Box w={28} as={FaGithub} />
        </ChakraLink>
        <Link href="/">
          <Box
            cursor="pointer"
            as="a"
            d="flex"
            alignItems="center"
            flexDir="row"
          >
            <Icon name="rick" boxSize="32px" />
            <Heading
              marginLeft="15px"
              marginRight="15px"
              fontSize="24px"
              textAlign="center"
              marginBottom={{ md: 0, sm: "30px", xs: "30px" }}
              marginTop={{ md: 0, sm: "30px", xs: "30px" }}
            >
              Rick and Morty Wiki
            </Heading>
            <Icon name="morty" boxSize="32px" />
          </Box>
        </Link>
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
