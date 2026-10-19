import React, { useDeferredValue, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink, useSearchParams } from "react-router-dom";
import { FaArrowRight, FaPenNib, FaSearch } from "react-icons/fa";
import PostCard from "./PostCard";
import { fetchNews } from "./api";
import samplePosts from "../data/samplePosts";

const topics = ["All stories", "Technology", "Design", "Business", "Culture"];
const getCachedPosts = () => {
  try {
    const cached = JSON.parse(localStorage.getItem("posts") || "[]");
    return Array.isArray(cached) ? cached : [];
  } catch (error) {
    return [];
  }
};
const getFallbackPosts = (cachedPosts) => [
  ...cachedPosts.filter((post) => !post.isDemo),
  ...samplePosts,
];

const PostsView = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingSamples, setUsingSamples] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("q") || "";
  const deferredSearch = useDeferredValue(search);
  const toast = useToast();

  useEffect(() => {
    let active = true;

    const loadPosts = async () => {
      try {
        const cached = getCachedPosts();
        if (!navigator.onLine) {
          if (active) {
            setPosts(getFallbackPosts(cached));
            setUsingSamples(true);
          }
          return;
        }

        const news = await fetchNews();
        if (active) {
          const livePosts = Array.isArray(news) ? news : [];
          setPosts(livePosts.length ? livePosts : samplePosts);
          setUsingSamples(!livePosts.length);
        }
      } catch (error) {
        const cached = getCachedPosts();
        if (active) {
          setPosts(getFallbackPosts(cached));
          setUsingSamples(true);
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    loadPosts();
    return () => {
      active = false;
    };
  }, [toast]);

  const filteredPosts = posts.filter((post) => {
    const searchableText = [post.post_title, post.post_content, post.category, post.post_category, post.author]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return searchableText.includes(deferredSearch.trim().toLowerCase());
  });

  const updateSearch = (value) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value) nextParams.set("q", value);
    else nextParams.delete("q");
    setSearchParams(nextParams, { replace: true });
  };

  return (
    <Box className="page-enter" bg="paper" minH="70vh">
      <Box maxW="1280px" mx="auto" px={{ base: 5, md: 10 }} pt={{ base: 12, md: 20 }} pb={16}>
        <Flex justify="space-between" align={{ base: "flex-start", md: "flex-end" }} gap={6} direction={{ base: "column", md: "row" }}>
          <Box>
            <Text color="green.700" fontSize="xs" fontWeight="bold" textTransform="uppercase">The journal</Text>
            <Heading as="h1" mt={3} fontSize={{ base: "4xl", md: "6xl" }}>Stories for curious minds.</Heading>
            <Text mt={3} color="gray.600" fontSize={{ base: "md", md: "lg" }}>Explore a thought. Find a new point of view.</Text>
          </Box>
          <Button as={RouterLink} to="/editor" leftIcon={<FaPenNib />} bg="ink" color="white" borderRadius="full" px={6} _hover={{ bg: "green.800", transform: "translateY(-2px)" }}>
            Write a story
          </Button>
        </Flex>

        {usingSamples && (
          <Box role="status" mt={5} px={4} py={3} bg="green.50" borderLeft="3px solid" borderColor="green.600">
            <Text color="green.900" fontSize="sm" fontWeight="semibold">Preview stories are showing</Text>
            <Text mt={1} color="green.800" fontSize="sm">The journal is offline right now. Sample stories are included so you can keep exploring.</Text>
          </Box>
        )}

        <Flex mt={{ base: 8, md: 12 }} gap={6} align={{ base: "stretch", md: "center" }} direction={{ base: "column", md: "row" }}>
          <InputGroup w="full" maxW={{ base: "full", md: "480px" }}>
            <InputLeftElement pointerEvents="none" h="full" pl={2}>
              <FaSearch color="#69736d" aria-hidden="true" />
            </InputLeftElement>
            <Input
              type="search"
              aria-label="Search stories"
              placeholder="Search stories, ideas, topics..."
              value={search}
              onChange={(event) => updateSearch(event.target.value)}
              bg="white"
              borderColor="blackAlpha.200"
              borderRadius="full"
              h="52px"
              pl={12}
              _focusVisible={{ borderColor: "green.600", boxShadow: "0 0 0 1px #456f5b" }}
            />
          </InputGroup>
          <Text color="gray.500" fontSize="sm">{search ? `Showing matches for “${search}”` : "A collection of ideas worth your time"}</Text>
        </Flex>

        <Flex mt={7} gap={2} overflowX="auto" pb={3} aria-label="Filter stories by topic">
          {topics.map((topic) => {
            const query = topic === "All stories" ? "" : topic.toLowerCase();
            const selected = search.toLowerCase() === query;
            return (
              <Button
                key={topic}
                size="sm"
                flex="0 0 auto"
                borderRadius="full"
                variant={selected ? "solid" : "outline"}
                aria-pressed={selected}
                bg={selected ? "ink" : "transparent"}
                color={selected ? "white" : "gray.700"}
                borderColor={selected ? "ink" : "blackAlpha.200"}
                onClick={() => updateSearch(query)}
                _hover={{ bg: selected ? "green.800" : "white" }}
              >
                {topic}
              </Button>
            );
          })}
        </Flex>

        <Flex mt={7} justify="space-between" align="center" borderBottom="1px solid" borderColor="blackAlpha.200" pb={4}>
          <Text color="gray.600" fontSize="sm" fontWeight="semibold">
            {loading ? "Gathering stories..." : `${filteredPosts.length} ${filteredPosts.length === 1 ? "story" : "stories"}`}
          </Text>
          <Text display={{ base: "none", md: "block" }} color="gray.500" fontSize="xs" textTransform="uppercase">Recently published</Text>
        </Flex>

        {loading ? (
          <Stack spacing={0}>
            {[0, 1, 2].map((item) => (
              <Box key={item} py={7} borderBottom="1px solid" borderColor="blackAlpha.100">
                <Skeleton h="14px" w="100px" mb={4} />
                <Skeleton h="30px" maxW="560px" mb={4} />
                <Skeleton h="16px" maxW="740px" />
              </Box>
            ))}
          </Stack>
        ) : filteredPosts.length ? (
          <Stack className="stagger-in" spacing={0}>
            {filteredPosts.map((post, index) => (
              <PostCard content={post} key={post.post_id || `${post.post_title}-${index}`} />
            ))}
          </Stack>
        ) : (
          <Flex py={{ base: 14, md: 20 }} direction="column" align="flex-start" maxW="580px">
            <Text color="green.700" fontSize="xs" fontWeight="bold" textTransform="uppercase">A quiet corner</Text>
            <Heading as="h2" mt={3} fontSize="3xl">No stories found. Yet.</Heading>
            <Text mt={3} color="gray.600" lineHeight="1.7">
              {posts.length ? "Try another search, or clear the filter to browse every story." : "The journal is ready for its first story. You could be the one to start it."}
            </Text>
            <Flex mt={6} gap={3} wrap="wrap">
              {search && <Button variant="outline" borderRadius="full" onClick={() => updateSearch("")}>Clear search</Button>}
              <Button as={RouterLink} to="/editor" bg="ink" color="white" borderRadius="full" rightIcon={<FaArrowRight />} _hover={{ bg: "green.800" }}>
                Write the first story
              </Button>
            </Flex>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default PostsView;