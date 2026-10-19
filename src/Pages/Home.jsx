import React from "react";
import Layout from "../components/Layout";
import { Home } from "../components/Home";
import { HomeCards } from "../components/HomeCards";
import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { HomeForm } from "../components/HomeForm";
import { HomeAside } from "../components/HomeAside";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HomePage = () => {
  const pageBackground = useColorModeValue("#f7f7f2", "#17251f");
  const pageColor = useColorModeValue("#17251f", "#f7f7f2");
  const content = [
    {
      title: "Business",
      body: "Ideas and people shaping what comes next.",
      bg: "#e5f1ed",
      accent: "#246b59",
    },
    {
      title: "Startups",
      body: "The experiments turning into tomorrow's companies.",
      bg: "#e6ebf7",
      accent: "#435d9b",
    },
    {
      title: "Design",
      body: "Thoughtful work, useful details, fresh perspectives.",
      bg: "#f7e9e4",
      accent: "#a34f37",
    },
    {
      title: "Culture",
      body: "Stories about how we live, make, and connect.",
      bg: "#f4efdc",
      accent: "#7f6a2d",
    },
  ];

  return (
    <Layout>
      <Box w="full" bg={pageBackground} color={pageColor}>
        <Home />
        <Box as="section" id="topics" maxW="1200px" mx="auto" px={{ base: 5, md: 10 }} py={{ base: 12, md: 20 }}>
          <Flex justify="space-between" align={{ base: "flex-start", md: "flex-end" }} gap={6} mb={8} direction={{ base: "column", md: "row" }}>
            <Box>
              <Text color="#567468" fontSize="sm" fontWeight="bold" textTransform="uppercase">A good place to begin</Text>
              <Heading as="h2" mt={2} fontFamily="Georgia, serif" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="medium">Explore by interest</Heading>
            </Box>
            <RouterLink to="/posts">
              <Flex as="span" align="center" gap={2} color="#246b59" fontWeight="semibold">
                Browse all stories <FaArrowRight aria-hidden="true" />
              </Flex>
            </RouterLink>
          </Flex>
          <Flex gap={4} overflowX="auto" pb={3}>
            {content.map((item) => (
              <HomeCards card={item} key={item.title} />
            ))}
          </Flex>
        </Box>
        <HomeAside />
      </Box>
      <HomeForm />
    </Layout>
  );
};

export default HomePage;
