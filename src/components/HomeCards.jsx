import React from "react";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const HomeCards = ({ card }) => {
  return (
    <Link
      as={RouterLink}
      to="/posts"
      flex="0 0 250px"
      minH="210px"
      p={6}
      bg={card.bg}
      color="#17251f"
      borderTop="3px solid"
      borderColor={card.accent}
      textDecoration="none"
      transition="transform 160ms ease, box-shadow 160ms ease"
      _hover={{ transform: "translateY(-4px)", boxShadow: "md", textDecoration: "none" }}
      _focusVisible={{ outline: "3px solid", outlineColor: card.accent, outlineOffset: "3px" }}
    >
      <Flex direction="column" justify="space-between" h="full" minH="150px">
        <Box>
          <Heading as="h3" fontFamily="Georgia, serif" fontSize="2xl" fontWeight="medium">
            {card.title}
          </Heading>
          <Text mt={3} color="#3b4c45" lineHeight="1.6">{card.body}</Text>
        </Box>
        <Flex align="center" justify="space-between" mt={5} color={card.accent} fontSize="sm" fontWeight="bold">
          Explore stories <FaArrowRight aria-hidden="true" />
        </Flex>
      </Flex>
    </Link>
  );
};
