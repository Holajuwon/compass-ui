import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowRight, FaPenNib } from "react-icons/fa";

export const HomeForm = () => {
  return (
    <Box as="section" bg="ink" color="white" overflow="hidden">
      <Flex maxW="1320px" mx="auto" px={{ base: 5, md: 10 }} py={{ base: 12, md: 16 }} align="center" justify="space-between" gap={8} direction={{ base: "column", md: "row" }}>
        <Flex align="flex-start" gap={5}>
          <Flex flex="0 0 auto" w={12} h={12} borderRadius="full" bg="signal" color="ink" align="center" justify="center" mt={1}>
            <FaPenNib aria-hidden="true" />
          </Flex>
          <Box>
            <Text color="signal" fontSize="xs" fontWeight="bold" textTransform="uppercase">Your perspective belongs here</Text>
            <Heading as="h2" mt={2} fontSize={{ base: "3xl", md: "4xl" }}>Have something on your mind?</Heading>
            <Text mt={3} maxW="540px" color="whiteAlpha.800" lineHeight="1.7">Turn a thought, a lesson, or an unfinished idea into a story worth sharing.</Text>
          </Box>
        </Flex>
        <Button as={RouterLink} to="/editor" size="lg" flex="0 0 auto" bg="signal" color="ink" borderRadius="full" px={7} rightIcon={<FaArrowRight />} _hover={{ bg: "white", transform: "translateY(-2px)" }}>
          Start writing
        </Button>
      </Flex>
    </Box>
  );
};
