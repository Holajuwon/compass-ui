import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { createPost } from "./api";

const Postboard = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [post, setPost] = useState({ title: "", content: "" });
  const [submitting, setSubmitting] = useState(false);
  const wordCount = post.content.trim() ? post.content.trim().split(/\s+/).length : 0;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((currentPost) => ({ ...currentPost, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!post.title.trim() || !post.content.trim()) {
      toast({
        title: "Your story needs a title and a body",
        status: "warning",
        duration: 3500,
        isClosable: true,
      });
      return;
    }

    setSubmitting(true);
    try {
      const data = await createPost({
        ...post,
        title: post.title.trim(),
        content: post.content.trim(),
      });
      if (!data) throw new Error("The post was not accepted");
      toast({
        title: "Your story is on its way",
        description: "Thanks for adding your voice to the journal.",
        status: "success",
        duration: 4500,
        isClosable: true,
        position: "top",
      });
      navigate("/posts");
    } catch (error) {
      toast({
        title: "We couldn't publish this story",
        description: "Please check your connection and try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box className="page-enter" minH="75vh" bg="paper">
      <Box maxW="900px" mx="auto" px={{ base: 5, md: 10 }} py={{ base: 10, md: 16 }}>
        <Link as={RouterLink} to="/posts" display="inline-flex" alignItems="center" gap={2} color="gray.600" fontSize="sm" fontWeight="semibold" mb={10} _hover={{ color: "green.700", textDecoration: "none" }}>
          <FaArrowLeft aria-hidden="true" /> Back to stories
        </Link>
        <Box mb={10}>
          <Text color="green.700" fontSize="xs" fontWeight="bold" textTransform="uppercase">A page is a place to begin</Text>
          <Heading as="h1" mt={3} fontSize={{ base: "4xl", md: "6xl" }}>Write into the open.</Heading>
          <Text mt={4} color="gray.600" fontSize={{ base: "md", md: "lg" }} lineHeight="1.7" maxW="650px">
            Share a perspective, a useful lesson, or a question you can't stop thinking about.
          </Text>
        </Box>

        <Box as="form" onSubmit={handleSubmit} bg="white" border="1px solid" borderColor="blackAlpha.100" borderRadius="4px" p={{ base: 5, md: 9 }}>
          <FormControl isRequired>
            <FormLabel htmlFor="title" color="gray.600" fontSize="xs" fontWeight="bold" textTransform="uppercase">Story title</FormLabel>
            <Input
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              placeholder="Give your idea a name"
              maxLength={160}
              variant="unstyled"
              fontFamily="heading"
              fontSize={{ base: "2xl", md: "4xl" }}
              h="auto"
              py={3}
              borderBottom="1px solid"
              borderColor="blackAlpha.200"
              _focus={{ borderColor: "green.600" }}
            />
            <Text mt={2} textAlign="right" color="gray.500" fontSize="xs">{post.title.length}/160</Text>
          </FormControl>

          <FormControl isRequired mt={9}>
            <Flex justify="space-between" align="center" mb={2}>
              <FormLabel htmlFor="content" mb={0} color="gray.600" fontSize="xs" fontWeight="bold" textTransform="uppercase">Your story</FormLabel>
              <Text color="gray.500" fontSize="xs">{wordCount} {wordCount === 1 ? "word" : "words"}</Text>
            </Flex>
            <Textarea
              id="content"
              name="content"
              value={post.content}
              onChange={handleChange}
              placeholder="Start with the part you keep coming back to..."
              minH={{ base: "360px", md: "480px" }}
              resize="vertical"
              borderColor="blackAlpha.200"
              borderRadius="2px"
              lineHeight="1.8"
              fontSize="md"
              _focusVisible={{ borderColor: "green.600", boxShadow: "0 0 0 1px #456f5b" }}
            />
          </FormControl>

          <Flex mt={7} justify="space-between" align="center" gap={5} wrap="wrap">
            <Text color="gray.500" fontSize="xs">Your work will be shared with the Compass community.</Text>
            <Button type="submit" isLoading={submitting} loadingText="Publishing" bg="ink" color="white" borderRadius="full" px={7} rightIcon={<FaPaperPlane />} _hover={{ bg: "green.800", transform: "translateY(-1px)" }}>
              Publish story
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Postboard;