import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../components/Layout";

const Error = () => {
  return (
    <Layout>
      <Flex className="page-enter" minH="70vh" maxW="1100px" mx="auto" px={6} align="center">
        <Box>
          <Text color="green.700" fontSize="xs" fontWeight="bold" textTransform="uppercase">Wrong turn</Text>
          <Heading as="h1" mt={3} fontSize={{ base: "5xl", md: "7xl" }}>The page is elsewhere.</Heading>
          <Text mt={4} color="gray.600" fontSize="lg">Let's get you back to something worth reading.</Text>
          <Button as={RouterLink} to="/" mt={7} bg="ink" color="white" borderRadius="full" px={7} _hover={{ bg: "green.800" }}>Return to Compass</Button>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Error;
