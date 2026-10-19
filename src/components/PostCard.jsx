import React from "react";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const PostCard = ({ content }) => {
  const title = content.post_title || "Untitled story";
  const category = content.category || content.post_category || "Perspective";
  const excerpt = content.post_content || "Open this story to read the full piece.";
  const path = `/post/${encodeURIComponent(title.trim().replace(/\s+/g, "_"))}`;

  return (
    <Link
      as={RouterLink}
      to={path}
      state={{ ...content }}
      color="ink"
      textDecoration="none"
      role="group"
      className="interactive-lift focus-ring"
      _hover={{ textDecoration: "none", color: "green.800" }}
    >
      <Box as="article" py={{ base: 6, md: 8 }} borderBottom="1px solid" borderColor="blackAlpha.100">
        <Flex justify="space-between" align="flex-start" gap={5}>
          <Box maxW="840px">
            <Text color="green.700" fontSize="xs" fontWeight="bold" textTransform="uppercase">
              {category}
            </Text>
            <Heading as="h2" mt={2} fontSize={{ base: "2xl", md: "3xl" }} lineHeight="1.16">
              {title}
            </Heading>
            <Text mt={3} color="gray.600" lineHeight="1.7" noOfLines={{ base: 2, md: 3 }}>
              {excerpt}
            </Text>
            <Flex mt={4} align="center" gap={2} color="green.700" fontSize="sm" fontWeight="semibold">
              Read story <FaArrowRight aria-hidden="true" />
            </Flex>
          </Box>
          <Flex display={{ base: "none", sm: "flex" }} flex="0 0 auto" w={10} h={10} align="center" justify="center" border="1px solid" borderColor="blackAlpha.200" borderRadius="full" mt={2} transition="all 180ms ease" _groupHover={{ bg: "signal" }}>
            <FaArrowRight aria-hidden="true" size={13} />
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export default PostCard;
