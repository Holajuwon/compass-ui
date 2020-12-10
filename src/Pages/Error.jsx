import React from "react";
import { Flex, Text, Heading, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Error = () => {
  return (
    <Layout>
      <Flex
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Heading as="h4">404</Heading>
        <Divider mx="12px" orientation="vertical" h="10rem" />
        <Flex flexDir="column" alignContent="center" alignItems="center">
          <Text>Page not found</Text>
          <Link to="/" style={{ textDecoration: "none" }}>
            Go Home
          </Link>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Error;
