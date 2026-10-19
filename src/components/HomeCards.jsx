import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export const HomeCards = ({ card }) => {
  return (
    <Link
      as={RouterLink}
      to={`/posts?q=${encodeURIComponent(card.query)}`}
      flex="0 0 auto"
      gap={4}
      alignItems="center"
      px={5}
      py={3}
      bg="white"
      border="1px solid"
      borderColor="blackAlpha.100"
      borderRadius="full"
      color="ink"
      fontSize="sm"
      fontWeight="semibold"
      className="interactive-lift focus-ring"
      _hover={{ borderColor: "brand.500", textDecoration: "none" }}
    >
      <Flex w={2} h={2} borderRadius="full" bg={card.tone === "coral" ? "coral.400" : card.tone === "lime" ? "brand.400" : card.tone === "blue" ? "blue.400" : card.tone === "violet" ? "purple.400" : "green.500"} />
      {card.title}
      <FaArrowUpRightFromSquare aria-hidden="true" size={12} />
    </Link>
  );
};
