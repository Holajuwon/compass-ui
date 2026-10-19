import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowLeft, FaLink } from "react-icons/fa";

const Post = ({ content, loading }) => {
  const toast = useToast();

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({ title: "Story link copied", status: "success", duration: 2500, isClosable: true });
    } catch (error) {
      toast({ title: "Copy this page's address to share it", status: "info", duration: 3000, isClosable: true });
    }
  };

  return (
    <Box className="page-enter" minH="75vh" bg="paper">
      {loading ? (
        <Flex minH="60vh" align="center" justify="center" color="green.700" aria-label="Loading story">
          <Spinner size="lg" thickness="3px" />
        </Flex>
      ) : content ? (
        <Box maxW="900px" mx="auto" px={{ base: 5, md: 10 }} py={{ base: 10, md: 16 }}>
          <Flex justify="space-between" align="center" mb={{ base: 10, md: 16 }}>
            <Link as={RouterLink} to="/posts" display="inline-flex" alignItems="center" gap={2} color="gray.600" fontSize="sm" fontWeight="semibold" _hover={{ color: "green.700", textDecoration: "none" }}>
              <FaArrowLeft aria-hidden="true" /> All stories
            </Link>
            <Button onClick={handleCopyLink} variant="ghost" size="sm" leftIcon={<FaLink />} color="gray.600">
              Share
            </Button>
          </Flex>
          <Box>
            <Text color="green.700" fontSize="xs" fontWeight="bold" textTransform="uppercase">
              {content.category || content.post_category || "Compass Journal"}
            </Text>
            <Heading as="h1" mt={4} fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.04">
              {content.post_title || "Untitled story"}
            </Heading>
            <Flex mt={6} align="center" gap={3} color="gray.500" fontSize="sm">
              {content.author && <Text>{content.author}</Text>}
              {content.created_at && <Text>{new Date(content.created_at).toLocaleDateString()}</Text>}
            </Flex>
          </Box>
          <Box h="1px" bg="blackAlpha.200" my={{ base: 8, md: 10 }} />
          <Text as="article" color="gray.700" fontSize={{ base: "md", md: "lg" }} lineHeight="1.95" whiteSpace="pre-wrap">
            {content.post_content}
          </Text>
          <Flex mt={14} pt={7} borderTop="1px solid" borderColor="blackAlpha.200" justify="space-between" align="center" gap={4} wrap="wrap">
            <Text color="gray.600" fontSize="sm">Enjoyed this perspective?</Text>
            <Button as={RouterLink} to="/editor" bg="ink" color="white" borderRadius="full" rightIcon={<FaArrowLeft style={{ transform: "rotate(180deg)" }} />} _hover={{ bg: "green.800" }}>
              Add your voice
            </Button>
          </Flex>
        </Box>
      ) : (
        <Flex minH="65vh" maxW="700px" mx="auto" px={5} direction="column" justify="center" align="flex-start">
          <Text color="green.700" fontSize="xs" fontWeight="bold" textTransform="uppercase">Lost in the pages</Text>
          <Heading as="h1" mt={3} fontSize="4xl">We couldn't find that story.</Heading>
          <Text mt={3} color="gray.600">It may have moved, or the link may be out of date.</Text>
          <Button as={RouterLink} to="/posts" mt={6} bg="ink" color="white" borderRadius="full" leftIcon={<FaArrowLeft />}>Back to the journal</Button>
        </Flex>
      )}
    </Box>
  );
};

export default Post;
