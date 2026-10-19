import React from "react";
import Layout from "../components/Layout";
import { Home } from "../components/Home";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { HomeForm } from "../components/HomeForm";
import { HomeAside } from "../components/HomeAside";
import { HomeCards } from "../components/HomeCards";

const HomePage = () => {
  return (
    <Layout>
      <Box className="page-enter" w="full" bg="paper" color="ink">
        <Home />
        <Box as="section" id="topics" maxW="1320px" mx="auto" px={{ base: 5, md: 10 }} py={{ base: 12, md: 16 }}>
          <Flex justify="space-between" align={{ base: "flex-start", md: "flex-end" }} gap={6} mb={7} direction={{ base: "column", md: "row" }}>
            <Box>
              <Text color="green.700" fontSize="xs" fontWeight="bold" textTransform="uppercase">Follow your curiosity</Text>
              <Heading as="h2" mt={2} fontSize={{ base: "3xl", md: "4xl" }}>Find your next rabbit hole.</Heading>
            </Box>
          </Flex>
          <Flex className="stagger-in" gap={3} overflowX="auto" pb={2}>
            <HomeCards card={{ title: "Technology", query: "technology", tone: "green" }} />
            <HomeCards card={{ title: "Design", query: "design", tone: "coral" }} />
            <HomeCards card={{ title: "Business", query: "business", tone: "lime" }} />
            <HomeCards card={{ title: "Culture", query: "culture", tone: "blue" }} />
            <HomeCards card={{ title: "Ideas", query: "ideas", tone: "violet" }} />
          </Flex>
        </Box>
        <HomeAside />
      </Box>
      <HomeForm />
    </Layout>
  );
};

export default HomePage;
