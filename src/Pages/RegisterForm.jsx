import React from "react";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../components/Layout";
import { RegisterForm } from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <Layout>
      <Box className="page-enter" bg="paper" minH="75vh">
        <Flex maxW="1180px" mx="auto" px={{ base: 5, md: 10 }} py={{ base: 10, md: 16 }} align="flex-start" gap={{ base: 10, lg: 20 }} direction={{ base: "column", lg: "row" }}>
          <Box flex="1" pt={{ lg: 10 }}>
            <Text color="green.700" fontSize="xs" fontWeight="bold" textTransform="uppercase">A journal with room for you</Text>
            <Heading as="h1" mt={3} fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.04">Make space for better questions.</Heading>
            <Text mt={5} color="gray.600" fontSize="lg" lineHeight="1.75" maxW="460px">
              Join a community that values good ideas, generous perspectives, and stories that make you think.
            </Text>
            <Link as={RouterLink} to="/posts" display="inline-flex" mt={7} color="green.700" fontWeight="semibold" _hover={{ color: "ink" }}>
              Explore the journal first <span aria-hidden="true">&nbsp;→</span>
            </Link>
          </Box>
          <Box flex="1" w="full" maxW={{ base: "full", lg: "600px" }} p={{ base: 5, md: 8 }} bg="white" border="1px solid" borderColor="blackAlpha.100" borderRadius="4px">
            <Heading as="h2" fontSize="2xl">Create your account</Heading>
            <Text mt={2} mb={7} color="gray.600" fontSize="sm">A few details and you’re in.</Text>
            <RegisterForm />
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default RegisterPage;
